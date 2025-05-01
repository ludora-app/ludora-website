import { LandingPageAndroidImg, LandingPageIosImg } from '@/assets';
import DownloadAppBtn from '@/components/ui/download-app-btn.component';
import { Badge, Heading, Image, Typography } from '@chillUi';
import { Download, Globe, Shield } from 'lucide-react';

const compatibility = [
  {
    description: 'Compatible avec iPhone, iPad et iPod touch',
    icon: <Globe className="size-5 text-orange-500" />,
    title: 'iOS 12.0 ou supérieur',
  },
  {
    description: 'Fonctionne sur la plupart des appareils Android récents',
    icon: <Globe className="size-5 text-orange-500" />,
    title: 'Android 8.0 ou supérieur',
  },
  {
    description: 'Seulement 45 MB - Installation rapide et légère',
    icon: <Download className="size-5 text-orange-500" />,
    title: "Taille de l'application",
  },
  {
    description: 'Vos données sont protégées et sécurisées',
    icon: <Shield className="size-5 text-orange-500" />,
    title: 'Sécurité garantie',
  },
];

export default function DownloadAppSection3() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-rose-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Badge variant="light" size="md" className="mb-5">
              Compatibilité
            </Badge>
            <Heading as="h2" variant="title-2" className="mb-2">
              Compatible avec tous vos <span className="text-gradient">appareils</span>
            </Heading>
            <Typography variant="body-1" color="gray" className="mb-8">
              L&apos;application Ludora est disponible sur iOS et Android, et s&apos;adapte parfaitement à tous les
              appareils mobiles. Profitez d&apos;une expérience fluide, où que vous soyez.
            </Typography>

            <ul className="mb-8 space-y-4">
              {compatibility.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <Heading as="h4" variant="title-6" className="font-medium">
                      {item.title}
                    </Heading>
                    <Typography variant="body-2" color="gray">
                      {item.description}
                    </Typography>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <DownloadAppBtn />
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-200/50 to-rose-200/50 blur-3xl"></div>
            <div className="grid grid-cols-2 gap-4">
              <Image src={LandingPageIosImg} alt="iPhone avec Ludora" className="justify-self-end" />
              <Image src={LandingPageAndroidImg} alt="Android avec Ludora" className="mt-8 justify-self-start" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
