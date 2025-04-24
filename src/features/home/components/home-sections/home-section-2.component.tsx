import { homeSection2Card1, homeSection2Card2 } from '@/assets';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Heading } from '@chillUi';
import Image from 'next/image';

export default function HomeSection2() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:px-0">
      <Heading as="h2" variant="title-5" className="font-bold" color="primary">
        POURQUOI CETTE APPICATION ?
      </Heading>
      <div className="my-5">
        <Heading as="h3" variant="title-3">
          Marre de jouer seul ? Trouve tes Partenaires de jeu facilement !
        </Heading>
      </div>
      {/* cards */}
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* left column */}
        <div className="flex flex-1">
          <Card className="bg-gradient flex-1">
            <CardHeader>
              <CardTitle color="dark"> Trouver des joueurs près de chez toi</CardTitle>
              <CardDescription color="dark">
                Connecte-toi avec des passionnés partageant ton niveau et organise des parties adaptées à tes envies.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Image src={homeSection2Card1} alt="Find players" width={300} />
            </CardContent>
          </Card>
        </div>
        {/* right column */}
        <div className="flex flex-1 flex-col gap-5">
          <Card className="bg-gradient flex flex-grow lg:flex-row">
            <CardHeader className="flex flex-1 flex-col justify-center lg:gap-5">
              <CardTitle color="dark">Organiser rapidement des matchs</CardTitle>
              <CardDescription color="dark">
                Choisis le lieu, l’heure et le niveau, invite des joueurs en quelques clics et laisse notre algorithme
                s’occuper du reste.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center">
              <Image src={homeSection2Card2} alt="Organize matches" width={250} />
            </CardContent>
          </Card>
          <Card className="bg-gradient flex flex-grow justify-center">
            <CardHeader>
              <CardTitle color="dark">Créer des équipes selon ton niveau</CardTitle>
              <CardDescription color="dark">Des avantages pour rendre tes matchs encore meilleurs.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
