'use client';

import {
  HomeScreenAppImg,
  MatchScreenAppImg,
  MessageScreenAppImg,
  ProfileScreenAppImg,
  SessionCreateScreenImg,
  SessionScreenAppImg,
} from '@/assets';
import {
  Badge,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Heading,
  Typography,
} from '@chillUi';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
const carouselItems = [
  {
    image: HomeScreenAppImg,
    title: 'Recherche de sessions',
  },
  {
    image: SessionCreateScreenImg,
    title: 'Filtres de recherche',
  },
  {
    image: SessionScreenAppImg,
    title: 'Détail de la session',
  },
  {
    image: MatchScreenAppImg,
    title: 'Rejoindre une session',
  },
  {
    image: ProfileScreenAppImg,
    title: 'Profil personnalisé',
  },
  {
    image: MessageScreenAppImg,
    title: 'Chat intégré',
  },
];

export default function HomeSection3() {
  return (
    <section className="bg-gradient py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="light" size="md" className="mb-4">
            <span>Interface intuitive</span>
          </Badge>
          <Heading variant="title-2" as="h2" className="mb-4">
            Une application <span className="text-gradient">conçue pour vous</span>
          </Heading>
          <Typography variant="body-1" color="gray">
            Découvrez l&apos;interface élégante et intuitive de Ludora, conçue pour vous offrir la meilleure expérience
            possible.
          </Typography>
        </div>

        {/* desactivate scroll on web */}
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
                <div key={index} className="flex-shrink-0 text-center">
                  <div className="relative mx-auto mb-4 w-max">
                    <Image src={item.image} alt={item.title} width={250} height={500} />
                  </div>
                  <Heading variant="title-5" as="h3">
                    {item.title}
                  </Heading>
                  <div className="flex items-center justify-center">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500">
                      <Typography variant="body-1" color="light" className="font-bold">
                        {index + 1}
                      </Typography>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden lg:flex" />
          <CarouselPrevious className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
