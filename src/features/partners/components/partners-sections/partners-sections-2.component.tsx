import { Card, CardContent, CardHeader, CardTitle } from '@chillUi';

import { getTranslate } from '@/tolgee/server';

const features = [
  {
    bgColor: 'bg-blue-50',
    description: 'partners_why_feature_1_description',
    icon: '👥',
    title: 'partners_why_feature_1_title',
  },
  {
    bgColor: 'bg-green-50',
    description: 'partners_why_feature_2_description',
    icon: '📅',
    title: 'partners_why_feature_2_title',
  },
  {
    bgColor: 'bg-purple-50',
    description: 'partners_why_feature_3_description',
    icon: '💳',
    title: 'partners_why_feature_3_title',
  },
];

export default async function PartnersSections2() {
  const t = await getTranslate();

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl">{t('partners_why_title')}</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">{t('partners_why_subtitle')} </p>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bgColor} text-3xl`}
              >
                {feature.icon}
              </div>
              <CardHeader className="p-0">
                <CardTitle as="h3" color="gradient">
                  {t(feature.title)}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600">{t(feature.description)}</p>
              </CardContent>
              <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
