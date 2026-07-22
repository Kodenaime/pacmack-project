import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi';

const TARGET_DATE = new Date('2026-10-01T00:00:00');

const ParentsConferenceTeaser: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="py-16 md:py-20 bg-neutral-900 text-white overflow-hidden" id="parents-teaser">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="text-center lg:text-left">
            {/* Label */}
            <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm inline-block mb-4">
              Upcoming National Event — 2026
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-2">
              Parents Conference
            </h2>
            <p className="text-lg md:text-2xl text-white/60 font-semibold mb-6">
              &ldquo;...Not The Sacrifice&rdquo; <span className="text-sm md:text-base font-normal opacity-70">(Gen 22:1-18)</span>
            </p>

            {/* Date & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10 text-sm md:text-base text-white/60">
              <span className="flex items-center gap-2">
                <FiCalendar className="text-primary" size={18} />
                October 1st &ndash; 4th, 2026
              </span>
              <span className="flex items-center gap-2">
                <FiMapPin className="text-primary" size={18} />
                Abuja, Nigeria
              </span>
            </div>

            {/* Description */}
            <p className="text-white/70 max-w-2xl mb-10 text-sm md:text-base leading-relaxed">
              A dedicated space for African missionary parents to be equipped, encouraged, and seen.
              Come find the language, tools, resources, and a community that cares.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start gap-4">
              <Link
                to="/conference2026"
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-black uppercase tracking-widest text-xs px-8 py-4 transition-smooth hover:bg-primary hover:text-neutral-900 shadow-xl"
              >
                Learn More <FiArrowRight size={16} />
              </Link>
              <a
                href="https://forms.gle/q8XRATaJV7CLmxqH9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-neutral-900 font-black uppercase tracking-widest text-xs px-8 py-4 transition-smooth hover:bg-white hover:text-neutral-900 shadow-xl"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Right: Countdown Timer */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs md:text-sm uppercase tracking-widest text-white/50 mb-6">
              Conference starts in
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {[
                { value: pad(timeLeft.days), label: 'Days' },
                { value: pad(timeLeft.hours), label: 'Hours' },
                { value: pad(timeLeft.minutes), label: 'Minutes' },
                { value: pad(timeLeft.seconds), label: 'Seconds' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tabular-nums text-white">
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
      </div>
    </section>
  );
};

export default ParentsConferenceTeaser;
