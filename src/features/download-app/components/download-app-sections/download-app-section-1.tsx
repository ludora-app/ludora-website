import { ComingSoonModal } from '@/components/ui/comming-soon.modal';
import { Button, Heading, Icon, Typography } from '@chillUi';
export default function DownloadAppSection1() {
  return (
    <section className="bg-gradient relative py-16 md:py-24">
      <div className="container mx-auto text-center">
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

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ComingSoonModal>
              <Button size="lg" className="flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800">
                <Icon name="app-store-solid" color="#fff" />
                App Store
              </Button>
            </ComingSoonModal>
            <ComingSoonModal>
              <Button size="lg" className="flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800">
                <Icon name="google-play-solid" color="#fff" />
                Google Play
              </Button>
            </ComingSoonModal>
          </div>
        </div>
      </div>
    </section>
  );
}
