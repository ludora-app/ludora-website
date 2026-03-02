import { CheckCircle } from 'lucide-react';

import { Heading, Typography } from '@/components/chill-ui';

export default function EmailVerifiedScreen() {
  return (
    <div className="flex h-svh flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center text-center">
        <CheckCircle className="mb-6 size-16 text-orange-500" aria-hidden />
        <Heading as="h1" variant="title-3" className="mb-4 text-gray-900">
          Votre email a été vérifié
        </Heading>
        <Typography variant="body-1">Bienvenue sur Ludora.</Typography>
      </div>
    </div>
  );
}
