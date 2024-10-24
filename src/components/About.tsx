import { Users, Award, Clock, Shield } from 'lucide-react';
import { lazy } from 'react';

const FAQ = lazy(() => import('./FAQ'));

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-primary-50 to-white pt-24 pb-16">
        {/* Official Partner Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 md:p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                <a 
                  href="https://www.seven.io/wp-content/uploads/integrationen_freescout_logo.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <img 
                    src="https://www.seven.io/wp-content/uploads/integrationen_freescout_logo.png" 
                    alt="FreeScout Logo" 
                    className="h-[100px] w-[120px] md:h-[130px] md:w-[150px] object-contain"
                  />
                </a>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                  Official FreeScout Installation Partner
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  We are proud to be an official installation partner of FreeScout, providing expert setup and configuration services.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-[#75b666] mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center">
              <Award className="h-6 w-6 md:h-8 md:w-8 text-[#75b666] mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">5+</div>
              <div className="text-sm md:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center">
              <Clock className="h-6 w-6 md:h-8 md:w-8 text-[#75b666] mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-600">Support Available</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-[#75b666] mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-600">Secure Setup</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-16">
            <div className="prose max-w-none">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-gray-600 mb-6">
                As an official FreeScout installation partner, we bring unparalleled expertise in providing professional installation and configuration services. Our team works directly with FreeScout to ensure that your help desk is set up according to the latest best practices and security standards.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Our Expertise</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Professional FreeScout installation and configuration</li>
                <li>Server security hardening and optimization</li>
                <li>Custom domain setup and SSL configuration</li>
                <li>Email system integration and configuration</li>
                <li>User management and access control setup</li>
                <li>Performance optimization and monitoring</li>
              </ul>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-6">
                We are committed to providing exceptional service and support to our clients. Our team works diligently to ensure your FreeScout installation is completed quickly, securely, and efficiently. We provide ongoing support and guidance to help you make the most of your help desk system.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Every installation we perform undergoes rigorous testing to ensure everything works perfectly. We follow industry best practices for security and performance optimization, giving you peace of mind that your help desk is in good hands.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <a
              href="/install-freescout.html"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-[#235585] rounded-md hover:bg-[#75b666] transition-colors"
            >
              Request Installation Now
            </a>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}