export const ROUTES = {
  ABOUT: '/a-propos',
  CGV: '/conditions-generales-vente',
  CONTACT: '/contact',
  DOWNLOAD_APP: '/download-app',
  DOWNLOAD_LANDING: '/telecharger',
  EMAIL_VERIFIED: '/email-verified',
  FEATURES: '/fonctionnalites',
  GUIDE_SPORTIF: '/guide-sportif',
  HOME: '/',
  LEGAL_NOTICE: '/mentions-legales',
  PARTNERS: '/partenaires',
  PRIVACY_POLICY: '/politique-de-confidentialite',
  TERMS_OF_SERVICE: '/conditions-utilisation',
} as const;
export const STORE_LINKS = {
  ANDROID:
    process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
    'https://play.google.com/store/apps/details?id=com.ludora&pcampaignid=web_share',
  IOS:
    process.env.NEXT_PUBLIC_IOS_APP_URL || 'https://apps.apple.com/fr/app/ludora-sport-r%C3%A9servation/id6759791424',
} as const;
