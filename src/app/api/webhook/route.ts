import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendMessage, sendInteractiveList, sendInteractiveButtons } from "@/lib/whatsapp";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const mode = searchParams.get("hub.mode");
    const token = searchParams.get("hub.verify_token");
    const challenge = searchParams.get("hub.challenge");
    const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
        return new NextResponse(challenge, { status: 200 });
    }
    return new NextResponse("Forbidden", { status: 403 });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const entry = body.entry?.[0];
        const changes = entry?.changes?.[0];
        const value = changes?.value;
        const messages = value?.messages;

        if (!messages || messages.length === 0) {
            return NextResponse.json({ success: true }, { status: 200 });
        }

        const msg = messages[0];
        const phone = msg.from;

        if (msg.type === "interactive" && msg.interactive?.type === "button_reply") {
            const payload = msg.interactive.button_reply.id;
            if (payload.startsWith("TAKE_JOB_")) {
                const jobId = payload.replace("TAKE_JOB_", "");
                await handleDriverTakeJob(phone, jobId);
                return NextResponse.json({ success: true });
            }
            if (payload.startsWith("DECLINE_JOB_")) {
                return NextResponse.json({ success: true });
            }
        }

        let userInput = "";
        if (msg.type === "text") {
            userInput = msg.text.body;
        } else if (msg.type === "interactive" && msg.interactive?.type === "list_reply") {
            userInput = msg.interactive.list_reply.title;
        } else if (msg.type === "interactive" && msg.interactive?.type === "button_reply") {
            userInput = msg.interactive.button_reply.title;
        }

        if (!userInput) return NextResponse.json({ success: true });

        await processCustomerMessage(phone, userInput);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

