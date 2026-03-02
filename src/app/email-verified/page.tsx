import type { Metadata } from 'next';

import EmailVerifiedScreen from '@/features/email-verified';

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
};

export default EmailVerifiedScreen;
