'use server';

import { cookies } from 'next/headers';

import { ALL_LANGUAGES, DEFAULT_LANGUAGE } from './shared';

const LANGUAGE_COOKIE = 'NEXT_LOCALE';

export async function setLanguage(locale: string) {
  const cookieStore = await cookies();
  cookieStore.set(LANGUAGE_COOKIE, locale, {
    maxAge: 1000 * 60 * 60 * 24 * 365, // one year in milisecods
  });
}

export async function getLanguage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get(LANGUAGE_COOKIE)?.value;
  if (locale && ALL_LANGUAGES.includes(locale)) {
    return locale;
  }

  return DEFAULT_LANGUAGE;
}
