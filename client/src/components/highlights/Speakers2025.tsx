import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Assets
import ibukun from '../../assets/Ibukun-Awosika.jpg';
import david from '../../assets/david.jpeg';
import diti from '../../assets/diti.png';
import paul from '../../assets/banbina.jpeg';
import guma from '../../assets/guma.jpeg';
// import hope from '../../assets/hope.png';
import mindy from '../../assets/mindy.jpeg';
import bret from '../../assets/bret.jpeg';

const SPEAKERS = [
  { name: "David Ogunshola", role: "MK Nigeria", image: david },
  { name: "Dr Diti Olawale", role: "Psychologist", image: diti },
  { name: "Evangelist Paul Bamibe", role: "MK Nigeria", image: paul },
  { name: "David Gumah", role: "MK Ghana", image: guma },
//   { name: "Hope Ayabina", role: "MK Nigeria", image: hope },
  { name: "Mindy Beetham", role: "Guest Speaker", image: mindy },
  { name: "Bret Taylor", role: "Guest Speaker", image: bret },
];

const Speakers2025: React.FC = () => {
  // Use a ref to control the horizontal scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-white overflow-hidden">
      <div className="container-lg">
        
        {/* Keynote Speaker Section */}
        <div className="mb-24 flex flex-col lg:flex-row items-center gap-12 border-b-8 border-black pb-16">
          <div className="lg:w-1/3 relative">
             <div className="absolute -top-4 -left-4 bg-primary text-black font-black px-6 py-2 uppercase tracking-tighter z-10">
               Keynote Speaker
             </div>
             <img src={ibukun} alt="Ibukun Awosika" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 shadow-deep" />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-6xl md:text-8xl font-black text-black uppercase leading-none tracking-tighter mb-4">
              Ibukun <br /> Awosika
            </h2>
            <p className="text-primary text-xl font-bold uppercase tracking-widest mb-6">
              African Entrepreneur & Global Culture Shaper
            </p>
            <p className="text-brand-text text-lg max-w-2xl italic leading-relaxed">
              "Ibukun Awosika joined us to share profound insights on leadership and navigating cultural identity as a foundation for global impact."
            </p>
          </div>
        </div>

        {/* Visionaries Slider */}
        <div className="relative">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">
              Meet the <span className="text-primary">Speakers</span>
            </h3>
            
            {/* Navigation Buttons - Now functional */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="p-4 bg-black text-white rounded-full hover:bg-primary hover:text-black transition-all active:scale-95"
              >
                <FiChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-4 bg-black text-white rounded-full hover:bg-primary hover:text-black transition-all active:scale-95"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
          >
            {SPEAKERS.map((s, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="min-w-[280px] snap-center flex flex-col group"
              >
                <div className="mb-6 border-l-4 border-black pl-4">
                  <h4 className="text-2xl font-black text-black uppercase leading-tight group-hover:text-primary transition-colors">
                    {s.name.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br /></React.Fragment>)}
                  </h4>
                  <p className="text-xs font-bold text-brand-text uppercase tracking-widest mt-2">
                    {s.role}
                  </p>
                </div>

                <div className="aspect-4/5 bg-brand-bg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-soft">
                   <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Speakers2025;