import React from 'react';
import { Sparkles, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../config/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0E11] border-t border-stone-800 text-stone-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-stone-900 flex items-center justify-center text-[#D4AF37]">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
              {BUSINESS_INFO.tagline}. An event and party venue in Chiniot, Punjab, dedicated to creating memorable settings for all life’s celebrations.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
              <span>★ {BUSINESS_INFO.rating} Rating</span>
              <span className="text-stone-600">•</span>
              <span>{BUSINESS_INFO.totalReviews} Customer Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Venue Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Venue Inquiries
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={BUSINESS_INFO.callUrl}
                    className="text-white hover:text-[#D4AF37] transition-colors font-medium"
                  >
                    Direct Phone Inquiries
                  </a>
                  <p className="text-xs text-stone-500">Click to call or message via WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300">{BUSINESS_INFO.address}</p>
                  <p className="text-xs text-stone-500">{BUSINESS_INFO.city}, {BUSINESS_INFO.province}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved. Event & Party Venue in Chiniot, Pakistan.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-[#D4AF37] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
