'use client';

import posthog from 'posthog-js';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">Oups ! Une erreur s&apos;est produite.</h2>
      <button
        onClick={() => reset()}
        className="bg-primary hover:bg-primary/90 rounded-md px-4 py-2 text-white transition-colors"
      >
        Réessayer
      </button>
    </div>
  );
}
