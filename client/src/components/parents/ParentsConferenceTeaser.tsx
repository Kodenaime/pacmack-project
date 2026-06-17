import React from 'react';
import { Link } from 'react-router';
import { FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi';
import flyerImage from '/2026flyer.jpeg';

const ParentsConferenceTeaser: React.FC = () => {
  return (
    <section className="py-20 bg-brand-white border-b border-brand-gray/10" id="parents-teaser">
      {/* Linked perfectly with your central container utility wrapper */}
      <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image Area matching the sizing proportions of your Goal element */}
        <div className="group">
          <div className="relative overflow-hidden rounded-2xl shadow-deep transition-smooth group-hover:shadow-soft">
            <img 
              src={flyerImage} 
              alt="PACMACK Parents Conference 2026 Flyer" 
              className="w-full h-150 transition-smooth group-hover:scale-105"
            />
            {/* Consistent Overlay Token styling decoration */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Clean, Balanced Text block clearing out the vast trailing white-space */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Upcoming National Event — 2026
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-black leading-tight uppercase">
              Parents Conference
            </h1>
            <h3 className="text-lg md:text-xl font-semibold text-brand-black/60">
              Theme: ...Not The Sacrifice <span className="text-sm font-normal normal-case opacity-70">(Gen 22:1-18)</span>
            </h3>
          </div>
          
          <div className="space-y-6 text-brand-black/80 text-lg leading-relaxed">
            <p className="text-[16px]">
              Missionary Kids and Third Culture Kids are a global phenomenon that is a reality for the children of African Cross-cultural missionaries and pastors. They are impacted in ways that most parents do not understand.
            </p>
            
            <p className="text-[16px]">
              The 2026 PACMACK Parents Conference is a dedicated space for African missionary parents to be equipped, encouraged, and seen. Come find the language, tools, resources, and a community that cares.
            </p>
            
            {/* Context Box mapped precisely to the CSS variables of your project */}
            <div className="p-4 border-l-4 border-primary bg-primary-light rounded-r-lg flex flex-col gap-2">
              <div className="flex items-center gap-2 font-bold text-brand-black text-[14px]">
                <FiCalendar className="text-primary" size={16} />
                <span>October 1st - 4th, 2026</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-brand-black text-[14px]">
                <FiMapPin className="text-primary" size={16} />
                <span>Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Action Row containing matching structural button controls */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link 
              to="/conference2026"
              className="inline-flex items-center justify-center gap-2 bg-brand-black text-brand-white font-bold uppercase tracking-widest text-xs px-6 py-3.5 transition-smooth hover:bg-primary hover:text-brand-black"
            >
              Learn More <FiArrowRight />
            </Link>
            
            <a 
              href="https://forms.gle/q8XRATaJV7CLmxqH9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-primary text-brand-black font-bold uppercase tracking-widest text-xs px-6 py-3.5 shadow-medium transition-smooth hover:scale-105"
            >
              Register Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ParentsConferenceTeaser;