import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import gallery1 from '../assets/gallery/gallery1.webp';
import gallery2 from '../assets/gallery/gallery2.webp';
import gallery3 from '../assets/gallery/gallery3.webp';
import gallery4 from '../assets/gallery/gallery4.webp';
import gallery5 from '../assets/gallery/gallery5.webp';
import gallery6 from '../assets/gallery/gallery6.webp';
import gallery7 from '../assets/gallery/gallery7.webp';
import gallery8 from '../assets/gallery/gallery8.webp';
import gallery9 from '../assets/gallery/gallery9.webp';
import gallery10 from '../assets/gallery/gallery10.webp';
import gallery11 from '../assets/gallery/gallery11.webp';
import gallery12 from '../assets/gallery/gallery12.webp';
import gallery13 from '../assets/gallery/gallery13.webp';
import gallery14 from '../assets/gallery/gallery14.webp';
import gallery15 from '../assets/gallery/gallery15.webp';
import gallery16 from '../assets/gallery/gallery16.webp';
import gallery17 from '../assets/gallery/gallery17.webp';
import gallery18 from '../assets/gallery/gallery18.webp';
import gallery19 from '../assets/gallery/gallery19.webp';
import gallery20 from '../assets/gallery/gallery20.webp';
import gallery21 from '../assets/gallery/gallery21.webp';
import gallery22 from '../assets/gallery/gallery22.webp';
import gallery23 from '../assets/gallery/gallery23.webp';
import gallery24 from '../assets/gallery/gallery24.webp';


interface GalleryImage {
  id: number;
  src: string;
  category: string;
  alt: string;
}

const GALLERY_DATA: GalleryImage[] = [
  { id: 1, src: gallery1, category: 'Discussions', alt: 'Group Discussion' },
  { id: 2, src: gallery2, category: 'Discussions', alt: 'Group Discussion' },
  { id: 3, src: gallery3, category: 'Plenaries', alt: 'Main Session' },
  { id: 4, src: gallery4, category: 'Discussions', alt: 'Breakout Session' },
  { id: 5, src: gallery5, category: 'Meals', alt: 'Break Time' },
  { id: 6, src: gallery6, category: 'Meals', alt: 'Break Time' },
  { id: 7, src: gallery7, category: 'Socials', alt: 'Group Activity' },
  { id: 8, src: gallery8, category: 'Socials', alt: 'Group Activity' },
  { id: 9, src: gallery9, category: 'Socials', alt: 'Networking' },
  { id: 10, src: gallery10, category: 'Plenaries', alt: 'Main Session' },
  { id: 11, src: gallery11, category: 'Socials', alt: 'Group Activity' },
  { id: 12, src: gallery12, category: 'Plenaries', alt: 'Panel Session' },
  { id: 13, src: gallery13, category: 'Plenaries', alt: 'Main Session' },
  { id: 14, src: gallery14, category: 'Plenaries', alt: 'Main Session' },
  { id: 15, src: gallery15, category: 'Plenaries', alt: 'Main Session' },
  { id: 16, src: gallery16, category: 'Plenaries', alt: 'Main Session' },
  { id: 17, src: gallery17, category: 'Meals', alt: 'Main Session' },
  { id: 18, src: gallery18, category: 'Plenaries', alt: 'Main Session' },
  { id: 19, src: gallery19, category: 'Discussions', alt: 'Networking' },
  { id: 20, src: gallery20, category: 'Socials', alt: 'Networking' },
  { id: 21, src: gallery21, category: 'Socials', alt: 'Networking' },
  { id: 22, src: gallery22, category: 'Discussions', alt: 'Networking' },
  { id: 23, src: gallery23, category: 'Socials', alt: 'Networking' },
  { id: 24, src: gallery24, category: 'Socials', alt: 'Networking' },
];

const categories = ['All', 'Plenaries', 'Discussions', 'Socials', 'Meals'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = GALLERY_DATA.filter(img => 
    filter === 'All' ? true : img.category === filter
  );

  const openLightbox = (id: number) => {
    const index = GALLERY_DATA.findIndex(img => img.id === id);
    setSelectedImageIndex(index);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_DATA.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  return (
    <div className="bg-brand-bg min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="grow pt-32 pb-20">
        <div className="container-lg">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-4">PACMACK 2025 Highlights</h1>
            <p className="text-brand-text max-w-2xl mx-auto">
              Relive the powerful moments of connection, growth, and community from our inaugural conference.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-300
                  ${filter === cat 
                    ? 'bg-primary text-brand-black shadow-medium scale-105' 
                    : 'bg-brand-white text-brand-text hover:bg-brand-gray/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid with Framer Motion */}
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer break-inside-avoid"
                  onClick={() => openLightbox(image.id)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-soft group-hover:shadow-medium transition-smooth border border-brand-gray/10">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-center items-center backdrop-blur-[2px]">
                      <FiMaximize2 className="text-white text-3xl mb-2" />
                      <span className="text-white font-bold text-xs uppercase tracking-widest bg-primary/90 px-3 py-1 rounded">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-300 bg-brand-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-8 right-8 text-white text-4xl hover:text-primary transition-smooth z-310"
            >
              <FiX />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-primary transition-smooth text-5xl z-310"
            >
              <FiChevronLeft />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-primary transition-smooth text-5xl z-310"
            >
              <FiChevronRight />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-5xl w-full max-h-[85vh] relative"
            >
              <img 
                src={GALLERY_DATA[selectedImageIndex].src} 
                alt="Selected highlight" 
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-white font-bold text-lg">{GALLERY_DATA[selectedImageIndex].alt}</p>
                <p className="text-primary uppercase tracking-widest text-xs">{GALLERY_DATA[selectedImageIndex].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;