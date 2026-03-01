import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const HighlightsHero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#F07B50] flex flex-col justify-center px-6 overflow-hidden pt-20">
      <div className="container-lg relative z-10">
        
        {/* Overlapping Bold Headers - Inspired by Sample Design */}
        <div className="flex flex-col gap-0 mb-12">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black text-white w-fit px-8 py-4 md:px-12 md:py-6 shadow-2xl"
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
              PACMACK
            </h1>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white text-black w-fit px-8 py-4 md:px-12 md:py-6 mt-[-10px] ml-12 md:ml-32 shadow-2xl flex items-center gap-6"
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
              THRIVE 2025
            </h1>
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-md"
          >
            <h3 className="text-xl md:text-2xl font-bold text-black uppercase mb-4 leading-tight">
              Empowering Leaders, <br /> Shaping the Future
            </h3>
            <p className="text-black/80 font-medium leading-relaxed">
              Relive the historic gathering of Africa's missionary and cross-cultural kids. 
              A journey of identity, faith, and community that took place from October 1st to 5th.
            </p>
          </motion.div>

          {/* Right side stats/cta */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col md:items-end gap-6"
          >
            <div className="text-right border-r-4 border-black pr-4 hidden md:block">
              <p className="font-black text-2xl">Lagos, Nigeria</p>
              <p className="font-bold opacity-70">Orchid Hotels Lekki</p>
            </div>
            <button className="bg-black text-white px-10 py-4 rounded-none font-bold flex items-center gap-3 transition-all hover:bg-white hover:text-black hover:gap-5">
              Explore Recap <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Text (Faded) */}
      <div className="absolute top-1/2 right-[-5%] translate-y-[-50%] rotate-90 hidden lg:block select-none pointer-events-none">
        <h2 className="text-[15rem] font-black text-black/5 uppercase">Recap</h2>
      </div>
    </section>
  );
};

export default HighlightsHero;