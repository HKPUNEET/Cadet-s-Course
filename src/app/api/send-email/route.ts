import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient, Attachment } from "mailersend";

const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY!, // Non-null assertion for TS2322
});

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = formData.get("name") as string;
        const contact = formData.get("contact") as string;
        const email = formData.get("email") as string;
        const screenshot = formData.get("screenshot") as File | null;

        // Validate environment variables
        if (!process.env.EMAIL_USER || !process.env.MAILERSEND_API_KEY) {
            throw new Error("Missing EMAIL_USER or MAILERSEND_API_KEY in environment variables");
        }

        const sentFrom = new Sender(process.env.EMAIL_USER, "SSB Coaching");
        const recipients = [new Recipient("Ayushkumarsingh00007@gmail.com", "Admin")];

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setSubject("New Payment Form Submission")
            .setText(`Name: ${name}\nContact: ${contact}\nEmail: ${email}`);

        // Handle screenshot attachment
        if (screenshot) {
            const buffer = Buffer.from(await screenshot.arrayBuffer());
            const attachment = new Attachment(
                buffer.toString("base64"),
                screenshot.name,
                screenshot.type || "application/octet-stream"
            );
            emailParams.setAttachments([attachment]); // Use setAttachments instead of addAttachment
        }

        await mailerSend.email.send(emailParams);

        return NextResponse.json({ success: true });
    } catch (error: any) { // Type error as any for TS18046
        console.error("Email error:", error.message);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}