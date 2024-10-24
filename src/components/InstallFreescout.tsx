import { lazy, useState } from 'react';
import { Package, Mail, Phone, User, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';
import PayPalButton from './PayPalButton';

const FAQ = lazy(() => import('./FAQ'));

interface Package {
  value: string;
  label: string;
  price: number;
  features: string[];
}

interface FormData {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  package: string;
}

export default function InstallFreescout() {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    package: ''
  });

  const [showPayPal, setShowPayPal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const packages: Package[] = [
    {
      value: "Basic installation",
      label: "Basic installation",
      price: 100,
      features: ["3 Mailboxes", "5 Users", "5 Modules", "1 Email Signature"]
    },
    {
      value: "Pro installation",
      label: "Pro installation",
      price: 150,
      features: ["5 Mailboxes", "10 Users", "10 Modules", "Custom Branding"]
    },
    {
      value: "Ultimate installation",
      label: "Ultimate installation",
      price: 200,
      features: ["10 Mailboxes", "50 Users", "20 Modules", "Mobile App Setup"]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (!formData.firstname || !formData.lastname || !formData.mobile || !formData.email || !formData.package) {
        throw new Error('Please fill in all required fields');
      }

      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);

      await fetch('https://freescout-installation.com/crm/modules/Webforms/capture.php', {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors'
      });

      const selectedPackage = packages.find(pkg => pkg.value === formData.package);
      if (selectedPackage) {
        setSelectedPrice(selectedPackage.price);
        setShowPayPal(true);
      } else {
        throw new Error('Please select a package');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setShowPayPal(false);
    } finally {
      setLoading(false);
    }
  };

  const handlePackageSelect = (pkg: Package) => {
    setFormData(prev => ({ ...prev, package: pkg.value }));
    setSelectedPrice(pkg.price);
    setError(null);
  };

  const handlePayPalSuccess = () => {
    window.location.href = '/thank-you.html';
  };

  const handlePayPalError = (error: Error) => {
    setError(error.message);
    setShowPayPal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-primary-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Started with FreeScout
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional installation service by certified experts. We'll have your helpdesk up and running in no time.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-12">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              )}

              <h2 className="text-3xl font-bold text-center mb-8">Request Installation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="__vtrftk" value="sid:df196c95e9d2996a71f7731dfbaf2ccc7aa98c48,1729701852" />
                <input type="hidden" name="publicid" value="f321530aa2e8303ffec7db84b712d9e3" />
                <input type="hidden" name="urlencodeenable" value="1" />
                <input type="hidden" name="name" value="FreeScout_leads" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="flex items-center text-sm font-medium text-gray-700">
                      <User className="w-4 h-4 mr-2 text-[#75b666]" />
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.firstname}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstname: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="flex items-center text-sm font-medium text-gray-700">
                      <User className="w-4 h-4 mr-2 text-[#75b666]" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.lastname}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastname: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="flex items-center text-sm font-medium text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-[#75b666]" />
                      Mobile Phone
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      pattern="[0-9+\-\s()]+"
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.mobile}
                      onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-[#75b666]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Package className="w-4 h-4 mr-2 text-[#75b666]" />
                    Select Package
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                      <div key={pkg.value} className="relative">
                        <input
                          type="radio"
                          id={pkg.value}
                          name="cf_852"
                          value={pkg.value}
                          required
                          checked={formData.package === pkg.value}
                          onChange={() => handlePackageSelect(pkg)}
                          className="peer absolute opacity-0"
                        />
                        <label
                          htmlFor={pkg.value}
                          className="block h-full p-6 bg-gray-50 rounded-lg border-2 border-gray-200 cursor-pointer transition-all peer-checked:border-[#75b666] peer-checked:bg-green-50 hover:border-[#75b666]"
                        >
                          <div className="flex flex-col items-center mb-4">
                            <span className="font-medium text-gray-900 text-lg mb-2">{pkg.label.split(' ')[0]}</span>
                            <div className="flex items-center justify-center gap-1">
                              <DollarSign className="h-5 w-5 text-[#75b666]" />
                              <span className="text-2xl font-bold text-[#75b666]">{pkg.price}</span>
                            </div>
                            <span className="text-sm text-gray-600">One-time payment</span>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-2">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-[#75b666] mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="absolute top-4 right-4 opacity-0 peer-checked:opacity-100 transition-opacity">
                            <CheckCircle className="h-6 w-6 text-[#75b666]" />
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {!showPayPal ? (
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#235585] rounded-lg hover:bg-[#75b666] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#75b666] transition-all duration-200 transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {loading ? 'Processing...' : 'Continue to Payment'}
                    </button>
                    <p className="mt-4 text-sm text-gray-600">
                      By submitting this form, you agree to our terms and conditions
                    </p>
                  </div>
                ) : (
                  <div className="text-center pt-6">
                    <h3 className="text-xl font-semibold mb-4">Complete Your Payment</h3>
                    <PayPalButton 
                      amount={selectedPrice} 
                      onSuccess={handlePayPalSuccess}
                      onError={handlePayPalError}
                    />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}