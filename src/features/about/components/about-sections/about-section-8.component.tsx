import { Button } from '@chillUi';
import Image from 'next/image';

export default function AboutSection8() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r from-orange-50 to-rose-50 px-3 py-1.5">
              <span className="text-sm font-medium">Notre vision</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Vers un monde où le sport est{' '}
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                accessible à tous
              </span>
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Notre vision est de créer un monde où chacun peut pratiquer le sport qu&apos;il aime, quand il le
              souhaite, avec des partenaires de son niveau. Nous voulons que la technologie soit un facilitateur de
              rencontres et d&apos;activités physiques, pas un substitut.
            </p>
            <p className="mb-8 text-lg text-gray-600">
              Dans les années à venir, nous prévoyons d&apos;étendre Ludora à l&apos;échelle européenne, d&apos;ajouter
              de nouveaux sports et de développer des fonctionnalités qui rendront la pratique sportive encore plus
              accessible et agréable pour tous.
            </p>
            <Button
              size="lg"
              className="border-0 bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:from-orange-600 hover:to-rose-600"
            >
              Rejoindre l&apos;aventure
            </Button>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-200/50 to-rose-200/50 blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Vision Ludora"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
