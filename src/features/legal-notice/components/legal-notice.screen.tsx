import { ROUTES } from '@/constants/ROUTES';
import { Button } from '@chillUi';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function LegalNoticeScreen() {
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
                <span className="ml-2 text-gray-900">Mentions légales</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Mentions légales</h1>
            <p className="text-gray-600">
              Dernière mise à jour : <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg mb-12 max-w-none">
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie
              numérique, nous vous informons des mentions légales suivantes relatives au site www.ludora.fr et à
              l&apos;application mobile Ludora.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">1. Éditeur du site et de l&apos;application</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Le site www.ludora.fr et l&apos;application mobile Ludora sont édités par la société Ludora SAS,
                  société par actions simplifiée au capital de 50 000 euros, immatriculée au Registre du Commerce et des
                  Sociétés de Paris sous le numéro 123 456 789, dont le siège social est situé au 123 Avenue des Sports,
                  75000 Paris, France.
                </p>
                <p>
                  <strong>Numéro de TVA intracommunautaire :</strong> FR 12 345 678 901
                  <br />
                  <strong>Directeur de la publication :</strong> Thomas Durand, Président de Ludora SAS
                  <br />
                  <strong>Contact :</strong>{' '}
                  <a href="mailto:contact@ludora.fr" className="text-orange-500 hover:underline">
                    contact@ludora.fr
                  </a>
                  <br />
                  <strong>Téléphone :</strong> +33 1 23 45 67 89
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">2. Hébergement</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Le site www.ludora.fr est hébergé par la société Vercel Inc., dont le siège social est situé au 340 S
                  Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                </p>
                <p>
                  L&apos;application mobile Ludora est hébergée sur les serveurs d&apos;Amazon Web Services (AWS), dont
                  le siège social est situé au 410 Terry Avenue North, Seattle, WA 98109-5210, États-Unis.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">3. Propriété intellectuelle</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  L&apos;ensemble du contenu du site www.ludora.fr et de l&apos;application mobile Ludora (structure,
                  textes, logos, images, vidéos, graphiques, etc.) est protégé par le droit d&apos;auteur et est la
                  propriété exclusive de Ludora SAS ou de ses partenaires.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou
                  partie des éléments du site ou de l&apos;application, quel que soit le moyen ou le procédé utilisé,
                  est interdite sans l&apos;autorisation préalable écrite de Ludora SAS.
                </p>
                <p>
                  Les marques et logos présents sur le site et l&apos;application sont des marques déposées par Ludora
                  SAS ou ses partenaires. Toute reproduction, usage ou imitation de ces marques sans autorisation
                  préalable de Ludora SAS ou de ses partenaires est interdite.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">4. Protection des données personnelles</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Ludora SAS s&apos;engage à respecter la confidentialité des données personnelles communiquées par les
                  utilisateurs du site et de l&apos;application. Les informations recueillies font l&apos;objet
                  d&apos;un traitement informatique destiné à améliorer l&apos;expérience utilisateur et à fournir les
                  services proposés.
                </p>
                <p>
                  Conformément à la loi &quot;Informatique et Libertés&quot; du 6 janvier 1978 modifiée et au Règlement
                  Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de
                  rectification, d&apos;effacement, de limitation, de portabilité et d&apos;opposition aux données vous
                  concernant.
                </p>
                <p>
                  Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter
                  notre Délégué à la Protection des Données à l&apos;adresse suivante :{' '}
                  <a href="mailto:privacy@ludora.fr" className="text-orange-500 hover:underline">
                    privacy@ludora.fr
                  </a>
                  .
                </p>
                <p>
                  Pour plus d&apos;informations sur la façon dont nous traitons vos données, veuillez consulter notre{' '}
                  <Link href="/politique-de-confidentialite" className="text-orange-500 hover:underline">
                    Politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">5. Cookies</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Le site www.ludora.fr et l&apos;application mobile Ludora utilisent des cookies pour améliorer
                  l&apos;expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre appareil
                  qui nous permettent d&apos;analyser l&apos;utilisation de nos services.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être informé
                  lorsqu&apos;un cookie est envoyé. Cependant, certaines fonctionnalités du site ou de
                  l&apos;application peuvent ne pas fonctionner correctement si vous refusez les cookies.
                </p>
                <p>
                  Pour plus d&apos;informations sur notre utilisation des cookies, veuillez consulter notre{' '}
                  <Link href="/politique-de-confidentialite" className="text-orange-500 hover:underline">
                    Politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">6. Liens hypertextes</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Le site www.ludora.fr et l&apos;application mobile Ludora peuvent contenir des liens hypertextes vers
                  d&apos;autres sites internet ou applications. Ludora SAS n&apos;exerce aucun contrôle sur ces sites et
                  applications et décline toute responsabilité quant à leur contenu.
                </p>
                <p>
                  La présence de liens vers des sites tiers n&apos;implique pas l&apos;approbation de leur contenu par
                  Ludora SAS ni l&apos;existence d&apos;un partenariat avec les propriétaires de ces sites.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">7. Limitation de responsabilité</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Ludora SAS s&apos;efforce d&apos;assurer au mieux de ses possibilités l&apos;exactitude et la mise à
                  jour des informations diffusées sur le site et l&apos;application, dont elle se réserve le droit de
                  corriger le contenu à tout moment et sans préavis.
                </p>
                <p>
                  Ludora SAS ne peut toutefois garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des
                  informations mises à disposition sur le site et l&apos;application. En conséquence, informations mises
                  à disposition sur le site et l&apos;application. En conséquence, Ludora SAS décline toute
                  responsabilité concernant :
                </p>
                <ul>
                  <li>
                    Toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site et
                    l&apos;application
                  </li>
                  <li>
                    Tous dommages résultant d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une
                    modification des informations mises à disposition
                  </li>
                  <li>
                    Et plus généralement, tous dommages directs ou indirects, quelles qu&apos;en soient les causes,
                    origines, natures ou conséquences, provoqués par l&apos;accès de quiconque au site ou à
                    l&apos;application, ou l&apos;impossibilité d&apos;y accéder
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">8. Droit applicable et juridiction compétente</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux
                  français seront seuls compétents.
                </p>
                <p>
                  Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à
                  l&apos;adresse suivante :{' '}
                  <a href="mailto:contact@ludora.fr" className="text-orange-500 hover:underline">
                    contact@ludora.fr
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">9. Médiation de la consommation</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges,
                  Ludora SAS adhère au Service du Médiateur de la consommation. Vous pouvez recourir gratuitement à ce
                  service de médiation pour le règlement d&apos;un litige qui vous opposerait à notre société.
                </p>
                <p>
                  Pour connaître les modalités de saisine du Médiateur, veuillez consulter le site :{' '}
                  <a
                    href="https://www.economie.gouv.fr/mediation-conso"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.economie.gouv.fr/mediation-conso
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
              Si vous avez des questions spécifiques concernant nos mentions légales, n&apos;hésitez pas à nous
              contacter.
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
