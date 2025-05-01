import { Badge, Card, CardContent, CardHeader, CardTitle, Heading, Typography } from '@chillUi';
import { Award, Heart, Target, TrendingUp, Users, Zap } from 'lucide-react';

const values = [
  {
    description:
      "Nous croyons que le sport doit être accessible à tous, quels que soient l'âge, le niveau ou la situation géographique.",
    icon: Target,
    title: 'Accessibilité',
  },
  {
    description:
      "Nous valorisons les liens qui se créent autour du sport. Ludora n'est pas qu'une application, c'est une communauté de passionnés qui partagent des moments uniques et créent des amitiés durables.",
    icon: Users,
    title: 'Communauté',
  },
  {
    description:
      "Nous visons l'excellence dans tout ce que nous faisons, de la conception de notre application à notre service client. Nous sommes constamment à l'écoute de nos utilisateurs pour améliorer leur expérience.",
    icon: Award,
    title: 'Excellence',
  },
  {
    description:
      "Nous repoussons constamment les limites de la technologie pour offrir des solutions innovantes qui répondent aux besoins réels des sportifs. Nous n'avons pas peur d'explorer de nouvelles idées.",
    icon: Zap,
    title: 'Innovation',
  },
  {
    description:
      'La passion pour le sport est au cœur de notre entreprise. Chaque membre de notre équipe est un sportif passionné qui comprend les défis et les joies de la pratique sportive.',
    icon: Heart,
    title: 'Passion',
  },
  {
    description:
      "Nous mesurons notre succès par l'impact positif que nous avons sur la vie de nos utilisateurs. Chaque match organisé, chaque nouvelle amitié créée est une victoire pour nous.",
    icon: TrendingUp,
    title: 'Impact',
  },
];

export default function AboutSection4() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Badge variant="gradient" className="mb-3" size="md">
          <span className="text-sm font-medium">Nos valeurs</span>
        </Badge>
        <Heading variant="title-2" as="h2" className="mb-4">
          Ce qui nous <span className="text-gradient">anime</span> au quotidien
        </Heading>
        <Typography variant="body-1" color="gray">
          Nos valeurs guident chacune de nos décisions et façonnent la culture de notre entreprise.
        </Typography>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <Card key={index}>
            <CardHeader>
              <Badge variant="gradient" className="w-fit rounded-md p-3" size="md">
                <value.icon className="size-6" />
              </Badge>

              <CardTitle color="dark" variant="title-5">
                {value.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="body-1" color="gray">
                {value.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
