import { Badge, Heading, Typography } from '@chillUi';

const timeline = [
  {
    description:
      'Tout a commencé quand Amir, notre fondateur, s’est installé dans une nouvelle ville. Passionné de basketball, il a eu du mal à trouver des partenaires pour jouer. Après plusieurs semaines de recherches sans succès, il a eu une révélation : il fallait une solution simple et efficace pour connecter les amateurs de sports collectifs.',
    id: 1,
    title: "La naissance d'une idée",
    year: 2023,
  },
  {
    description:
      "Amir s’entoure de Gana, développeur, et Maxime, designer. Ensemble, ils conçoivent un premier prototype de l'application. Testée auprès d’un groupe de sportifs à Paris, l’idée séduit : les retours confirment un véritable besoin.",
    id: 2,
    title: 'Les premiers pas',
    year: 2024,
  },
  {
    description:
      'Pour aller plus loin, l’équipe s’agrandit avec l’arrivée de Marion, experte marketing, et Kenza, entrepreneuse engagée. L’aventure Ludora prend forme autour d’une vision commune : rendre les sports collectifs accessibles à tous.',
    id: 3,
    title: 'La formation de l’équipe',
    year: 2024,
  },
  {
    description:
      'L’équipe Ludora travaille activement au développement de l’application. Chaque jour, de nouvelles fonctionnalités sont pensées et testées pour créer une expérience fluide, inclusive et centrée sur la communauté. Le lancement approche à grands pas !',
    id: 4,
    title: 'Une application en cours de développement',
    year: 2025,
  },
];

export default function AboutSection3() {
  return (
    <section className="bg-gradient py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Badge variant="light" className="mb-3" size="md">
            <span className="text-sm font-medium">Notre histoire</span>
          </Badge>
          <Heading variant="title-2" as="h2" className="mb-8">
            De <span className="text-gradient">l&apos;idée</span> à la réalité
          </Heading>

          <div className="space-y-12">
            {timeline.map(item => (
              <div className="flex gap-6" key={item.id}>
                <div className="relative">
                  <div className="z-10 flex size-12 items-center justify-center rounded-full border border-orange-200 bg-white font-bold text-orange-500">
                    {item.year}
                  </div>
                  <div className="absolute top-12 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange-200 to-transparent"></div>
                </div>
                <div className="flex-1 pb-8">
                  <Heading variant="title-4" as="h3" className="mb-2">
                    {item.title}
                  </Heading>
                  <Typography variant="body-1" color="gray">
                    {item.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
