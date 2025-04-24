import { Badge, Card, CardContent, CardHeader, CardTitle, Heading, Typography } from '@chillUi';
import { Calendar, MapPin, Shield, Star, Users, Zap } from 'lucide-react';

const features = [
  {
    description:
      'Trouvez facilement des partenaires de jeu près de chez vous, filtrés par sport, niveau et disponibilité.',
    icon: <Users className="size-6" />,
    title: 'Recherche de joueurs',
  },
  {
    description: 'Créez et gérez des événements sportifs en quelques clics, avec invitations automatiques et rappels.',
    icon: <Calendar className="size-6" />,
    title: 'Organisation de matchs',
  },
  {
    description: 'Localisez les terrains et infrastructures sportives autour de vous, avec avis et disponibilités.',
    icon: <MapPin className="size-6" />,
    title: 'Découverte de terrains',
  },
  {
    description: 'Évaluez votre niveau et celui des autres joueurs pour des matchs équilibrés et compétitifs.',
    icon: <Star className="size-6" />,
    title: 'Système de niveau',
  },

  {
    description: "Jouez en toute confiance grâce à notre système de vérification des profils et d'évaluation.",
    icon: <Shield className="size-6" />,
    title: 'Profils vérifiés',
  },
  {
    description: 'Notre algorithme crée automatiquement des équipes équilibrées en fonction des niveaux des joueurs.',
    icon: <Zap className="size-6" />,
    title: 'Matchmaking intelligent',
  },
];

export default function FeaturesSection2() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="gradient" className="mb-4" size="md">
            Tout ce dont vous avez besoin
          </Badge>
          <Heading variant="title-2" as="h2" className="mb-4">
            Une application complète pour les sportifs
          </Heading>
          <Typography variant="body-1" color="gray">
            Ludora offre toutes les fonctionnalités nécessaires pour trouver des partenaires, organiser des matchs et
            créer des équipes équilibrées.
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2 flex size-14 items-center justify-center rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-rose-50 text-orange-500">
                  {feature.icon}
                </div>
                <CardTitle color="dark" variant="title-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Typography variant="body-1" color="gray">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
