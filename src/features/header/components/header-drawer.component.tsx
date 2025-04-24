'use client';

import {
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
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

import { menuItems } from '../utils/menu-items';
import { socialItems } from '../utils/social-items';

export default function HeaderDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Drawer direction="right" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger>
        <Hamburger toggled={isDrawerOpen} toggle={setIsDrawerOpen} />
      </DrawerTrigger>
      <DrawerContent className="flex w-screen flex-col items-center">
        <DialogTitle className="hidden">Header Drawer</DialogTitle>
        <DrawerHeader className="relative flex w-full items-center justify-center">
          <DrawerClose className="absolute right-5 cursor-pointer">
            <Icon name="xmark-solid" />
          </DrawerClose>
          <Link href="/">
            <Logo size="md" />
          </Link>
        </DrawerHeader>
        <div className="flex flex-grow flex-col items-center justify-center gap-10 text-xl font-bold">
          {menuItems.map(item => (
            <Link key={item.id} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <DrawerFooter className="flex flex-row gap-5 rounded-t-lg bg-amber-200">
          {socialItems.map(item => (
            <Link key={item.id} href={item.href}>
              <Icon name={item.icon} />
            </Link>
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
