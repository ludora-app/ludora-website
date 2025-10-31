import { FormatIcu } from '@tolgee/format-icu';
import { BackendFetch, DevTools, FormatSimple, Tolgee } from '@tolgee/web';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY || '';
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL || '';
const isDev = process.env.NODE_ENV === 'development';
export const ALL_LANGUAGES = ['en', 'fr-FR'];

export const DEFAULT_LANGUAGE = 'fr-FR';

export function TolgeeBase() {
  const tolgee = Tolgee()
    .use(FormatSimple())
    .use(FormatIcu())
    .updateDefaults({
      availableLanguages: ALL_LANGUAGES,
      defaultLanguage: DEFAULT_LANGUAGE,
      fallbackLanguage: DEFAULT_LANGUAGE,
      staticData: {
        'en': () => import('../../locales/en.json'),
        'fr-FR': () => import('../../locales/fr-FR.json'),
      },
    });

  if (isDev) {
    tolgee.use(DevTools()).use(BackendFetch()).updateDefaults({
      apiKey,
      apiUrl,
    });
  }
  return tolgee;
}
