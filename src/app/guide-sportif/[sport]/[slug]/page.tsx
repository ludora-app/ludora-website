import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SEO_ARTICLES } from '@/constants/seo-articles.constants';
import { SEOPageTemplate } from '@/features/seo/components/seo-page.template';

type Props = {
  params: Promise<{
    slug: string;
    sport: string;
  }>;
};

export async function generateStaticParams() {
  return SEO_ARTICLES.map(article => ({
    slug: article.slug,
    sport: article.sport,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sport } = await params;
  const article = SEO_ARTICLES.find(a => a.sport === sport && a.slug === slug);

  if (!article) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    alternates: {
      canonical: `/guide-sportif/${article.sport}/${article.slug}`,
    },
    description: article.metaDescription,
    openGraph: {
      description: article.metaDescription,
      title: article.title,
      type: 'article',
    },
    title: article.title,
  };
}

export default async function Page({ params }: Props) {
  const { slug, sport } = await params;
  const article = SEO_ARTICLES.find(a => a.sport === sport && a.slug === slug);

  if (!article) {
    notFound();
  }

  return <SEOPageTemplate article={article} />;
}
