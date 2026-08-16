import React, { useState, useEffect } from 'react';
import { FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';

const TARGET_DATE = new Date('2026-10-01T00:00:00');

const CONFERENCE_OBJECTIVES = [
  'Encourage missionary parents in raising children who love and serve the Lord.',
  'Educate parents on MK/TCK identity and the lifelong impact of missionary life on children.',
  'Emphasize the need for intentional care for children at every stage of missionary transition.',
  'Provide space for African missionary parents to share challenges and triumphs.',
  
  'Explore how generational differences affect communication and values. Equip parents with skills in empathy, listening, and meaningful connection.',
  'Highlight trauma, transitions, and identity challenges. Address the unique challenges faced by African MKs/TCKs.',
  'Foster peer learning and shared experiences.', 
  'Connect families with MK/TCK care resources and support networks.',
  'Build a supportive community through networking and shared stories.',
];

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="py-16 md:py-20 bg-neutral-100 text-brand-black" id="countdown">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Conference info + countdown */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm inline-block mb-4">
              Upcoming National Event 2026
            </span>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-2">
              Parents Conference
            </h2>
            <p className="text-lg md:text-2xl text-brand-black/70 font-semibold mb-6">
              &ldquo;...Not The Sacrifice&rdquo; <span className="text-sm md:text-base font-normal opacity-70">(Gen 22:1-18)</span>
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6 text-sm md:text-base text-brand-black/70">
              <span className="flex items-center gap-2">
                <FiCalendar className="text-primary" size={18} />
                October 1st - 4th, 2026
              </span>
              <span className="flex items-center gap-2">
                <FiMapPin className="text-primary" size={18} />
                Abuja, Nigeria
              </span>
            </div>

            <p className="text-brand-black/70 max-w-xl mb-10 text-sm md:text-base leading-relaxed">
              A dedicated space for African missionary parents to be equipped, encouraged, and seen.
            </p>

            {/* Countdown */}
            <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-10">
              {[
                { value: pad(timeLeft.days), label: 'Days' },
                { value: pad(timeLeft.hours), label: 'Hours' },
                { value: pad(timeLeft.minutes), label: 'Minutes' },
                { value: pad(timeLeft.seconds), label: 'Seconds' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center lg:items-start">
                  <span className="text-5xl md:text-7xl font-black leading-none tabular-nums text-brand-black">
                    {item.value}
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-widest text-brand-black/60 mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Conference objectives */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-soft border border-brand-gray/20">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-brand-black mb-6 border-b-2 border-primary pb-3">
              Conference Objectives
            </h3>
            <ul className="space-y-4">
              {CONFERENCE_OBJECTIVES.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FiCheck className="text-primary shrink-0 mt-1" size={18} />
                  <p className="text-sm md:text-base text-brand-black/80 leading-relaxed">{objective}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
