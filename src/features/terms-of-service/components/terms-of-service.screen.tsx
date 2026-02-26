import { Button } from '@chillUi';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/constants/ROUTES';

export default function TermsOfServiceScreen() {
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
                <span className="ml-2 text-gray-900">CGU et Mentions légales</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">CGU et Mentions légales</h1>
            <p className="text-gray-600">
              Application Ludora – En vigueur au <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>

          {/* Définitions */}
          <section id="section-1" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Définitions</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                <strong>Client :</strong> tout professionnel ou personne physique capable au sens des articles 1123 et
                suivants du Code civil, ou personne morale, qui visite le site objet des présentes conditions générales.
              </p>
              <p>
                <strong>Prestations et Services :</strong> https://ludora.fr met à disposition des Clients les services
                de l&apos;application mobile et du site vitrine.
              </p>
              <p>
                <strong>Contenu :</strong> ensemble des éléments constituant l&apos;information présente sur le site
                (textes, images, vidéos).
              </p>
              <p>
                <strong>Informations clients :</strong> données personnelles susceptibles d&apos;être détenues par
                Ludora pour la gestion du compte, de la relation client et à des fins d&apos;analyses et de
                statistiques.
              </p>
              <p>
                <strong>Utilisateur :</strong> internaute ou utilisateur se connectant et utilisant le site ou
                l&apos;application susnommés.
              </p>
              <p>
                <strong>Informations personnelles :</strong> « Les informations qui permettent, sous quelque forme que
                ce soit, directement ou non, l&apos;identification des personnes physiques auxquelles elles
                s&apos;appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978). Les termes « données à caractère
                personnel », « personne concernée », « sous-traitant » et « données sensibles » ont le sens défini par
                le Règlement général sur la protection des données (RGPD n° 2016-679).
              </p>
            </div>
          </section>

          {/* Intro CGU */}
          <section id="section-2" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Objet des CGU</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Les présentes conditions générales d&apos;utilisation (dites « CGU ») ont pour objet l&apos;encadrement
                juridique des services proposés par l&apos;application mobile Ludora et son site vitrine
                https://ludora.fr, et de définir les conditions d&apos;accès et d&apos;utilisation des services par «
                l&apos;Utilisateur ».
              </p>
              <p>Les présentes CGU sont accessibles sur l&apos;application et sur le site à la rubrique « CGU ».</p>
              <p>
                Toute inscription ou utilisation du site implique l&apos;acceptation sans aucune réserve ni restriction
                des présentes CGU par l&apos;utilisateur. Lors de l&apos;inscription sur le site via le Formulaire
                d&apos;inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case
                précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte ».
              </p>
              <p>
                En cas de non-acceptation des CGU stipulées dans le présent contrat, l&apos;Utilisateur se doit de
                renoncer à l&apos;accès des services proposés par le site.
              </p>
              <p>
                https://ludora.fr se réserve le droit de modifier unilatéralement et à tout moment le contenu des
                présentes CGU.
              </p>
            </div>
          </section>

          {/* Article 1 – Mentions légales */}
          <section id="section-3" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 1 – Les mentions légales</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                l&apos;économie numérique, il est précisé l&apos;identité des différents intervenants. L&apos;édition et
                la direction de la publication du site https://ludora.fr sont assurées par Meberbeche Hichem Amir Fouad,
                domicilié 8 impasse André le Notre, 94000 Créteil.
              </p>
              <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-4">
                <ul className="space-y-2">
                  <li>
                    <strong>Propriétaire / Responsable publication :</strong> Meberbeche Hichem Amir Fouad –
                    contact@ludora.fr
                  </li>
                  <li>
                    <strong>Webmaster / DPO :</strong> Meberbeche – contact@ludora.fr
                  </li>
                  <li>
                    <strong>Numéro de téléphone :</strong> 06 01 77 08 14
                  </li>
                  <li>
                    <strong>Adresse e-mail :</strong> contact@ludora.fr
                  </li>
                  <li>
                    <strong>RCS :</strong> Numéro d&apos;inscription 931 604 102
                  </li>
                  <li>
                    <strong>TVA :</strong> TVA non applicable, art. 293 B du CGI.
                  </li>
                  <li>
                    <strong>Hébergeur :</strong> OVH SAS – 2 rue Kellermann, 59100 Roubaix – +33 9 72 10 10 07
                  </li>
                </ul>
              </div>
              <p>
                L&apos;hébergeur du site https://ludora.fr est la société OVH SAS, dont le siège social est situé au 2
                rue Kellermann, 59100 Roubaix, France.
              </p>
            </div>
          </section>

          {/* Conditions générales d'utilisation du site et des services */}
          <section id="section-4" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Conditions générales d&apos;utilisation du site et des services</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Le site constitue une œuvre de l&apos;esprit protégée par le Code de la propriété intellectuelle. Le
                Client ne peut réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou
                travaux du site.
              </p>
              <p>
                Ce site est normalement accessible à tout moment. Une interruption pour raison de maintenance technique
                peut être décidée par Ludora, qui s&apos;efforcera d&apos;en communiquer préalablement les dates et
                heures. Les mentions légales peuvent être modifiées à tout moment ; l&apos;utilisateur est invité à
                s&apos;y référer le plus souvent possible.
              </p>
            </div>
          </section>

          {/* Article 2 – Accès au site */}
          <section id="section-5" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 2 – Accès au site</h2>
            <div className="prose prose-lg max-w-none">
              <p>Le site https://ludora.fr permet à l&apos;Utilisateur un accès gratuit aux services suivants :</p>
              <ul>
                <li>
                  Création et gestion d&apos;un compte utilisateur sécurisé via authentification tierce (Google Auth)
                </li>
                <li>Création et personnalisation d&apos;un profil public avec photo</li>
                <li>Création et organisation de sessions de sport collectives</li>
                <li>Recherche et inscription à des sessions de sport créées par d&apos;autres utilisateurs</li>
                <li>Publication et référencement de terrains ou complexes sportifs</li>
                <li>Système de messagerie instantanée privée entre membres</li>
                <li>Envoi d&apos;invitations à des activités sportives</li>
                <li>Réception de notifications push en temps réel relatives à l&apos;activité du compte (Firebase)</li>
                <li>Stockage et partage de contenus multimédias liés aux profils et aux terrains (Cloudflare R2)</li>
              </ul>
              <p>
                Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les
                frais supportés par l&apos;Utilisateur pour accéder au service (matériel informatique, logiciels,
                connexion Internet, etc.) sont à sa charge.
              </p>
              <p>
                L&apos;Utilisateur non membre n&apos;a pas accès aux services réservés. Pour cela, il doit
                s&apos;inscrire en remplissant le formulaire. En acceptant de s&apos;inscrire aux services réservés,
                l&apos;Utilisateur membre s&apos;engage à fournir des informations sincères et exactes concernant son
                état civil et ses coordonnées, notamment son adresse email.
              </p>
              <p>
                Pour accéder aux services, l&apos;Utilisateur doit ensuite s&apos;identifier à l&apos;aide de son
                identifiant et de son mot de passe qui lui seront communiqués après son inscription.
              </p>
              <p>
                Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se
                rendant à la page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable.
              </p>
              <p>
                Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou
                serveur et sous réserve de toute interruption ou modification en cas de maintenance, n&apos;engage pas
                la responsabilité de https://ludora.fr. Dans ces cas, l&apos;Utilisateur accepte ainsi de ne pas tenir
                rigueur à l&apos;éditeur de toute interruption ou suspension de service, même sans préavis.
              </p>
              <p>
                L&apos;Utilisateur a la possibilité de contacter le site par messagerie électronique à l&apos;adresse
                email de l&apos;éditeur communiquée à l&apos;Article 1.
              </p>
              <p>
                Ludora s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra
                être tenu responsable des oublis, inexactitudes ou carences dans la mise à jour. Toutes les informations
                indiquées sur le site sont données à titre indicatif, susceptibles d&apos;évoluer et ne sont pas
                exhaustives.
              </p>
            </div>
          </section>

          {/* Limitations contractuelles sur les données techniques */}
          <section id="section-6" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Limitations contractuelles sur les données techniques</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Le site utilise la technologie JavaScript. Le site ne pourra être tenu responsable de dommages matériels
                liés à l&apos;utilisation du site. L&apos;utilisateur s&apos;engage à accéder au site avec un matériel
                récent, ne contenant pas de virus et avec un navigateur à jour.
              </p>
              <p>
                Le site https://ludora.fr est hébergé chez un prestataire sur le territoire de l&apos;Union européenne
                conformément au RGPD (n° 2016-679). L&apos;objectif est d&apos;assurer le meilleur taux
                d&apos;accessibilité. L&apos;hébergeur assure la continuité de son service 24h/24 ; il se réserve la
                possibilité d&apos;interrompre le service pour des durées courtes (maintenance, amélioration des
                infrastructures).
              </p>
              <p>
                Ludora et l&apos;hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau
                Internet, des lignes téléphoniques ou du matériel informatique, notamment en cas d&apos;encombrement du
                réseau empêchant l&apos;accès au serveur.
              </p>
            </div>
          </section>

          {/* Article 3 – Collecte des données */}
          <section id="section-7" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 3 – Collecte des données</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Ludora assure à l&apos;Utilisateur une collecte et un traitement d&apos;informations personnelles dans
                le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à
                l&apos;informatique, aux fichiers et aux libertés, et au Règlement général sur la protection des données
                (RGPD).
              </p>
              <p>
                En vertu de la loi Informatique et Libertés et du RGPD, l&apos;Utilisateur dispose d&apos;un droit
                d&apos;accès, de rectification, de suppression et d&apos;opposition de ses données personnelles.
                L&apos;Utilisateur exerce ce droit via son espace personnel ou en contactant l&apos;éditeur aux
                coordonnées de l&apos;Article 1. Une Politique de confidentialité détaillée est disponible et précise
                l&apos;ensemble des traitements réalisés.
              </p>
              <p>
                Les données personnelles sont hébergées en France (OVH) et les contenus multimédias sont stockés via le
                prestataire Cloudflare R2, dans le respect des garanties prévues par le RGPD.
              </p>
              <p>
                Les données sont conservées tant que le compte est actif, ou pendant une durée de 2 ans après la
                dernière activité sur l&apos;application, sous réserve des obligations légales d&apos;archivage.
              </p>
            </div>
          </section>

          {/* Article 4 – Propriété intellectuelle */}
          <section id="section-8" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 4 – Propriété intellectuelle</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l&apos;objet
                d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit
                d&apos;auteur.
              </p>
              <p>
                L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du site pour toute reproduction,
                publication, copie des différents contenus. Il s&apos;engage à une utilisation des contenus du site dans
                un cadre strictement privé ; toute utilisation à des fins commerciales et publicitaires est strictement
                interdite.
              </p>
              <p>
                Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans
                l&apos;autorisation expresse de l&apos;exploitant du site Internet constituerait une contrefaçon
                sanctionnée par l&apos;article L 335-2 et suivants du Code de la propriété intellectuelle.
              </p>
              <p>
                Il est rappelé conformément à l&apos;article L122-5 du Code de propriété intellectuelle que
                l&apos;Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l&apos;auteur et sa
                source.
              </p>
            </div>
          </section>

          {/* Article 5 – Limitations de responsabilité */}
          <section id="section-9" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 5 – Limitations de responsabilité</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Ludora agit en tant qu&apos;éditeur du site et est responsable de la qualité et de la véracité du
                Contenu qu&apos;il publie.
              </p>
              <p>
                Les sources des informations diffusées sur le site https://ludora.fr sont réputées fiables mais le site
                ne garantit pas qu&apos;il soit exempt de défauts, d&apos;erreurs ou d&apos;omissions. Les informations
                communiquées sont présentées à titre indicatif et général sans valeur contractuelle.
              </p>
              <p>
                Ludora ne pourra être tenu responsable des dommages directs et indirects causés au matériel de
                l&apos;utilisateur lors de l&apos;accès au site, résultant de l&apos;utilisation d&apos;un matériel
                inadapté, d&apos;un bug ou d&apos;une incompatibilité, ni des dommages indirects (perte de marché, perte
                d&apos;une chance) consécutifs à l&apos;utilisation du site.
              </p>
              <p>
                Des espaces interactifs (contact, etc.) sont à la disposition des utilisateurs. Ludora se réserve le
                droit de supprimer, sans mise en demeure préalable, tout contenu déposé qui contreviendrait à la
                législation applicable en France (protection des données, messages à caractère raciste, injurieux,
                diffamant ou pornographique). Le cas échéant, Ludora se réserve la possibilité de mettre en cause la
                responsabilité civile et/ou pénale de l&apos;utilisateur.
              </p>
              <p>
                Malgré des mises à jour régulières, le site https://ludora.fr ne peut être tenu responsable de la
                modification des dispositions administratives et juridiques survenant après la publication. De même, le
                site ne peut être tenu responsable de l&apos;utilisation et de l&apos;interprétation de
                l&apos;information contenue dans ce site.
              </p>
              <p>
                L&apos;Utilisateur s&apos;assure de garder son mot de passe secret lorsqu&apos;un accès par identifiant
                et mot de passe est utilisé. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite.
                Il assume les risques liés à l&apos;utilisation de son identifiant et mot de passe. Dans le cas
                d&apos;une connexion via un tiers (Google Auth), l&apos;Utilisateur est responsable de la sécurité de
                son compte tiers. Ludora décline toute responsabilité en la matière.
              </p>
              <p>
                Le site https://ludora.fr ne peut être tenu pour responsable d&apos;éventuels virus qui pourraient
                infecter l&apos;ordinateur ou tout matériel informatique de l&apos;Internaute, suite à une utilisation,
                à l&apos;accès, ou au téléchargement provenant de ce site.
              </p>
              <p>
                La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et
                insurmontable d&apos;un tiers. Les utilisateurs peuvent déposer une réclamation auprès des autorités de
                contrôle, notamment la CNIL (
                <a
                  href="https://www.cnil.fr/fr/plaintes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  https://www.cnil.fr/fr/plaintes
                </a>
                ).
              </p>
            </div>
          </section>

          {/* Article 6 – Liens hypertextes */}
          <section id="section-10" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 6 – Liens hypertextes</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Des liens hypertextes peuvent être présents sur le site. L&apos;Utilisateur est informé qu&apos;en
                cliquant sur ces liens, il sortira du site https://ludora.fr. Ce dernier n&apos;a pas de contrôle sur
                les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur
                contenu.
              </p>
            </div>
          </section>

          {/* Article 7 – Cookies */}
          <section id="section-11" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 7 – Cookies et traceurs</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Sur l&apos;application mobile, des traceurs techniques sont utilisés pour maintenir la session
                utilisateur (NestJS) et permettre l&apos;envoi de notifications (Firebase).
              </p>
              <p>
                L&apos;Utilisateur est informé que lors de ses visites sur le site vitrine, un cookie peut
                s&apos;installer automatiquement sur son logiciel de navigation.
              </p>
              <p>
                Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l&apos;ordinateur de
                l&apos;Utilisateur par le navigateur et qui sont nécessaires à l&apos;utilisation du site
                https://ludora.fr. Les cookies ne contiennent pas d&apos;information personnelle et ne peuvent pas être
                utilisés pour identifier quelqu&apos;un. Un cookie contient un identifiant unique, généré aléatoirement
                et donc anonyme. Certains cookies expirent à la fin de la visite de l&apos;Utilisateur, d&apos;autres
                restent.
              </p>
              <p>
                L&apos;information contenue dans les cookies est utilisée pour améliorer le site https://ludora.fr. En
                naviguant sur le site, l&apos;Utilisateur les accepte.
              </p>
              <p>
                L&apos;Utilisateur doit toutefois donner son consentement quant à l&apos;utilisation de certains
                cookies.
              </p>
              <p>
                A défaut d&apos;acceptation, l&apos;Utilisateur est informé que certaines fonctionnalités ou pages
                risquent de lui être refusées.
              </p>
              <p>
                L&apos;Utilisateur pourra désactiver ces cookies par l&apos;intermédiaire des paramètres figurant au
                sein de son logiciel de navigation. Pour l&apos;application mobile, la gestion des traceurs et des
                notifications peut être effectuée depuis les réglages du terminal ou de l&apos;application.
              </p>
              <p>
                Sauf désactivation de votre part, vous acceptez que le site puisse utiliser cookies et traceurs. Ludora
                peut employer des balises Internet (tags) pour évaluer l&apos;utilisation du site et l&apos;efficacité
                des services ; ces dispositifs sont détaillés dans la{' '}
                <Link href={ROUTES.PRIVACY_POLICY} className="text-orange-500 hover:underline">
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Article 8 – Publication par l'Utilisateur */}
          <section id="section-12" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 8 – Publication par l&apos;Utilisateur</h2>
            <div className="prose prose-lg max-w-none">
              <p>Le site permet aux membres de publier les contenus suivants :</p>
              <ul>
                <li>Informations de profil (nom, bio, photos de profil)</li>
                <li>Annonces et descriptions de sessions de sport</li>
                <li>Informations et photographies de terrains ou complexes sportifs</li>
                <li>Messages privés échangés entre utilisateurs</li>
                <li>Commentaires et avis sur les sessions ou les lieux</li>
              </ul>
              <p>
                Dans ses publications, le membre s&apos;engage à respecter les règles de la Netiquette (règles de bonne
                conduite de l&apos;internet) et les règles de droit en vigueur.
              </p>
              <p>
                Le site peut exercer une modération sur les publications et se réserve le droit de refuser leur mise en
                ligne, sans avoir à s&apos;en justifier auprès du membre.
              </p>
              <p>
                Le membre reste titulaire de l&apos;intégralité de ses droits de propriété intellectuelle. Mais en
                publiant une publication sur le site, il cède à la société éditrice le droit non exclusif et gratuit de
                représenter, reproduire, adapter, modifier, diffuser et distribuer sa publication, directement ou par un
                tiers autorisé, dans le monde entier, sur tout support (numérique ou physique), pour la durée de la
                propriété intellectuelle. Le Membre cède notamment le droit d&apos;utiliser sa publication sur internet
                et sur les réseaux de téléphonie mobile.
              </p>
              <p>
                La société éditrice s&apos;engage à faire figurer le nom du membre à proximité de chaque utilisation de
                sa publication.
              </p>
              <p>
                Tout contenu mis en ligne par l&apos;Utilisateur est de sa seule responsabilité. L&apos;Utilisateur
                s&apos;engage à ne pas mettre en ligne de contenus pouvant porter atteinte aux intérêts de tierces
                personnes. Tout recours en justice engagé par un tiers lésé contre le site sera pris en charge par
                l&apos;Utilisateur.
              </p>
              <p>
                Le contenu de l&apos;Utilisateur peut être à tout moment et pour n&apos;importe quelle raison supprimé
                ou modifié par le site, sans préavis.
              </p>
            </div>
          </section>

          {/* Notification d'incident et sécurité */}
          <section id="section-13" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Notification d&apos;incident et sécurité des données</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Aucune méthode de transmission sur Internet ni de stockage électronique n&apos;est complètement sûre.
                Ludora ne peut garantir une sécurité absolue. Si une brèche de sécurité était portée à sa connaissance,
                les utilisateurs concernés seraient avertis afin qu&apos;ils puissent prendre les mesures appropriées.
                Les procédures de notification tiennent compte des obligations légales nationales et européennes.
              </p>
              <p>
                Aucune information personnelle de l&apos;utilisateur n&apos;est publiée à son insu, échangée,
                transférée, cédée ou vendue à des tiers. Seule l&apos;hypothèse du rachat de Ludora et de ses droits
                permettrait la transmission de ces informations à l&apos;éventuel acquéreur, tenu de la même obligation
                de conservation et de modification des données.
              </p>
              <p>
                Pour assurer la sécurité et la confidentialité des données personnelles, Ludora utilise des réseaux
                protégés par des dispositifs standards (pare-feu, pseudonymisation, chiffrement). Lors du traitement des
                données personnelles, Ludora prend toutes les mesures raisonnables pour les protéger contre toute perte,
                utilisation détournée, accès non autorisé, divulgation, altération ou destruction.
              </p>
            </div>
          </section>

          {/* Article 9 – Droit applicable */}
          <section id="section-14" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Article 9 – Droit applicable et juridiction compétente</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Tout litige en relation avec l&apos;utilisation du site https://ludora.fr est soumis au droit français.
                La législation française s&apos;applique au présent contrat. En cas d&apos;absence de résolution amiable
                d&apos;un litige né entre les parties, il est fait attribution exclusive de juridiction aux tribunaux
                compétents de Paris.
              </p>
              <p>
                Pour toute question relative à l&apos;application des présentes CGU, vous pouvez joindre l&apos;éditeur
                aux coordonnées inscrites à l&apos;Article 1.
              </p>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="mt-16 rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-8">
            <h2 className="mb-4 text-xl font-bold">Vous avez d&apos;autres questions ?</h2>
            <p className="mb-6">
              Si vous avez des questions spécifiques concernant nos conditions d&apos;utilisation, n&apos;hésitez pas à
              nous contacter.
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
