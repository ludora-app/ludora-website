'use client';

import {
  Button,
  cn,
  DialogTitle,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  Icon,
  Logo,
} from '@chillUi';
import { useTranslate } from '@tolgee/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menuItems } from '../utils/menu-items';
import { socialItems } from '../utils/social-items';

export default function HeaderDrawer() {
  const pathname = usePathname();
  const { t } = useTranslate();

  return (
    <Drawer direction="right">
      <DrawerTrigger aria-label="Ouvrir le menu" className="cursor-pointer">
        <Icon name="bars-solid" size="xl" />
      </DrawerTrigger>
      <DrawerContent className="flex w-screen flex-col items-center">
        <DialogTitle className="hidden">Header Drawer</DialogTitle>
        <DrawerHeader className="relative flex w-full items-center justify-center">
          <DrawerClose className="absolute right-5 cursor-pointer">
            <Icon name="xmark-solid" />
          </DrawerClose>
          <DrawerClose asChild>
            <Link href="/">
              <Logo size="md" />
            </Link>
          </DrawerClose>
        </DrawerHeader>
        <div className="flex grow flex-col items-center justify-center gap-10 text-xl font-bold">
          {menuItems.map(item => (
            <DrawerClose key={item.id} asChild>
              <Link href={item.href} className={cn(pathname === item.href && 'text-primary')}>
                {t(item.label)}
              </Link>
            </DrawerClose>
          ))}
          <DrawerClose asChild>
            <Button>{t('header_button_become_partner')}</Button>
          </DrawerClose>
        </div>
        <DrawerFooter className="bg-primary flex flex-row gap-5 rounded-t-lg">
          {socialItems.map(item => (
            <Link key={item.id} href={item.href} aria-label={item.label}>
              <Icon name={item.icon} color="#FFF" />
            </Link>
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
