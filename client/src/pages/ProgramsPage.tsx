import React, { useEffect } from 'react';
import { Link } from 'react-router';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import flier2025 from '../assets/flier.png';

const ProgramsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="grow pt-32 pb-20">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore our past highlights and upcoming conferences. Join us as we equip and support the families of African cross-cultural missionaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Parents Conference 2026 Card */}
            <div className="bg-brand-white border border-brand-gray/20 shadow-soft overflow-hidden group hover:shadow-medium transition-smooth flex flex-col">
              <div className="h-64 overflow-hidden relative bg-black flex justify-center items-center">
                 <img src="/2026flyer.jpeg" alt="2026 Conference Flyer" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-smooth" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <h2 className="absolute bottom-6 left-6 right-6 text-white text-3xl font-black uppercase tracking-tight">
                   Parents Conf <span className="text-primary">2026</span>
                 </h2>
              </div>
              <div className="p-8 flex flex-col grow">
                <p className="text-brand-text mb-6 flex-grow">
                  A dedicated space for African missionary parents to be equipped, encouraged, and seen. Nurturing MKs/TCKs as a Trust (Gen 22:1-18).
                </p>
                <Link to="/conference2026" className="inline-block bg-primary text-brand-black text-center font-bold uppercase tracking-widest px-6 py-3 shadow-soft hover:bg-black hover:text-white transition-smooth">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Highlights 2025 Card */}
            <div className="bg-brand-white border border-brand-gray/20 shadow-soft overflow-hidden group hover:shadow-medium transition-smooth flex flex-col">
              <div className="h-64 overflow-hidden relative bg-black flex justify-center items-center">
                 <img src={flier2025} alt="2025 Conference Flyer" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-smooth" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <h2 className="absolute bottom-6 left-6 right-6 text-white text-3xl font-black uppercase tracking-tight">
                   Conference <span className="text-primary">Highlights</span> 2025
                 </h2>
              </div>
              <div className="p-8 flex flex-col grow">
                <p className="text-brand-text mb-6 flex-grow">
                  Look back at the incredible moments, powerful speakers, and transformative experiences from our 2025 gathering.
                </p>
                <Link to="/highlights" className="inline-block bg-primary text-brand-black text-center font-bold uppercase tracking-widest px-6 py-3 shadow-soft hover:bg-black hover:text-white transition-smooth">
                  View Highlights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
