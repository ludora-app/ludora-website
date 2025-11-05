import { NextResponse } from 'next/server';

const TWENTY_CRM_URL = process.env.TWENTY_CRM_URL;
const TWENTY_CRM_API_KEY = process.env.TWENTY_API_KEY;

type createContactBody = {
  companyName: string;
  name: string;
  phoneNumber: string;
  email: string;
};

export async function POST(request: Request) {
  const body = await request.json();
  const { companyName, email, name, phoneNumber } = body;

  if (!companyName || !name || !email) {
    return NextResponse.json({ error: 'Company name, name and email are required' }, { status: 400 });
  }

  const twentyCrmBody: createContactBody = {
    companyName,
    email,
    name,
    phoneNumber,
  };

  const response = await fetch(`${TWENTY_CRM_URL}/opportunities`, {
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
