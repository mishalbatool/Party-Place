import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../config/siteData';

export const FloatingActions: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 animate-in fade-in duration-300">
      {/* WhatsApp Quick Trigger */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Party Place"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-xl hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Direct Call Quick Trigger */}
      <a
        href={BUSINESS_INFO.callUrl}
        aria-label="Call Party Place Now"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA822A] text-stone-950 font-bold text-xs uppercase tracking-wider shadow-2xl hover:brightness-110 active:scale-95 transition-all border border-[#F3E7C4]/40"
      >
        <Phone className="w-4 h-4 fill-stone-950" />
        <span>Call Venue</span>
      </a>
    </div>
  );
};
