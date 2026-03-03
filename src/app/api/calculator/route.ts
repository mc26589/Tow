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
Based on the following parameters, provide ONLY a numeric estimated price range in NIS (ILS) for the towing service. Do not write any explanations, greetings, or text other than the price range. Format the output as "XXX - YYY ₪".

Parameters:
- From: ${fromLocation}
- To: ${toLocation}
- Vehicle Type: ${vehicleType} (e.g., Private, Commercial, Motorcycle)
- Front Wheels: ${frontWheels ? "Spinning/Free" : "Locked/Blocked"}
- Rear Wheels: ${rearWheels ? "Spinning/Free" : "Locked/Blocked"}
- Location Type: ${locationType} (e.g., Open area, Underground parking)
- Access: ${access ? "Easy/Convenient" : "Difficult/Blocked"}

Guidelines for estimation in Israel (approximate):
- Base rate for short distance (within same city): 200 - 300 ₪
- Base rate for medium distance (between nearby cities): 350 - 550 ₪
- Base rate for long distance: 600 - 1000+ ₪
- Add ~100-200 ₪ if wheels are locked/blocked (requires special equipment).
- Add ~150-300+ ₪ if it is underground parking or difficult access.
- Commercial vehicles cost more than private cars. Motorcycles usually cost less.

Provide realistic Israeli market estimates.
Response format strictly: "XXX - YYY ₪"`;

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
