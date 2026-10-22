/**
 * ==============================================================================
 * PARTY PLACE - EDITABLE SITE CONFIGURATION
 * ==============================================================================
 * This file contains all primary business information, contact links, ratings,
 * event categories, why-choose-us highlights, and gallery images.
 * 
 * HOW TO EDIT THIS WEBSITE (FOR CLIENTS & DEVELOPERS):
 * 1. To change business phone, name, address, or rating:
 *    Update the `BUSINESS_INFO` object below.
 * 2. To change gallery photos or categories:
 *    Edit, add, or remove entries in the `GALLERY_IMAGES` array.
 * 3. To update event showcase cards:
 *    Modify the `EVENT_TYPES` array.
 * 4. To adjust why-choose-us highlights:
 *    Update the `WHY_CHOOSE_US_ITEMS` array.
 * ==============================================================================
 */

export interface BusinessInfo {
  name: string;
  tagline: string;
  subtagline: string;
  phoneDisplay: string;
  showPhoneNumberPublicly: boolean;
  phoneActionText: string;
  phoneDial: string;
  callUrl: string;
  whatsappUrl: string;
  address: string;
  googleMapsUrl: string;
  rating: number;
  maxRating: number;
  totalReviews: number;
  city: string;
  province: string;
  country: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface EventType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Birthdays' | 'Lighting' | 'Decor';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  // Official Business Details
  name: 'Party Place',
  tagline: 'Make Every Celebration Unforgettable',
  subtagline: 'Discover the perfect setting for your special moments at Party Place, Chiniot.',
  phoneDisplay: 'Direct Line', // Kept private from public view
  showPhoneNumberPublicly: false, // Ensures raw phone number is never displayed publicly
  phoneActionText: 'Call Venue',
  phoneDial: '+923123243233',
  callUrl: 'tel:+923123243233',
  whatsappUrl: 'https://wa.me/923123243233',
  address: 'PXHH+CMP, Chiniot, Punjab, Pakistan',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PXHH%2BCMP%2C%20Chiniot',
  rating: 4.6,
  maxRating: 5.0,
  totalReviews: 17,
  city: 'Chiniot',
  province: 'Punjab',
  country: 'Pakistan',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const EVENT_TYPES: EventType[] = [
  {
    id: 'birthdays',
    title: 'Birthday Celebrations',
    subtitle: 'Milestones, Youth & Kids Themes',
    description: 'Create magical birthday memories with vibrant stage setups, customizable theme backdrops, balloon garlands, and atmospheric party lighting.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop',
    badge: 'Popular for All Ages',
    features: ['Themed Stage Decor', 'Cake Table Setup', 'Festive Ambient Lighting', 'Flexible Seating Plans'],
  },
  {
    id: 'family-celebrations',
    title: 'Family Celebrations',
    subtitle: 'Reunions, Anniversaries & Milestones',
    description: 'Host heartfelt family reunions, anniversary galas, and milestone dinners in a comfortable, beautifully illuminated setting designed for connection.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    badge: 'Heartwarming Gatherings',
    features: ['Generous Guest Seating', 'Warm Hospitality Ambiance', 'Family Dining Arrangements', 'Photo Opportunities'],
  },
  {
    id: 'wedding-functions',
    title: 'Wedding Functions',
    subtitle: 'Mehndi, Barat & Walima Gatherings',
    description: 'A grand, tasteful venue setting featuring opulent stage designs, floral arrangements, chandeliers, and royal entrance aesthetics for wedding functions.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    badge: 'Signature Celebrations',
    features: ['Bridal & Groom Stage', 'Floral Backdrops', 'Chandelier Lighting', 'Grand Guest Walkway'],
  },
  {
    id: 'special-occasions',
    title: 'Special Occasions',
    subtitle: 'Seasonal Parties & Milestone Events',
    description: 'From graduation bashes and bridal showers to festive holiday celebrations, tailor the space with distinctive lighting and custom decorative flair.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
    badge: 'Customizable Themes',
    features: ['Adaptable Floor Plan', 'Mood & Spotlight Controls', 'Dedicated Welcome Foyer', 'Audio/Visual Friendly Area'],
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Banquet & Floral Stage',
    category: 'Weddings',
    categoryLabel: 'Wedding Functions',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    description: 'Regal floral stage with warm ivory drapes, romantic candle clusters, and grand floral installations.',
  },
  {
    id: 'gal-2',
    title: 'Festive Birthday Celebration Setup',
    category: 'Birthdays',
    categoryLabel: 'Birthdays & Parties',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop',
    description: 'Vibrant celebratory atmosphere complete with sparkle, festive party accessories, and lively ambiance.',
  },
  {
    id: 'gal-3',
    title: 'Illuminated Chandelier & Fairy Light Canopy',
    category: 'Lighting',
    categoryLabel: 'Lighting & Ambiance',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    description: 'Stunning ceiling lighting with warm fairy strands and golden glow creating an enchanting nighttime spectacle.',
  },
  {
    id: 'gal-4',
    title: 'Luxury Dinner Table Decor',
    category: 'Decor',
    categoryLabel: 'Seating & Floral',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    description: 'Exquisite table runner, fine glassware, gilded dinnerware, and fresh floral centerpieces.',
  },
  {
    id: 'gal-5',
    title: 'Romantic Evening Reception Hall',
    category: 'Weddings',
    categoryLabel: 'Wedding Functions',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
    description: 'Spacious banquet hall illuminated with warm ambient uplighting and graceful table placements.',
  },
  {
    id: 'gal-6',
    title: 'Candlelit Centerpieces & Golden Accents',
    category: 'Decor',
    categoryLabel: 'Seating & Floral',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    description: 'Intimate candle arrangements in glass votives casting a champagne gold glow across guest tables.',
  },
  {
    id: 'gal-7',
    title: 'Festive Balloon Arch & Cake Station',
    category: 'Birthdays',
    categoryLabel: 'Birthdays & Parties',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop',
    description: 'Custom balloon installations and dedicated dessert display for memorable milestone birthdays.',
  },
  {
    id: 'gal-8',
    title: 'Grand Hall Ceiling Illumination',
    category: 'Lighting',
    categoryLabel: 'Lighting & Ambiance',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1200&auto=format&fit=crop',
    description: 'Architectural mood lighting elevating the venue atmosphere for night-time banquets and parties.',
  },
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseItem[] = [
  {
    id: 'celebration',
    title: 'Joyful Celebrations',
    subtitle: 'Tailored for Life’s Big Moments',
    description: 'From intimate family milestones to joyful parties, our venue is designed to celebrate life with elegance and style.',
    iconName: 'Sparkles',
  },
  {
    id: 'atmosphere',
    title: 'Enchanting Atmosphere',
    subtitle: 'Warm, Welcoming & Luxurious',
    description: 'Experience a captivating setting illuminated by warm ambient lighting, elegant decor tones, and tasteful hospitality aesthetics.',
    iconName: 'Gem',
  },
  {
    id: 'memories',
    title: 'Memorable Moments',
    subtitle: 'Cherished Photographs & Memories',
    description: 'Every corner provides an appealing backdrop for family portraits, celebration videos, and lasting memories with loved ones.',
    iconName: 'Camera',
  },
  {
    id: 'convenience',
    title: 'Convenient Chiniot Location',
    subtitle: 'Easily Accessible in Town',
    description: 'Located in Chiniot (PXHH+CMP), offering simple directions and smooth navigation for you and your attending guests.',
    iconName: 'MapPin',
  },
];

export const REVIEWS_OVERVIEW = {
  averageRating: 4.6,
  maxRating: 5.0,
  totalCount: 17,
  satisfactionRate: '94%',
  highlights: [
    'Highly praised celebration venue in Chiniot',
    'Warm, welcoming atmosphere for family events',
    'Strong 4.6-star customer satisfaction score',
    'Convenient location for local attendees',
  ],
};
