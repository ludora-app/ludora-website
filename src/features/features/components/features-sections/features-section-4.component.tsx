import { homeSection3Carousel4 } from '@/assets';
import { Badge, Heading, Typography } from '@chillUi';
import Image from 'next/image';

const featuresSection4 = [
  {
    description: 'Créez votre profil sportif détaillé avec vos sports favoris, votre niveau et vos disponibilités.',
    image: homeSection3Carousel4,
    title: 'Profil personnalisé',
  },
  {
    description: 'Visualisez vos prochains matchs, vos statistiques et les recommandations personnalisées.',
    image: '/placeholder.svg?height=600&width=300',
    title: 'Tableau de bord',
  },
  {
    description: 'Découvrez les terrains et les matchs à proximité grâce à notre carte interactive détaillée.',
    image: '/placeholder.svg?height=600&width=300',
    title: 'Carte interactive',
  },
];

export default function FeaturesSection4() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="gradient" className="mb-4" size="md">
            Interface intuitive
          </Badge>
          <Heading as="h2" variant="title-2" className="mb-4">
            Une application conçue pour les sportifs
          </Heading>
          <Typography variant="body-1" color="gray">
            Découvrez l&apos;interface intuitive de Ludora, conçue pour vous offrir une expérience fluide et agréable.
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuresSection4.map((screen, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto mb-6 w-max">
                <Image
                  src={screen.image || '/placeholder.svg'}
                  alt={screen.title}
                  width={240}
                  height={480}
                  className="rounded-3xl border-4 border-white shadow-lg"
                />
              </div>
              <Heading as="h3" variant="title-4" className="mb-2">
                {screen.title}
              </Heading>
              <Typography variant="body-1" color="gray">
                {screen.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
