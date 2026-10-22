import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../config/siteData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Background Venue Imagery with Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop"
          alt="Party Place Event Venue"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105 transform motion-safe:animate-subtle-zoom"
          loading="eager"
        />
        {/* Layered luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/75 to-black/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#121316]/40 to-[#121316]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
          Make Every Celebration{' '}
          <span className="gold-gradient-text block sm:inline">
            Unforgettable
          </span>
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl font-normal leading-relaxed mb-10">
          {BUSINESS_INFO.subtagline}
        </p>

        {/* Action Buttons: "Explore Our Gallery" and "Contact Us" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38D35] text-stone-950 font-semibold text-sm tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#D4AF37]/25"
          >
            <span>Explore Our Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1A1B20]/80 backdrop-blur-md border border-[#D4AF37]/40 text-stone-200 font-semibold text-sm tracking-wider uppercase hover:bg-[#D4AF37]/15 hover:text-white hover:border-[#D4AF37] active:scale-95 transition-all shadow-md"
          >
            <span>Contact Us</span>
          </a>
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-1">
              Venue Location
            </p>
            <p className="text-sm font-semibold text-white">Chiniot, Punjab</p>
          </div>
          <div className="p-3">
            <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-1">
              Celebration Focus
            </p>
            <p className="text-sm font-semibold text-white">Parties & Weddings</p>
          </div>
          <div className="p-3">
            <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-1">
              Guest Satisfaction
            </p>
            <p className="text-sm font-semibold text-white">4.6 ★ (17 Reviews)</p>
          </div>
          <div className="p-3">
            <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-1">
              Direct Inquiries
            </p>
            <p className="text-sm font-semibold text-white">Call / WhatsApp</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-8 text-stone-400 hover:text-[#D4AF37] transition-colors p-2 inline-flex flex-col items-center gap-1"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] tracking-widest uppercase text-stone-400">Discover More</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
