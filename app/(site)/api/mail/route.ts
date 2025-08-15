import { Resend } from 'resend';
import axios from 'axios';
import { NextResponse } from "next/server";
export async function POST(req) {
  // console.log(process.env.BASE_URL)
  const resend = new Resend(process.env.RESEND_API_KEY || "");
  const { to, from, subject, text, html, token } = await req.json();

  const scoreRes = await axios.get(process.env.BASE_URL + "/api/verify?token=" + token);
  // console.log(process.env.BASE_URL + "/api/verify?token=" + token)
  const msg = {
    to: to, // Change to your recipient
    from: from, // Change to your verified sender
    subject: subject,
    text: text,
    html: html,

  };
  // console.log(scoreRes.data)
  if (scoreRes.data.data.success == true && scoreRes.data.data.score >= 0.5) {
    try {
      await resend.emails.send(msg);
      return NextResponse.json(
        { error: "Message Sent!" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
  }
  else {
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }



}