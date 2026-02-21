import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string; 
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    role: "2025 Attendee | MK from Kenya",
    content: "PACMACK was the first time I felt truly understood. Being around other MKs who share the same 'caught between worlds' feeling changed my perspective on my identity."
  },
  {
    id: 2,
    name: "Dr. Samuel Ade",
    role: "Parent & Mission Leader",
    content: "The workshops on trauma and resilience were eye-opening. As a parent, I now have better tools to support my children as they navigate cross-cultural life."
  },
  {
    id: 3,
    name: "Emmanuel T.",
    role: "Young Adult | TCK",
    content: "The connection didn't end in October. The community we've built since the conference has been a consistent source of encouragement for my faith and vocation."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-white overflow-hidden" id="testimonials">
      <div className="container-lg">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Voices from the <span className="text-primary">Community</span>
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto italic">
            "Real stories from those who joined us in 2025 and are now part of the PACMACK movement."
          </p>
        </div>

        {/* Testimonials Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="relative p-8 rounded-2xl bg-brand-bg border border-brand-gray/10 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-medium group"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -left-2 bg-primary text-brand-black p-3 rounded-xl shadow-medium transform -rotate-12 group-hover:rotate-0 transition-smooth">
                <FaQuoteLeft size={20} />
              </div>

              <div className="flex flex-col h-full">
                <p className="text-brand-black/80 leading-relaxed mb-6 italic grow">
                  "{t.content}"
                </p>
                
                <div className="border-t border-brand-gray/20 pt-4">
                  <h4 className="font-bold text-brand-black text-lg">{t.name}</h4>
                  <p className="text-primary text-sm font-medium uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Testimonials */}
        <div className="mt-16 text-center">
          <p className="text-brand-text mb-4">Have a story to share from PACMACK 2025?</p>
          <button className="text-brand-black font-bold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-smooth">
            Send us your testimony
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;