import { FormatIcu } from '@tolgee/format-icu';
import { DevTools, FormatSimple, Tolgee } from '@tolgee/web';

const NEXT_PUBLIC_TOLGEE_DEVTOOL_ENABLED = process.env.NEXT_PUBLIC_TOLGEE_DEVTOOL_ENABLED;
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

  if (NEXT_PUBLIC_TOLGEE_DEVTOOL_ENABLED === 'true') {
    tolgee.use(DevTools());
  }
  return tolgee;
}
