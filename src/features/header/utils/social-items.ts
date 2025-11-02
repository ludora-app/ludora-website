import { TIcons } from '@/constants/ICONS';

type SocialLink = {
  id: string;
  icon: TIcons;
  label: string;
  href: string;
};

export const socialItems: SocialLink[] = [
  {
    href: 'https://www.instagram.com/ludora.fr',
    icon: 'instagram-solid',
    id: 'instagram',
    label: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@ludora.fr',
    icon: 'tiktok-solid',
    id: 'tiktok',
    label: 'TikTok',
  },
  {
    href: 'mailto:contact@ludora.fr',
    icon: 'envelope-solid',
    id: 'email',
    label: 'Email',
  },
];
