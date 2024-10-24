import { lazy, useState } from 'react';
import { Mail, Phone, MessageSquare, User, Send, AlertCircle } from 'lucide-react';

const FAQ = lazy(() => import('./FAQ'));

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Form submission logic will be added later for vTiger integration
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/thank-you.html';
    } catch (error) {
      setError('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help with your FreeScout installation needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Contact Information Panel */}
                <div className="bg-[#235585] p-8 text-white">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 mr-3" />
                      <span>contact@freescout-installation.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 mr-3" />
                      <span>+44 204 577 3201</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-6 w-6 mr-3" />
                      <span>Live chat available 24/7</span>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                    <p className="opacity-90">
                      Monday - Friday: 9:00 AM - 6:00 PM (GMT)<br />
                      Saturday: 10:00 AM - 4:00 PM (GMT)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 md:col-span-2">
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                      <AlertCircle className="h-5 w-5" />
                      <p>{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstname" className="flex items-center text-sm font-medium text-gray-700">
                          <User className="w-4 h-4 mr-2 text-[#75b666]" />
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          required
                          className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                          value={formData.firstname}
                          onChange={(e) => setFormData({...formData, firstname: e.target.value})}
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
                          required
                          className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                          value={formData.lastname}
                          onChange={(e) => setFormData({...formData, lastname: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                          <Mail className="w-4 h-4 mr-2 text-[#75b666]" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700">
                          <Phone className="w-4 h-4 mr-2 text-[#75b666]" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="flex items-center text-sm font-medium text-gray-700">
                        <MessageSquare className="w-4 h-4 mr-2 text-[#75b666]" />
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700">
                        <MessageSquare className="w-4 h-4 mr-2 text-[#75b666]" />
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <div className="text-center pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#235585] rounded-lg hover:bg-[#75b666] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#75b666] transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}