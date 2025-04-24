import ContactSection3 from '@/features/contact/components/contact-sections/contact-section-3.component';
import FeaturesSection6 from '@/features/features/components/features-sections/features-section-6.component';

import DownloadAppSection1 from './download-app-sections/download-app-section-1';
import DownloadAppSection2 from './download-app-sections/download-app-section-2';
import DownloadAppSection3 from './download-app-sections/download-app-section-3';

export default function DownloadAppScreen() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <DownloadAppSection1 />

        {/* Download Steps */}
        <DownloadAppSection2 />

        {/* Compatibility */}
        <DownloadAppSection3 />
        {/* CTA Section */}
        <FeaturesSection6 />

        {/* FAQ */}
        <ContactSection3 />
      </main>
    </div>
  );
}
