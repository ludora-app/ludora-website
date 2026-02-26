import { Button } from '@chillUi';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/constants/ROUTES';

export default function LegalNoticeScreen() {
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
                <span className="ml-2 text-gray-900">Mentions légales</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Mentions légales</h1>
            <p className="text-gray-600">
              Application Ludora – En vigueur au <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg mb-12 max-w-none">
            <p>
              Conformément aux dispositions de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance
              dans l&apos;économie numérique, les informations relatives à l&apos;éditeur du site et à l&apos;hébergeur
              sont précisées ci-dessous.
            </p>
          </div>

          {/* Éditeur du site */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">1. Éditeur du site</h2>
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
                    <strong>Contact :</strong> 06 01 77 08 14 /{' '}
                    <a href="mailto:contact@ludora.fr" className="text-orange-500 hover:underline">
                      contact@ludora.fr
                    </a>
                  </li>
                  <li>
                    <strong>RCS :</strong> Numéro d&apos;inscription 931 604 102
                  </li>
                  <li>
                    <strong>TVA :</strong> TVA non applicable, art. 293 B du CGI.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hébergeur */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">2. Hébergeur</h2>
            <div className="prose prose-lg max-w-none">
              <p>Le présent site web est hébergé par :</p>
              <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-4">
                <p className="font-semibold">OVH SAS</p>
                <p>Siège social : 2 rue Kellermann – 59100 Roubaix, France</p>
                <p>Tél. +33 (0)8 99 70 17 61</p>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">3. Propriété intellectuelle</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                L&apos;ensemble du contenu du site https://ludora.fr et de l&apos;application mobile Ludora (structure,
                textes, logos, images, vidéos, graphiques, etc.) est protégé par le Code de la propriété intellectuelle
                et est la propriété exclusive de Ludora ou de ses partenaires.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou
                partie des éléments du site ou de l&apos;application, quel que soit le moyen ou le procédé utilisé, est
                interdite sans l&apos;autorisation préalable écrite de l&apos;éditeur.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">4. Protection des données personnelles</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Ludora s&apos;engage à respecter la confidentialité des données personnelles communiquées par les
                utilisateurs du site et de l&apos;application. Conformément à la loi &quot;Informatique et
                Libertés&quot; du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD),
                vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, de
                portabilité et d&apos;opposition aux données vous concernant.
              </p>
              <p>
                Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter
                l&apos;éditeur à l&apos;adresse{' '}
                <a href="mailto:contact@ludora.fr" className="text-orange-500 hover:underline">
                  contact@ludora.fr
                </a>
                .
              </p>
              <p>
                Pour plus d&apos;informations sur la façon dont nous traitons vos données, consultez notre{' '}
                <Link href={ROUTES.PRIVACY_POLICY} className="text-orange-500 hover:underline">
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">5. Droit applicable et juridiction compétente</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux
                compétents de Paris sont seuls compétents.
              </p>
              <p>
                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l&apos;adresse{' '}
                <a href="mailto:contact@ludora.fr" className="text-orange-500 hover:underline">
                  contact@ludora.fr
                </a>
                .
              </p>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="mt-16 rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-8">
            <h2 className="mb-4 text-xl font-bold">Vous avez d&apos;autres questions ?</h2>
            <p className="mb-6">
              Consultez également nos{' '}
              <Link href={ROUTES.TERMS_OF_SERVICE} className="text-orange-500 hover:underline">
                Conditions générales d&apos;utilisation
              </Link>{' '}
              et notre{' '}
              <Link href={ROUTES.PRIVACY_POLICY} className="text-orange-500 hover:underline">
                Politique de confidentialité
              </Link>
              .
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
