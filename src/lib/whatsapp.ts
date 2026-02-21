export const WHATSAPP_API_URL = "https://graph.facebook.com/v19.0";

const getHeaders = () => {
    const token = process.env.WHATSAPP_TOKEN;
    if (!token) throw new Error("WHATSAPP_TOKEN is missing");
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
};

const getPhoneId = () => {
    const phoneId = process.env.WHATSAPP_PHONE_ID;
    if (!phoneId) throw new Error("WHATSAPP_PHONE_ID is missing");
    return phoneId;
};

export async function sendMessage(to: string, text: string) {
    const response = await fetch(`${WHATSAPP_API_URL}/${getPhoneId()}/messages`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to,
            type: "text",
            text: { preview_url: false, body: text },
        }),
    });

    if (!response.ok) {
        console.error("Failed to send text:", await response.text());
    }
    return response.ok;
}

export async function sendInteractiveList(to: string, text: string, buttonText: string, title: string, options: { id: string; title: string; description?: string }[]) {
    const rows = options.map((opt) => ({
        id: opt.id,
        title: opt.title,
        ...(opt.description ? { description: opt.description } : {}),
    }));

    const response = await fetch(`${WHATSAPP_API_URL}/${getPhoneId()}/messages`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to,
            type: "interactive",
            interactive: {
                type: "list",
                body: { text: text },
                action: {
                    button: buttonText,
                    sections: [{ title: title, rows: rows }],
                },
            },
        }),
    });

    if (!response.ok) {
        console.error("Failed to send list:", await response.text());
    }
    return response.ok;
}

export async function sendInteractiveButtons(to: string, text: string, buttons: { id: string; title: string }[]) {
    if (buttons.length > 3) throw new Error("Max 3 buttons allowed");

    const actionButtons = buttons.map((btn) => ({
        type: "reply",
        reply: { id: btn.id, title: btn.title },
    }));

    const response = await fetch(`${WHATSAPP_API_URL}/${getPhoneId()}/messages`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to,
            type: "interactive",
            interactive: {
                type: "button",
                body: { text: text },
                action: { buttons: actionButtons },
            },
        }),
    });

    if (!response.ok) {
        console.error("Failed to send buttons:", await response.text());
    }
    return response.ok;
}
