'use client';

import HomeSection6 from '@/features/home/components/home-sections/home-section-6.component';

import FeaturesSection1 from './features-sections/features-section-1.component';
import FeaturesSection2 from './features-sections/features-section-2.component';
import FeaturesSection3 from './features-sections/features-section-3.component';
import FeaturesSection4 from './features-sections/features-section-4.component';
import FeaturesSection5 from './features-sections/features-section-5.component';
import FeaturesSection6 from './features-sections/features-section-6.component';
export default function FeaturesScreen() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <FeaturesSection1 />

      {/* Main Features Overview */}
      <FeaturesSection2 />

      {/* Detailed Features Tabs */}
      <FeaturesSection3 />
      {/* App Showcase */}
      <FeaturesSection4 />

      {/* How It Works */}
      <FeaturesSection5 />

      {/* CTA Section */}
      <FeaturesSection6 />

      {/* FAQ */}
      <HomeSection6 />
    </div>
  );
}
