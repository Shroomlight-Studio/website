export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return new Response(
                JSON.stringify({ error: "Email is required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // SendGrid API request
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [{ email: "contact@shroomlightstudio.com" }],
                        subject: "Shroom Engine Notify List Member"
                    }
                ],
                from: {
                    email: process.env.SENDGRID_EMAIL,
                    name: "Shroomlight Studio Notify"
                },
                content: [
                    { type: "text/plain", value: `New notify request: ${email}` },
                    { type: "text/html", value: `<p>New notify request: <strong>${email}</strong></p>` }
                ]
            }),
        });

        if (!response.ok) {
            console.error(await response.text());
            return new Response(
                JSON.stringify({ error: "Failed to send email" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        console.error(err);
        return new Response(
            JSON.stringify({ error: "Unexpected server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
