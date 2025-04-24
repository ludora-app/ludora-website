'use client';
import { COLORS } from '@/constants/COLORS';
import { cn, Icon } from '@chillUi';
import { logo } from '@public/index';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menuItems } from '../utils/menu-items';
import { socialItems } from '../utils/social-items';
import HeaderDrawer from './header-drawer.component';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-primary shadow-accent relative z-50 flex w-full items-center bg-white px-2 py-4 shadow-sm sm:px-10">
      <Image src={logo} alt="logo Ludora" width={130} />
      <div className="ml-5 flex flex-1 items-center gap-6">
        {menuItems.map(item => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              'hover:text-primary hidden rounded-lg p-2 font-medium lg:block',
              item.id === 'download' && 'border-primary text-primary-foreground border-2',
              pathname === item.href && 'text-primary',
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="hidden items-center gap-5 lg:flex">
        {socialItems.map(item => (
          <Link key={item.id} href={item.href}>
            <Icon name={item.icon} colorOnHover={COLORS.PRIMARY} />
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <HeaderDrawer />
      </div>
    </header>
  );
}
