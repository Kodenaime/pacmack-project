import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import parentsConference2026 from '../../data/parentsConference2026';

interface TeamMember {
  id: number;
  image: string;
  name: string;
  body: string;
}

const ParentsConferenceTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const truncateText = (text: string, words = 12) => {
    const wordArray = text.split(' ');
    if (wordArray.length <= words) return text;
    return wordArray.slice(0, words).join(' ') + '...';
  };

  return (
    <section className="py-20 bg-brand-white" id="parents-team">
      <div className="container-lg">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Planning Committee</h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            Meet the team prayerfully planning the PACMACK Parents Conference 2026.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
          {parentsConference2026.map(({ id, name, image, body }) => (
            <div 
              key={id} 
              className="min-w-70 md:min-w-[320px] bg-brand-white rounded-2xl shadow-soft snap-center flex flex-col border border-brand-gray/20 transition-smooth hover:shadow-medium"
            >
              <div className="h-72 w-full overflow-hidden rounded-t-2xl">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover transition-smooth hover:scale-105" 
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-brand-black mb-3">{name}</h3>
                <p className="text-sm text-brand-text leading-relaxed grow">
                  {truncateText(body)}
                </p>
                
                <button 
                  onClick={() => setSelectedMember({ id, name, image, body })}
                  className="mt-4 text-primary font-bold text-sm hover:underline w-fit"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Hint */}
        <p className="text-center text-xs text-brand-text/50 mt-4 animate-pulse">
          ← Swipe or Scroll to see more →
        </p>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white text-brand-black w-full max-w-sm max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-deep animate-in fade-in zoom-in duration-300">
            
            <button 
              className="absolute top-4 right-4 p-2 text-2xl text-brand-text hover:text-brand-black transition-smooth z-10" 
              onClick={() => setSelectedMember(null)}
            >
              <FiX />
            </button>
            
            <div className="p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <h3 className="text-xl font-bold text-brand-black text-center mb-4">
                {selectedMember.name}
              </h3>

              <p className="text-sm text-neutral-700 leading-relaxed">
                {selectedMember.body}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ParentsConferenceTeam;
