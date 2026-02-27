import { CheckCircle } from 'lucide-react';

export default function EmailVerifiedScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center text-center">
        <CheckCircle className="mb-6 size-16 text-orange-500" aria-hidden />
        <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">Votre email a été vérifié</h1>
        <p className="text-lg text-gray-600">Bienvenue sur Ludora.</p>
      </div>
    </div>
  );
}
