import { Card, CardContent, CardDescription, CardHeader, CardTitle, Image } from '@chillUi';

import { HomeScreenAppImg, MatchScreenAppImg } from '@/assets';

export default function HomeSection2() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:px-0">
      {/* <Heading as="h2" variant="title-5" className="font-bold" color="primary">
        POURQUOI CETTE APPICATION ?
      </Heading>
      <div className="my-3">
        <Heading as="h3" variant="title-3">
          Trouve tes Partenaires de jeu facilement !
        </Heading>
      </div> */}
      {/* cards */}
      <div className="flex flex-col gap-5 lg:flex-row">
        {/* left column */}
        <div className="flex flex-1">
          <Card className="bg-gradient flex-1">
            <CardHeader>
              <CardTitle color="dark">
                Trouver des joueurs près de <span className="text-gradient">chez toi</span>
              </CardTitle>
              <CardDescription color="dark">
                Connecte-toi avec des passionnés partageant ton niveau et organise des parties adaptées à tes envies.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Image src={HomeScreenAppImg} alt="Find players" />
            </CardContent>
          </Card>
        </div>
        {/* right column */}
        <div className="flex flex-1 flex-col gap-5">
          <Card className="bg-gradient flex flex-grow lg:flex-row">
            <CardHeader className="flex flex-1 flex-col justify-center lg:gap-5">
              <CardTitle color="dark">
                Organiser rapidement des <span className="text-gradient">matchs</span>
              </CardTitle>
              <CardDescription color="dark">
                Choisis le lieu, l’heure et le niveau, invite des joueurs en quelques clics et laisse notre algorithme
                s’occuper du reste.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center">
              <Image src={MatchScreenAppImg} alt="Organize matches" />
            </CardContent>
          </Card>
          <Card className="bg-gradient flex flex-grow justify-center">
            <CardHeader>
              <CardTitle color="dark">
                Créer des équipes selon ton <span className="text-gradient">niveau</span>
              </CardTitle>
              <CardDescription color="dark">Des avantages pour rendre tes matchs encore meilleurs.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
