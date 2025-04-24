import { ROUTES } from '@/constants/ROUTES';
import { Button } from '@chillUi';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyScreen() {
  const lastUpdated = '15 avril 2024';

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 transition-colors hover:text-orange-500">
                  Accueil
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="size-4 text-gray-400" />
                <span className="ml-2 text-gray-900">Politique de confidentialité</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Politique de confidentialité</h1>
            <p className="text-gray-600">
              Dernière mise à jour : <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg mb-12 max-w-none">
            <p>
              Chez Ludora, nous accordons une grande importance à la protection de vos données personnelles. Cette
              politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos
              informations lorsque vous utilisez notre application mobile et notre site web (collectivement, les
              &apos;Services&apos;).
            </p>
            <p>
              En utilisant nos Services, vous acceptez les pratiques décrites dans cette politique de confidentialité.
              Si vous n&apos;acceptez pas cette politique, veuillez ne pas utiliser nos Services.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 p-6">
            <h2 className="mb-4 text-xl font-bold">Sommaire</h2>
            <ul className="space-y-2">
              {[
                'Informations que nous collectons',
                'Comment nous utilisons vos informations',
                'Partage de vos informations',
                'Conservation des données',
                'Vos droits',
                'Sécurité des données',
                'Modifications de cette politique',
                'Nous contacter',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index + 1}`}
                    className="flex items-center text-gray-700 transition-colors hover:text-orange-500"
                  >
                    <span className="mr-3 flex size-6 items-center justify-center rounded-full border border-orange-100 bg-white text-sm font-medium text-orange-500">
                      {index + 1}
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section id="section-1">
              <h2 className="mb-4 text-2xl font-bold">1. Informations que nous collectons</h2>
              <div className="prose prose-lg max-w-none">
                <p>Nous collectons plusieurs types d&apos;informations vous concernant, notamment :</p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">1.1 Informations que vous nous fournissez</h3>
                <ul>
                  <li>
                    <strong>Informations de compte :</strong> Lorsque vous créez un compte, nous collectons votre nom,
                    adresse e-mail, mot de passe, date de naissance et photo de profil.
                  </li>
                  <li>
                    <strong>Informations de profil :</strong> Les sports que vous pratiquez, votre niveau, vos
                    disponibilités et vos préférences sportives.
                  </li>
                  <li>
                    <strong>Communications :</strong> Lorsque vous nous contactez, nous conservons les messages et les
                    informations que vous partagez.
                  </li>
                </ul>

                <h3 className="mt-6 mb-3 text-xl font-semibold">1.2 Informations collectées automatiquement</h3>
                <ul>
                  <li>
                    <strong>Données d&apos;utilisation :</strong> Nous collectons des informations sur votre interaction
                    avec nos Services, comme les pages visitées, les fonctionnalités utilisées et le temps passé sur
                    l&apos;application.
                  </li>
                  <li>
                    <strong>Informations de l&apos;appareil :</strong> Type d&apos;appareil, système
                    d&apos;exploitation, identifiants uniques, paramètres de langue et informations de réseau.
                  </li>
                  <li>
                    <strong>Données de localisation :</strong> Avec votre permission, nous collectons des données de
                    géolocalisation pour vous montrer les matchs et joueurs à proximité.
                  </li>
                </ul>

                <h3 className="mt-6 mb-3 text-xl font-semibold">1.3 Informations provenant de tiers</h3>
                <ul>
                  <li>
                    <strong>Réseaux sociaux :</strong> Si vous vous connectez via un réseau social, nous pouvons
                    recevoir des informations de ce service, conformément à leurs politiques de confidentialité.
                  </li>
                  <li>
                    <strong>Partenaires :</strong> Nous pouvons recevoir des informations de nos partenaires
                    commerciaux, comme des informations sur les terrains de sport ou les événements.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2">
              <h2 className="mb-4 text-2xl font-bold">2. Comment nous utilisons vos informations</h2>
              <div className="prose prose-lg max-w-none">
                <p>Nous utilisons vos informations pour les finalités suivantes :</p>

                <ul>
                  <li>
                    <strong>Fournir nos Services :</strong> Créer et gérer votre compte, vous permettre de trouver des
                    partenaires de jeu, organiser des matchs et créer des équipes équilibrées.
                  </li>
                  <li>
                    <strong>Personnalisation :</strong> Adapter notre contenu et nos recommandations à vos préférences
                    et à votre niveau sportif.
                  </li>
                  <li>
                    <strong>Communication :</strong> Vous envoyer des notifications, des confirmations de matchs, des
                    rappels et des informations importantes concernant nos Services.
                  </li>
                  <li>
                    <strong>Amélioration :</strong> Analyser l&apos;utilisation de nos Services pour les améliorer et
                    développer de nouvelles fonctionnalités.
                  </li>
                  <li>
                    <strong>Sécurité :</strong> Détecter, prévenir et résoudre les problèmes techniques, les fraudes ou
                    les activités illégales.
                  </li>
                  <li>
                    <strong>Marketing :</strong> Avec votre consentement, vous envoyer des informations sur nos
                    Services, des offres spéciales et des événements sportifs qui pourraient vous intéresser.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3">
              <h2 className="mb-4 text-2xl font-bold">3. Partage de vos informations</h2>
              <div className="prose prose-lg max-w-none">
                <p>Nous pouvons partager vos informations dans les circonstances suivantes :</p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">3.1 Avec d&apos;autres utilisateurs</h3>
                <p>
                  Certaines informations de votre profil (nom, photo, sports pratiqués, niveau) sont visibles par les
                  autres utilisateurs pour faciliter la mise en relation. Vous pouvez ajuster vos paramètres de
                  confidentialité pour contrôler les informations partagées.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">3.2 Avec nos prestataires de services</h3>
                <p>
                  Nous partageons des informations avec des tiers qui nous aident à exploiter, fournir, améliorer et
                  promouvoir nos Services (hébergement, analyse de données, traitement des paiements, service client).
                  Ces prestataires sont tenus de protéger vos informations.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">3.3 Pour des raisons légales</h3>
                <p>
                  Nous pouvons divulguer vos informations si nous estimons de bonne foi que cette divulgation est
                  nécessaire pour :
                </p>
                <ul>
                  <li>Se conformer à la loi ou à une procédure judiciaire</li>
                  <li>Protéger nos droits, notre propriété ou notre sécurité, ainsi que ceux de nos utilisateurs</li>
                  <li>Enquêter sur des fraudes ou des violations de nos conditions d&apos;utilisation</li>
                </ul>

                <h3 className="mt-6 mb-3 text-xl font-semibold">3.4 En cas de transfert d&apos;entreprise</h3>
                <p>
                  Si Ludora est impliqué dans une fusion, acquisition ou vente d&apos;actifs, vos informations
                  pourraient être transférées. Nous vous informerons avant que vos informations ne soient transférées et
                  soumises à une politique de confidentialité différente.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">3.5 Avec votre consentement</h3>
                <p>
                  Nous pouvons partager vos informations dans d&apos;autres contextes avec votre consentement explicite.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4">
              <h2 className="mb-4 text-2xl font-bold">4. Conservation des données</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Nous conservons vos informations aussi longtemps que nécessaire pour fournir nos Services et aux fins
                  décrites dans cette politique de confidentialité. Si vous supprimez votre compte, nous supprimerons
                  vos informations personnelles dans un délai raisonnable, sauf si la conservation est nécessaire pour:
                </p>
                <ul>
                  <li>Respecter des obligations légales</li>
                  <li>Résoudre des litiges</li>
                  <li>Prévenir la fraude et les abus</li>
                  <li>Faire respecter nos accords</li>
                </ul>
                <p>
                  Certaines informations peuvent être conservées sous forme anonymisée à des fins d&apos;analyse et
                  d&apos;amélioration de nos Services.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5">
              <h2 className="mb-4 text-2xl font-bold">5. Vos droits</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Selon votre lieu de résidence, vous pouvez disposer de certains droits concernant vos informations
                  personnelles :
                </p>
                <ul>
                  <li>
                    <strong>Accès :</strong> Vous pouvez demander une copie des informations personnelles que nous
                    détenons à votre sujet.
                  </li>
                  <li>
                    <strong>Rectification :</strong> Vous pouvez mettre à jour ou corriger vos informations
                    personnelles.
                  </li>
                  <li>
                    <strong>Suppression :</strong> Vous pouvez demander la suppression de vos informations personnelles
                    dans certaines circonstances.
                  </li>
                  <li>
                    <strong>Restriction :</strong> Vous pouvez demander que nous limitions le traitement de vos
                    informations personnelles.
                  </li>
                  <li>
                    <strong>Portabilité :</strong> Vous pouvez demander une copie de vos informations personnelles dans
                    un format structuré et lisible par machine.
                  </li>
                  <li>
                    <strong>Opposition :</strong> Vous pouvez vous opposer au traitement de vos informations
                    personnelles dans certaines circonstances.
                  </li>
                  <li>
                    <strong>Retrait du consentement :</strong> Si nous traitons vos informations sur la base de votre
                    consentement, vous pouvez retirer ce consentement à tout moment.
                  </li>
                </ul>
                <p>
                  Pour exercer ces droits, veuillez nous contacter à{' '}
                  <a href="mailto:privacy@ludora.fr" className="text-orange-500 hover:underline">
                    privacy@ludora.fr
                  </a>
                  . Nous répondrons à votre demande dans les délais prévus par la loi applicable.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6">
              <h2 className="mb-4 text-2xl font-bold">6. Sécurité des données</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Nous prenons la sécurité de vos informations au sérieux et mettons en œuvre des mesures techniques et
                  organisationnelles appropriées pour protéger vos informations contre la perte, l&apos;accès non
                  autorisé, la divulgation, l&apos;altération et la destruction. Ces mesures comprennent :
                </p>
                <ul>
                  <li>Le chiffrement des données sensibles</li>
                  <li>Des contrôles d&apos;accès stricts pour nos employés</li>
                  <li>Des audits de sécurité réguliers</li>
                  <li>La formation de notre personnel aux pratiques de sécurité</li>
                </ul>
                <p>
                  Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n&apos;est
                  totalement sécurisée. Nous ne pouvons donc pas garantir une sécurité absolue. Si vous avez des raisons
                  de croire que votre interaction avec nous n&apos;est plus sécurisée, veuillez nous contacter
                  immédiatement.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7">
              <h2 className="mb-4 text-2xl font-bold">7. Modifications de cette politique</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter les
                  changements dans nos pratiques ou pour d&apos;autres raisons opérationnelles, légales ou
                  réglementaires. La version la plus récente sera toujours disponible sur notre site web avec la date de
                  la dernière mise à jour.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la façon dont
                  nous protégeons vos informations. Si nous apportons des modifications importantes, nous vous en
                  informerons par e-mail ou par une notification dans l&apos;application avant que les modifications ne
                  prennent effet.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8">
              <h2 className="mb-4 text-2xl font-bold">8. Nous contacter</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Si vous avez des questions, des préoccupations ou des demandes concernant cette politique de
                  confidentialité ou le traitement de vos informations personnelles, veuillez nous contacter :
                </p>
                <ul>
                  <li>
                    <strong>Par e-mail :</strong>{' '}
                    <a href="mailto:contact@ludora.fr" className="text-orange-500 hover:underline">
                      contact@ludora.fr
                    </a>
                  </li>
                  <li>
                    <strong>Par courrier :</strong> Ludora SAS, 123 Avenue des Sports, 75000 Paris, France
                  </li>
                  <li>
                    <strong>Via notre formulaire de contact :</strong>{' '}
                    <Link href={ROUTES.CONTACT} className="text-orange-500 hover:underline">
                      www.ludora.fr/contact
                    </Link>
                  </li>
                </ul>
                <p>
                  Si vous résidez dans l&apos;Union européenne, vous avez également le droit de déposer une plainte
                  auprès d&apos;une autorité de protection des données concernant notre collecte et notre utilisation de
                  vos informations personnelles.
                </p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-rose-50 p-8">
            <h2 className="mb-4 text-xl font-bold">Vous avez d&apos;autres questions ?</h2>
            <p className="mb-6">
              Si vous avez des questions spécifiques concernant notre politique de confidentialité ou la façon dont nous
              traitons vos données, n&apos;hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="gradient" className="px-8 py-4">
                <Link href={ROUTES.CONTACT}>Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
