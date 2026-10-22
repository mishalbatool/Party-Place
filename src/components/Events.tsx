import React from 'react';
import { Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { EVENT_TYPES, BUSINESS_INFO } from '../config/siteData';

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 lg:py-28 bg-[#121316] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Celebrations We Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Designed for Every Special Occasion
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Party Place offers an adaptable, elegant venue setting in Chiniot tailored to host diverse celebrations, from joyful birthdays to grand wedding gatherings.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EVENT_TYPES.map((event) => (
            <div
              key={event.id}
              className="group rounded-2xl bg-[#18191F] border border-stone-800 hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/60 flex flex-col"
            >
              {/* Event Image Banner with Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18191F] via-[#18191F]/30 to-black/30" />
                
                {/* Event Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316]/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 shadow-md">
                    {event.badge}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-[#C5A059] tracking-wider uppercase block mb-1">
                    {event.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#F3E7C4] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 pt-4 border-t border-stone-800/80">
                    {event.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                        <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Card Bottom Inquire Button */}
                <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between">
                  <span className="text-xs text-stone-400">
                    Chiniot Venue Setup
                  </span>

                  <a
                    href={`https://wa.me/923123243233?text=${encodeURIComponent(
                      `Hello Party Place! I am interested in inquiring about hosting a ${event.title} at your venue in Chiniot.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] hover:text-white transition-colors"
                  >
                    <span>Inquire for {event.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Custom Event Arrangements */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#18191F]/60 border border-stone-800 max-w-2xl mx-auto">
          <p className="text-sm text-stone-300">
            Have a custom celebration or theme in mind?{' '}
            <a href={BUSINESS_INFO.callUrl} className="text-[#D4AF37] font-semibold hover:underline">
              Call us directly
            </a>{' '}
            or connect on WhatsApp to discuss venue availability.
          </p>
        </div>

      </div>
    </section>
  );
};
