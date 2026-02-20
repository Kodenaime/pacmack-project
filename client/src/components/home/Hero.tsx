import React from 'react';
import Navbar from '../../layout/Navbar';
import { FiGift } from "react-icons/fi";
import { FaBookReader } from "react-icons/fa";
import { Link } from 'react-router';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen bg-[url('/mainhero.jpeg')] bg-cover bg-center text-brand-white">
      <Navbar />
      
      {/* Hero Overlay Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] mt-16 p-8 flex flex-col items-center text-center bg-black/50 rounded-2xl backdrop-blur-sm">
        
        {/* Status Badge */}
        <div className="flex items-center gap-2 border border-brand-white px-4 py-2 rounded-full mb-6 transition-smooth hover:bg-brand-white/10">
          <p className="text-sm md:text-base font-medium">Welcome to the PACMACK Community</p>
        </div>

        <div className="relative w-full">
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 leading-tight">
            Pan-African Conference
          </h1>

          {/* Floating "For" Badge - Visible on Desktop only */}
          <div className="hidden md:flex absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-primary w-12 h-12 items-center justify-center rounded-full text-brand-black font-bold shadow-deep">
            For
          </div>

          <div className="mt-4">
            {/* Mobile "for" inline badge */}
            <span className="md:hidden inline-block bg-primary text-brand-black px-2 py-1 rounded-full text-xs font-bold mb-2 mr-2">
              for
            </span>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">
              Missionary And Cross-cultural Kids (PACMACK)
            </h2>
            
            <p className="text-sm md:text-xl text-brand-text max-w-2xl mx-auto">
              Empowering the young and adult children of African Christian cross-cultural workers
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <Link 
            to='/register'  
            className="flex items-center justify-center gap-2 bg-primary text-brand-black px-8 py-3 rounded-lg font-bold transition-smooth hover:scale-105 active:scale-95 shadow-medium"
          >
            <FaBookReader /> Join Us
          </Link>
          
          <a 
            href='#donate'  
            className="flex items-center justify-center gap-2 border-2 border-brand-white px-8 py-3 rounded-lg font-bold transition-smooth hover:bg-brand-white hover:text-brand-black"
          >
            <FiGift /> Donate
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;