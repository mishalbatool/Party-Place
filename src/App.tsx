/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121316] text-[#FAF8F5] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Events & Celebrations Showcase */}
        <Events />

        {/* 4. Photo Gallery with Lightbox */}
        <Gallery />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Customer Reviews & 4.6-Star Standing */}
        <Reviews />

        {/* 7. Contact, Directions & Direct Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Trigger */}
      <FloatingActions />
    </div>
  );
}
