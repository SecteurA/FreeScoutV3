import { Mail, Phone, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { sendEmail } from '../utils/sendEmail';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setMessage({ type: 'success', text: 'Thank you! We will contact you shortly.' });
        setFormData({ name: '', email: '', phone: '' }); // Reset form
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Sorry, something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 min-h-[calc(100vh-180px)] relative animate-fadeIn bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#75b666]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#235585]/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl animate-slideUp">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#75b666]/10 text-[#75b666] font-medium text-sm mb-6 animate-fadeIn">
                <span className="mr-2">🚀</span>
                <span className="line-through text-gray-500 mr-2">$200</span>
                <span className="font-bold animate-pulse">Now only $100</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slideInLeft">
                Professional
                <span className="text-[#75b666]"> FreeScout</span>
                <br />
                Installation Service
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 animate-slideInLeft" style={{ animationDelay: "100ms" }}>
                Get your help desk up and running in no time with our expert installation service.
              </p>

              <a
                href="/install-freescout.html"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#75b666] rounded-lg hover:bg-white hover:text-[#75b666] border-2 border-[#75b666] transition-all duration-300 group mb-8"
              >
                Start Installation
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:ml-auto w-full max-w-md animate-slideInRight">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Want to learn more?</h3>
              <p className="text-gray-600 mb-6">Leave your details and we'll contact you shortly</p>
              
              {message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {message.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 mr-2 text-[#75b666]" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2 text-[#75b666]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2 text-[#75b666]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-[#75b666] rounded-lg hover:bg-white hover:text-[#75b666] border-2 border-[#75b666] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : (
                    <>
                      Request Information
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy and will never share your details
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
