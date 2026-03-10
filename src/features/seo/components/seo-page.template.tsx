'use client';

import Link from 'next/link';

import { ROUTES } from '@/constants/ROUTES';
import { SEOArticle } from '@/constants/seo-articles.constants';

type SEOPageTemplateProps = {
  article: SEOArticle;
};

export const SEOPageTemplate = ({ article }: SEOPageTemplateProps) => {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      {/* Fil d'Ariane pour le SEO */}
      <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex list-none p-0">
          <li className="flex items-center">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <span className="capitalize">{article.sport}</span>
            <span className="mx-2">/</span>
          </li>
          <li className="font-semibold text-gray-800">{article.title}</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="mb-12">
        <h1 className="mb-6 text-3xl leading-tight font-bold text-gray-900 md:text-5xl">{article.h1}</h1>
        <div className="bg-primary h-1 w-20 rounded"></div>
      </header>

      {/* Main Content */}
      <div className="prose prose-lg mb-16 max-w-none leading-relaxed text-gray-700">
        <div className="whitespace-pre-line">
          {article.content.split(/(\*\*.*?\*\*)/g).map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={i} className="font-bold text-gray-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </div>
      </div>

      {/* CTA Section */}
      <section className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm transition-all hover:shadow-md md:p-12">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Envie de jouer au {article.sport} dès maintenant ?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Rejoignez Ludora, l&apos;appli numéro 1 pour trouver des partenaires de sport près de chez vous. Simple,
          rapide et gratuit.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={ROUTES.DOWNLOAD_APP}
            className="bg-primary shadow-primary/20 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Télécharger l&apos;App
          </Link>
          <Link
            href={ROUTES.CONTACT}
            className="rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition-colors hover:bg-gray-50"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      {/* Internal Linking (SEO Hack) */}
      <footer className="mt-20 border-t border-gray-100 pt-10">
        <h3 className="mb-6 text-xl font-bold">D&apos;autres guides pour bien jouer :</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link href="/guide-sportif/padel/trouver-partenaire-padel" className="text-primary hover:underline">
            Comment trouver un partenaire de Padel ?
          </Link>
          <Link href="/guide-sportif/tennis/cherche-partenaire-tennis" className="text-primary hover:underline">
            Trouver un adversaire de Tennis de son niveau
          </Link>
          <Link href="/guide-sportif/basketball/trouver-match-basket" className="text-primary hover:underline">
            Où trouver un match de Basket Pick-up ?
          </Link>
          <Link href="/guide-sportif/football/complet-match-foot-five" className="text-primary hover:underline">
            Ne plus jamais annuler un foot five en manque de joueurs
          </Link>
        </div>
      </footer>
    </article>
  );
};
