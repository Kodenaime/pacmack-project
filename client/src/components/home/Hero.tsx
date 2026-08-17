import React from 'react';
import Navbar from '../../layout/Navbar';
import { FiGift } from "react-icons/fi";
import { FaBookReader } from "react-icons/fa";
import { Link } from 'react-router';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen bg-brand-white overflow-hidden text-white">
      {/* Background Image Container that is scaled slightly larger to cover white edges */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-[110%] h-[110%] -translate-x-[5%] -translate-y-[5%] bg-[url('/mainhero.webp')] bg-cover bg-center"></div>
      </div>

      <Navbar />
      
      {/* Hero Overlay Container */}
      <div className="relative z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-225 mt-16 p-8 flex flex-col items-center text-center">

        <div className="relative w-full drop-shadow-md bg-black/60 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-2 leading-tight text-white drop-shadow-sm">
            Pan-African Care
          </h1>

          {/* Floating "For" Badge - Visible on Desktop only */}
            <div className="hidden md:flex absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-primary w-14 h-14 items-center justify-center rounded-full text-white font-black shadow-lg text-lg">
            For
          </div>

          <div className="mt-4">
            {/* Mobile "for" inline badge */}
            <span className="md:hidden inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-3 mr-2 shadow-sm">
              for
            </span>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 text-white drop-shadow-sm">
              Missionary And Cross-Cultural Kids (PACMACK)
            </h2>
            
            <p className="text-base md:text-xl text-white/80 font-bold max-w-3xl mx-auto drop-shadow-sm leading-relaxed">
              Empowering the young and adult children of African Christian cross-cultural workers
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto items-center justify-center">
            <Link 
              to='/join'  
              className="flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-lg font-black uppercase tracking-wider transition-smooth hover:scale-105 active:scale-95 shadow-lg"
            >
              <FaBookReader size={20} /> Join Us
            </Link>
            
            <a 
              href='#donate'  
              className="flex items-center justify-center gap-2 border-2 border-white/40 bg-white/10 text-white px-10 py-4 rounded-lg font-black uppercase tracking-wider transition-smooth hover:bg-white hover:text-black shadow-lg"
            >
              <FiGift size={20} /> Donate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;