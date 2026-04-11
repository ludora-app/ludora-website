import { NextResponse, userAgent } from 'next/server';

import { ROUTES, STORE_LINKS } from '@/constants/ROUTES';

export function GET(request: Request) {
  const { os } = userAgent(request);
  const osName = os.name?.toLowerCase() || '';

  if (osName.includes('ios') || osName.includes('ipados')) {
    return NextResponse.redirect(STORE_LINKS.IOS);
  }

  if (osName.includes('android')) {
    return NextResponse.redirect(STORE_LINKS.ANDROID);
  }

  // Desktop → page de présentation
  return NextResponse.redirect(new URL(ROUTES.DOWNLOAD_LANDING, request.url));
}
