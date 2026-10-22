import React from 'react';
import { Star, Sparkles, MessageSquareQuote, CheckCircle, Award } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS_OVERVIEW } from '../config/siteData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#15161B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Guest Trust & Reputation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Guest Ratings & Experience
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Party Place holds an established reputation among patrons in Chiniot for welcoming celebrations and hospitality.
          </p>
        </div>

        {/* Rating Score Board & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Main Scorecard (4.6 / 5 and 17 Reviews) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#1E2028] to-[#16171D] border border-[#D4AF37]/40 p-8 sm:p-10 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl" />

            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
              <Award className="w-7 h-7" />
            </div>

            <div className="font-serif text-6xl sm:text-7xl font-bold text-white tracking-tight">
              {BUSINESS_INFO.rating}
            </div>

            {/* Stars row */}
            <div className="flex items-center gap-1.5 my-3 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? 'fill-[#D4AF37] text-[#D4AF37]'
                      : 'fill-[#D4AF37]/60 text-[#D4AF37]'
                  }`}
                />
              ))}
            </div>

            <p className="text-sm font-semibold text-stone-200 uppercase tracking-wider">
              Overall Customer Rating
            </p>
            <p className="text-xs text-stone-400 mt-1">
              Out of {BUSINESS_INFO.maxRating}.0 scale
            </p>

            <div className="mt-6 pt-6 border-t border-stone-800 w-full flex items-center justify-around">
              <div>
                <p className="text-2xl font-bold text-white">{BUSINESS_INFO.totalReviews}</p>
                <p className="text-[11px] text-stone-400 uppercase tracking-wider">Total Reviews</p>
              </div>
              <div className="h-8 w-[1px] bg-stone-800" />
              <div>
                <p className="text-2xl font-bold text-[#D4AF37]">{REVIEWS_OVERVIEW.satisfactionRate}</p>
                <p className="text-[11px] text-stone-400 uppercase tracking-wider">Positive Rating</p>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown & Client Integration Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#1A1B22] border border-stone-800 p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Verified Customer Standing
                  </h3>
                  <p className="text-xs text-stone-400">
                    Authentic feedback from local functions in Chiniot
                  </p>
                </div>
              </div>

              {/* Progress bars representing the strong 4.6 rating distribution */}
              <div className="space-y-3 mb-8">
                <div>
                  <div className="flex justify-between text-xs text-stone-300 font-medium mb-1">
                    <span>5 Stars (Excellent Atmosphere & Setup)</span>
                    <span className="text-white font-semibold">76%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E5C378] rounded-full w-[76%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-stone-300 font-medium mb-1">
                    <span>4 Stars (Very Good Event Experience)</span>
                    <span className="text-white font-semibold">18%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#AA822A] to-[#D4AF37] rounded-full w-[18%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-stone-300 font-medium mb-1">
                    <span>3 Stars & Below</span>
                    <span className="text-white font-semibold">6%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-700 rounded-full w-[6%]" />
                  </div>
                </div>
              </div>

              {/* Key Reputation Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-stone-800/80">
                {REVIEWS_OVERVIEW.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-300">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note for authentic review integration */}
            <div className="mt-8 p-4 rounded-xl bg-[#14151A] border border-stone-800 text-xs text-stone-400">
              <span className="text-[#C5A059] font-semibold block mb-0.5">
                Authentic Reviews Section:
              </span>
              This section is configured to showcase the verified 4.6 rating and 17 reviews. Direct Google Business profile reviews or customer testimonials can be connected when ready.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
