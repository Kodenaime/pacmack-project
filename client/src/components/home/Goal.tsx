import React from 'react';
import goalImg from '../../assets/goal.webp';

const Goal: React.FC = () => {
  return (
    <section className="py-20 bg-brand-white" id="goal">
      {/* Using your custom container utility from index.css */}
      <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-black leading-tight">
            A Community Africa Had Been Waiting For
          </h1>
          
          <div className="space-y-6 text-brand-black/80 text-lg leading-relaxed">
            <p className='text-[16px]'>
              Existing as a convening and networking ground, a place where relationships are formed, resources are developed, and capacity for MK care is cultivated.
              The vision of <strong className="text-brand-black">PACMACK</strong> extends far beyond a single gathering. 
              It is to see the intentional establishment and steady growth of MK care and community across African nations, rooted in support,
              understanding, and shared identity.
            </p>
            
            <p className='text-[16px]'>
              PACMACK 1.0, themed Thrive, was not a call to survive complex upbringings or merely cope with cross-cultural tension. 
              Thrive reframed the conversation toward wholeness, purpose, and the confidence to shape their own paths. 
              It invited African MKs and children of cross-cultural Christian workers to understand their stories, name their experiences,
              and recognize the strengths forged through their journeys, not as anomalies to be managed, but as foundations for growth, 
              leadership, and impact.
            </p>
            
            <p className="p-4 border-l-4 border-primary bg-primary-light rounded-r-lg text-[16px]">
              For decades, African MKs and children of cross-cultural Christian workers have lived between worlds, 
              cultures, languages, and expectations, often without the language or community to process those experiences.  
              <span className="font-bold ml-1.5">PACMACK</span> created that space for learning and belonging.
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