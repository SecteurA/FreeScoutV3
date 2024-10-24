import { Check, ArrowRight } from 'lucide-react';
import { lazy } from 'react';

const FAQ = lazy(() => import('./FAQ'));

export default function PricingPage() {
  const tiers = [
    {
      name: "BASIC INSTALLATION",
      price: 100,
      features: [
        "Install FreeScout on your own server",
        "Setup 3 Mailboxes",
        "5 users",
        "5 modules configuration",
        "Design 1 e-mail signature",
        "1 hour call to help you use FreeScout",
        "One time fee"
      ]
    },
    {
      name: "PRO INSTALLATION",
      price: 150,
      popular: true,
      features: [
        "Install FreeScout on your own server",
        "Setup 5 Mailboxes",
        "10 users",
        "10 modules configuration",
        "Branding with your own logo and color",
        "Setup 10 e-mail signature",
        "1 hour call to help you use FreeScout",
        "One time fee"
      ]
    },
    {
      name: "ULTIMATE INSTALLATION",
      price: 200,
      features: [
        "Install FreeScout on your own server",
        "Connect FreeScout Mobile APP",
        "Setup 10 Mailboxes",
        "Connect via OAuth",
        "50 users",
        "20 modules configuration",
        "Branding with your own logo and color",
        "Setup 20 e-mail signature",
        "1 hour call to help you use FreeScout",
        "One time fee"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect FreeScout installation package for your business needs. 
              No hidden fees, just straightforward pricing with expert service.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  tier.popular ? 'ring-2 ring-[#235585] transform scale-105' : ''
                }`}
                itemScope itemType="https://schema.org/Product"
              >
                {tier.popular && (
                  <div className="bg-[#235585] text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900" itemProp="name">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span className="text-4xl font-bold" itemProp="price">${tier.price}</span>
                    <span className="ml-1 text-gray-600" itemProp="priceCurrency">USD</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-[#75b666] mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/install-freescout.html"
                    className="mt-8 w-full block text-center bg-[#235585] text-white py-3 px-6 rounded-md hover:bg-[#75b666] transition-colors"
                    aria-label={`Get started with ${tier.name}`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts is ready to help you set up and configure your FreeScout installation.
            Get started today and transform your customer support experience.
          </p>
          <a
            href="/install-freescout.html"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#235585] rounded-md hover:bg-[#75b666] transition-colors"
          >
            Request Installation Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}