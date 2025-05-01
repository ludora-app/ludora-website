import { Heading, Typography } from '@chillUi';

export default function ContactSection1() {
  return (
    <section className="bg-gradient relative px-5 py-16 md:py-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <Heading as="h1" color="gradient">
          Contactez-nous
        </Heading>
        <Typography variant="body-1" color="gray">
          Une question, une suggestion ou besoin d&apos;aide ? Notre équipe est là pour vous répondre.
        </Typography>
      </div>
    </section>
  );
}
