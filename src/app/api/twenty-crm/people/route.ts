import { NextResponse } from 'next/server';

const TWENTY_CRM_URL = process.env.TWENTY_CRM_URL;
const TWENTY_CRM_API_KEY = process.env.TWENTY_API_KEY;

type createPersonBody = {
  emails: {
    primaryEmail: string;
    additionalEmails?: string[];
  };
  name: {
    firstName: string;
    lastName: string;
  };
  phones?: {
    additionalPhones?: string[];
    primaryPhoneCountryCode: string;
    primaryPhoneCallingCode: string;
    primaryPhoneNumber: string;
  };
  city?: string;
  avatarUrl?: string;
  position?: string;
};

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name } = body;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const twentyCrmBody: createPersonBody = {
    emails: { additionalEmails: [], primaryEmail: email },
    name: { firstName: name, lastName: '' },
  };

  const response = await fetch(`${TWENTY_CRM_URL}/people`, {
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
