import { Heading, Icon, Logo, Typography } from '@chillUi';
import Link from 'next/link';

import { COLORS } from '@/constants/COLORS';
import { ROUTES } from '@/constants/ROUTES';
import { socialItems } from '@/features/header/utils/social-items';

const links = [
  {
    href: '/',
    label: 'Accueil',
  },
  {
    href: '/a-propos',
    label: 'À propos',
  },
  {
    href: '/telecharger',
    label: "Télécharger l'application",
  },
  {
    href: '/fonctionnalites',
    label: 'Fonctionnalités',
  },
  {
    href: '/contact',
    label: 'Nous contacter',
  },
];

const legalLinks = [
  {
    href: ROUTES.TERMS_OF_SERVICE,
    label: "Conditions d'utilisation",
  },
  {
    href: ROUTES.PRIVACY_POLICY,
    label: 'Politique de confidentialité',
  },
  {
    href: ROUTES.LEGAL_NOTICE,
    label: 'Mentions légales',
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex flex-col gap-4">
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
          <Typography variant="body-2" color="gray">
            © {new Date().getFullYear()} Ludora. Tous droits réservés.
          </Typography>
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
