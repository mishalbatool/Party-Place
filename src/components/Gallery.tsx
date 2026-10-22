import React, { useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES, GalleryItem } from '../config/siteData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Photos', value: 'All' },
    { label: 'Weddings', value: 'Weddings' },
    { label: 'Birthdays & Parties', value: 'Birthdays' },
    { label: 'Lighting & Ambiance', value: 'Lighting' },
    { label: 'Seating & Floral', value: 'Decor' },
  ];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#15161B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Venue & Decor Inspiration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Our Celebration Gallery
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Immerse yourself in party setups, warm banquet illumination, floral stages, and celebratory decor ideas for your function.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA822A] text-stone-950 font-semibold shadow-md shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#1D1E24] text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#1D1E24] border border-stone-800 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 relative flex flex-col"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* View Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-[#121316]/80 text-[#D4AF37] border border-[#D4AF37]/50 shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#121316]/90 text-[#D4AF37] border border-[#D4AF37]/30">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Photo Description Box */}
              <div className="p-4 bg-[#18191F] flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <span className="text-[11px] text-[#C5A059] font-medium mt-3 inline-flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" />
                  <span>Click to expand</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-5 right-5 p-3 rounded-full bg-stone-900/80 border border-stone-700 text-stone-200 hover:text-white hover:border-[#D4AF37] transition-colors z-50"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 border border-stone-700 text-stone-200 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 border border-stone-700 text-stone-200 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
              <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-2xl">
                <img
                  src={filteredImages[selectedImageIndex].image}
                  alt={filteredImages[selectedImageIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
                />
              </div>

              {/* Caption and Info */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  {filteredImages[selectedImageIndex].categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                  {filteredImages[selectedImageIndex].title}
                </h3>
                <p className="text-sm text-stone-300 mt-2">
                  {filteredImages[selectedImageIndex].description}
                </p>
                <p className="text-xs text-stone-500 mt-2">
                  Image {selectedImageIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
