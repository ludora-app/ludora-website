import { ComingSoonModal } from '@/components/ui/comming-soon.modal';
import { COLORS } from '@/constants/COLORS';
import { Button, Heading, Icon, Typography } from '@chillUi';

export default function FeaturesSection6() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-rose-500 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" variant="title-2" className="mb-6">
          Prêt à transformer votre expérience sportive ?
        </Heading>
        <Typography variant="body-1" color="light" className="mx-auto mb-8 max-w-2xl">
          Téléchargez l&apos;application dès maintenant et commencez à jouer avec des passionnés près de chez vous.
        </Typography>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <ComingSoonModal>
            <Button size="lg" variant="light">
              <Icon name="app-store-solid" color={COLORS.PRIMARY} />
              Télécharger sur l&apos;App Store
            </Button>
          </ComingSoonModal>
          <ComingSoonModal>
            <Button size="lg" variant="light">
              <Icon name="google-play-solid" color={COLORS.PRIMARY} />
              Télécharger sur Google Play
            </Button>
          </ComingSoonModal>
        </div>
      </div>
    </section>
  );
}
