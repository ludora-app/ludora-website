import { getTranslate } from '@/tolgee/server';

export default async function PartnersSections3() {
  const t = await getTranslate();
  const steps = [
    {
      description: 'partners_how_it_works_step_1_description',
      step: '1',
      title: 'partners_how_it_works_step_1_title',
    },
    {
      description: 'partners_how_it_works_step_2_description',
      step: '2',
      title: 'partners_how_it_works_step_2_title',
    },
    {
      description: 'partners_how_it_works_step_3_description',
      step: '3',
      title: 'partners_how_it_works_step_3_title',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">{t('partners_how_it_works_title')}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(item => (
            <div key={item.step} className="text-center">
              <div className="bg-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold text-white">
                {item.step}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t(item.title)}</h3>
              <p className="text-muted-foreground">{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
