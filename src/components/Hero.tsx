import { Inbox, Tag, Server, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="pt-16 min-h-[calc(100vh-180px)] bg-cover bg-center relative animate-fadeIn"
      style={{ 
        backgroundImage: 'url("https://freescout-installation.com/images/2023/10/24/fs-slide.webp")',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl animate-slideUp">
          <div className="mb-6">
            <p className="text-xl mb-2 animate-fadeIn">
              Starting at <span className="line-through text-gray-500">200$</span>{' '}
              <span className="text-primary-600 font-bold animate-pulse">100$</span> One time fee
            </p>
            <h1 className="text-5xl font-bold text-gray-900 mb-8 animate-slideInLeft">
              FreeScout Installation service
            </h1>
          </div>

          <div className="space-y-4 mb-8">
            {[
              { Icon: Inbox, text: "Helpdesk & Shared Mailbox", delay: "100" },
              { Icon: Tag, text: "Open Source", delay: "200" },
              { Icon: Server, text: "Hosted on your server", delay: "300" },
              { Icon: DollarSign, text: "No monthly fees (one time for installation)", delay: "400" }
            ].map(({ Icon, text, delay }, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 opacity-0 animate-slideInRight"
                style={{ animationDelay: `${delay}ms` }}
              >
                <Icon className="h-6 w-6 text-primary-600" />
                <span className="text-lg">{text}</span>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <a
              href="/install-freescout.html"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-500 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105 transform group"
            >
              <span className="animate-bounce group-hover:animate-none">GET STARTED NOW</span>
            </a>
          </div>

          <p className="text-sm text-gray-600 animate-fadeIn" style={{ animationDelay: "500ms" }}>
            *Basic plan includes configuration of 3 Mailboxes and 5 users, you can add more by your self
          </p>
        </div>
      </div>
    </div>
  );
}