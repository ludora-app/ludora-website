import DownloadAppBtn from '@/components/ui/download-app-btn.component';
import { Heading, Typography } from '@chillUi';
export default function DownloadAppSection1() {
  return (
    <section className="bg-gradient relative py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
          <Heading as="h1" variant="title-xl">
            Téléchargez l&apos;app
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Ludora</span>
          </Heading>

          <Typography variant="body-1" color="gray">
            Rejoignez des milliers de sportifs passionnés et transformez votre expérience sportive. Disponible sur iOS
            et Android.
          </Typography>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <DownloadAppBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
