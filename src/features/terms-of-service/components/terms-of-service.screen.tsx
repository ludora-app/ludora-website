import { ROUTES } from '@/constants/ROUTES';
import { Button } from '@chillUi';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServiceScreen() {
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
                <span className="ml-2 text-gray-900">Conditions d&apos;utilisation</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Conditions générales d&apos;utilisation</h1>
            <p className="text-gray-600">
              Dernière mise à jour : <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg mb-12 max-w-none">
            <p>
              Bienvenue sur Ludora ! Les présentes conditions générales d&apos;utilisation régissent votre utilisation
              de l&apos;application mobile Ludora et du site web www.ludora.fr (collectivement, les
              &quot;Services&quot;), exploités par Ludora SAS.
            </p>
            <p>
              En accédant à nos Services ou en les utilisant, vous acceptez d&apos;être lié par ces conditions. Si vous
              n&apos;acceptez pas l&apos;intégralité des termes et conditions énoncés dans ce document, vous ne pouvez
              pas accéder aux Services ni les utiliser.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 p-6">
            <h2 className="mb-4 text-xl font-bold">Sommaire</h2>
            <ul className="space-y-2">
              {[
                'Compte utilisateur',
                'Utilisation des Services',
                'Contenu et comportement',
                'Propriété intellectuelle',
                'Responsabilité et garanties',
                'Limitation de responsabilité',
                'Résiliation',
                'Modifications des conditions',
                'Dispositions générales',
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
              <h2 className="mb-4 text-2xl font-bold">1. Compte utilisateur</h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="mt-6 mb-3 text-xl font-semibold">1.1 Création de compte</h3>
                <p>
                  Pour utiliser certaines fonctionnalités de nos Services, vous devez créer un compte. Vous vous engagez
                  à fournir des informations exactes, complètes et à jour. Vous êtes responsable de la confidentialité
                  de votre compte et de votre mot de passe, ainsi que de toutes les activités qui se déroulent sous
                  votre compte.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">1.2 Conditions d&apos;âge</h3>
                <p>
                  Vous devez être âgé d&apos;au moins 16 ans pour créer un compte et utiliser nos Services. Si vous avez
                  entre 16 et 18 ans, vous déclarez avoir obtenu le consentement de vos parents ou tuteurs légaux pour
                  utiliser nos Services.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">1.3 Sécurité du compte</h3>
                <p>
                  Vous vous engagez à nous informer immédiatement de toute utilisation non autorisée de votre compte ou
                  de toute autre violation de sécurité. Nous ne serons pas responsables des pertes ou dommages résultant
                  de votre non-respect de cette obligation.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2">
              <h2 className="mb-4 text-2xl font-bold">2. Utilisation des Services</h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="mt-6 mb-3 text-xl font-semibold">2.1 Licence d&apos;utilisation</h3>
                <p>
                  Sous réserve de votre respect des présentes conditions, nous vous accordons une licence limitée, non
                  exclusive, non transférable et révocable pour accéder et utiliser nos Services à des fins personnelles
                  et non commerciales.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">2.2 Restrictions d&apos;utilisation</h3>
                <p>Vous vous engagez à ne pas :</p>
                <ul>
                  <li>
                    Utiliser nos Services d&apos;une manière qui pourrait endommager, désactiver, surcharger ou altérer
                    les Services
                  </li>
                  <li>
                    Utiliser des robots, des scrapers ou d&apos;autres moyens automatisés pour accéder à nos Services
                  </li>
                  <li>
                    Contourner les mesures que nous pouvons utiliser pour empêcher ou restreindre l&apos;accès à nos
                    Services
                  </li>
                  <li>
                    Tenter d&apos;accéder à des zones ou fonctionnalités des Services auxquelles vous n&apos;êtes pas
                    autorisé à accéder
                  </li>
                  <li>Utiliser nos Services pour toute activité illégale ou non autorisée</li>
                </ul>

                <h3 className="mt-6 mb-3 text-xl font-semibold">2.3 Mises à jour et modifications</h3>
                <p>
                  Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie de nos Services à
                  tout moment, avec ou sans préavis. Nous ne serons pas responsables envers vous ou un tiers pour toute
                  modification, suspension ou interruption des Services.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3">
              <h2 className="mb-4 text-2xl font-bold">3. Contenu et comportement</h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="mt-6 mb-3 text-xl font-semibold">3.1 Contenu utilisateur</h3>
                <p>
                  Nos Services vous permettent de publier, de lier, de stocker, de partager et de mettre à disposition
                  certaines informations, textes, graphiques, vidéos ou autres contenus (&quot;Contenu&quot;). Vous êtes
                  responsable de tout Contenu que vous publiez sur ou via nos Services.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">3.2 Droits sur le contenu</h3>
                <p>
                  En publiant du Contenu sur ou via nos Services, vous nous accordez une licence mondiale, non
                  exclusive, libre de redevance, avec le droit de sous-licencier, d&apos;utiliser, de reproduire, de
                  modifier, d&apos;adapter, de publier, de traduire, de créer des œuvres dérivées, de distribuer et
                  d&apos;afficher ce Contenu dans le cadre de nos Services.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">3.3 Contenu interdit</h3>
                <p>Vous vous engagez à ne pas publier de Contenu qui :</p>
                <ul>
                  <li>Est illégal, préjudiciable, menaçant, abusif, harcelant, diffamatoire ou obscène</li>
                  <li>Enfreint les droits de propriété intellectuelle d&apos;un tiers</li>
                  <li>Contient des virus informatiques ou d&apos;autres codes malveillants</li>
                  <li>Constitue une publicité non sollicitée ou non autorisée</li>
                  <li>Usurpe l&apos;identité d&apos;une personne ou d&apos;une entité</li>
                  <li>Viole la vie privée d&apos;autrui</li>
                </ul>

                <h3 className="mt-6 mb-3 text-xl font-semibold">3.4 Comportement des utilisateurs</h3>
                <p>
                  Vous vous engagez à interagir avec les autres utilisateurs de manière respectueuse et professionnelle.
                  Tout comportement abusif, harcelant ou inapproprié envers d&apos;autres utilisateurs peut entraîner la
                  suspension ou la résiliation de votre compte.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4">
              <h2 className="mb-4 text-2xl font-bold">4. Propriété intellectuelle</h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="mt-6 mb-3 text-xl font-semibold">4.1 Nos droits de propriété</h3>
                <p>
                  Les Services et leur contenu original, fonctionnalités et fonctionnalités sont et resteront la
                  propriété exclusive de Ludora SAS et de ses concédants de licence. Les Services sont protégés par le
                  droit d&apos;auteur, les marques de commerce et d&apos;autres lois en France et à l&apos;étranger.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">4.2 Marques commerciales</h3>
                <p>
                  Le nom &quot;Ludora&quot;, le logo Ludora et tous les noms, logos, noms de produits et de services,
                  designs et slogans associés sont des marques commerciales de Ludora SAS ou de ses sociétés affiliées
                  ou concédants de licence. Vous ne devez pas utiliser ces marques sans l&apos;autorisation écrite
                  préalable de Ludora SAS.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">4.3 Signalement d&apos;infractions</h3>
                <p>
                  Si vous pensez que votre travail protégé par le droit d&apos;auteur a été copié d&apos;une manière qui
                  constitue une violation du droit d&apos;auteur, veuillez nous fournir les informations suivantes :
                </p>
                <ul>
                  <li>
                    Une description de l&apos;œuvre protégée par le droit d&apos;auteur que vous prétendez avoir été
                    violée
                  </li>
                  <li>
                    Une description de l&apos;endroit où le matériel que vous prétendez être une violation se trouve sur
                    les Services
                  </li>
                  <li>Vos coordonnées, y compris votre adresse, numéro de téléphone et adresse e-mail</li>
                  <li>
                    Une déclaration selon laquelle vous croyez de bonne foi que l&apos;utilisation contestée n&apos;est
                    pas autorisée par le titulaire du droit d&apos;auteur, son agent ou la loi
                  </li>
                  <li>
                    Une déclaration, sous peine de parjure, que les informations ci-dessus sont exactes et que vous êtes
                    le titulaire du droit d&apos;auteur ou autorisé à agir en son nom
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5">
              <h2 className="mb-4 text-2xl font-bold">5. Responsabilité et garanties</h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="mt-6 mb-3 text-xl font-semibold">5.1 Absence de garanties</h3>
                <p>
                  Nos Services sont fournis &quot;tels quels&quot; et &quot;selon disponibilité&quot;, sans garantie
                  d&apos;aucune sorte, expresse ou implicite. Nous ne garantissons pas que nos Services répondront à vos
                  exigences, seront disponibles de manière ininterrompue, opportune, sécurisée ou sans erreur.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">5.2 Risques liés à l&apos;activité sportive</h3>
                <p>
                  Vous reconnaissez que la pratique d&apos;activités sportives comporte des risques inhérents de
                  blessures physiques. Vous acceptez d&apos;assumer l&apos;entière responsabilité des risques liés à
                  votre participation à des activités sportives organisées via nos Services.
                </p>
                <p>
                  Ludora n&apos;est pas responsable des blessures, dommages ou pertes que vous pourriez subir en
                  participant à des activités sportives organisées via nos Services. Nous vous recommandons de consulter
                  un médecin avant de participer à toute activité physique.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">5.3 Vérification des utilisateurs</h3>
                <p>
                  Bien que nous puissions mettre en œuvre certaines mesures pour vérifier l&apos;identité des
                  utilisateurs, nous ne pouvons pas garantir l&apos;identité des utilisateurs avec lesquels vous
                  interagissez via nos Services. Vous êtes seul responsable de vos interactions avec les autres
                  utilisateurs.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6">
              <h2 className="mb-4 text-2xl font-bold">6. Limitation de responsabilité</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Dans toute la mesure permise par la loi applicable, Ludora SAS, ses dirigeants, administrateurs,
                  employés, agents, fournisseurs et concédants de licence ne seront pas responsables des dommages
                  indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris, sans limitation, la perte de
                  profits, de données, d&apos;utilisation, de clientèle ou autres pertes intangibles, résultant de :
                </p>
                <ul>
                  <li>Votre accès ou utilisation ou incapacité d&apos;accéder ou d&apos;utiliser les Services</li>
                  <li>Tout comportement ou contenu d&apos;un tiers sur les Services</li>
                  <li>Tout contenu obtenu à partir des Services</li>
                  <li>Accès non autorisé, utilisation ou altération de vos transmissions ou contenu</li>
                </ul>
                <p>
                  Cette limitation de responsabilité s&apos;applique que les dommages soient fondés sur une violation de
                  contrat, un délit (y compris la négligence), une violation de garantie ou toute autre théorie
                  juridique, même si nous avons été informés de la possibilité de tels dommages.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7">
              <h2 className="mb-4 text-2xl font-bold">7. Résiliation</h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="mt-6 mb-3 text-xl font-semibold">7.1 Résiliation par vous</h3>
                <p>
                  Vous pouvez résilier votre compte à tout moment en suivant les instructions dans les paramètres du
                  compte ou en nous contactant à support@ludora.fr.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">7.2 Résiliation par nous</h3>
                <p>
                  Nous nous réservons le droit de suspendre ou de résilier votre compte et votre accès aux Services,
                  avec ou sans motif, à tout moment et sans préavis. Nous pouvons notamment résilier votre compte en cas
                  de violation des présentes conditions ou si nous soupçonnons une utilisation frauduleuse ou abusive
                  des Services.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">7.3 Effets de la résiliation</h3>
                <p>
                  En cas de résiliation de votre compte, votre droit d&apos;utiliser les Services cessera immédiatement.
                  Certaines dispositions des présentes conditions survivront à la résiliation, notamment les
                  dispositions relatives à la propriété intellectuelle, aux limitations de responsabilité et au
                  règlement des litiges.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8">
              <h2 className="mb-4 text-2xl font-bold">8. Modifications des conditions</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces conditions à
                  tout moment. Si une révision est importante, nous fournirons un préavis d&apos;au moins 30 jours avant
                  que les nouvelles conditions ne prennent effet. Ce qui constitue un changement important sera
                  déterminé à notre seule discrétion.
                </p>
                <p>
                  En continuant à accéder ou à utiliser nos Services après l&apos;entrée en vigueur de ces révisions,
                  vous acceptez d&apos;être lié par les conditions révisées. Si vous n&apos;acceptez pas les nouvelles
                  conditions, vous n&apos;êtes plus autorisé à utiliser les Services.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9">
              <h2 className="mb-4 text-2xl font-bold">9. Dispositions générales</h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="mt-6 mb-3 text-xl font-semibold">9.1 Droit applicable</h3>
                <p>
                  Ces conditions sont régies et interprétées conformément aux lois françaises, sans égard aux principes
                  de conflits de lois.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">9.2 Règlement des litiges</h3>
                <p>
                  Tout litige découlant de ou lié à ces conditions ou à nos Services sera soumis à la compétence
                  exclusive des tribunaux de Paris, France.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">9.3 Renonciation et divisibilité</h3>
                <p>
                  Notre manquement à faire valoir un droit ou une disposition des présentes conditions ne constituera
                  pas une renonciation à ce droit ou à cette disposition. Si une disposition des présentes conditions
                  est jugée invalide ou inapplicable par un tribunal, les autres dispositions des présentes conditions
                  resteront en vigueur.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">9.4 Intégralité de l&apos;accord</h3>
                <p>
                  Ces conditions constituent l&apos;intégralité de l&apos;accord entre vous et Ludora SAS concernant nos
                  Services et remplacent tous les accords antérieurs et contemporains, communications et propositions,
                  qu&apos;ils soient oraux ou écrits, entre vous et nous.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">9.5 Contact</h3>
                <p>
                  Si vous avez des questions concernant ces conditions, veuillez nous contacter à{' '}
                  <a href="mailto:contact@ludora.fr" className="text-orange-500 hover:underline">
                    contact@ludora.fr
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-rose-50 p-8">
            <h2 className="mb-4 text-xl font-bold">Vous avez d&apos;autres questions ?</h2>
            <p className="mb-6">
              Si vous avez des questions spécifiques concernant nos conditions d&apos;utilisation, n&apos;hésitez pas à
              nous contacter.
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
