import { homeSection1 } from '@/assets';
import { ComingSoonModal } from '@/components/ui/comming-soon.modal';
import { Badge, Button, Heading, Icon, Typography } from '@chillUi';
import Image from 'next/image';

export default function HomeSection1() {
  return (
    <section className="bg-gradient py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <Badge variant="light" className="self-start">
            <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-medium text-white">Nouveau</span>
            Rejoins la communauté sportive
          </Badge>

          <Heading variant="title-xl" as="h1" className="leading-16">
            Rejoins le jeu. <br />
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              Trouve ton équipe.
            </span>
          </Heading>

          <Typography variant="body-1" className="text-xl" color="gray">
            Rejoignez des milliers de sportifs passionnés et transformez votre expérience sportive. Disponible sur iOS
            et Android.
          </Typography>

          <div className="flex flex-col gap-4 sm:flex-row">
            <ComingSoonModal>
              <Button size="lg" className="flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800">
                <Icon name="app-store-solid" className="size-4" color="#fff" />
                App Store
              </Button>
            </ComingSoonModal>
            <ComingSoonModal>
              <Button size="lg" className="flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800">
                <Icon name="google-play-solid" className="size-4" color="#fff" />
                Google Play
              </Button>
            </ComingSoonModal>
          </div>
        </div>

        <div className="flex justify-end">
          <Image src={homeSection1} alt="Application Ludora" width={450} />
        </div>
      </div>
    </section>
  );
}
