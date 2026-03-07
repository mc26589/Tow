import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

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

        console.log("[Calculator API] Calling Gemini with params:", {
            fromLocation,
            toLocation,
            vehicleType,
        });

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-3.1-flash-lite-preview",
        });

        const prompt = `You are an expert towing cost estimator in Israel.
Based on the following parameters, provide ONLY a single estimated average price in NIS (ILS) for the towing service. Do not write any explanations, greetings, or text other than the price. Do not provide a range. Format the output STRICTLY as "כ-XXX ₪".

Parameters:
- From: ${fromLocation}
- To: ${toLocation}
- Vehicle Type: ${vehicleType} (e.g., Private, Commercial, Motorcycle)
- Front Wheels: ${frontWheels ? "Spinning/Free" : "Locked/Blocked"}
- Rear Wheels: ${rearWheels ? "Spinning/Free" : "Locked/Blocked"}
- Location Type: ${locationType} (e.g., Open area, Underground parking)
- Access: ${access ? "Easy/Convenient" : "Difficult/Blocked"}
- Time of Day: ${timeOfDay} (regular=07:00-17:00, evening=17:00-20:00, night=20:00-07:00)

Guidelines for estimation in Israel (approximate):
- CRITICAL ANCHOR PRICE: A standard towing (without rescue) for a private car from Haifa to Tel Aviv costs exactly 1,300 ILS. Use this as your primary benchmark for pricing distances.
- Base rate for short distance (within same city): 250 - 400 ILS
- Base rate for medium distance (between nearby cities): 450 - 650 ILS
- Base rate for long distance: calculate relative to the Haifa-Tel Aviv 1,300 ILS baseline.
- Add ~100-200 ILS if wheels are locked/blocked (requires special equipment).
- Add ~150-300+ ILS if it is underground parking or difficult access.
- Commercial vehicles cost ~20% more than private cars. Motorcycles usually cost ~20% less.
- Time of Day modifiers:
  - 'regular' (07:00-17:00): base price.
  - 'evening' (17:00-20:00): add ~15% to total price.
  - 'night' (20:00-07:00): add ~30% to total price.

Provide a realistic, single average Israeli market estimate based on these rules. Do not provide a huge range. Pick a single reasonable number.
Response format strictly: "כ-XXX ₪"`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().trim();

        console.log("[Calculator API] Gemini response:", responseText);

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
