import { HomeScreenAppImg, SessionCreateScreenImg, SessionScreenAppImg } from '@/assets';
import { Heading, Image, Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@chillUi';
import { CheckCircle } from 'lucide-react';

export default function FeaturesSection3() {
  return (
    <section className="bg-gradient py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Heading as="h2" variant="title-2" className="mb-4">
            Explorez nos <span className="text-gradient">fonctionnalités</span> en détail
          </Heading>
          <Typography variant="body-1" color="gray">
            Découvrez comment chaque fonctionnalité de Ludora a été conçue pour améliorer votre expérience sportive.
          </Typography>
        </div>

        <Tabs defaultValue="find-players" className="mx-auto max-w-4xl">
          <TabsList className="mb-8 grid md:grid-cols-3">
            <TabsTrigger value="find-players">Trouver des joueurs</TabsTrigger>
            <TabsTrigger value="organize-matches">Organiser des matchs</TabsTrigger>
            <TabsTrigger value="create-teams">Créer des équipes</TabsTrigger>
          </TabsList>

          <TabsContent value="find-players" className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <Heading as="h3" variant="title-4" className="mb-4">
                  Trouvez des partenaires de jeu en quelques clics
                </Heading>
                <Typography variant="body-1" color="gray" className="mb-5">
                  Notre système de recherche avancé vous permet de trouver des joueurs qui correspondent exactement à
                  vos critères : sport, niveau, localisation et disponibilités.
                </Typography>

                <ul className="mb-6 space-y-3">
                  {[
                    'Filtres avancés par sport, niveau et distance',
                    'Visualisation des disponibilités des joueurs',
                    'Système de messagerie intégré',
                    'Profils détaillés avec historique sportif',
                    'Recommandations personnalisées',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="flex justify-center md:justify-end">
                  <Image src={HomeScreenAppImg} alt="Recherche de joueurs" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="organize-matches" className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <Heading as="h3" variant="title-4" className="mb-4">
                  Organisez des matchs sans effort
                </Heading>
                <Typography variant="body-1" color="gray" className="mb-5">
                  Notre outil d&apos;organisation de matchs simplifie la création et la gestion d&apos;événements
                  sportifs, vous permettant de vous concentrer sur le jeu plutôt que sur la logistique.
                </Typography>

                <ul className="mb-6 space-y-3">
                  {[
                    "Création d'événements en quelques clics",
                    'Invitations automatiques aux joueurs compatibles',
                    'Gestion des inscriptions et confirmations',
                    'Rappels automatiques avant les matchs',
                    'Historique et statistiques des matchs passés',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image src={SessionCreateScreenImg} alt="Organisation de matchs" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="create-teams" className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <Heading as="h3" variant="title-4" className="mb-4">
                  Créez des équipes parfaitement équilibrées
                </Heading>
                <Typography variant="body-1" color="gray" className="mb-5">
                  Notre algorithme de matchmaking analyse les niveaux et les styles de jeu pour créer des équipes
                  équilibrées, garantissant des matchs compétitifs et amusants pour tous.
                </Typography>

                <ul className="mb-6 space-y-3">
                  {[
                    "Algorithme d'équilibrage basé sur les niveaux",
                    'Prise en compte des affinités entre joueurs',
                    'Rotation automatique des équipes',
                    'Analyse des performances post-match',
                    "Suggestions d'amélioration pour les futures compositions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center md:justify-end">
                <Image src={SessionScreenAppImg} alt="Création d'équipes" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
