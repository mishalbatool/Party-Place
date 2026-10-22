import React from 'react';
import { Sparkles, MapPin, HeartHandshake, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../config/siteData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#15161B] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl shadow-black/60 group">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                  alt="Party Place Venue Setting"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-stone-200">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Venue in Chiniot
                  </span>
                  <p className="font-serif text-lg text-white font-medium">
                    A welcoming destination for every celebration
                  </p>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-xl pointer-events-none" />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>About Party Place</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Welcome to Chiniot’s Dedicated Event Destination
            </h2>

            <div className="space-y-4 text-stone-300 text-base leading-relaxed mb-8">
              <p>
                <strong className="text-white font-medium">Party Place</strong> is an event and party venue business established in Chiniot, Punjab, Pakistan. We take genuine pride in offering an inviting, beautifully decorated setting designed to bring family, friends, and communities together for memorable celebrations.
              </p>
              <p>
                Whether you are gathering to celebrate a milestone birthday, holding a cherished family get-together, or marking a celebratory wedding occasion, our venue is focused on creating an inspiring backdrop with warm ambiance, tasteful lighting, and courteous hospitality.
              </p>
              <p className="text-stone-400 text-sm">
                With a recognized 4.6-star rating from 17 guest reviews, we invite you to explore our spaces and connect with us directly to discuss your upcoming event.
              </p>
            </div>

            {/* Quick Venue Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#1A1B22] border border-stone-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Chiniot Location</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Easily reachable at PXHH+CMP, Chiniot</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1A1B22] border border-stone-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Warm Hospitality</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Friendly assistance for your function</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA822A] text-stone-950 font-semibold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-stone-950" />
                <span>Call Party Place Directly</span>
              </a>

              <a
                href="#events"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] hover:text-[#F3E7C4] transition-colors py-2 px-3"
              >
                <span>View Event Types</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
