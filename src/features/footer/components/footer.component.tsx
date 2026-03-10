import { Heading, Icon, Logo, Typography } from '@chillUi';
import Link from 'next/link';

import { COLORS } from '@/constants/COLORS';
import { ROUTES } from '@/constants/ROUTES';
import { socialItems } from '@/features/header/utils/social-items';

import FooterVersionBadge from './footer-version-badge.component';

const links = [
  {
    href: '/',
    label: 'Accueil',
  },
  {
    href: ROUTES.ABOUT,
    label: 'À propos',
  },
  {
    href: ROUTES.DOWNLOAD_APP,
    label: "Télécharger l'application",
  },
  {
    href: ROUTES.FEATURES,
    label: 'Fonctionnalités',
  },
  {
    href: ROUTES.CONTACT,
    label: 'Nous contacter',
  },
  {
    href: ROUTES.PARTNERS,
    label: 'Devenir partenaire',
  },
];

const guideLinks = [
  {
    href: '/guide-sportif/padel/trouver-partenaire-padel',
    label: 'Guides Padel',
    sublinks: [
      { href: '/guide-sportif/padel/trouver-partenaire-padel', label: 'Trouver un partenaire' },
      { href: '/guide-sportif/padel/partenaire-padel-paris', label: 'Padel à Paris' },
      { href: '/guide-sportif/padel/partenaire-padel-lyon', label: 'Padel à Lyon' },
      { href: '/guide-sportif/padel/partenaire-padel-marseille', label: 'Padel à Marseille' },
    ],
  },
  {
    href: '/guide-sportif/tennis/cherche-partenaire-tennis',
    label: 'Guides Tennis',
    sublinks: [
      { href: '/guide-sportif/tennis/cherche-partenaire-tennis', label: 'Cherche partenaire' },
      { href: '/guide-sportif/tennis/partenaire-tennis-paris', label: 'Tennis à Paris' },
      { href: '/guide-sportif/tennis/partenaire-tennis-lyon', label: 'Tennis à Lyon' },
      { href: '/guide-sportif/tennis/partenaire-tennis-bordeaux', label: 'Tennis à Bordeaux' },
    ],
  },
  {
    href: '/guide-sportif/basketball/trouver-match-basket',
    label: 'Guides Basketball',
    sublinks: [
      { href: '/guide-sportif/basketball/trouver-match-basket', label: 'Match de Basket' },
      { href: '/guide-sportif/basketball/basket-paris-hoops', label: 'Basket à Paris' },
      { href: '/guide-sportif/basketball/jouer-basket-lyon', label: 'Basket à Lyon' },
      { href: '/guide-sportif/basketball/jouer-basket-toulouse', label: 'Basket à Toulouse' },
    ],
  },
  {
    href: '/guide-sportif/football/complet-match-foot-five',
    label: 'Guides Football',
    sublinks: [
      { href: '/guide-sportif/football/complet-match-foot-five', label: 'Foot Five' },
      { href: '/guide-sportif/football/trouver-joueur-foot-paris', label: 'Foot à Paris' },
      { href: '/guide-sportif/football/foot-five-marseille', label: 'Foot à Marseille' },
      { href: '/guide-sportif/football/trouver-joueur-foot-lyon', label: 'Foot à Lyon' },
    ],
  },
];

const legalLinks = [
  {
    href: ROUTES.PRIVACY_POLICY,
    label: 'Politique de confidentialité',
  },
  {
    href: ROUTES.CGV,
    label: 'Conditions générales de vente',
  },
  {
    href: ROUTES.TERMS_OF_SERVICE,
    label: 'CGU et Mentions légales',
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex max-w-md flex-col gap-4 lg:max-w-xs">
            <Link href="/">
              <Logo size="md" />
            </Link>
            <Typography variant="body-2" color="gray">
              Connecte-toi à des passionnés de sports collectifs près de chez toi.
            </Typography>
          </div>

          <div>
            <Heading as="h3" variant="title-6" className="mb-4">
              Liens rapides
            </Heading>
            <ul className="space-y-2">
              {links.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-600 transition-colors hover:text-orange-500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading as="h3" variant="title-6" className="mb-4">
              Guides Sportifs
            </Heading>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4 lg:grid-cols-2">
              {guideLinks.map(category => (
                <div key={category.label}>
                  <Typography variant="body-2" className="mb-2 font-bold text-gray-900">
                    {category.label}
                  </Typography>
                  <ul className="space-y-1">
                    {category.sublinks.map(item => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-xs text-gray-500 transition-colors hover:text-orange-500"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Heading as="h3" variant="title-6" className="mb-4">
              Légal
            </Heading>
            <ul className="space-y-2">
              {legalLinks.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-600 transition-colors hover:text-orange-500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <div>
            <Typography variant="body-2" color="gray">
              © {new Date().getFullYear()} Ludora. Tous droits réservés.
            </Typography>
            <FooterVersionBadge />
          </div>
          <div className="flex items-center gap-4">
            {socialItems.map(item => (
              <Link key={item.id} href={item.href} aria-label={item.label}>
                <Icon name={item.icon} colorOnHover={COLORS.PRIMARY} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
