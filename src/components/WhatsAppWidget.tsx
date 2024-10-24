import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const phoneNumber = "442045773201";
  const message = "Hello! I'm interested in FreeScout installation services.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 group relative">
        <MessageCircle className="h-6 w-6 text-white" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-white text-gray-800 text-sm py-1 px-3 rounded shadow-lg whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        </div>
      </div>
    </div>
  );
}