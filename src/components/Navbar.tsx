import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../config/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121316]/95 backdrop-blur-md py-3.5 shadow-xl shadow-black/40 border-b border-[#C5A059]/20'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Party Place Homepage"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-gradient-to-br from-[#1F2026] to-[#121316] flex items-center justify-center text-[#D4AF37] shadow-md group-hover:border-[#D4AF37] transition-colors">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-[#F3E7C4] transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#C5A059] font-medium">
                {BUSINESS_INFO.city}, Punjab
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-[#D4AF37] transition-colors tracking-wide py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (Call Now & WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2.5 rounded-full border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={BUSINESS_INFO.callUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA822A] text-stone-950 font-semibold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#D4AF37]/20"
            >
              <Phone className="w-3.5 h-3.5 fill-stone-950" />
              <span>{BUSINESS_INFO.phoneActionText}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.callUrl}
              className="p-2 rounded-full bg-[#D4AF37] text-stone-950 active:scale-95"
              aria-label="Call Venue"
            >
              <Phone className="w-4 h-4 fill-stone-950" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18191E] border-b border-[#C5A059]/20 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-200 hover:text-[#D4AF37] transition-colors py-1 border-b border-stone-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 flex flex-col gap-3">
            <a
              href={BUSINESS_INFO.callUrl}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA822A] text-stone-950 font-semibold text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-stone-950" />
              Call Venue Directly
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-[#25D366]/40 text-[#25D366] font-semibold text-center text-sm flex items-center justify-center gap-2 hover:bg-[#25D366]/10"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
