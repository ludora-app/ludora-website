import { TIcons } from '@/constants/ICONS';

type SocialLink = {
  id: string;
  icon: TIcons;
  label: string;
  href: string;
};

export const socialItems: SocialLink[] = [
  {
    href: 'https://www.facebook.com/ludora',
    icon: 'facebook-solid',
    id: 'facebook',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/ludora.app',
    icon: 'instagram-solid',
    id: 'instagram',
    label: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@ludora.app',
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
