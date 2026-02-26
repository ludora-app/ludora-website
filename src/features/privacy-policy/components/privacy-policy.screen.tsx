import { Button } from '@chillUi';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/constants/ROUTES';

export default function PrivacyPolicyScreen() {
  const lastUpdated = '25/02/2026';

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
              Application Ludora – En vigueur au <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>

          {/* Mentions Légales – Éditeur */}
          <section id="section-1" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Mentions Légales – Éditeur du site</h2>
            <div className="prose prose-lg max-w-none">
              <p>Le présent site web est édité par Ludora.</p>
              <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-4">
                <ul className="space-y-2">
                  <li>
                    <strong>Nom de l&apos;Entreprise :</strong> MEBERBECHE Hichem Amir Fouad
                  </li>
                  <li>
                    <strong>Enseigne commerciale :</strong> Ludora
                  </li>
                  <li>
                    <strong>Siège social :</strong> 8 impasse André le Notre, 94000 Créteil
                  </li>
                  <li>
                    <strong>SIRET :</strong> 931 604 102 00018
                  </li>
                  <li>
                    <strong>Directeur de la publication :</strong> Meberbeche Hichem Amir Fouad
                  </li>
                  <li>
                    <strong>Contact :</strong> 06 01 77 08 14 / contact@ludora.fr
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hébergeur */}
          <section id="section-2" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Hébergeur</h2>
            <div className="prose prose-lg max-w-none">
              <p>Le présent site web est hébergé par :</p>
              <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-4">
                <p className="font-semibold">OVH</p>
                <p>Siège social : 2 rue Kellermann – 59100 Roubaix, France</p>
                <p>Tél. +33 (0)8 99 70 17 61</p>
              </div>
            </div>
          </section>

          {/* Politique de confidentialité – intro */}
          <section id="section-3" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Politique de confidentialité</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Cette politique de confidentialité a pour objectif de vous expliquer pourquoi nous recueillons vos
                données et comment nous nous engageons à les protéger.
              </p>
              <p>Ludora s&apos;engage en faveur de la protection de vos données personnelles et de votre vie privée.</p>
              <p>
                À ce titre, et en application du Règlement Général de Protection des Données (ci-après dénommé
                &quot;RGPD&quot;), nous vous communiquons ci-après les conditions dans lesquelles vos données
                personnelles sont appelées à être traitées par nos soins.
              </p>
            </div>
          </section>

          {/* Quelles données personnelles traitons-nous ? */}
          <section id="section-4" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Quelles données personnelles traitons-nous ?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-semibold">Finalités :</p>
              <p>
                Nous sommes susceptibles de recueillir et de conserver vos données à caractère personnel, notamment pour
                :
              </p>
              <ul>
                <li>Traiter et répondre à vos messages</li>
                <li>Créer et gérer l&apos;accès à vos comptes</li>
                <li>Gérer vos inscriptions à nos newsletters</li>
                <li>Etablir et assurer le suivi de la relation commerciale pouvant découler de vos messages</li>
                <li>Rédiger un avis/commentaire publié sur le site</li>
                <li>Percevoir votre paiement</li>
                <li>Assurer la comptabilité et la gestion</li>
                <li>Améliorer notre suivi et service client</li>
                <li>Gérer le bon fonctionnement et la personnalisation des services</li>
                <li>Vous envoyer des informations commerciales et publicitaires en fonction de vos préférences</li>
                <li>Détection d&apos;attaques et recours contentieux contre la fraude</li>
                <li>Mémoriser vos choix quant à l&apos;utilisation des cookies</li>
                <li>Traiter et répondre à vos demandes d&apos;exercice de droits</li>
                <li>Pour répondre aux exigences réglementaires en vigueur ou en cours d&apos;adoption</li>
              </ul>

              <p className="mt-6 font-semibold">Catégories des données :</p>
              <ul>
                <li>Des coordonnées (par exemple nom, prénom, numéro de téléphone, email)</li>
                <li>
                  Des informations personnelles (par exemple date de naissance, nationalité, vie maritale, profession)
                </li>
                <li>Vos préférences</li>
                <li>
                  Des informations techniques et de localisation générées dans le cadre de l&apos;utilisation de nos
                  services
                </li>
              </ul>

              <p className="mt-6 font-semibold">Fondement juridiques des traitements</p>
              <p>Les traitements de données à caractère personnel mis en œuvre sont fondés :</p>
              <ul>
                <li>
                  Soit sur le consentement de la personne concernée (Article 6.1.a du RGPD) pour tous les traitements
                  qui nécessitent le recueil préalable du consentement. Dans les formulaires en ligne, les champs
                  obligatoires sont marqués d&apos;un astérisque. A défaut de réponse aux questions obligatoires, nous
                  ne serons pas en mesure de vous fournir les services demandés.
                </li>
                <li>Soit pour l&apos;exécution d&apos;un contrat ou l&apos;exécution de mesures précontractuelles</li>
                <li>Soit pour la poursuite d&apos;un intérêt légitime (Article 6.1.e du RGPD)</li>
                <li>Soit pour le respect d&apos;une obligation légale ou règlementaire</li>
              </ul>
            </div>
          </section>

          {/* Durée de conservation */}
          <section id="section-5" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Durée de conservation</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Vos données sont conservées pour la durée nécessaire à l&apos;accomplissement des finalités mentionnées
                ci-dessus.
              </p>
              <p>
                La durée de conservation des données personnelles des Clients dépend de la finalité concernée. Dans ce
                cadre, les données personnelles des Clients sont conservées le temps nécessaire à l&apos;accomplissement
                de leur requête. A défaut d&apos;une quelconque réalisation, les données personnelles sont supprimées
                dans les délais recommandés par la Commission Nationale Informatique et Libertés (CNIL), au terme
                d&apos;un délai de trois ans à compter de leur collecte, sous réserve : des possibilités et obligations
                légales en matière d&apos;archivage, des obligations de conservation de certaines données à des fins
                probatoires, et/ou d&apos;anonymisation de celles-ci.
              </p>
              <p>
                Les données personnelles du Client collectées et traitées, pour les besoins d&apos;exécution des offres,
                sont conservées pour la durée nécessaire à la gestion de la relation contractuelle.
              </p>
              <p>
                Par dérogation, les données personnelles requises pour l&apos;établissement de la preuve d&apos;un droit
                ou d&apos;un contrat sont archivées conformément aux dispositions légales (5 ou 10 ans après la fin de
                la relation commerciale selon le cas).
              </p>
            </div>
          </section>

          {/* Destinataires des données */}
          <section id="section-6" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Quels sont les destinataires de vos données ?</h2>
            <div className="prose prose-lg max-w-none">
              <p>Vos données personnelles sont destinées à Ludora.</p>
              <ul>
                <li>
                  <strong>Nos services internes :</strong> Elles sont traitées par le personnel de nos différents
                  services tel que le service commercial ou le service en charge de la sécurité informatique.
                </li>
                <li>
                  <strong>Des entreprises ou personnes de confiance :</strong> Ils traitent vos informations pour nous
                  aux fins énoncées ci-dessus, conformément à nos instructions telles qu&apos;elles sont décrites dans
                  notre Politique de confidentialité et à tous autres cas d&apos;usage approprié en termes de
                  confidentialité et de sécurité.
                </li>
                <li>
                  <strong>Des sous-traitants techniques :</strong> Les données personnelles vous concernant peuvent être
                  transférées à nos sous-traitants techniques (au sens de l&apos;article 4.8 du RGPD) de façon encadrée
                  strictement. En cas de transfert, nous nous assurons que les sous-traitants respectent le RGPD et
                  prennent des mesures techniques et organisationnelles pour garantir la protection des données (art. 28
                  du RGPD).
                </li>
              </ul>
              <ul>
                <li>Analyse de trafic (comme Google Analytics)</li>
                <li>Prestataire de paiement (comme Stripe)</li>
                <li>Service de CDN (comme Cloudflare)</li>
              </ul>
              <p>
                Nous devons parfois permettre à nos partenaires de traiter, en notre nom, les informations personnelles
                que nous détenons sur vous aux fins énoncées dans cette politique ou pour toute autre raison requise par
                la loi.
              </p>
              <p>Les données personnelles des Clients collectées sont hébergées en France.</p>
              <p>
                Dans le cas du recours à un prestataire situé en dehors de l&apos;Union européenne, nous nous engageons
                à vérifier que des mesures appropriées ont été mises en place afin que les données personnelles
                bénéficient d&apos;un niveau de protection adéquat.
              </p>
            </div>
          </section>

          {/* Sécurité des données */}
          <section id="section-7" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Comment Ludora préserve la sécurité de vos données ?</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Nous mettons en place toutes les mesures organisationnelles et techniques permettant d&apos;assurer un
                niveau approprié de sécurité à vos données personnelles, et notamment d&apos;éviter toute perte de
                confidentialité, d&apos;intégrité ou d&apos;accessibilité.
              </p>
              <ul>
                <li>Nous effectuons fréquemment la sauvegarde des données</li>
                <li>Nous procédons au cryptage de vos données pour les protéger durant leur transfert</li>
                <li>
                  Dans la mesure du possible, nous limitons l&apos;accès aux informations personnelles aux seules
                  personnes qui ont besoin de les traiter
                </li>
                <li>
                  Mise en place de mesures techniques et organisationnelles pour assurer que la conservation des données
                  personnelles des Clients est sécurisée, pendant la durée nécessaire à l&apos;exercice des finalités
                  poursuivies
                </li>
                <li>Formation RGPD de nos équipes</li>
              </ul>
            </div>
          </section>

          {/* Droits sur les données */}
          <section id="section-8" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Quels sont vos droits sur vos données personnelles ?</h2>
            <div className="prose prose-lg max-w-none">
              <p>Conformément à la Réglementation Applicable, vous disposez des droits suivants :</p>
              <ul>
                <li>
                  <strong>Un droit de rectification :</strong> vous avez le droit d&apos;obtenir la rectification des
                  données inexactes vous concernant. Vous avez également le droit de compléter les données incomplètes
                  vous concernant, en fournissant une déclaration complémentaire. En cas d&apos;exercice de ce droit,
                  nous nous engageons à communiquer toute rectification à l&apos;ensemble des destinataires de vos
                  données.
                </li>
                <li>
                  <strong>Un droit d&apos;effacement :</strong> dans certains cas, vous avez le droit d&apos;obtenir
                  l&apos;effacement de vos données. Cependant, ceci n&apos;est pas un droit absolu et nous pouvons pour
                  des raisons légales ou légitimes conserver ces données.
                </li>
                <li>
                  <strong>Un droit à la limitation du traitement :</strong> dans certains cas, vous avez le droit
                  d&apos;obtenir la limitation du traitement sur vos données.
                </li>
                <li>
                  <strong>Un droit à la portabilité des données :</strong> vous avez le droit de recevoir vos données
                  que vous nous avez fournies, dans un format structuré, couramment utilisé et lisible par une machine,
                  pour votre usage personnel ou pour les transmettre à un tiers de votre choix. Ce droit ne
                  s&apos;applique que lorsque le traitement de vos données est basé sur votre consentement, sur un
                  contrat ou que ce traitement est effectué par des moyens automatisés.
                </li>
                <li>
                  <strong>Un droit d&apos;opposition au traitement :</strong> vous avez le droit de vous opposer à tout
                  moment au traitement de vos données pour les traitements basés sur notre intérêt légitime, une mission
                  d&apos;intérêt public et ceux à des fins de prospection commerciale. Ceci n&apos;est pas un droit
                  absolu et nous pouvons pour des raisons légales ou légitimes refuser votre demande d&apos;opposition.
                </li>
                <li>
                  <strong>Le droit de retirer votre consentement à tout moment :</strong> vous pouvez retirer votre
                  consentement au traitement de vos données lorsque le traitement est basé sur votre consentement. Le
                  retrait du consentement ne compromet pas la licéité du traitement fondé sur le consentement effectué
                  avant ce retrait.
                </li>
                <li>
                  <strong>Le droit de déposer une plainte auprès d&apos;une autorité de contrôle :</strong> vous avez le
                  droit de contacter votre autorité de protection des données pour vous plaindre de nos pratiques de
                  protection des données personnelles.
                </li>
              </ul>
              <p>
                En application du RGPD, les conditions d&apos;exercice de ces droits peuvent varier selon la base de
                licéité du traitement mentionné dans le premier paragraphe.
              </p>
              <p>
                Nous donnerons suite à tout exercice de droit dans les meilleurs délais et en tout état de cause dans un
                délai de 30 jours à compter de la réception de la demande.
              </p>
              <p>Nous nous réservons le droit :</p>
              <ul>
                <li>
                  De demander une preuve de l&apos;identité du demandeur en cas de doute raisonnable sur cette dernière
                  et ce afin de respecter son obligation de confidentialité
                </li>
                <li>
                  De prolonger le délai de réponse de deux mois, informant alors le demandeur de cette prolongation et
                  des motifs du report dans un délai d&apos;un mois à compter de la réception de la demande
                </li>
                <li>
                  De refuser de répondre à un exercice de droit si celui-ci était considéré comme abusif (au vu de leur
                  nombre, de leur caractère répétitif ou systématique)
                </li>
              </ul>
            </div>
          </section>

          {/* Contact RGPD */}
          <section id="section-9" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Qui contacter pour toutes les demandes liées au RGPD ?</h2>
            <div className="prose prose-lg max-w-none">
              <p>Pour exercer vos droits, vous pouvez nous contacter :</p>
              <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-4">
                <p className="font-semibold">Ludora</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Nom de l&apos;Entreprise :</strong> MEBERBECHE Hichem Amir Fouad (Auto-entrepreneur)
                  </li>
                  <li>
                    <strong>Enseigne commerciale :</strong> Ludora
                  </li>
                  <li>
                    <strong>Siège social :</strong> 8 impasse André le Notre, 94000 Créteil
                  </li>
                  <li>
                    <strong>SIRET :</strong> 931 604 102 00018
                  </li>
                  <li>
                    <strong>Directeur de la publication :</strong> Meberbeche Hichem Amir Fouad
                  </li>
                  <li>
                    <strong>Contact :</strong> 06 01 77 08 14 / contact@ludora.fr
                  </li>
                </ul>
              </div>
              <p>
                Si, en dépit de nos efforts et de nos engagements, vous estimiez que vos droits concernant vos données
                personnelles n&apos;étaient pas respectés, vous pouvez adresser une réclamation auprès de la Commission
                Nationale Informatique et Libertés : CNIL 3 Place de Fontenoy TSA 80715 75334 Paris Cedex 07.
              </p>
            </div>
          </section>

          {/* Réserve de modification */}
          <section id="section-10" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              Réserve de modification de la Politique de protection des données
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                La présente Politique de protection des données personnelles peut être amenée à évoluer. Elles ont été
                élaborées à partir d&apos;un modèle libre qui peut être téléchargé sur le site https://donnees.net.
                Comme nous développons constamment nos services, nous nous réservons le droit de modifier cette
                Politique de confidentialité, conformément aux dispositions légales en vigueur. Toute modification est
                publiée sur ce document en temps opportun. Nous vous conseillons de consulter régulièrement cette page
                pour prendre connaissance des éventuelles modifications ou mises à jour apportées à notre politique de
                confidentialité.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section id="section-11" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Qu&apos;est-ce qu&apos;un &quot;cookie&quot; ?</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Les cookies sont de petits fichiers texte qu&apos;un site web enregistre sur votre ordinateur ou votre
                appareil mobile lorsque vous visitez le site.
              </p>
              <p>
                Ils facilitent votre expérience en ligne en sauvegardant les informations de navigation. Grâce aux
                cookies, les sites peuvent vous garder connecté, se souvenir de vos préférences de site et vous proposer
                un contenu personnalisé. Les cookies peuvent également être utilisés pour établir des statistiques sur
                l&apos;expérience de navigation et pour montrer des publicités ciblées.
              </p>
              <p>En général, les cookies peuvent être classés par :</p>
              <p className="font-semibold">Domaine :</p>
              <ul>
                <li>
                  Les cookies de première partie sont émis par un site web qu&apos;un utilisateur consulte directement.
                </li>
                <li>
                  Les cookies tiers ne sont pas créés par le site web consulté, mais par un tiers comme Google
                  Analytics, DoubleClick, Facebook, Twitter, LinkedIn, Youtube, Vimeo, etc.
                </li>
              </ul>
              <p className="mt-4 font-semibold">Objectif :</p>
              <ul>
                <li>Les cookies strictement nécessaires sont requis pour que le site web fonctionne correctement.</li>
                <li>
                  Les cookies de préférences permettent à un site web de se souvenir des choix que vous avez faits dans
                  le passé.
                </li>
                <li>
                  Les cookies de statistiques aident le propriétaire du site web à collecter des données statistiques et
                  à comprendre comment les visiteurs interagissent avec le site web.
                </li>
                <li>
                  Les cookies marketing suivent l&apos;activité en ligne de l&apos;utilisateur pour aider les annonceurs
                  à diffuser des publicités plus pertinentes.
                </li>
              </ul>
              <p className="mt-4 font-semibold">Durée :</p>
              <ul>
                <li>Les cookies de session qui sont effacés lorsque l&apos;utilisateur ferme le navigateur.</li>
                <li>
                  Les cookies persistants qui restent sur le dispositif de l&apos;utilisateur pendant une certaine
                  période de temps.
                </li>
              </ul>
            </div>
          </section>

          <section id="section-12" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Quels sont les cookies et traceurs que nous utilisons ?</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                L&apos;application Ludora et son site vitrine utilisent exclusivement des cookies techniques et
                fonctionnels nécessaires au bon fonctionnement du service.
              </p>
              <p>Cookies utilisés :</p>
              <ul>
                <li>
                  <strong>Cookies de session / Authentification :</strong> Ces cookies (ou jetons de stockage local)
                  permettent de vous identifier et de maintenir votre connexion à votre espace client. Ils sont
                  indispensables à l&apos;utilisation de l&apos;application.
                </li>
                <li>
                  <strong>Cookies de sécurité :</strong> Utilisés par notre infrastructure Cloudflare pour protéger nos
                  serveurs contre les attaques malveillantes (DDoS, bots).
                </li>
                <li>
                  <strong>Cookies de préférences :</strong> Permettent de mémoriser vos choix d&apos;utilisation (ex:
                  langue, acceptation de la politique de confidentialité).
                </li>
              </ul>
              <p>
                Note : Nous n&apos;utilisons aucun cookie de ciblage publicitaire ni de cookie tiers à des fins de
                profilage commercial.
              </p>
            </div>
          </section>

          <section id="section-13" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Vos préférences concernant les cookies</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Quand vous arrivez pour la première fois sur l&apos;application mobile, un bandeau cookie vous propose
                d&apos;accepter ou de refuser les Cookies qui ne sont pas essentiels au fonctionnement de
                l&apos;application mobile. Vous pouvez refuser ou désactiver les Cookies à tout moment, à
                l&apos;exception des Cookies nécessaires au fonctionnement stable de l&apos;application mobile. Vous
                avez la possibilité de modifier à tout moment vos préférences relatives à la gestion des cookies.
              </p>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="mt-16 rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-8">
            <h2 className="mb-4 text-xl font-bold">Vous avez d&apos;autres questions ?</h2>
            <p className="mb-6">
              Si vous avez des questions spécifiques concernant notre politique de confidentialité ou la façon dont nous
              traitons vos données, n&apos;hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="gradient" className="px-8 py-4" redirect={ROUTES.CONTACT}>
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
