import { MetadataRoute } from 'next';

import { SEO_ARTICLES } from '@/constants/seo-articles.constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ludora.fr'; // Assuming the base URL

  // Main pages
  const mainPages = [
    '',
    '/about',
    '/download',
    '/features',
    '/contact',
    '/partners',
    '/legal/privacy-policy',
    '/legal/cgv',
    '/legal/terms-of-service',
  ].map(route => ({
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
    priority: route === '' ? 1 : 0.8,
    url: `${baseUrl}${route}`,
  }));

  // SEO Articles pages
  const seoPages = SEO_ARTICLES.map(article => ({
    changeFrequency: 'weekly' as const,
    lastModified: new Date(),
    priority: 0.6,
    url: `${baseUrl}/guide-sportif/${article.sport}/${article.slug}`,
  }));

  return [...mainPages, ...seoPages];
}
