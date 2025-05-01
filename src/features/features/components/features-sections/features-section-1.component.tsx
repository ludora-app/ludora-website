import { Heading, Typography } from '@chillUi';

export default function FeaturesSection1() {
  return (
    <section className="bg-gradient py-16 md:py-20">
      <div className="container mx-auto flex flex-col gap-4 text-center">
        <Heading as="h1" color="gradient">
          Fonctionnalités
        </Heading>
        <Typography variant="body-1" color="gray">
          Découvrez comment Ludora révolutionne la pratique des sports collectifs avec des fonctionnalités innovantes et
          intuitives.
        </Typography>
      </div>
    </section>
  );
}
