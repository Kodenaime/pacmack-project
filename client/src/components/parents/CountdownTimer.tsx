import React, { useState, useEffect } from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const TARGET_DATE = new Date('2026-10-01T00:00:00');

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
    <section className="py-16 md:py-20 bg-neutral-900 text-white" id="countdown">
      <div className="container-lg">
        <div className="flex flex-col items-center text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm inline-block mb-4">
            Upcoming National Event 2026
          </span>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-2">
            Parents Conference
          </h2>
          <p className="text-lg md:text-2xl text-white/60 font-semibold mb-6">
            &ldquo;...Not The Sacrifice&rdquo; <span className="text-sm md:text-base font-normal opacity-70">(Gen 22:1-18)</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm md:text-base text-white/60">
            <span className="flex items-center gap-2">
              <FiCalendar className="text-primary" size={18} />
              October 1st - 4th, 2026
            </span>
            <span className="flex items-center gap-2">
              <FiMapPin className="text-primary" size={18} />
              Abuja, Nigeria
            </span>
          </div>

          <p className="text-white/60 max-w-xl mb-10 text-sm md:text-base leading-relaxed">
            A dedicated space for African missionary parents to be equipped, encouraged, and seen.
          </p>

          <div className="flex items-center justify-center gap-6 md:gap-12">
            {[
              { value: pad(timeLeft.days), label: 'Days' },
              { value: pad(timeLeft.hours), label: 'Hours' },
              { value: pad(timeLeft.minutes), label: 'Minutes' },
              { value: pad(timeLeft.seconds), label: 'Seconds' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tabular-nums text-white">
                  {item.value}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-white/50 mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
