'use client';

import { Button, Heading, Typography } from '@chillUi';
import { useTranslate } from '@tolgee/react';

import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function HomeSection5() {
  const scrollToSection = useScrollToSection();
  const { t } = useTranslate();

  return (
    <section className="bg-linear-to-br from-orange-500 to-rose-500 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" variant="title-2" className="mb-6">
          {t('join_community_section_title')}
        </Heading>
        <Typography variant="body-1" className="mx-auto mb-8 max-w-2xl text-xl">
          {t('join_community_section_description')}
        </Typography>
        <Button
          size="lg"
          variant="light"
          onClick={() => {
            scrollToSection({ id: 'newsletter', path: '' });
          }}
        >
          {t('join_community_section_button')}
        </Button>
      </div>
    </section>
  );
}
