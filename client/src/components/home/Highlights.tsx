import React from 'react';
import { Link } from 'react-router';

// Assets
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';
import work4 from '../../assets/plena.jpg';
import work5 from '../../assets/dev.jpg';

const Highlights: React.FC = () => {
  const highlights = [
    {
      title: "Devotions",
      body: "Worship & Prayer Times - refreshing moments in God’s presence.",
      image: work5,
      isLarge: true,
    },
    {
      title: "Plenaries",
      body: "Fun & Connection Activities - games, music, and interactive sessions.",
      image: work4,
      isLarge: true,
    },
    {
      title: "Workshops",
      body: "Breakout sessions covering identity, resilience, and mental health.",
      image: work2,
      isLarge: false,
    },
    {
      title: "Connection",
      body: "Interactive sessions that build friendships and lasting support networks.",
      image: work3,
      isLarge: false,
    },
  ];

  return (
    <section className="py-20 bg-primary-light" id="highlights">
      <div className="container-lg">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Conference Highlights
          </h2>
          <p className="text-gray-500 text-lg">
            Engaging talks and faith-filled sessions designed to equip missionary kids 
            with biblical wisdom, cultural understanding, and purpose-driven identity.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="group flex flex-col">
              <div className="relative overflow-hidden rounded-xl aspect-4/5 sm:aspect-square lg:aspect-4/5 shadow-medium">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                
                {/* Overlay with Title */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 transition-smooth group-hover:bg-black/20">
                  <h3 className="text-white text-2xl md:text-3xl font-black text-center uppercase tracking-wider drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              <p className="mt-4 text-brand-black/80 font-medium leading-snug">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Link 
            to='/highlights' 
            className="inline-block bg-primary text-brand-black px-8 py-3 rounded-lg font-bold shadow-medium transition-smooth hover:bg-primary-variant hover:-translate-y-1"
          >
            Explore All Highlights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Highlights;