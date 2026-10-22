import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Copy, Check, Navigation, Sparkles, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../config/siteData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [eventType, setEventType] = useState('Birthday Celebration');
  const [guestEstimate, setGuestEstimate] = useState('50 - 100 guests');
  const [notes, setNotes] = useState('');

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Prepares real WhatsApp message directly for the owner (03123243233)
  const whatsappInquiryUrl = `https://wa.me/923123243233?text=${encodeURIComponent(
    `Hello Party Place Chiniot!\n\nI would like to inquire about hosting an event:\n- Event Type: ${eventType}\n- Estimated Guests: ${guestEstimate}${
      notes ? `\n- Details: ${notes}` : ''
    }\n\nPlease share venue availability and details. Thank you!`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#121316] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Contact Party Place
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Connect directly with us to discuss your event date, decoration requirements, and venue arrangements in Chiniot.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Business Details & Verified Actions Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Info Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#18191E] border border-[#D4AF37]/30 shadow-2xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37]">
                Official Venue Details
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-6">
                {BUSINESS_INFO.name}
              </h3>

              <div className="space-y-6">
                
                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                      Direct Inquiries
                    </span>
                    <p className="text-base font-semibold text-white tracking-wide">
                      Direct Voice Line (Click to Call)
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Available for phone & WhatsApp reservations
                    </p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                      Venue Address
                    </span>
                    <p className="text-base font-semibold text-white mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Chiniot, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                {/* Rating Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                      Customer Standing
                    </span>
                    <p className="text-base font-semibold text-white mt-0.5">
                      {BUSINESS_INFO.rating} ★ Rating ({BUSINESS_INFO.totalReviews} Customer Reviews)
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Recognized event venue in Chiniot
                    </p>
                  </div>
                </div>

              </div>

              {/* Verified Action Buttons */}
              <div className="mt-8 pt-6 border-t border-stone-800 space-y-3">
                {/* Working Click-to-Call */}
                <a
                  href={BUSINESS_INFO.callUrl}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA822A] text-stone-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-[#D4AF37]/20"
                >
                  <Phone className="w-4 h-4 fill-stone-950" />
                  <span>Call Party Place</span>
                </a>

                {/* Working WhatsApp Contact Button */}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 hover:bg-[#20ba59] active:scale-98 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Working Google Maps Directions Button */}
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-xl bg-[#1D1E26] border border-stone-700 text-stone-200 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Open in Google Maps (PXHH+CMP)</span>
                </a>

                {/* Copy Address Button */}
                <button
                  onClick={copyAddress}
                  className="w-full py-2.5 px-6 rounded-xl text-stone-400 hover:text-stone-200 text-xs flex items-center justify-center gap-2 hover:bg-stone-800/40 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Address copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Direct WhatsApp Inquiry Builder */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#18191E] border border-stone-800 shadow-2xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37]">
                Direct Booking Inquiry
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-2">
                Plan Your Event with Party Place
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                Select your celebration details below to instantly open a pre-filled WhatsApp message directly with Party Place management.
              </p>

              <div className="space-y-5">
                {/* Event Type Select */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#121316] border border-stone-700 text-stone-200 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Family Celebration & Reunion">Family Celebration & Reunion</option>
                    <option value="Wedding Function (Mehndi/Barat/Walima)">Wedding Function (Mehndi/Barat/Walima)</option>
                    <option value="Special Occasion / Seasonal Party">Special Occasion / Seasonal Party</option>
                    <option value="Other Custom Function">Other Custom Function</option>
                  </select>
                </div>

                {/* Guest Estimate */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Estimated Guest Count
                  </label>
                  <select
                    value={guestEstimate}
                    onChange={(e) => setGuestEstimate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#121316] border border-stone-700 text-stone-200 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Up to 50 guests">Up to 50 guests</option>
                    <option value="50 - 100 guests">50 - 100 guests</option>
                    <option value="100 - 200 guests">100 - 200 guests</option>
                    <option value="200+ guests">200+ guests</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Preferred Date or Specific Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g., Preferred month or date, special theme request..."
                    className="w-full px-4 py-3 rounded-xl bg-[#121316] border border-stone-700 text-stone-200 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-stone-600 resize-none"
                  />
                </div>

                {/* Send via WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 hover:brightness-110 active:scale-98 transition-all shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry via WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-stone-500 text-center mt-2.5">
                    Opens WhatsApp directly to Party Place with your pre-filled inquiry. No forms to wait on.
                  </p>
                </div>

                {/* Direct Call Alternative */}
                <div className="text-center pt-3 border-t border-stone-800">
                  <span className="text-xs text-stone-400">Prefer to speak directly? </span>
                  <a
                    href={BUSINESS_INFO.callUrl}
                    className="text-xs text-[#D4AF37] font-semibold hover:underline"
                  >
                    Call directly now
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
