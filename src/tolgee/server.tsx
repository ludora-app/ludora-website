import { createServerInstance } from '@tolgee/react/server';

import { getLanguage } from './language';
import { TolgeeBase } from './shared';

export const { getTolgee, getTranslate, T } = createServerInstance({
  createTolgee: async language => {
    return TolgeeBase().init({
      language,
      observerOptions: {
        fullKeyEncode: true,
      },
    });
  },
  getLocale: getLanguage,
});
