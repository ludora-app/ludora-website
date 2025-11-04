'use client';

import { Button } from '@chillUi';
import { useTranslate } from '@tolgee/react';

import { ROUTES } from '@/constants/ROUTES';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function PartnersSections1() {
  const { t } = useTranslate();
  const scrollToSection = useScrollToSection();
  return (
    <section className="from-primary to-primary/90 bg-linear-to-r py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{t('partners_hero_title')}</h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl">{t('partners_hero_subtitle')} </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            variant="gradient"
            size="lg"
            onClick={() => scrollToSection({ id: 'partners_contact', path: ROUTES.PARTNERS })}
          >
            {t('partners_hero_cta_primary')}
          </Button>
          <Button variant="light" size="lg" redirect={ROUTES.CONTACT}>
            {t('partners_hero_cta_secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
}
