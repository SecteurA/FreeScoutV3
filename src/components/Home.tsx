
import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('./Hero'));
const Features = lazy(() => import('./Features'));
const Pricing = lazy(() => import('./Pricing'));
const Testimonials = lazy(() => import('./Testimonials'));
const FAQ = lazy(() => import('./FAQ'));

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Features />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Pricing />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <FAQ />
      </Suspense>
    </div>
  );
}
