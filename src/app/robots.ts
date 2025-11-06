import type { MetadataRoute } from 'next';

const NO_INDEX_ENABLED = process.env.NO_INDEX_ENABLED === 'true';

export default function robots(): MetadataRoute.Robots {
  if (NO_INDEX_ENABLED) {
    return {
      rules: {
        disallow: '/',
        userAgent: '*',
      },
    };
  }

  return {
    rules: {
      allow: '/',
      userAgent: '*',
    },
  };
}