async function processCustomerMessage(phone: string, input: string) {
    // 1. Block the customer if they already have an active open job
    const { data: openJobs, error: openJobsError } = await supabase
        .from("jobs")
        .select("*")
        .eq("customer_phone", phone)
        .eq("status", "open");

    if (openJobs && openJobs.length > 0) {
        await sendMessage(phone, "אנחנו עדיין מנסים לאתר נהג פנוי, אנא המתן בבקשה.");
        return; // Ensure they do not drop into the session setup below
    }

    // 2. Proceed normally with session creation / loading for new jobs
    let { data: session, error: selectError } = await supabase.from("sessions").select("*").eq("phone_number", phone).single();

    if (selectError && selectError.code !== 'PGRST116') {
        console.error("Supabase select error:", selectError);
    }

    if (!session) {
        session = { phone_number: phone, step: "INIT", data: {} };
        const { error: insertError } = await supabase.from("sessions").insert(session);
        if (insertError) console.error("Supabase insert error:", insertError);
    }

    const cityOptions = [
        { id: "haifa", title: "חיפה" },
        { id: "akko", title: "עכו" },
        { id: "yokneam", title: "יקנעם" },
        { id: "k_bialik", title: "קריית ביאליק" },
        { id: "k_motzkin", title: "קריית מוצקין" },
        { id: "k_haim", title: "קריית חיים" },
        { id: "k_ata", title: "קריית אתא" },
        { id: "k_shmuel", title: "קריית שמואל" },
        { id: "k_yam", title: "קריית ים" },
        { id: "other", title: "אחר" }
    ];

    const vehicleOptions = [
        { id: "private", title: "פרטי" },
        { id: "commercial", title: "מסחרי" },
        { id: "other", title: "אחר" }
    ];

    const terrainOptions = [
        { id: "open", title: "שטח פתוח" },
        { id: "roofed", title: "חניון מקורה" }
    ];

    const wheelsOptions = [
        { id: "free", title: "משוחררים" },
        { id: "locked_2", title: "2 נעולים" },
        { id: "locked_4", title: "4 נעולים" }
    ];

    switch (session.step) {
        case "INIT":
            await updateSessionStep(phone, "ASK_ORIGIN", session.data);
            await sendInteractiveList(phone, "שלום הגעת לגרר מאיר, באיזה עיר אתה צריך את הגרירה?", "בחר עיר", "ערים", cityOptions);
            break;

        case "ASK_ORIGIN":
            if (input === "אחר") {
                await updateSessionStep(phone, "WAIT_ORIGIN_TEXT", session.data);
                await sendMessage(phone, "תזין בבקשה מלל באיזה עיר אתה נמצא");
            } else {
                session.data.origin = input;
                await updateSessionStep(phone, "ASK_VEHICLE", session.data);
                await sendInteractiveList(phone, "איזה רכב יש לך?", "בחר רכב", "סוגי רכבים", vehicleOptions);
            }
            break;

        case "WAIT_ORIGIN_TEXT":
            session.data.origin = input;
            await updateSessionStep(phone, "ASK_VEHICLE", session.data);
            await sendInteractiveList(phone, "איזה רכב יש לך?", "בחר רכב", "סוגי רכבים", vehicleOptions);
            break;

        case "ASK_VEHICLE":
            if (input === "אחר") {
                await updateSessionStep(phone, "WAIT_VEHICLE_TEXT", session.data);
                await sendMessage(phone, "תזין בבקשה איזה סוג רכב");
            } else {
                session.data.vehicle = input;
                await updateSessionStep(phone, "ASK_DESTINATION", session.data);
                await sendInteractiveList(phone, "לאיזה מקום אתה מעוניין לגרור את הרכב?", "בחר עיר יעד", "ערים", cityOptions);
            }
            break;

        case "WAIT_VEHICLE_TEXT":
            session.data.vehicle = input;
            await updateSessionStep(phone, "ASK_DESTINATION", session.data);
            await sendInteractiveList(phone, "לאיזה מקום אתה מעוניין לגרור את הרכב?", "בחר עיר יעד", "ערים", cityOptions);
            break;

        case "ASK_DESTINATION":
            if (input === "אחר") {
                await updateSessionStep(phone, "WAIT_DESTINATION_TEXT", session.data);
                await sendMessage(phone, "תזין בבקשה מלל לאיזה עיר");
            } else {
                session.data.destination = input;
                await updateSessionStep(phone, "ASK_TERRAIN", session.data);
                await sendInteractiveList(phone, "היכן הרכב ממוקם?", "בחר תוואי", "תוואי שטח", terrainOptions);
            }
            break;

        case "WAIT_DESTINATION_TEXT":
            session.data.destination = input;
            await updateSessionStep(phone, "ASK_TERRAIN", session.data);
            await sendInteractiveList(phone, "היכן הרכב ממוקם?", "בחר תוואי", "תוואי שטח", terrainOptions);
            break;

        case "ASK_TERRAIN":
            session.data.terrain = input;
            await updateSessionStep(phone, "ASK_WHEELS", session.data);
            await sendInteractiveList(phone, "מה מצב הגלגלים של הרכב?", "בחר מצב", "מצב גלגלים", wheelsOptions);
            break;

        case "ASK_WHEELS":
            session.data.wheels = input;
            await updateSessionStep(phone, "ASK_NOTES", session.data);
            await sendMessage(phone, "האם יש לך הערות נוספות שחשוב לדעת, תקלה מיוחדת או בקצרה מה קרה?");
            break;

        case "ASK_NOTES":
            session.data.notes = input;
            // Transition to wait pricing state to prevent duplicates while Gemini is thinking
            await updateSessionStep(phone, "WAIT_APPROVAL", session.data);

            // Generate Pricing using Gemini 1.5 Flash
            try {
                await sendMessage(phone, "מחשב הצעת מחיר, אנא המתן מספר שניות... ⏳");
                const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
                const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig: { temperature: 0.5 } });

                const prompt = `
You are an expert towing dispatcher pricing algorithm in Israel.
Calculate the final estimated price for a towing job in New Israeli Shekels (NIS) as an integer.
Base fee to add: 50 NIS.
The price must factor in:
1. Origin: ${session.data.origin}
2. Destination: ${session.data.destination}
3. Vehicle Type: ${session.data.vehicle}
4. Terrain: ${session.data.terrain} (If "חניון מקורה" / roofed, it's harder and costs more)
5. Wheels: ${session.data.wheels} (If "2 נעולים" needs 1 dolly, if "4 נעולים" needs 2 dollies, which significantly limits eligible drivers and increases price)

Calculate a realistic Israeli towing market price and add 50 NIS.
IMPORTANT: Your output must be ONLY the final integer number. Absolutely no other text, words, or symbols.
                `;
                const result = await model.generateContent(prompt);
                const priceText = result.response.text().trim().replace(/[^0-9]/g, '');
                const price = parseInt(priceText, 10);

                if (isNaN(price)) {
                    throw new Error("Failed to parse Gemini output as integer.");
                }

                session.data.price = price;
                await updateSessionStep(phone, "WAIT_APPROVAL", session.data);

                const quoteMsg = `הצעת המחיר המשוערת עבורך היא: ${price} ש"ח לא כולל מע"מ.\nהאם לאשר את הקריאה ולחפש נהג פנוי?`;
                const approvalButtons = [
                    { id: "APPROVE_QUOTE", title: "מעוניין" },
                    { id: "DECLINE_QUOTE", title: "לא מעוניין" }
                ];
                await sendInteractiveButtons(phone, quoteMsg, approvalButtons);

            } catch (pricingError: any) {
                console.error("Gemini pricing error:", pricingError);
                await sendMessage(phone, `מצטערים, חלה שגיאה בחישוב המחיר. פרטים טכניים:\n${pricingError.message || pricingError}`);
                await supabase.from("sessions").delete().eq("phone_number", phone);
            }
            break;

        case "WAIT_APPROVAL":
            // Both Interactive Button texts and Payloads end up in 'input' or interactive routes.
            // But since 'APPROVE_QUOTE' might be intercepted in `interactive.button_reply.id`, let's check input directly.
            // Actually, in `route.ts`, button replies that aren't starting with TAKE_JOB_ or DECLINE_JOB_ fall down to `userInput`.
            // Let's handle if input is the Title.
            if (input === "מעוניין") {
                const { data: job } = await supabase.from("jobs").insert({
                    customer_phone: phone,
                    details: session.data,
                    status: "open"
                }).select().single();

                await supabase.from("sessions").delete().eq("phone_number", phone);
                await sendMessage(phone, "תודה רבה אנחנו בודקים נהג פנוי בסביבתך ותוך דקות ספורות יצור איתך קשר ראשון הנהגים שיאשר.");

                if (job) await dispatchToDrivers(job);
            } else if (input === "לא מעוניין") {
                await supabase.from("sessions").delete().eq("phone_number", phone);
                await sendMessage(phone, "שמחנו לעמוד לשירותך, נשמח לראותך שוב בפעם הבאה! 👋");
            } else {
                await sendMessage(phone, "אנא בחר בתפריט האם אתה מעוניין בהצעת המחיר או לא.");
            }
            break;

        default:
            const { data: check } = await supabase.from("sessions").select('*').eq("phone_number", phone).single();
            if (check && Object.keys(check).length > 0) {
                await supabase.from("sessions").update({ step: "INIT", data: {} }).eq("phone_number", phone);
            }
            break;
    }
}

