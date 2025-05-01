import HomeSection5 from '@/features/home/components/home-sections/home-section-5.component';

import AboutSection1 from './about-sections/about-section-1.component';
import AboutSection2 from './about-sections/about-section-2.component';
import AboutSection3 from './about-sections/about-section-3.component';
import AboutSection4 from './about-sections/about-section-4.component';
import AboutSection5 from './about-sections/about-section-5.component';
export default function AboutScreen() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <AboutSection1 />

      {/* Mission Section */}
      <AboutSection2 />

      {/* Story Section */}
      <AboutSection3 />
      {/* Values Section */}
      <AboutSection4 />
      {/* Team Section */}
      <AboutSection5 />
      {/* Stats Section */}
      {/* <AboutSection6 /> */}
      {/* Testimonials Section */}
      {/* <AboutSection7 /> */}
      {/* Vision Section */}

      {/* CTA Section */}
      <HomeSection5 />
    </div>
  );
}
