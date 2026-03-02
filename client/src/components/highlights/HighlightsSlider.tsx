import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import slider1 from '../../assets/highlights/high1.webp'; 
import slider2 from '../../assets/highlights/high1.webp';    
import slider3 from '../../assets/highlights/high1.webp';    
import slider4 from '../../assets/highlights/high1.webp';    
import slider5 from '../../assets/highlights/high1.webp';    

const sliderImages = [
  { id: 1, src: slider1, alt: 'PACMACK 2025 Main Gathering' },
  { id: 2, src: slider2, alt: 'Plenary Session in Action' },
  { id: 3, src: slider3, alt: 'Small Group Workshop' },
  { id: 4, src: slider4, alt: 'Community Connection' },
  { id: 5, src: slider5, alt: 'Venue - Orchid Hotels Lekki' },
];

const HighlightsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // For directional animations (left/right)

  // Use useCallback to make the functions stable for use in useEffect
  const nextSlide = useCallback(() => {
    setDirection(1); 
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5s

    return () => clearInterval(timer);
  }, [nextSlide]); // Re-run if nextSlide function changes

  // Motion Variants for the slide transition
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 bg-brand-bg" id="slider">
      <div className="container-lg">
        
        <div className="relative aspect-video md:aspect-21/9 rounded-3xl overflow-hidden shadow-deep group border-4 border-white">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex} 
              src={sliderImages[currentIndex].src}
              alt={sliderImages[currentIndex].alt}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

         
          <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-[1px]">
            <button 
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-3 bg-brand-white/70 text-brand-black rounded-full shadow-medium hover:bg-brand-white transition-all active:scale-95"
            >
              <FiChevronLeft size={30} />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-3 bg-brand-white/70 text-brand-black rounded-full shadow-medium hover:bg-brand-white transition-all active:scale-95"
            >
              <FiChevronRight size={30} />
            </button>
          </div>

        
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-black/40 px-6 py-3 rounded-full">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? 'w-8 h-2.5 bg-primary shadow-medium' 
                    : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
        
       
        <div className="mt-8 text-center max-w-xl mx-auto">
          <p className="text-xl font-medium text-brand-black italic">
            "{sliderImages[currentIndex].alt}"
          </p>
          <p className="text-sm text-brand-text uppercase tracking-widest mt-2">
            PACMACK THRIVE 2025 RECAP
          </p>
        </div>

      </div>
    </section>
  );
};

export default HighlightsSlider;