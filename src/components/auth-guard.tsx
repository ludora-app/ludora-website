'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const AuthGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const env = process.env.NEXT_PUBLIC_APP_ENV;
    if (env === 'production' || env === 'dev') return;

    const expectedAuth = 'admin:admin';
    const storedAuth = localStorage.getItem('basic-auth');

    if (!storedAuth || storedAuth !== expectedAuth) {
      const input = prompt('Accès restreint - Entrez vos identifiants (format: username:password)');
      if (input !== expectedAuth) {
        router.push('/unauthorized');
      } else {
        localStorage.setItem('basic-auth', input);
      }
    }
  }, [router]);

  return null;
};
