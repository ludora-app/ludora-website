import { Heading, Typography } from '@chillUi';

export default function AboutSection1() {
  return (
    <section className="bg-gradient relative px-5 py-16 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Heading as="h1">
            Notre <span className="text-gradient">histoire</span>
          </Heading>
          <Typography variant="body-1" color="gray">
            Découvrez comment Ludora est née d&apos;une passion pour le sport et d&apos;une volonté de connecter les
            gens.
          </Typography>
        </div>
      </div>
    </section>
  );
}
