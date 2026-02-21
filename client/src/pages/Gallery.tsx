import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  alt: string;
}

const GALLERY_DATA: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94', category: 'Plenaries', alt: 'Main Session' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18', category: 'Workshops', alt: 'Group Discussion' },
  { id: 3, src: 'https://images.unsplash.com/photo-1529070532901-ba8c300ec342', category: 'Socials', alt: 'Community Dinner' },
  { id: 4, src: 'https://images.unsplash.com/photo-1475721027187-402ad2989a3b', category: 'Plenaries', alt: 'Speaker on Stage' },
  { id: 5, src: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa', category: 'Workshops', alt: 'Learning Session' },
  { id: 6, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952', category: 'Socials', alt: 'Networking' },
  { id: 7, src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678', category: 'Plenaries', alt: 'Audience' },
];

const categories = ['All', 'Plenaries', 'Workshops', 'Socials'];

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