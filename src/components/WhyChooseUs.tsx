import React from 'react';
import { Sparkles, Gem, Camera, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS, BUSINESS_INFO } from '../config/siteData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles: Sparkles,
  Gem: Gem,
  Camera: Camera,
  MapPin: MapPin,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#121316] relative overflow-hidden">
      {/* Subtle ambient gold glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>The Party Place Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Why Celebrate With Us in Chiniot
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Focused on the essence of joyful gatherings: beautiful ambiance, unforgettable memories, and dedicated event hospitality.
          </p>
        </div>

        {/* 4 Pillars Grid (Celebration, Atmosphere, Memorable Moments, Convenience) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-[#18191E] border border-stone-800 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#24252E] to-[#18191E] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:border-[#D4AF37] transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-stone-800 group-hover:text-[#D4AF37]/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-wider font-semibold text-[#C5A059] block mb-1.5">
                    {item.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#F3E7C4] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-1.5 text-xs text-[#D4AF37] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Quality Event Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location & Hospitality Assurance Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#1A1B22] via-[#202129] to-[#1A1B22] border border-[#D4AF37]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-white">
                Located in Chiniot, Punjab
              </h4>
              <p className="text-sm text-stone-300 mt-0.5">
                Address: {BUSINESS_INFO.address}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#D4AF37] text-stone-950 font-semibold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
