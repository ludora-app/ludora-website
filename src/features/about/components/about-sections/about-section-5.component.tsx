import { AmirImg, GanaImg, KenzaImg, MarionImg, MaximeImg } from '@/assets';
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Heading, Image, Typography } from '@chillUi';

const teamMembers = [
  {
    bio: 'Passionné de basketball, Amir a eu l’idée de Ludora après avoir galéré à trouver des partenaires de jeu dans une nouvelle ville.',
    image: AmirImg,
    name: 'Amir Meberbeche',
    role: 'Fondateur & CEO',
  },
  {
    bio: 'Développeur engagé, Gana a rejoint Amir dès le début de l’aventure pour transformer l’idée en prototype fonctionnel.',
    image: GanaImg,
    name: 'Gana Fall',
    role: 'CTO & Développeur Full-Stack',
  },
  {
    bio: 'Spécialiste marketing, Marion a structuré la stratégie de lancement de Ludora et porté la vision communautaire du projet.',
    image: MarionImg,
    name: 'Marion Dupont',
    role: 'Responsable Marketing',
  },
  {
    bio: 'Maxime, designer passionné, a co-construit les premières maquettes de Ludora pour offrir une expérience claire et intuitive.',
    image: MaximeImg,
    name: 'Maxime Dupont',
    role: 'Designer UX/UI',
  },
  {
    bio: 'Entrepreneuse engagée, Kenza a apporté son énergie et son expérience pour faire grandir Ludora et son impact social.',
    image: KenzaImg,
    name: 'Alexandre Petit',
    role: 'Développeur Mobile',
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
            Les <span className="text-gradient">visages</span> derrière Ludora
          </Heading>
          <Typography variant="body-1" color="gray">
            Une équipe passionnée de sportifs et d&apos;experts en technologie qui travaillent ensemble pour
            révolutionner la pratique du sport amateur.
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                <div className="bg-gradient size-40 overflow-hidden rounded-full">
                  <Image src={member.image} alt={member.name} />
                </div>
                <CardTitle color="dark" variant="title-5">
                  {member.name}
                </CardTitle>
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
