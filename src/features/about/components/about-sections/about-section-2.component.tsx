import { Badge, Heading, Typography } from '@chillUi';
import Image from 'next/image';

export default function AboutSection2() {
  return (
    <section className="container mx-auto grid items-center gap-12 px-4 py-12 md:grid-cols-2 md:py-20">
      <div className="order-2 md:order-1">
        <Badge variant="gradient" className="mb-2">
          <span className="text-sm font-medium">Notre mission</span>
        </Badge>
        <Heading variant="title-2" as="h2" className="mb-6">
          Connecter les passionnés de{' '}
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            sports collectifs
          </span>
        </Heading>
        <Typography variant="body-1" color="gray" className="mb-6">
          Chez Ludora, nous croyons que le sport est un formidable vecteur de lien social. Notre mission est de
          faciliter l&apos;accès aux sports collectifs pour tous, en supprimant les barrières qui empêchent souvent les
          gens de pratiquer : trouver des partenaires de jeu, organiser des matchs, équilibrer les équipes.
        </Typography>
        <Typography variant="body-1" color="gray">
          Nous voulons créer une communauté inclusive où chacun, quel que soit son niveau, peut trouver sa place et
          partager sa passion pour le sport.
        </Typography>
      </div>
      <div className="relative order-1 md:order-2">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Équipe sportive"
          width={600}
          height={400}
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
