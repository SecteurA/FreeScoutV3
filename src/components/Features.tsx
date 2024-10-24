import { Settings, Mail, Globe, Shield, Zap, HeartHandshake } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Settings,
      title: "Professional Installation",
      description: "Complete server setup and FreeSout installation with optimal configurations"
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "SSL certificate setup and security best practices implementation"
    },
    {
      icon: Mail,
      title: "Email Configuration",
      description: "SMTP setup and email routing configuration for smooth communication"
    },
    {
      icon: Globe,
      title: "Domain Integration",
      description: "Custom domain setup and DNS configuration"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Server and application optimization for maximum performance"
    },
    {
      icon: HeartHandshake,
      title: "Post-Installation Support",
      description: "30 days of technical support to ensure everything runs smoothly"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need for a Perfect Setup
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive installation service with all the essential features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
              <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}