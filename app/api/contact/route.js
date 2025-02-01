import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Handle POST request (form submission)
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    await connectToDatabase();

    // Save to MongoDB
    const newContact = await Contact.create({ name, email, message });

    // Nodemailer setup (Mailtrap or other SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email notification
    await transporter.sendMail({
      from: `"Contact Form" <no-reply@example.com>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, message: "Form submitted and email sent!" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}

// Handle GET request (Prevents 405 error)
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
