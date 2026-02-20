import React, { useState } from 'react';

// Assets
import dupe from '../../assets/dupe.jpeg';
import ab from '../../assets/ab.jpeg';
import grace from '../../assets/grace.jpeg';
import moni from '../../assets/moni.jpeg';
import roli from '../../assets/roli.jpeg';
import masin from '../../assets/masin.jpeg';
import kash from '../../assets/kash.jpeg';
import dano from '../../assets/dano.jpeg';

interface TeamMember {
  id: number;
  image: string;
  name: string;
  body: string;
}

const teamData: TeamMember[] = [
  { id: 5, image: dupe, name: 'Dupe Kashimawo', body: "Dupe Kashimawo is a member care facilitator and MK Caregiver..." },
  { id: 1, image: ab, name: "Abraham Aderonmu", body: "Abraham Aderonmu is an MK, a seasoned multimedia producer..." },
  { id: 2, image: grace, name: "Grace Mfon UDOH", body: "Grace Mfon UDOH is an MK, a dedicated and experienced educator..." },
  { id: 3, image: moni, name: 'Monica Miako', body: "Monica Miako is a Member Care practitioner and founder of Great Commission Support..." },
  { id: 4, image: roli, name: 'Roli SamKputu', body: "Roli SamKputu is a missionary serving with Calvary Ministries CAPRO..." },
  { id: 6, image: masin, name: 'Masinoluwa Kashimawo', body: "Masinoluwa Kashimawo is a missionary kid (MK) and Strategic Programs..." },
  { id: 7, image: kash, name: 'Funyinoluwa Kashimawo', body: "Funyinoluwa Kashimawo is an MK and mobile app developer..." },
  { id: 8, image: dano, name: 'Daniel Ekechukwu', body: "Daniel Ekechukwu is a web developer with a strong passion for technology..." },
];

const Team: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateText = (text: string, words = 12) => {
    const wordArray = text.split(' ');
    if (wordArray.length <= words) return text;
    return wordArray.slice(0, words).join(' ') + '...';
  };

  return (
    <section className="py-20 bg-brand-white" id="team">
      <div className="container-lg">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Planning Committee</h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            Meet the passionate team working behind the scenes to prayerfully organize and coordinate the PACMACK vision.
          </p>
        </div>

        {/* Horizontal Scroll Slider */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
          {teamData.map(({ id, name, image, body }) => (
            <div 
              key={id} 
              className="min-w-[280px] md:min-w-[320px] bg-brand-white rounded-2xl shadow-soft snap-center flex flex-col border border-brand-gray/20 transition-smooth hover:shadow-medium"
            >
              {/* Image Container */}
              <div className="h-72 w-full overflow-hidden rounded-t-2xl">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover transition-smooth hover:scale-105" 
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-brand-black mb-3">{name}</h3>
                <p className="text-sm text-brand-text leading-relaxed grow">
                  {expanded[id] ? body : truncateText(body)}
                </p>
                
                <button 
                  onClick={() => toggleExpand(id)}
                  className="mt-4 text-primary font-bold text-sm hover:underline w-fit"
                >
                  {expanded[id] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Hint for Desktop */}
        <p className="text-center text-xs text-brand-text/50 mt-4 animate-pulse">
          ← Swipe or Scroll to see more →
        </p>
      </div>
    </section>
  );
};

export default Team;