import React, { useState, useEffect } from 'react';
import { FiArrowDown } from 'react-icons/fi';

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

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('intro-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-100 text-brand-black" id="countdown">
      <div className="container-lg max-w-5xl">
        
        {/* Timer Container (Centered & Above) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
            Conference Countdown
          </span>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black mb-8">
            October 1st – 4th, 2026 | Abuja, Nigeria
          </h3>

          <div className="flex items-center justify-center gap-4 md:gap-8 bg-white px-8 py-6 rounded-3xl shadow-soft border border-brand-gray/10 mb-10">
            {[
              { value: pad(timeLeft.days), label: 'Days' },
              { value: pad(timeLeft.hours), label: 'Hours' },
              { value: pad(timeLeft.minutes), label: 'Minutes' },
              { value: pad(timeLeft.seconds), label: 'Seconds' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center px-2 md:px-4">
                <span className="text-4xl md:text-6xl font-black leading-none tabular-nums text-brand-black">
                  {item.value}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-black/50 mt-2 font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={scrollToNextSection}
              className="inline-flex items-center gap-2 border-2 border-brand-black/20 hover:border-brand-black text-brand-black font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl transition-all cursor-pointer bg-white"
            >
              Learn More <FiArrowDown size={14} />
            </button>
            <a
              href="https://forms.gle/q8XRATaJV7CLmxqH9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-brand-black hover:text-white text-brand-black font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl transition-all shadow-xl cursor-pointer"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Conference Objectives (Underneath) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-brand-gray/20">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black mb-8 border-b-2 border-primary pb-4 text-center md:text-left">
            Conference Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONFERENCE_OBJECTIVES.map((objective, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-brand-bg rounded-xl border border-brand-gray/5">
                <span className="text-primary text-2xl leading-none -mt-1 shrink-0">•</span>
                <p className="text-sm md:text-base text-brand-black/80 leading-relaxed font-semibold">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CountdownTimer;
