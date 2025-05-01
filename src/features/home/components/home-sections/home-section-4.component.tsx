'use client';

import { Card, CardContent, CardHeader, Heading, Icon, Typography } from '@chillUi';

export default function HomeSection4() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-5 px-4 py-12 md:py-20 lg:px-0">
      <Typography variant="body-1" color="primary" className="font-bold">
        MATCHMAKING
      </Typography>
      <Heading as="h2" variant="title-3">
        Laisse notre <span className="text-gradient">algorithme</span> faire le reste.
      </Heading>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="bg-primary w-fit rounded-lg p-2">
              <Icon name="location-dot-solid" color={'#FFF'} />
            </div>
            <Heading as="h3" variant="title-4">
              Localisation optimisée
            </Heading>
          </CardHeader>
          <CardContent>Il identifie les matchs et équipes proches de toi pour minimiser les déplacements.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="bg-primary w-fit rounded-lg p-2">
              <Icon name="circle-notch-solid" color={'#FFF'} />
            </div>
            <Heading as="h4" variant="title-4">
              Matching par niveau
            </Heading>
          </CardHeader>
          <CardContent>
            Il associe les joueurs et équipes selon leur niveau, pour des parties équilibrées et motivantes.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="bg-primary w-fit rounded-lg p-2">
              <Icon name="cursor-solid" color={'#FFF'} />
            </div>
            <Heading as="h4" variant="title-4">
              Préférences sportives
            </Heading>
          </CardHeader>
          <CardContent>
            Il prend en compte tes sports favoris et tes disponibilités pour des recommandations personnalisées.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="bg-primary w-fit rounded-lg p-2">
              <Icon name="envelope-solid" color={'#FFF'} />
            </div>
            <Heading as="h4" variant="title-4">
              MAJ en temps réel
            </Heading>
          </CardHeader>
          <CardContent>
            Les matchs et joueurs disponibles sont actualisés en continu pour t’offrir le meilleur choix.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
