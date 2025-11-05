'use client';
import { Button, cn } from '@chillUi';
import { logo } from '@public/index';
import { useTranslate } from '@tolgee/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/constants/ROUTES';

import { menuItems } from '../utils/menu-items';
import HeaderDrawer from './header-drawer.component';

export default function Header() {
  const pathname = usePathname();
  const { t } = useTranslate();

  return (
    <header className="border-primary shadow-accent relative z-50 flex w-full items-center justify-between bg-white px-2 py-4 shadow-sm sm:px-10">
      <Link href="/">
        <Image src={logo} alt="logo Ludora" width={130} />
      </Link>
      <div className="ml-5 hidden flex-1 items-center gap-6 lg:flex">
        {menuItems.map(item => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              'hover:text-primary rounded-lg p-2 font-medium',
              item.id === 'download' && 'border-primary text-primary-foreground border-2',
              pathname === item.href && 'text-primary',
            )}
          >
            {t(item.label)}
          </Link>
        ))}
      </div>
      <Button className="hidden lg:block" redirect={ROUTES.PARTNERS}>
        {t('header_button_become_partner')}
      </Button>

      <div className="lg:hidden">
        <HeaderDrawer />
      </div>
    </header>
  );
}
