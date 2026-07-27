import React from 'react';
import { Link } from 'react-router';
import { FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi';

const ParentsConferenceTeaser: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-brand-white" id="teaser">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Flyer */}
          <div className="flex justify-center">
            <div className="relative max-w-sm w-full bg-[#1a1a1a] p-4 border border-brand-gray/20 shadow-2xl">
              <img 
                src="/2026flyer.jpeg" 
                alt="Official PACMACK 2026 Parents Conference Theme Poster" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm inline-block mb-4">
              Upcoming National Event 2026
            </span>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-2">
              Parents Conference
            </h2>
            <p className="text-lg md:text-2xl text-brand-black/60 font-semibold mb-6">
              &ldquo;...Not The Sacrifice&rdquo; <span className="text-sm md:text-base font-normal opacity-70">(Gen 22:1-18)</span>
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6 text-sm md:text-base text-brand-black/60">
              <span className="flex items-center gap-2">
                <FiCalendar className="text-primary" size={18} />
                October 1st &ndash; 4th, 2026
              </span>
              <span className="flex items-center gap-2">
                <FiMapPin className="text-primary" size={18} />
                Abuja, Nigeria
              </span>
            </div>

            <p className="text-brand-black/70 max-w-xl mb-8 text-sm md:text-base leading-relaxed">
              A dedicated space for African missionary parents to be equipped, encouraged, and seen.
              Come find the language, tools, resources, and a community that cares.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start gap-4">
              <Link
                to="/conference2026"
                className="inline-flex items-center justify-center gap-2 bg-brand-black text-brand-white font-black uppercase tracking-widest text-xs px-8 py-4 transition-smooth hover:bg-primary hover:text-brand-black shadow-xl"
              >
                Learn More <FiArrowRight size={16} />
              </Link>
              <a
                href="https://forms.gle/q8XRATaJV7CLmxqH9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-brand-black font-black uppercase tracking-widest text-xs px-8 py-4 transition-smooth hover:bg-brand-black hover:text-brand-white shadow-xl"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsConferenceTeaser;
