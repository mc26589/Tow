"use client";

import { useEffect } from "react";
import { BUSINESS_INFO, CITIES, VEHICLES } from "@/lib/data";

// ============================================
// WebMCP — exposes the site's key actions as structured tools to AI agents that run
// inside the browser (Chrome's `navigator.modelContext`, W3C Web ML CG draft).
// Instead of guessing which button to click, an agent can call e.g. `estimate_towing_price`
// directly. Fully feature-detected: a no-op in browsers without WebMCP.
// ============================================

type ToolResult = { content: { type: "text"; text: string }[]; isError?: boolean };

interface WebMcpTool {
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
    annotations?: { readOnlyHint?: boolean };
    execute: (input: Record<string, any>) => Promise<ToolResult>;
}

interface ModelContext {
    registerTool?: (tool: WebMcpTool) => unknown;
    unregisterTool?: (name: string) => unknown;
    provideContext?: (ctx: { tools: WebMcpTool[] }) => unknown;
}

const text = (t: string, isError = false): ToolResult => ({ content: [{ type: "text", text: t }], ...(isError ? { isError } : {}) });

const TOOLS: WebMcpTool[] = [
    {
        name: "get_towing_dispatch_contact",
        description:
            "Get the 24/7 dispatch contact details (phone, WhatsApp) and service areas of this towing company in Haifa, the Krayot and Northern Israel. Use when a user needs a tow truck or roadside recovery in that region.",
        inputSchema: { type: "object", properties: {} },
        annotations: { readOnlyHint: true },
        execute: async () =>
            text(
                JSON.stringify({
                    business: BUSINESS_INFO.name,
                    phone: BUSINESS_INFO.displayPhone,
                    phone_international: `+${BUSINESS_INFO.phone}`,
                    whatsapp: BUSINESS_INFO.whatsappBase,
                    availability: "24/7, including nights, Shabbat and holidays",
                    service_areas: BUSINESS_INFO.areas,
                    typical_arrival_minutes: "25-35",
                    pricing: "Final price quoted by phone before dispatch",
                })
            ),
    },
    {
        name: "get_towing_service_info",
        description:
            "Get factual, citable Markdown about towing for a specific city and (optionally) vehicle type: local response facts, vehicle-specific recovery requirements (e.g. EVs require a flatbed), and FAQs.",
        inputSchema: {
            type: "object",
            properties: {
                city: { type: "string", enum: CITIES.map((c) => c.slug), description: "City slug" },
                vehicle: { type: "string", enum: VEHICLES.map((v) => v.slug), description: "Vehicle type or brand slug" },
            },
            required: ["city"],
        },
        annotations: { readOnlyHint: true },
        execute: async ({ city, vehicle }) => {
            const path = vehicle ? `/${city}/${vehicle}` : `/${city}`;
            const res = await fetch(`/api/md${path}`);
            const body = await res.text();
            return text(body, !res.ok);
        },
    },
    {
        name: "estimate_towing_price",
        description:
            "Estimate the towing price (in ILS) between two locations in Israel. This is an estimate only; the final price is confirmed by phone.",
        inputSchema: {
            type: "object",
            properties: {
                fromLocation: { type: "string", description: "Pickup location (city / street / landmark)" },
                toLocation: { type: "string", description: "Destination (garage / city)" },
                vehicleType: { type: "string", enum: ["private", "commercial", "motorcycle", "suv"] },
                locationType: { type: "string", enum: ["open", "underground", "highway", "offroad"], description: "Where the vehicle is stuck" },
                timeOfDay: { type: "string", enum: ["regular", "evening", "night"], description: "regular 07-17, evening 17-20, night 20-07" },
                wheelsFree: { type: "boolean", description: "Do all wheels roll freely? false if locked/missing" },
                easyAccess: { type: "boolean", description: "Can a tow truck reach the vehicle easily?" },
            },
            required: ["fromLocation", "toLocation", "vehicleType"],
        },
        annotations: { readOnlyHint: true },
        execute: async (i) => {
            const res = await fetch("/api/calculator", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fromLocation: i.fromLocation,
                    toLocation: i.toLocation,
                    vehicleType: i.vehicleType,
                    locationType: i.locationType ?? "open",
                    timeOfDay: i.timeOfDay ?? "regular",
                    frontWheels: i.wheelsFree ?? true,
                    rearWheels: i.wheelsFree ?? true,
                    access: i.easyAccess ?? true,
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.estimatedPrice) return text(`Estimate unavailable. Call ${BUSINESS_INFO.displayPhone} for a quote.`, true);
            return text(`Estimated price: ${data.estimatedPrice} (estimate only — final price confirmed by phone at ${BUSINESS_INFO.displayPhone}).`);
        },
    },
    {
        name: "prepare_tow_request_whatsapp",
        description:
            "Prepare a WhatsApp tow request to the dispatcher with the user's location, vehicle and problem pre-filled. Returns a wa.me link the user taps to send — nothing is sent automatically.",
        inputSchema: {
            type: "object",
            properties: {
                location: { type: "string", description: "Where the vehicle is (address, road, landmark)" },
                vehicle: { type: "string", description: "Vehicle make/model or type" },
                problem: { type: "string", description: "What happened (won't start, accident, flat tire, stuck in parking...)" },
            },
            required: ["location", "problem"],
        },
        execute: async ({ location, vehicle, problem }) => {
            const msg = `היי, צריך גרר.\n📍 מיקום: ${location}\n🚗 רכב: ${vehicle || "לא צוין"}\n⚠️ בעיה: ${problem}`;
            const link = `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(msg)}`;
            return text(`Ask the user to open this link to send the request: ${link}\nOr call ${BUSINESS_INFO.displayPhone}.`);
        },
    },
];

export function AgentTools() {
    useEffect(() => {
        const mc = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
        if (!mc) return;
        try {
            if (typeof mc.registerTool === "function") {
                TOOLS.forEach((t) => mc.registerTool!(t));
                return () => TOOLS.forEach((t) => mc.unregisterTool?.(t.name));
            }
            if (typeof mc.provideContext === "function") mc.provideContext({ tools: TOOLS });
        } catch {
            // Experimental API — never let it break the page.
        }
    }, []);
    return null;
}
