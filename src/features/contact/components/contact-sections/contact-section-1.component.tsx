import { Heading, Typography } from '@chillUi';

import { getTranslate } from '@/tolgee/server';

export default async function ContactSection1() {
  const t = await getTranslate();
  return (
    <section className="bg-gradient relative px-5 py-16 md:py-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <Heading as="h1" color="gradient">
          {t('contact_section_1_title')}
        </Heading>
        <Typography variant="body-1" color="gray">
          {t('contact_section_1_description')}
        </Typography>
      </div>
    </section>
  );
}
