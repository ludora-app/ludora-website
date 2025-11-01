import { NextResponse } from 'next/server';

const TWENTY_CRM_URL = process.env.TWENTY_CRM_URL;
const TWENTY_CRM_API_KEY = process.env.TWENTY_API_KEY;

type createPersonBody = {
  email: { additionalEmails: string[]; primaryEmail: string };
  name: string;
  message: string;
  subject: string;
};

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message, name, subject } = body;

  if (!email || !message || !name || !subject) {
    return NextResponse.json({ error: 'Email, message, name and subject are required' }, { status: 400 });
  }

  const twentyCrmBody: createPersonBody = {
    email: { additionalEmails: [], primaryEmail: email },
    message,
    name,
    subject,
  };

  const response = await fetch(`${TWENTY_CRM_URL}/contactMessages`, {
    body: JSON.stringify(twentyCrmBody),
    headers: {
      'Authorization': `Bearer ${TWENTY_CRM_API_KEY}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}
