import { Badge, Heading, Typography } from '@chillUi';
import { Download, Smartphone, Users } from 'lucide-react';

const steps = [
  {
    description: "Téléchargez gratuitement l'application Ludora depuis l'App Store ou Google Play Store.",
    icon: <Download className="size-6" />,
    step: 1,
    title: "Téléchargez l'application",
  },
  {
    description:
      'Inscrivez-vous et créez votre profil sportif en quelques minutes. Ajoutez vos sports favoris et votre niveau.',
    icon: <Smartphone className="size-6" />,
    step: 2,
    title: 'Créez votre profil',
  },
  {
    description: 'Trouvez des partenaires, rejoignez des matchs ou créez les vôtres. Commencez à jouer !',
    icon: <Users className="size-6" />,
    step: 3,
    title: 'Rejoignez la communauté',
  },
];

export default function DownloadAppSection2() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="gradient" size="md" className="mb-5">
            Simple et rapide
          </Badge>
          <Heading as="h2" variant="title-2" className="mb-2">
            Comment télécharger l&apos;application
          </Heading>
          <Typography variant="body-1" color="gray">
            Suivez ces étapes simples pour commencer votre expérience Ludora dès aujourd&apos;hui.
          </Typography>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-xl font-bold text-white">
                {step.step}
              </div>
              <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-rose-50 text-orange-500">
                {step.icon}
              </div>
              <Heading as="h4" variant="title-5" className="mb-3">
                {step.title}
              </Heading>
              <Typography variant="body-2" color="gray">
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
