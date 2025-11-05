import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

const BASIC_AUTH_ENABLED = process.env.BASIC_AUTH_ENABLED;
const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD;

const isBasicAuthEnabled = BASIC_AUTH_ENABLED === 'true';

export function proxy(req: NextRequest) {
  // Gestion des requêtes Plausible
  if (req.nextUrl.pathname.startsWith('/js/') || req.nextUrl.pathname.startsWith('/api/event')) {
    const headers = new Headers(req.headers);
    headers.delete('cookie');
    return NextResponse.next({ request: { headers } });
  }

  // Gestion du Basic Auth existant
  if (!isBasicAuthEnabled) return NextResponse.next();

  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [username, password] = atob(authValue).split(':');
    if (username === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD) return NextResponse.next();
  }

  const url = req.nextUrl;
  url.pathname = '/api/auth';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/', '/js/(.*)', '/api/event(.*)'],
};
