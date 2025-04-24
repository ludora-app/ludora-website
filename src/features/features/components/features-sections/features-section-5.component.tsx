import { Badge, Heading, Typography } from '@chillUi';
import Image from 'next/image';

export default function FeaturesSection4() {
  return (
    <section className="bg-gradient py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="light" className="mb-5" size="md">
            Comment ça marche
          </Badge>
          <Heading as="h2" variant="title-2" className="mb-4">
            Commencez en quelques étapes simples
          </Heading>
          <Typography variant="body-1" color="gray">
            Découvrez comment utiliser Ludora pour transformer votre expérience sportive en quelques clics.
          </Typography>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Badge className="mb-1 p-1" variant="light">
                <span className="bg-primary rounded-lg px-2 py-0.5 text-xs font-medium text-white">Étape 1</span>
              </Badge>
              <Heading as="h3" variant="title-4" className="mb-4">
                Créez votre profil sportif
              </Heading>
              <Typography variant="body-1" color="gray" className="mb-6">
                Inscrivez-vous et créez votre profil en indiquant vos sports favoris, votre niveau et vos
                disponibilités. Plus votre profil est complet, plus nos recommandations seront pertinentes.
              </Typography>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-200/50 to-rose-200/50 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Création de profil"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-200/50 to-rose-200/50 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Recherche de matchs"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <Badge className="mb-1 p-1" variant="light">
                <span className="bg-primary rounded-lg px-2 py-0.5 text-xs font-medium text-white">Étape 2</span>
              </Badge>
              <Heading as="h3" variant="title-4" className="mb-4">
                Trouvez ou créez un match
              </Heading>
              <Typography variant="body-1" color="gray" className="mb-6">
                Parcourez les matchs disponibles près de chez vous ou créez le vôtre en quelques clics. Définissez le
                lieu, la date, l&apos;heure et le niveau requis pour votre événement.
              </Typography>
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Badge className="mb-1 p-1" variant="light">
                <span className="bg-primary rounded-lg px-2 py-0.5 text-xs font-medium text-white">Étape 3</span>
              </Badge>
              <Heading as="h3" variant="title-4" className="mb-4">
                Jouez et évaluez
              </Heading>
              <Typography variant="body-1" color="gray" className="mb-6">
                Participez à votre match et profitez de l&apos;expérience ! Après le match, évaluez les autres joueurs
                pour aider notre algorithme à créer des équipes encore plus équilibrées à l&apos;avenir.
              </Typography>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-200/50 to-rose-200/50 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Évaluation après match"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
