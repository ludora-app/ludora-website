import HomeSection5 from '@/features/home/components/home-sections/home-section-5.component';

import ContactSection1 from './contact-sections/contact-section-1.component';
import ContactSection2 from './contact-sections/contact-section-2.component';
import ContactSection3 from './contact-sections/contact-section-3.component';
import ContactSection4 from './contact-sections/contact-section-4.component';

export default function ContactScreen() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ContactSection1 />

      {/* Contact Section */}
      <ContactSection2 />
      {/* FAQ Section */}
      <ContactSection3 />
      {/* Map Section */}
      <ContactSection4 />

      {/* CTA Section */}
      <HomeSection5 />
    </div>
  );
}
