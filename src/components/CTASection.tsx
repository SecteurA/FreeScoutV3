import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl text-gray-100 mb-8">
          Get your FreeScout help desk installed and configured by experts, starting at just $100.
        </p>
        <a
          href="/install-freescout.html"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#75b666] rounded-lg hover:bg-[#235585] transition-all duration-300 group"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
