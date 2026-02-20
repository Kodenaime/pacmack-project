import React from 'react';
import goalImg from '../../assets/goals.jpeg';

const Goal: React.FC = () => {
  return (
    <section className="py-20 bg-brand-white" id="goal">
      {/* Using your custom container utility from index.css */}
      <div className="container-lg grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-black leading-tight">
            Why the theme <span className="text-primary italic">'THRIVE'</span>?
          </h1>
          
          <div className="space-y-6 text-brand-black/80 text-lg leading-relaxed">
            <p>
              To <strong className="text-brand-black">THRIVE</strong> means to grow or develop strongly, 
              healthily, and do exceptionally well. We believe African MKs and CCKs can reach 
              their highest potential because of—and in spite of—their unique upbringing.
            </p>
            
            <p>
              African MKs are impacting every sector of society. We seek to inspire this 
              generation to draw from the rich resource of their cross-cultural experience 
              as a catalyst for excellence in every vocation.
            </p>
            
            <p className="p-4 border-l-4 border-primary bg-primary-light rounded-r-lg">
              What started as a conference theme is now our community mandate: 
              Empowering the next generation to not just survive—but <span className="font-bold">thrive</span>.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 group">
          <div className="relative overflow-hidden rounded-2xl shadow-deep transition-smooth group-hover:shadow-soft">
            <img 
              src={goalImg} 
              alt="Thrive Goals" 
              className="w-full h-auto object-cover transition-smooth group-hover:scale-105"
            />
            {/* Subtle Overlay Decoration */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Goal;