async function updateSessionStep(phone: string, step: string, data: any) {
    const { error } = await supabase.from("sessions").upsert({
        phone_number: phone,
        step,
        data,
        updated_at: new Date().toISOString()
    });

    if (error) {
        console.error("Failed to upsert session:", error);
    }
}

async function dispatchToDrivers(job: any) {
    const driversEnv = process.env.DRIVERS_LIST || "";
    const drivers = driversEnv.split(",").map(d => d.trim()).filter(Boolean);
    const { origin, destination, vehicle, notes } = job.details;
    const alertMessage = `🚨 עבודה חדשה! 🚨\n\n📍 מאיפה: ${origin}\n🏁 לאן: ${destination}\n🚗 רכב: ${vehicle}\n📝 הערות: ${notes}`;
    const buttons = [
        { id: `TAKE_JOB_${job.id}`, title: "לקחתי" },
        { id: `DECLINE_JOB_${job.id}`, title: "לא רוצה" }
    ];

    for (const dPhone of drivers) {
        await sendInteractiveButtons(dPhone, alertMessage, buttons);
    }
}

async function handleDriverTakeJob(driverPhone: string, jobId: string) {
    // ATOMIC UPDATE to avoid race conditions
    const { data, error } = await supabase
        .from("jobs")
        .update({ status: "taken", taken_by_driver: driverPhone })
        .eq("id", jobId)
        .eq("status", "open")
        .select();

    if (data && data.length > 0) {
        // Race condition won!
        const successMessage = `✅ העבודה שלך!\n\n📞 פרטי הלקוח:\nטלפון: ${data[0].customer_phone}\n\nנא ליצור איתו קשר בהקדם.`;
        await sendMessage(driverPhone, successMessage);

        // Notify the customer that their towing driver is on the way
        await sendMessage(data[0].customer_phone, "נהג פנוי אישר את הקריאה שלך, והוא ייצור איתך קשר בדקות הקרובות!");
    } else {
        // Race condition lost
        await sendMessage(driverPhone, "❌ מצטערים, נהג אחר כבר תפס את העבודה או שהיא לא זמינה יותר.");
    }
}
