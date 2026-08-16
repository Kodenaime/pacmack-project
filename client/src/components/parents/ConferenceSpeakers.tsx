import React, { useRef, useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import conferenceSpeakers from '../../data/conferenceSpeakers';

interface ConferenceSpeaker {
  id: number;
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
}

const truncateBio = (text: string, words = 50) => {
  const wordArray = text.split(' ');
  if (wordArray.length <= words) return text;
  return wordArray.slice(0, words).join(' ') + '...';
};

const ConferenceSpeakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<ConferenceSpeaker | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth, behavior: 'smooth' });
    }
  };

  const keynote = conferenceSpeakers.find((s) => s.title === 'Keynote Speaker') ?? conferenceSpeakers[0];
  const otherSpeakers = conferenceSpeakers.filter((s) => s.id !== keynote.id);

  return (
    <section className="py-20 bg-brand-bg" id="speakers">
      <div className="container-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Conference Speakers</h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            Meet the speakers who will be sharing at the PACMACK Parents Conference 2026.
          </p>
        </div>

        {/* Keynote Speaker */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 bg-white rounded-2xl shadow-soft border border-brand-gray/20 p-8 md:p-10">
          <div className="lg:w-1/3 w-full max-w-xs relative shrink-0">
            <div className="absolute -top-3 -left-3 bg-primary text-brand-black font-black px-5 py-2 uppercase tracking-wider z-10 text-sm shadow-medium">
              Keynote Speaker
            </div>
            <div className="aspect-4/5 bg-brand-bg overflow-hidden rounded-xl shadow-soft">
              <img src={keynote.image} alt={keynote.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-black mb-2">{keynote.name}</h3>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{keynote.title}</p>
            <p className="text-brand-text font-medium uppercase tracking-wide text-xs mb-4">{keynote.role}</p>
            <p className="text-brand-text text-base leading-relaxed mb-5">{truncateBio(keynote.bio)}</p>
            <button
              onClick={() => setSelectedSpeaker(keynote)}
              className="text-primary font-bold text-sm hover:underline w-fit"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Other Speakers - Horizontally Scrollable */}
        <div className="relative">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black">Other Speakers</h3>
            <div className="flex gap-3">
              <button
                onClick={() => scroll('left')}
                className="p-3 bg-brand-black text-white rounded-full hover:bg-primary hover:text-brand-black transition-all active:scale-95"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 bg-brand-black text-white rounded-full hover:bg-primary hover:text-brand-black transition-all active:scale-95"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          >
            {otherSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="min-w-70 md:min-w-[320px] bg-white rounded-2xl shadow-soft snap-center flex flex-col border border-brand-gray/20 overflow-hidden"
              >
                <div className="h-64 w-full overflow-hidden bg-brand-bg">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h4 className="text-xl font-bold text-brand-black mb-1">{speaker.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{speaker.title}</p>
                  <p className="text-brand-text font-medium uppercase tracking-wide text-xs mb-3">{speaker.role}</p>
                  <p className="text-sm text-brand-text leading-relaxed grow">{truncateBio(speaker.bio)}</p>
                  <button
                    onClick={() => setSelectedSpeaker(speaker)}
                    className="mt-4 text-primary font-bold text-sm hover:underline w-fit"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Speaker Bio Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white text-brand-black w-full max-w-sm max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-deep animate-in fade-in zoom-in duration-300">
            <button
              className="absolute top-4 right-4 p-2 text-2xl text-brand-text hover:text-brand-black transition-smooth z-10"
              onClick={() => setSelectedSpeaker(null)}
            >
              <FiX />
            </button>
            <div className="p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 bg-brand-bg">
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-brand-black text-center mb-1">{selectedSpeaker.name}</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest text-center mb-1">{selectedSpeaker.title}</p>
              <p className="text-brand-text font-medium uppercase tracking-wide text-xs text-center mb-4">{selectedSpeaker.role}</p>
              <p className="text-sm text-neutral-700 leading-relaxed">{selectedSpeaker.bio}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ConferenceSpeakers;
