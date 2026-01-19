export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import { SMTPClient } from "emailjs";

export async function POST(request: NextRequest) {
    const { email } = await request.json();

    if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {
        const client = new SMTPClient({
            user: process.env.EMAIL_USER,
            password: process.env.EMAIL_PASS,
            host: "smtp.gmail.com",
            ssl: true,
        });

        await client.sendAsync({
            from: `"Shroomlight Studio Notify" <${process.env.EMAIL_USER}>`,
            to: "contact@shroomlightstudio.com",
            subject: "Shroom Engine Notify List Member",
            text: `New notify request: ${email}`,
            attachment: [
                { data: `<p>New notify request: <strong>${email}</strong></p>`, alternative: true },
            ],
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}