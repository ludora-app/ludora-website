'use client';

import {
  homeSection2Card1,
  homeSection3Carousel2,
  homeSection3Carousel3,
  homeSection3Carousel4,
  homeSection3Carousel5,
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
import Image from 'next/image';

const carouselItems = [
  {
    image: homeSection2Card1,
    title: 'Recherche de sessions',
  },
  {
    image: homeSection3Carousel2,
    title: 'Organisation de matchs',
  },
  {
    image: homeSection3Carousel3,
    title: 'Gestion des équipes',
  },
  {
    image: homeSection3Carousel4,
    title: 'Profil personnalisé',
  },
  {
    image: homeSection3Carousel5,
    title: 'Chat intégré',
  },
];

export default function HomeSection3() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-rose-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="light" size="md" className="mb-4">
            <span>Interface intuitive</span>
          </Badge>
          <Heading variant="title-2" as="h2" className="mb-4">
            Une application conçue pour vous
          </Heading>
          <Typography variant="body-1" color="gray">
            Découvrez l&apos;interface élégante et intuitive de Ludora, conçue pour vous offrir la meilleure expérience
            possible.
          </Typography>
        </div>

        <Carousel>
          <CarouselContent className="-ml-1">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
                <div key={index} className="flex-shrink-0 text-center">
                  <div className="relative mx-auto mb-4 w-max">
                    <Image src={item.image} alt={item.title} width={250} height={500} />
                  </div>
                  <Heading variant="title-5" as="h5">
                    {item.title}
                  </Heading>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
