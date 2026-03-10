import * as React from 'react';
import { Resend } from 'resend';

import { EmailTemplate, TeamEmailTemplate } from '@/components/chill-ui';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message, name, subject } = body;

  if (!name || !email || !subject || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const { data: dataUserEmail, error: errorUserEmail } = await resend.emails.send({
      from: 'Ludora <contact@ludora.fr>',
      react: React.createElement(EmailTemplate, { name }),
      subject: `Merci pour votre message : ${subject}`,
      to: [email],
    });

    const { data: dataTeam, error: errorTeam } = await resend.emails.send({
      from: 'Ludora <contact@ludora.fr>',
      react: React.createElement(TeamEmailTemplate, { email, message, name, subject }),
      subject: subject,
      to: ['contact@ludora.fr'],
    });

    if (errorUserEmail || errorTeam) {
      return Response.json({ error: errorUserEmail || errorTeam }, { status: 500 });
    }

    return Response.json({ data: dataUserEmail, dataTeam }, { status: 200 });
  } catch (error) {
    console.error('error', error);
    return Response.json({ error }, { status: 500 });
  }
}
