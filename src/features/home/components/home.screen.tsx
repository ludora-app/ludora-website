import NewsletterComponent from '@/components/ui/newsletter.component';

import HomeSection1 from './home-sections/home-section-1.component';
import HomeSection2 from './home-sections/home-section-2.component';
import HomeSection3 from './home-sections/home-section-3.component';
import HomeSection4 from './home-sections/home-section-4.component';
import HomeSection5 from './home-sections/home-section-5.component';
import HomeSection6 from './home-sections/home-section-6.component';

export default function HomeScreen() {
  return (
    <div className="flex flex-col">
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <NewsletterComponent />
    </div>
  );
}
