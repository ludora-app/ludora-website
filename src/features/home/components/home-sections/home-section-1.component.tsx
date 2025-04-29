import { homeSection1Img } from '@/assets';
import { ComingSoonModal } from '@/components/ui/comming-soon.modal';
import { Badge, Button, Heading, Icon, Typography } from '@chillUi';
import { headers } from 'next/headers';
import Image from 'next/image';

export default async function HomeSection1() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';

  let platform = 'Autre';

  if (/android/i.test(userAgent)) {
    platform = 'Android';
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    platform = 'iOS';
  }

  return (
    <section className="bg-gradient py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <Badge variant="light" className="self-start" size="md">
            <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-medium text-white">Nouveau</span>
            Rejoins la communauté sportive
          </Badge>

          <Heading variant="title-xl" as="h1" className="leading-16">
            Rejoins le jeu. <br />
            <span className="text-gradient">Trouve ton équipe.</span>
          </Heading>

          <Typography variant="body-1" className="text-xl" color="gray">
            Rejoignez des milliers de sportifs passionnés et transformez votre expérience sportive. Disponible sur iOS
            et Android.
          </Typography>

          <div className="flex flex-col gap-4 sm:flex-row">
            {(platform === 'iOS' || platform === 'Autre') && (
              <ComingSoonModal>
                <Button size="lg" className="flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800">
                  <Icon name="app-store-solid" className="size-4" color="#fff" />
                  App Store
                </Button>
              </ComingSoonModal>
            )}
            {(platform === 'Android' || platform === 'Autre') && (
              <ComingSoonModal>
                <Button size="lg" className="flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800">
                  <Icon name="google-play-solid" className="size-4" color="#fff" />
                  Google Play
                </Button>
              </ComingSoonModal>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Image src={homeSection1Img} alt="Application Ludora" width={450} />
        </div>
      </div>
    </section>
  );
}
