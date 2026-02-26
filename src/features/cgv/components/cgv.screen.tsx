import { Button } from '@chillUi';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/constants/ROUTES';

export default function CgvScreen() {
  const lastUpdated = '25/02/2026';

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8 flex text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 transition-colors hover:text-orange-500">
                  Accueil
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="size-4 text-gray-400" />
                <span className="ml-2 text-gray-900">Conditions générales de vente</span>
              </li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Conditions Générales de Vente</h1>
            <p className="text-gray-600">
              En vigueur au <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 1 – Champ d&apos;application</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Les présentes Conditions Générales de Vente (dites &quot; CGV &quot;) s&apos;appliquent, sans
                  restriction ni réserve à l&apos;ensemble des ventes conclues par le Vendeur auprès d&apos;acheteurs
                  non professionnels (&quot; Les Clients ou le Client &quot;), désirant acquérir les produits proposés à
                  la vente (&quot; Les Produits &quot;) par le Vendeur sur le site https://ludora.fr.
                </p>
                <p>Les Produits proposés à la vente sur le site sont les suivants :</p>
                <p>
                  Services de mise en relation entre sportifs et gestionnaires de terrains, frais de service sur la
                  réservation de terrains de sport privés, gestion et sécurisation des réservations en ligne, accès aux
                  outils d&apos;organisation de sessions sportives sur terrains partenaires.
                </p>
                <p>
                  Les caractéristiques principales des Produits et notamment les spécifications, illustrations et
                  indications de dimensions ou de capacité des Produits, sont présentées sur le site https://ludora.fr
                  ce dont le client est tenu de prendre connaissance avant de commander.
                </p>
                <p>Le choix et l&apos;achat d&apos;un Produit sont de la seule responsabilité du Client.</p>
                <p>
                  Les offres de Produits s&apos;entendent dans la limite des stocks disponibles, tels que précisés lors
                  de la passation de la commande.
                </p>
                <p>
                  Ces CGV sont accessibles à tout moment sur le site https://ludora.fr et prévaudront sur tout autre
                  document.
                </p>
                <p>
                  Le Client déclare avoir pris connaissance des présentes CGV et les avoir acceptées en cochant la case
                  prévue à cet effet avant la mise en œuvre de la procédure de commande en ligne du site
                  https://ludora.fr.
                </p>
                <p>
                  Sauf preuve contraire, les données enregistrées dans le système informatique du Vendeur constituent la
                  preuve de l&apos;ensemble des transactions conclues avec le Client.
                </p>
                <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-4">
                  <p className="font-semibold">Coordonnées du Vendeur :</p>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <strong>Nom :</strong> Meberbeche Hichem Amir
                    </li>
                    <li>
                      <strong>Adresse :</strong> 8 impasse André le Notre, 94000 Créteil
                    </li>
                    <li>
                      <strong>N° immatriculation :</strong> 931 604 102
                    </li>
                    <li>
                      <strong>Email :</strong> contact@ludora.fr
                    </li>
                    <li>
                      <strong>Téléphone :</strong> 06 01 77 08 14
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 2 – Prix</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Les Produits sont fournis aux tarifs en vigueur figurant sur le site https://ludora.fr, lors de
                  l&apos;enregistrement de la commande par le Vendeur.
                </p>
                <p>Les prix sont exprimés en Euros, HT et TTC.</p>
                <p>
                  Les tarifs tiennent compte d&apos;éventuelles réductions qui seraient consenties par le Vendeur sur le
                  site https://ludora.fr.
                </p>
                <p>
                  Ces tarifs sont fermes et non révisables pendant leur période de validité mais le Vendeur se réserve
                  le droit, hors période de validité, d&apos;en modifier les prix à tout moment.
                </p>
                <p>
                  Les prix ne comprennent pas les frais de traitement, d&apos;expédition, de transport et de livraison,
                  qui sont facturés en supplément, dans les conditions indiquées sur le site et calculés préalablement à
                  la passation de la commande.
                </p>
                <p>Le paiement demandé au Client correspond au montant total de l&apos;achat, y compris ces frais.</p>
                <p>
                  Une facture est établie par le Vendeur et remise au Client lors de la livraison des Produits
                  commandés.
                </p>
                <p>TVA non applicable, article 293 B du CGI.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 3 – Commandes</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Il appartient au Client de sélectionner sur le site https://ludora.fr les Produits qu&apos;il désire
                  commander, selon les modalités suivantes :
                </p>
                <p>
                  L&apos;Utilisateur sélectionne une session de sport ou un terrain sur l&apos;Application. Il accède à
                  un récapitulatif présentant le détail de la réservation et le prix total, qu&apos;il peut modifier ou
                  abandonner avant toute validation. Après avoir accepté les présentes CGV, l&apos;Utilisateur confirme
                  sa réservation, ce qui rend la commande définitive et exige paiement. Le paiement est effectué de
                  manière sécurisée via l&apos;interface intégrée. Une fois le paiement validé, une confirmation est
                  immédiatement affichée dans l&apos;Application et envoyée par e-mail, rendant le service accessible
                  dans l&apos;espace client.
                </p>
                <p>
                  Les offres de Produits sont valables tant qu&apos;elles sont visibles sur le site, dans la limite des
                  stocks disponibles.
                </p>
                <p>
                  La vente ne sera considérée comme valide qu&apos;après paiement intégral du prix. Il appartient au
                  Client de vérifier l&apos;exactitude de la commande et de signaler immédiatement toute erreur.
                </p>
                <p>
                  Toute commande passée sur le site https://ludora.fr constitue la formation d&apos;un contrat conclu à
                  distance entre le Client et le Vendeur.
                </p>
                <p>
                  Le Vendeur se réserve le droit d&apos;annuler ou de refuser toute commande d&apos;un Client avec
                  lequel il existerait un litige relatif au paiement d&apos;une commande antérieure.
                </p>
                <p>Le Client pourra suivre l&apos;évolution de sa commande sur le site.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 3 Bis – Espace client / Compte</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Afin de passer commande, le Client est invité à créer un compte (espace personnel). Pour ce faire, il
                  doit s&apos;inscrire en remplissant le formulaire qui lui sera proposé au moment de sa commande et
                  s&apos;engage à fournir des informations sincères et exactes concernant son état civil et ses
                  coordonnées, notamment son adresse email.
                </p>
                <p>
                  Le Client est responsable de la mise à jour des informations fournies. Il lui est précisé qu&apos;il
                  peut les modifier en se connectant à son compte.
                </p>
                <p>
                  Pour accéder à son espace personnel et aux historiques de commande, le Client devra s&apos;identifier
                  à l&apos;aide de son nom d&apos;utilisateur et de son mot de passe qui lui seront communiqués après
                  son inscription et qui sont strictement personnels. A ce titre, le Client s&apos;en interdit toute
                  divulgation. Dans le cas contraire, il restera seul responsable de l&apos;usage qui en sera fait.
                </p>
                <p>
                  Le Client pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace
                  personnel ou en envoyant un email à : contact@ludora.fr. Celle-ci sera effective dans un délai
                  raisonnable.
                </p>
                <p>
                  En cas de non respect des conditions générales de vente et/ou d&apos;utilisation, le site
                  https://ludora.fr aura la possibilité de suspendre voire de fermer le compte d&apos;un client après
                  mise en demeure adressée par voie électronique et restée sans effet.
                </p>
                <p>
                  Toute suppression de compte, quel qu&apos;en soit le motif, engendre la suppression pure et simple de
                  toutes informations personnelles du Client.
                </p>
                <p>
                  Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou
                  serveur et sous réserve de toute interruption ou modification en cas de maintenance, n&apos;engage pas
                  la responsabilité du Vendeur.
                </p>
                <p>La création du compte entraîne l&apos;acceptation des présentes conditions générales de vente.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 4 – Conditions de paiement</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Le prix est payé par voie de paiement sécurisé, selon les modalités suivantes : paiement par carte
                  bancaire.
                </p>
                <p>Le prix est payable comptant par le Client, en totalité au jour de la passation de la commande.</p>
                <p>
                  Les données de paiement sont échangées en mode crypté grâce au protocole défini par le prestataire de
                  paiement agréé intervenant pour les transactions bancaires réalisées sur le site https://ludora.fr.
                </p>
                <p>
                  Les paiements effectués par le Client ne seront considérés comme définitifs qu&apos;après encaissement
                  effectif par le Vendeur des sommes dues.
                </p>
                <p>
                  Le Vendeur ne sera pas tenu de procéder à la délivrance des Produits commandés par le Client si
                  celui-ci ne lui en paye pas le prix en totalité dans les conditions ci-dessus indiquées.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 5 – Livraisons</h2>
              <div className="prose prose-lg max-w-none">
                <p>Les Produits commandés par le Client seront livrés en France métropolitaine.</p>
                <p>
                  Les livraisons interviennent dans un délai immédiat à l&apos;adresse indiquée par le Client lors de sa
                  commande sur le site.
                </p>
                <p>
                  La livraison est constituée par le transfert au Client de la possession physique ou du contrôle du
                  Produit. Sauf cas particulier ou indisponibilité d&apos;un ou plusieurs Produits, les Produits
                  commandés seront livrés en une seule fois.
                </p>
                <p>
                  Le Vendeur s&apos;engage à faire ses meilleurs efforts pour livrer les produits commandés par le
                  Client dans les délais ci-dessus précisés.
                </p>
                <p>
                  Si les Produits commandés n&apos;ont pas été livrés dans un délai de 24 heures après la date
                  indicative de livraison, pour toute autre cause que la force majeure ou le fait du Client, la vente
                  pourra être résolue à la demande écrite du Client dans les conditions prévues aux articles L 216-2, L
                  216-3 et L 241-4 du Code de la consommation. Les sommes versées par le Client lui seront alors
                  restituées au plus tard dans les quatorze jours qui suivent la date de dénonciation du contrat, à
                  l&apos;exclusion de toute indemnisation ou retenue.
                </p>
                <p>
                  Le Client est tenu de vérifier l&apos;état des produits livrés. Il dispose d&apos;un délai de 48
                  heures à compter de la livraison pour formuler des réclamations par e-mail à l&apos;adresse :
                  contact@ludora.fr ou via le formulaire de contact intégré à l&apos;application, accompagnées de tous
                  les justificatifs y afférents (photos notamment). Passé ce délai et à défaut d&apos;avoir respecté ces
                  formalités, les Produits seront réputés conformes et exempts de tout vice apparent et aucune
                  réclamation ne pourra être valablement acceptée par le Vendeur.
                </p>
                <p>
                  Le Vendeur remboursera ou remplacera dans les plus brefs délais et à ses frais, les Produits livrés
                  dont les défauts de conformité ou les vices apparents ou cachés auront été dûment prouvés par le
                  Client, dans les conditions prévues aux articles L 217-4 et suivants du Code de la consommation et
                  celles prévues aux présentes CGV.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 6 – Transfert de propriété</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Le transfert de propriété des Produits du Vendeur au Client ne sera réalisé qu&apos;après complet
                  paiement du prix par ce dernier, et ce quelle que soit la date de livraison desdits Produits.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 7 – Droit de rétractation</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Compte tenu de la nature des Produits vendus, les commandes passées par le Client ne bénéficient pas
                  du droit de rétractation.
                </p>
                <p>
                  Le contrat est donc conclu de façon définitive dès la passation de la commande par le Client selon les
                  modalités précisées aux présentes CGV.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 8 – Responsabilité du vendeur / Garanties</h2>
              <div className="prose prose-lg max-w-none">
                <p>Les Produits fournis par le Vendeur bénéficient :</p>
                <ul>
                  <li>
                    De la garantie légale de conformité, pour les Produits défectueux, abîmés ou endommagés ou ne
                    correspondant pas à la commande.
                  </li>
                  <li>
                    De la garantie légale contre les vices cachés provenant d&apos;un défaut de matière, de conception
                    ou de fabrication affectant les produits livrés et les rendant impropres à l&apos;utilisation.
                  </li>
                </ul>
                <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-4">
                  <p className="font-semibold">Dispositions relatives aux garanties légales</p>
                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-sm font-semibold">Article L217-4 du Code de la consommation</p>
                      <p className="text-sm">
                        &laquo; Le vendeur est tenu de livrer un bien conforme au contrat et répond des défauts de
                        conformité existant lors de la délivrance. Il répond également des défauts de conformité
                        résultant de l&apos;emballage, des instructions de montage ou de l&apos;installation lorsque
                        celle-ci a été mise à sa charge par le contrat ou a été réalisée sous sa responsabilité. &raquo;
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Article L217-5 du Code de la consommation</p>
                      <p className="text-sm">
                        &laquo; Le bien est conforme au contrat : 1&deg; S&apos;il est propre à l&apos;usage
                        habituellement attendu d&apos;un bien semblable et, le cas échéant : s&apos;il correspond à la
                        description donnée par le vendeur et possède les qualités que celui-ci a présentées à
                        l&apos;acheteur sous forme d&apos;échantillon ou de modèle ; s&apos;il présente les qualités
                        qu&apos;un acheteur peut légitimement attendre eu égard aux déclarations publiques faites par le
                        vendeur, par le producteur ou par son représentant, notamment dans la publicité ou
                        l&apos;étiquetage ; 2&deg; Ou s&apos;il présente les caractéristiques définies d&apos;un commun
                        accord par les parties ou est propre à tout usage spécial recherché par l&apos;acheteur, porté à
                        la connaissance du vendeur et que ce dernier a accepté. &raquo;
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Article L217-12 du Code de la consommation</p>
                      <p className="text-sm">
                        &laquo; L&apos;action résultant du défaut de conformité se prescrit par deux ans à compter de la
                        délivrance du bien. &raquo;
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Article 1641 du Code civil</p>
                      <p className="text-sm">
                        &laquo; Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la
                        rendent impropre à l&apos;usage auquel on la destine, ou qui diminuent tellement cet usage, que
                        l&apos;acheteur ne l&apos;aurait pas acquise, ou n&apos;en aurait donné qu&apos;un moindre prix,
                        s&apos;il les avait connus. &raquo;
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Article 1648 alinéa 1er du Code civil</p>
                      <p className="text-sm">
                        &laquo; L&apos;action résultant des vices rédhibitoires doit être intentée par l&apos;acquéreur
                        dans un délai de deux ans à compter de la découverte du vice. &raquo;
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Article L217-16 du Code de la consommation</p>
                      <p className="text-sm">
                        &laquo; Lorsque l&apos;acheteur demande au vendeur, pendant le cours de la garantie commerciale
                        qui lui a été consentie lors de l&apos;acquisition ou de la réparation d&apos;un bien meuble,
                        une remise en état couverte par la garantie, toute période d&apos;immobilisation d&apos;au moins
                        sept jours vient s&apos;ajouter à la durée de la garantie qui restait à courir. Cette période
                        court à compter de la demande d&apos;intervention de l&apos;acheteur ou de la mise à disposition
                        pour réparation du bien en cause, si cette mise à disposition est postérieure à la demande
                        d&apos;intervention. &raquo;
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  Afin de faire valoir ses droits, le Client devra informer le Vendeur, par écrit (mail ou courrier), de
                  la non-conformité des Produits ou de l&apos;existence des vices cachés à compter de leur découverte.
                </p>
                <p>
                  Le Vendeur remboursera, remplacera ou fera réparer les Produits ou pièces sous garantie jugés non
                  conformes ou défectueux.
                </p>
                <p>
                  Les remboursements, remplacements ou réparations des Produits jugés non conformes ou défectueux seront
                  effectués dans les meilleurs délais et au plus tard dans les 14 jours suivant la constatation par le
                  Vendeur du défaut de conformité ou du vice caché.
                </p>
                <p>La responsabilité du Vendeur ne saurait être engagée dans les cas suivants :</p>
                <ul>
                  <li>
                    Non respect de la législation du pays dans lequel les produits sont livrés, qu&apos;il appartient au
                    Client de vérifier.
                  </li>
                  <li>
                    En cas de mauvaise utilisation, d&apos;utilisation à des fins professionnelles, négligence ou défaut
                    d&apos;entretien de la part du Client, comme en cas d&apos;usure normale du Produit, d&apos;accident
                    ou de force majeure.
                  </li>
                </ul>
                <p>
                  Les photographies et graphismes présentés sur le site ne sont pas contractuels et ne sauraient engager
                  la responsabilité du Vendeur.
                </p>
                <p>
                  La garantie du Vendeur est, en tout état de cause, limitée au remplacement ou au remboursement des
                  Produits non conformes ou affectés d&apos;un vice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 9 – Données personnelles</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Le Client est informé que la collecte de ses données à caractère personnel est nécessaire à la vente
                  des Produits par le Vendeur ainsi qu&apos;à leur transmission à des tiers à des fins de livraison des
                  Produits. Ces données à caractère personnel sont récoltées uniquement pour l&apos;exécution du contrat
                  de vente.
                </p>
                <p className="font-semibold">9.1 Collecte des données à caractère personnel</p>
                <p>
                  Les données à caractère personnel qui sont collectées sur le site https://ludora.fr sont les suivantes
                  :
                </p>
                <p className="text-sm font-semibold">Ouverture de compte</p>
                <p>
                  Lors de la création du compte Client / utilisateur : Nom, prénom, adresse e-mail (via Google Auth),
                  photographie de profil, coordonnées de géolocalisation (uniquement pour la recherche de terrains à
                  proximité), identifiant unique de l&apos;appareil (Device ID pour les notifications Firebase),
                  historique des réservations et des sessions de sport, messages échangés via la messagerie interne,
                  données de paiement (traitées de manière sécurisée par le prestataire tiers).
                </p>
                <p className="text-sm font-semibold">Paiement</p>
                <p>
                  Dans le cadre du paiement des Produits proposés sur le site https://ludora.fr, celui-ci enregistre des
                  données financières relatives au compte bancaire ou à la carte de crédit du Client / utilisateur.
                </p>
                <p className="font-semibold">9.2 Destinataires des données à caractère personnel</p>
                <p>
                  Les données à caractère personnel sont utilisées par le Vendeur et ses co-contractants pour
                  l&apos;exécution du contrat et pour assurer l&apos;efficacité de la prestation de vente et de
                  délivrance des Produits.
                </p>
                <p>La ou les catégorie(s) de co-contractant(s) :</p>
                <ul>
                  <li>Prestataires établissements de paiement.</li>
                  <li>Prestataires d&apos;hébergement et de stockage (OVH et Cloudflare R2).</li>
                  <li>Prestataire de services de notifications push (Google Firebase).</li>
                  <li>Prestataire d&apos;authentification sécurisée (Google Auth).</li>
                  <li>
                    PostHog : Outil d&apos;analyse de l&apos;expérience utilisateur nous permettant de comprendre
                    l&apos;utilisation de l&apos;application (clics, parcours) afin d&apos;en améliorer
                    l&apos;ergonomie.
                  </li>
                </ul>
                <p className="font-semibold">9.3 Responsable de traitement</p>
                <p>
                  Le responsable de traitement des données est le Vendeur, au sens de la loi Informatique et libertés et
                  à compter du 25 mai 2018 du Règlement 2016/679 sur la protection des données à caractère personnel.
                </p>
                <p className="font-semibold">9.4 Limitation du traitement</p>
                <p>
                  Sauf si le Client exprime son accord exprès, ses données à caractère personnelles ne sont pas
                  utilisées à des fins publicitaires ou marketing.
                </p>
                <p className="font-semibold">9.5 Durée de conservation des données</p>
                <p>
                  Le Vendeur conservera les données ainsi recueillies pendant un délai de 5 ans, couvrant le temps de la
                  prescription de la responsabilité civile contractuelle applicable.
                </p>
                <p className="font-semibold">9.6 Sécurité et confidentialité</p>
                <p>
                  Le Vendeur met en œuvre des mesures organisationnelles, techniques, logicielles et physiques en
                  matière de sécurité du numérique pour protéger les données personnelles contre les altérations,
                  destructions et accès non autorisés. Toutefois il est à signaler qu&apos;Internet n&apos;est pas un
                  environnement complètement sécurisé et le Vendeur ne peut garantir la sécurité de la transmission ou
                  du stockage des informations sur Internet.
                </p>
                <p className="font-semibold">9.7 Mise en œuvre des droits des Clients et utilisateurs</p>
                <p>
                  En application de la réglementation applicable aux données à caractère personnel, les Clients et
                  utilisateurs du site https://ludora.fr disposent des droits suivants :
                </p>
                <ul>
                  <li>
                    Ils peuvent mettre à jour ou supprimer les données qui les concernent depuis la fonctionnalité de
                    suppression de compte dans les réglages du profil utilisateur, ou par e-mail à contact@ludora.fr.
                    L&apos;Editeur s&apos;engage à traiter la demande dans un délai maximal de 30 jours.
                  </li>
                  <li>
                    Ils peuvent supprimer leur compte en écrivant à l&apos;adresse électronique indiquée à
                    l&apos;article 9.3.
                  </li>
                  <li>
                    Ils peuvent exercer leur droit d&apos;accès pour connaître les données personnelles les concernant.
                  </li>
                  <li>Si les données sont inexactes, ils peuvent demander la mise à jour des informations.</li>
                  <li>
                    Ils peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois
                    applicables.
                  </li>
                  <li>
                    Ils peuvent solliciter la portabilité des données détenues par le Vendeur vers un autre prestataire.
                  </li>
                  <li>Ils peuvent s&apos;opposer au traitement de leurs données par le Vendeur.</li>
                </ul>
                <p>
                  Ces droits peuvent être exercés en adressant une demande par courrier ou par e-mail au Responsable de
                  traitement. Le responsable de traitement doit apporter une réponse dans un délai maximum d&apos;un
                  mois.
                </p>
                <p>
                  En cas de refus, le Client est informé qu&apos;il peut introduire une réclamation auprès de la CNIL (3
                  place de Fontenoy, 75007 PARIS) ou saisir une autorité judiciaire.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 10 – Propriété intellectuelle</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Le contenu du site https://ludora.fr est la propriété du Vendeur et de ses partenaires et est protégé
                  par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction totale ou partielle de ce contenu est strictement interdite et est susceptible de
                  constituer un délit de contrefaçon.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 11 – Droit applicable / Langue</h2>
              <div className="prose prose-lg max-w-none">
                <p>Les présentes CGV et les opérations qui en découlent sont régies et soumises au droit français.</p>
                <p>
                  Les présentes CGV sont rédigées en langue française. Dans le cas où elles seraient traduites en une ou
                  plusieurs langues étrangères, seul le texte français ferait foi en cas de litige.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Article 12 – Litiges</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Pour toute réclamation merci de contacter le service clientèle à l&apos;adresse postale ou mail du
                  Vendeur indiquée à l&apos;Article 1 des présentes CGV.
                </p>
                <p>
                  Le Client est informé qu&apos;il peut en tout état de cause recourir à une médiation conventionnelle,
                  auprès des instances de médiation sectorielles existantes ou à tout mode alternatif de règlement des
                  différends (conciliation, par exemple) en cas de contestation.
                </p>
                <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-4">
                  <p className="font-semibold">Médiateur désigné :</p>
                  <p>
                    <strong>CM2C :</strong> 49 rue de Ponthieu, 75008 Paris
                  </p>
                  <a
                    href="https://www.cm2c.net/declarer-un-litige.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    www.cm2c.net
                  </a>
                  <p>Email : litiges@cm2c.net</p>
                </div>
                <p>
                  Le Client est également informé qu&apos;il peut recourir à la plateforme de Règlement en Ligne des
                  Litiges (RLL) :
                </p>
                <a
                  href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Plateforme européenne de RLL
                </a>
                <p className="mt-4">
                  Tous les litiges auxquels les opérations d&apos;achat et de vente conclues en application des
                  présentes CGV et qui n&apos;auraient pas fait l&apos;objet d&apos;un règlement amiable entre le
                  vendeur ou par médiation, seront soumis aux tribunaux compétents dans les conditions de droit commun.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16 rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 p-8">
            <h2 className="mb-4 text-xl font-bold">Vous avez d&apos;autres questions ?</h2>
            <p className="mb-6">Pour toute question relative aux CGV, n&apos;hésitez pas à nous contacter.</p>
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
