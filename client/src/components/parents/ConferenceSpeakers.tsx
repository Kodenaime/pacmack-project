import React, { useRef, useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import conferenceSpeakers from '../../data/conferenceSpeakers';
import type { ConferenceSpeaker } from '../../data/conferenceSpeakers';

const truncateBio = (text: string, words = 40) => {
  const wordArray = text.split(' ');
  if (wordArray.length <= words) return text;
  return wordArray.slice(0, words).join(' ') + '...';
};

const ConferenceSpeakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<ConferenceSpeaker | null>(null);
  
  const speakersScrollRef = useRef<HTMLDivElement>(null);
  const guestsScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      ref.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const speakers = conferenceSpeakers
    .filter((s) => s.type === 'speaker')
    .sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0));
  
  const guests = conferenceSpeakers
    .filter((s) => s.type === 'guest')
    .sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0));

  return (
    <section className="py-20 bg-brand-bg" id="speakers">
      <div className="container-lg">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Conference Speakers & Guests
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto text-base md:text-lg">
            Meet the leaders, facilitators, and guests who will be sharing at the PACMACK Parents Conference 2026.
          </p>
        </div>

        {/* 1. Conference Speakers Scroller */}
        <div className="relative mb-20">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black border-l-4 border-primary pl-4">
              Conference Speakers
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => scroll(speakersScrollRef, 'left')}
                className="p-3 bg-brand-black text-white rounded-full hover:bg-primary hover:text-brand-black transition-all active:scale-95 cursor-pointer"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(speakersScrollRef, 'right')}
                className="p-3 bg-brand-black text-white rounded-full hover:bg-primary hover:text-brand-black transition-all active:scale-95 cursor-pointer"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={speakersScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          >
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="min-w-70 md:min-w-[320px] bg-white rounded-2xl shadow-soft snap-center flex flex-col border border-brand-gray/20 overflow-hidden"
              >
                <div className="h-64 w-full overflow-hidden border-b border-brand-gray/10">
                  {speaker.image ? (
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-brand-black/5 flex items-center justify-center text-brand-black/30">
                      <span className="text-4xl font-black uppercase tracking-widest">
                        {speaker.name.split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 3)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col grow">
                  <h4 className="text-xl font-bold text-brand-black mb-1">{speaker.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{speaker.title}</p>
                  <p className="text-brand-text font-medium uppercase tracking-wide text-xs mb-3">{speaker.role}</p>
                  <p className="text-sm text-brand-text leading-relaxed grow">{truncateBio(speaker.bio)}</p>
                  <button
                    onClick={() => setSelectedSpeaker(speaker)}
                    className="mt-4 text-primary font-bold text-sm hover:underline w-fit cursor-pointer"
                  >
                    Read Bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Conference Guests Scroller */}
        <div className="relative">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black border-l-4 border-black pl-4">
              Conference Guests
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => scroll(guestsScrollRef, 'left')}
                className="p-3 bg-brand-black text-white rounded-full hover:bg-primary hover:text-brand-black transition-all active:scale-95 cursor-pointer"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(guestsScrollRef, 'right')}
                className="p-3 bg-brand-black text-white rounded-full hover:bg-primary hover:text-brand-black transition-all active:scale-95 cursor-pointer"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={guestsScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          >
            {guests.map((guest) => (
              <div
                key={guest.id}
                className="min-w-70 md:min-w-[320px] bg-white rounded-2xl shadow-soft snap-center flex flex-col border border-brand-gray/20 overflow-hidden"
              >
                <div className="h-64 w-full overflow-hidden border-b border-brand-gray/10">
                  {guest.image ? (
                    <img src={guest.image} alt={guest.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-brand-black/5 flex items-center justify-center text-brand-black/30">
                      <span className="text-4xl font-black uppercase tracking-widest">
                        {guest.name.split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 3)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col grow">
                  <h4 className="text-xl font-bold text-brand-black mb-1">{guest.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{guest.title}</p>
                  <p className="text-brand-text font-medium uppercase tracking-wide text-xs mb-3">{guest.role}</p>
                  <p className="text-sm text-brand-text leading-relaxed grow">{truncateBio(guest.bio)}</p>
                  <button
                    onClick={() => setSelectedSpeaker(guest)}
                    className="mt-4 text-primary font-bold text-sm hover:underline w-fit cursor-pointer"
                  >
                    Read Bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Speaker Bio Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-white text-brand-black w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-deep p-8 animate-in fade-in zoom-in duration-300">
            <button
              className="absolute top-6 right-6 p-2 text-2xl text-brand-text hover:text-brand-black transition-smooth z-10 cursor-pointer"
              onClick={() => setSelectedSpeaker(null)}
            >
              <FiX />
            </button>
            <div>
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 bg-brand-black/5 flex items-center justify-center text-brand-black/30">
                {selectedSpeaker.image ? (
                  <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-black uppercase tracking-widest">
                    {selectedSpeaker.name.split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 3)}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-black text-brand-black text-center mb-1 uppercase tracking-tight">
                {selectedSpeaker.name}
              </h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest text-center mb-1">
                {selectedSpeaker.title}
              </p>
              <p className="text-brand-text font-semibold uppercase tracking-wide text-xs text-center mb-6">
                {selectedSpeaker.role}
              </p>
              <div className="border-t border-brand-gray/10 pt-6">
                <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                  {selectedSpeaker.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ConferenceSpeakers;
