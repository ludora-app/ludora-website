import Image from 'next/image';

export default function AboutSection7() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-rose-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
            <span className="text-sm font-medium">Témoignages</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ce que disent nos utilisateurs</h2>
          <p className="text-lg text-gray-600">
            Découvrez comment Ludora a changé la façon dont nos utilisateurs pratiquent le sport.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: 'Julien, 28 ans',
              quote:
                "Grâce à Ludora, j'ai pu continuer à jouer au foot après mon déménagement. J'ai rencontré une super équipe et on se retrouve maintenant chaque semaine !",
              sport: 'Football',
            },
            {
              name: 'Laura, 32 ans',
              quote:
                "Je cherchais des partenaires de basket depuis des mois. En une semaine avec Ludora, j'avais déjà participé à deux matchs. L'application est vraiment intuitive.",
              sport: 'Basketball',
            },
            {
              name: 'Mehdi, 25 ans',
              quote:
                "Organiser des matchs de volley était un cauchemar avant Ludora. Maintenant, je définis les paramètres et l'app s'occupe de tout. Un gain de temps incroyable !",
              sport: 'Volleyball',
            },
          ].map((testimonial, index) => (
            <div key={index} className="rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex items-center gap-4">
                <div className="size-12 overflow-hidden rounded-full bg-gradient-to-br from-orange-100 to-rose-100">
                  <Image
                    src={'/placeholder.svg?height=48&width=48'}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-orange-500">{testimonial.sport}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
