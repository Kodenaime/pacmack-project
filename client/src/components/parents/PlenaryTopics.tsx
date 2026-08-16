import React from 'react';
import { FiCalendar } from 'react-icons/fi';

interface Plenary {
  id: number;
  topic: string;
  speaker: string;
}

const PLENARIES: Plenary[] = [
  {
    id: 1,
    topic: 'Africans to Africans and to the rest of the world - A generational task of obedience',
    speaker: 'Dr Yohannes Yimer',
  },
  {
    id: 2,
    topic: 'Obedience - Not the Sacrifice (Abraham/Isaac lens Gen 22:1-18)',
    speaker: 'Dupe Kashimawo',
  },
  {
    id: 3,
    topic: 'The children that come along: Recognising the unique Identity of the MK/TCK',
    speaker: 'Michelle Phoenix & George Gumah',
  },
  {
    id: 4,
    topic: "The Call - The African Missionary Parents' Experience/Challenges and things to heed",
    speaker: 'Dr Linda Ogunsola',
  },
  {
    id: 5,
    topic: 'Not in vain - African MKs/TCKs as world changers, because of and in spite of Challenges',
    speaker: 'Mr Emmanuel Oladipo',
  },
  {
    id: 6,
    topic: 'Understanding and raising MK/TCK in an intra-continental cultural diversity',
    speaker: 'Dr Susan Paul',
  },
  {
    id: 7,
    topic: 'Plenary topic to be announced',
    speaker: 'Speaker to be announced',
  },
];

const PlenaryTopics: React.FC = () => {
  return (
    <section className="py-20 bg-brand-white" id="plenaries">
      <div className="container-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Plenary Topics</h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            Powerful plenary sessions led by seasoned voices addressing the heart of the missionary parent journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLENARIES.map((plenary) => (
            <div
              key={plenary.id}
              className="flex flex-col gap-4 bg-brand-bg p-8 rounded-xl border-l-4 border-primary shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="flex items-center gap-3">
                <FiCalendar className="text-primary shrink-0" size={18} />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-text">
                  Plenary Session {String(plenary.id).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-brand-black leading-snug">
                {plenary.topic}
              </h3>
              <p className="text-sm font-bold text-primary uppercase tracking-wide mt-auto pt-2 border-t border-brand-gray/30">
                {plenary.speaker}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlenaryTopics;
