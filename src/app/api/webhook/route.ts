import { NextResponse } from 'next/server';

const VERIFY_TOKEN = "tiptap_agent_secret_123";
const META_TOKEN = "EAAUCb23UhFMBQZCSZA4YaAo41k1APlzNY1Txxfv8HPDGR13tf3pYfdZClu4ryaZBqJlHG54fGAnCDUVyw0v8K8cXriO9NvRg22BTdc3lLdWEFTBWZCwIlNiJNokW0liWnakmW5UG78CuNcggNBFMx8imUV95NT2BkJvbCDQMI045an55zK01KivR4G6hWF56PE0jw5bZCsDR0SccBDrHqHXMB8Lyp9c7KTiERYzMEvLFAMZClhcX3ycmJuIZCe4DVwYlZAqmLZBdKUyii0zOaSFQZDZD";

// --- חלק 1: אימות מול מטא (GET) ---
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        return new NextResponse(challenge, {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
        });
    }

    return new NextResponse('Verification failed', { status: 403 });
}

// --- חלק 2: קבלת הודעות וואטסאפ (POST) ---
export async function POST(request) {
    try {
        const body = await request.json();

        if (body.object && body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]) {
            const value = body.entry[0].changes[0].value;
            const phoneNumberId = value.metadata.phone_number_id;
            const from = value.messages[0].from;
            const msgBody = value.messages[0].text.body;

            console.log(`Received message from ${from}: ${msgBody}`);

            // שליחת תגובה אוטומטית חזרה
            await fetch(`https://graph.facebook.com/v22.0/${phoneNumberId}/messages`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${META_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messaging_product: "whatsapp",
                    to: from,
                    text: { body: `הסוכן של טיפטאפ קיבל את הפקודה: "${msgBody}" \nמעביר ל-IDE...` }
                })
            });
        }

        return new NextResponse('EVENT_RECEIVED', { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Server Error', { status: 500 });
    }
}
