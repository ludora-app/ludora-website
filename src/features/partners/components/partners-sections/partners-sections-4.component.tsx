'use client';

import { Button } from '@chillUi';
import { useTranslate } from '@tolgee/react';

import { ROUTES } from '@/constants/ROUTES';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function PartnersSections4() {
  const { t } = useTranslate();
  const scrollToSection = useScrollToSection();
  return (
    <section className="bg-linear-to-br from-orange-500 to-rose-500 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{t('partners_hero_title')}</h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl">{t('partners_hero_subtitle')} </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            variant="light"
            size="lg"
            onClick={() => scrollToSection({ id: 'partners_contact', path: ROUTES.PARTNERS })}
          >
            {t('partners_hero_cta_primary')}
          </Button>
          <Button
            size="lg"
            redirect={ROUTES.CONTACT}
            className="hover:bg-destructive border border-white bg-transparent"
          >
            {t('partners_hero_cta_secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
}
