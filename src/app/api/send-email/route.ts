import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type Body = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Body;

  try {
    const data = await resend.emails.send({
      from: `${body.name} <noreply@resend.dev>`,
      to: process.env.EMAIL_TO as string,
      subject: `Contact from website - ${body.name}`,
      text: `${body.message}\n\n${body.email}`,
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
