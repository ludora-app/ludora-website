import { Badge, Heading, Typography } from '@chillUi';

const timeline = [
  {
    description:
      "Tout a commencé lorsque Thomas, notre fondateur, s'est retrouvé dans une nouvelle ville et a cherché en vain des partenaires pour jouer au basketball. Après des semaines de recherche infructueuse, il a réalisé qu'il devait exister une meilleure façon de connecter les sportifs entre eux.",
    title: "La naissance d'une idée",
    year: 2020,
  },
  {
    description:
      "Thomas s'associe avec Marie, développeuse, et Lucas, designer, pour créer un premier prototype de l'application. Ils testent leur concept auprès d'un petit groupe de sportifs à Paris et reçoivent des retours enthousiastes qui confirment le besoin d'une telle solution.",
    title: 'Les premiers pas',
    year: 2021,
  },
  {
    description:
      "Après une année de développement intensif et une levée de fonds réussie, Ludora est officiellement lancée à Paris. En quelques mois, l'application compte déjà plus de 1000 utilisateurs actifs et facilite l'organisation de dizaines de matchs chaque semaine.",
    title: 'Le lancement officiel',
    year: 2022,
  },
  {
    description:
      "Fort de son succès à Paris, Ludora s'étend dans les principales villes françaises. L'équipe s'agrandit pour accompagner cette croissance et de nouvelles fonctionnalités sont ajoutées pour améliorer l'expérience utilisateur.",
    title: "L'expansion nationale",
    year: 2023,
  },
  {
    description:
      "Aujourd'hui, Ludora compte plus de 50 000 utilisateurs dans toute la France et continue de grandir. Notre vision pour l'avenir est de devenir la référence européenne pour la mise en relation des sportifs amateurs et de contribuer à rendre le sport plus accessible à tous.",
    title: "Aujourd'hui et demain",
    year: 2024,
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
            De l&apos;idée à la réalité
          </Heading>

          <div className="space-y-12">
            {timeline.map(item => (
              <div className="flex gap-6" key={item.year}>
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
