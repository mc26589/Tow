import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Simple in-memory cache for price estimates
const priceCache = new Map<string, { price: string; timestamp: number }>();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function getCacheKey(params: Record<string, any>): string {
    return JSON.stringify(params);
}

export async function POST(req: Request) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("[Calculator API] GEMINI_API_KEY is not set");
        return NextResponse.json(
            { error: "GEMINI_API_KEY is not configured" },
            { status: 500 }
        );
    }

    try {
        const body = await req.json();
        const {
            fromLocation,
            toLocation,
            vehicleType,
            frontWheels,
            rearWheels,
            locationType,
            access,
            timeOfDay,
        } = body;

        if (!fromLocation || !toLocation || !vehicleType) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check cache before calling Gemini
        const cacheKey = getCacheKey({
            fromLocation,
            toLocation,
            vehicleType,
            frontWheels,
            rearWheels,
            locationType,
            access,
            timeOfDay,
        });

        const cached = priceCache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
            console.log("[Calculator API] Cache hit for key:", cacheKey);
            return NextResponse.json({ estimatedPrice: cached.price });
        }

        console.log("[Calculator API] Cache miss. Calling Gemini with params:", {
            fromLocation,
            toLocation,
            vehicleType,
        });

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-3.1-flash-lite-preview",
            generationConfig: {
                temperature: 0,
            },
        });

        const prompt = `You are a deterministic towing cost estimator (AI Assistant) for Grar Haifa, Israel.
Your goal is to provide a single, consistent, and realistic price estimate based on fixed rules.

PRICING FORMULA (CALCULATE STEP-BY-STEP INTERNALLY):
1. BASE PRICE (Distance-based, private car):
   - SAME CITY: 300 ₪
   - NEARBY CITY (up to 20km): 500 ₪
   - MEDIUM DISTANCE (e.g., Haifa to Netanya): 900 ₪
   - LONG DISTANCE (The Absolute Anchor): Haifa to Tel Aviv is EXACTLY 1,300 ₪.
   - VERY LONG DISTANCE (e.g., Haifa to Jerusalem/Beersheba): 1,800 - 2,500 ₪.

2. VEHICLE TYPE MODIFIER:
   - private: +0%
   - commercial: +20%
   - motorcycle: -20%
   - suv: +10%

3. CONDITION/ACCESS SURCHARGES:
   - Locked Wheels (Front or Rear): Add 150 ₪ per locked axle.
   - Underground Parking: Add 250 ₪.
   - Difficult Access: Add 150 ₪.

4. TIME OF DAY MODIFIER (Applied last on the total):
   - regular (07:00-17:00): +0%
   - evening (17:00-20:00): +15%
   - night (20:00-07:00): +30%

Parameters for this request:
- From: ${fromLocation}
- To: ${toLocation}
- Vehicle Type: ${vehicleType}
- Front Wheels: ${frontWheels ? "Free" : "Locked"}
- Rear Wheels: ${rearWheels ? "Free" : "Locked"}
- Location: ${locationType}
- Access: ${access ? "Easy" : "Difficult"}
- Time: ${timeOfDay}

STRICT OUTPUT RULES:
- Provide ONLY the final estimate in this format: "כ-X,XXX ₪" (or "כ-XXX ₪").
- NO explanations. NO ranges. NO text other than the price.
- Be consistent: the same inputs MUST result in the same price every time.

Response:`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().trim();

        console.log("[Calculator API] Gemini response:", responseText);

        // Store result in cache
        priceCache.set(cacheKey, {
            price: responseText,
            timestamp: Date.now(),
        });
        console.log("[Calculator API] Cached result for key:", cacheKey);

        return NextResponse.json({ estimatedPrice: responseText });
    } catch (error: any) {
        console.error("[Calculator API] Error:", error?.message || error);
        console.error("[Calculator API] Full error:", JSON.stringify(error, null, 2));
        return NextResponse.json(
            { error: "Failed to calculate estimate" },
            { status: 500 }
        );
    }
}
- Access: ${access ? "Easy" : "Difficult"}
- Time: ${timeOfDay}

STRICT OUTPUT RULES:
- Provide ONLY the final estimate in this format: "כ-X,XXX ₪" (or "כ-XXX ₪").
- NO explanations. NO ranges. NO text other than the price.
- Be consistent: the same inputs MUST result in the same price every time.

Response:`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().trim();

        console.log("[Calculator API] Gemini response:", responseText);

        // Store result in cache
        priceCache.set(cacheKey, {
            price: responseText,
            timestamp: Date.now(),
        });
        console.log("[Calculator API] Cached result for key:", cacheKey);

        return NextResponse.json({ estimatedPrice: responseText });
    } catch (error: any) {
        console.error("[Calculator API] Error:", error?.message || error);
        console.error("[Calculator API] Full error:", JSON.stringify(error, null, 2));
        return NextResponse.json(
            { error: "Failed to calculate estimate" },
            { status: 500 }
        );
    }
}

- Access: ${access ? "Easy" : "Difficult"}
- Time: ${timeOfDay}

STRICT OUTPUT RULES:
- Provide ONLY the final estimate in this format: "כ-X,XXX ₪" (or "כ-XXX ₪").
- NO explanations. NO ranges. NO text other than the price.
- Be consistent: the same inputs MUST result in the same price every time.

Response:`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().trim();

        console.log("[Calculator API] Gemini response:", responseText);

        // Store result in cache
        priceCache.set(cacheKey, {
            price: responseText,
            timestamp: Date.now(),
        });
        console.log("[Calculator API] Cached result for key:", cacheKey);

        return NextResponse.json({ estimatedPrice: responseText });
    } catch (error: any) {
        console.error("[Calculator API] Error:", error?.message || error);
        console.error("[Calculator API] Full error:", JSON.stringify(error, null, 2));
        return NextResponse.json(
            { error: "Failed to calculate estimate" },
            { status: 500 }
        );
    }
}



STRICT OUTPUT RULES:
- Provide ONLY the final estimate in this format: "כ-X,XXX ₪" (or "כ-XXX ₪").
- NO explanations. NO ranges. NO text other than the price.
- Be consistent: the same inputs MUST result in the same price every time.

Response:`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().trim();

        console.log("[Calculator API] Gemini response:", responseText);

        // Store result in cache
        priceCache.set(cacheKey, {
            price: responseText,
            timestamp: Date.now(),
        });
        console.log("[Calculator API] Cached result for key:", cacheKey);

        return NextResponse.json({ estimatedPrice: responseText });
    } catch (error: any) {
        console.error("[Calculator API] Error:", error?.message || error);
        console.error("[Calculator API] Full error:", JSON.stringify(error, null, 2));
        return NextResponse.json(
            { error: "Failed to calculate estimate" },
            { status: 500 }
        );
    }
}

