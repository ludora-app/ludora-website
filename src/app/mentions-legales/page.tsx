import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/ROUTES';

export default function MentionsLegalesPage() {
  redirect(ROUTES.TERMS_OF_SERVICE);
}
