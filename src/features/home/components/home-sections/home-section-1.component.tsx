import { Badge, Heading, Typography } from '@chillUi';
import Image from 'next/image';

import { homeSection1Img } from '@/assets';
import DownloadAppBtn from '@/components/ui/download-app-btn.component';
import { getTranslate } from '@/tolgee/server';

export default async function HomeSection1() {
  const t = await getTranslate();

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
            {t('title_bloc_1')}
          </Heading>

          <Typography variant="body-1" className="text-xl" color="gray">
            Rejoignez des milliers de sportifs passionnés et transformez votre expérience sportive. Disponible sur iOS
            et Android.
          </Typography>

          <div className="flex flex-col gap-4 sm:flex-row">
            <DownloadAppBtn />
          </div>
        </div>

        <div className="flex justify-end">
          <Image src={homeSection1Img} alt="Application Ludora" width={450} />
        </div>
      </div>
    </section>
  );
}
