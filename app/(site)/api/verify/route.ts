import { NextRequest,NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const token =request?.nextUrl?.searchParams.get('token')
    const query = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
  const data = await query.json()
 
  return NextResponse.json({ data })
}