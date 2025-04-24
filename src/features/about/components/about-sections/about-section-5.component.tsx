import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Heading, Typography } from '@chillUi';

const teamMembers = [
  {
    bio: "Ancien joueur semi-professionnel de basketball, Thomas a créé Ludora pour résoudre un problème qu'il a lui-même rencontré.",
    name: 'Thomas Durand',
    role: 'Fondateur & CEO',
  },
  {
    bio: "Développeuse full-stack avec 10 ans d'expérience, Marie est passionnée de volleyball et d'innovation technologique.",
    name: 'Marie Lefort',
    role: 'CTO',
  },
  {
    bio: "Designer UX/UI et footballeur amateur, Lucas s'assure que l'application soit aussi intuitive qu'efficace.",
    name: 'Lucas Martin',
    role: 'Directeur Design',
  },
  {
    bio: 'Ancienne athlète olympique, Sophie met son expertise au service du développement de la communauté Ludora.',
    name: 'Sophie Moreau',
    role: 'Responsable Marketing',
  },
  {
    bio: "Passionné de rugby et de code, Alexandre travaille sur l'optimisation de l'application mobile.",
    name: 'Alexandre Petit',
    role: 'Développeur Mobile',
  },
  {
    bio: 'Joueuse de handball, Camille anime la communauté Ludora et organise des événements sportifs.',
    name: 'Camille Dubois',
    role: 'Community Manager',
  },
];

export default function AboutSection5() {
  return (
    <section className="bg-gradient px-4 py-12 md:py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="light" size="md" className="mb-4">
            Notre équipe
          </Badge>
          <Heading variant="title-2" as="h2" className="mb-4">
            Les visages derrière Ludora
          </Heading>
          <Typography variant="body-1" color="gray">
            Une équipe passionnée de sportifs et d&apos;experts en technologie qui travaillent ensemble pour
            révolutionner la pratique du sport amateur.
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body-1" color="gray">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
