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
    name: "Kwame N.",
    role: "2025 Attendee | MK/TCK West Africa",
    content: "As a lifelong MK and CCK coming for PACMACK was so necessary, and I never knew how much I needed it. An amazing conference, wonderful speakers, refreshing fellowship, and most important a new family that I'm grateful for."
  },
  {
    id: 2,
    name: "Okeoghene O",
    role: "2025 Attendee | TCK Nigeria",
    content: "PACMACK was the best thing that happened to me in 2025. I got to network with real people building careers and business, and this completely changed my mindset. I am happy to say I am now part of a community that supports me spiritually, emotionally, in my career, and even business-wise."
  },
  {
    id: 3,
    name: "Nahum H.",
    role: "2025 Attendee | TCK  West Africa",
    content: "The PACMACK conference was an eye-opening experience, allowing us to meet other MKs and build strong bonds. The facility, team, and especially the speakers’ lessons were practical, impactful, and truly inspiring."
  },
  {
    id: 4,
    name: "Grace I.",
    role: "2025 Attendee | TCK East Africa",
    content: "PACMACK 2025 was indeed a lifetime experience! The best part of it was the people; for the first time in my life, I felt seen and heard. I met all these different people from different places, but who had a similar upbringing to mine. I am glad for the family PACMACK gave me, and can’t wait for the next one. For now, I do not just survive, I THRIVE!"
  },
  {
    id: 5,
    name: "Shaba O.",
    role: "2025 Attendee | TCK Nigeria",
    content: "PACMACK gave me a space to heal, to re-ignite my passions, to find the strength to plot the uncharted and a community that shares my past and background. I am proudly an MK"
  },
  {
    id: 6,
    name: "Esta K.",
    role: "2025 Attendee | TCK East Africa",
    content: "The PACMACK Conference marked a significant point in my personal growth. It challenged me to confront hidden struggles, process my cross-cultural identity with honesty and pursue emotional and spiritual maturity intentionally. I left with deeper self-awareness, renewed confidence, and practical tools to thrive purposeful shaped by a unique journey."
  },
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
          <a href="#contact" className="text-brand-black font-bold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-smooth">
            Send us your testimony
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;