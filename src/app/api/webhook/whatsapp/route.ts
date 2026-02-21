import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// ============================================
// WhatsApp Webhook — POST /api/webhook/whatsapp
// ============================================
// This endpoint receives incoming messages from the WhatsApp Business API
// and saves them as leads in Supabase.
//
// FUTURE: After saving the lead, you will add logic here to:
// 1. Parse the customer's message for location and vehicle details
// 2. Broadcast the lead to a driver WhatsApp group via the WhatsApp API
// 3. Track driver response/acceptance
// 4. Send confirmation back to the customer
// ============================================

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { phone, text } = body;

        // Validate required fields
        if (!phone) {
            return NextResponse.json(
                { error: "Phone number is required" },
                { status: 400 }
            );
        }

        // Save lead to Supabase
        const { data, error } = await supabase.from("leads").insert({
            phone,
            location: text || null, // The customer's message often contains location
            vehicle_details: null,  // Will be parsed from text in future version
            status: "new",
        });

        if (error) {
            console.error("Failed to save lead:", error);
            return NextResponse.json(
                { error: "Failed to save lead" },
                { status: 500 }
            );
        }

        // ============================================
        // TODO: Future WhatsApp Bot Logic
        // ============================================
        // 1. Parse `text` to extract:
        //    - Customer location (city, street)
        //    - Vehicle type/brand
        //    - Nature of the problem (flat tire, dead battery, accident, etc.)
        //
        // 2. Broadcast lead to drivers:
        //    const driversGroupId = process.env.DRIVERS_WHATSAPP_GROUP_ID;
        //    await sendWhatsAppMessage(driversGroupId, {
        //      template: 'new_lead',
        //      params: { phone, location, vehicle, problem }
        //    });
        //
        // 3. Send confirmation to customer:
        //    await sendWhatsAppMessage(phone, {
        //      template: 'lead_received',
        //      params: { estimatedArrival: '30 minutes' }
        //    });
        //
        // 4. Update lead status:
        //    await supabase.from('leads')
        //      .update({ status: 'dispatched' })
        //      .eq('id', newLeadId);
        // ============================================

        return NextResponse.json(
            { success: true, message: "Lead saved successfully" },
            { status: 200 }
        );
    } catch (err) {
        console.error("Webhook error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// GET handler for webhook verification (some APIs require this)
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const challenge = searchParams.get("hub.challenge");

    if (challenge) {
        return new NextResponse(challenge, { status: 200 });
    }

    return NextResponse.json({ status: "Webhook active" }, { status: 200 });
}
