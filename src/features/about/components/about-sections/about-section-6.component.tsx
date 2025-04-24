import { Badge, Card, CardDescription, CardHeader, Heading, Typography } from '@chillUi';

const stats = [
  { label: 'Utilisateurs actifs', value: '50K+' },
  { label: 'Matchs organisés', value: '100K+' },
  { label: 'Villes couvertes', value: '30+' },
  { label: 'Sports disponibles', value: '8+' },
];

export default function AboutSection6() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="gradient" size="md" className="mb-4">
            Nos chiffres
          </Badge>
          <Heading variant="title-2" as="h2" className="mb-4">
            Ludora en quelques chiffres
          </Heading>
          <Typography variant="body-1" color="gray">
            Des statistiques qui témoignent de l&apos;impact de notre application sur la pratique sportive en France.
          </Typography>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <Heading variant="title-3" color="gradient" as="h3">
                  {stat.value}
                </Heading>
                <CardDescription className="text-center">{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
