import { lazy, Suspense } from 'react';

// Eagerly import critical components
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import CTASection from './CTASection';

// Lazy load less critical components
const StatsSection = lazy(() => import('./StatsSection'));
const Testimonials = lazy(() => import('./Testimonials'));

// Loading placeholder with fixed dimensions
const LoadingPlaceholder = () => (
  <div className="min-h-[400px] w-full flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#75b666]"></div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <Pricing />
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Testimonials />
      </Suspense>

      <CTASection />
    </div>
  );
}
