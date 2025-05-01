'use client';

import { Button } from '@chillUi';

export default function HomeSection5() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-rose-500 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à rejoindre la communauté ?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
          Inscris-toi dès maintenant à la newsletter pour recevoir les dernières informations sur l&apos;application
          Ludora.
        </p>
        <Button size="lg" variant="light" redirect="/#newsletter">
          Je m&apos;inscris maintenant
        </Button>
      </div>
    </section>
  );
}
