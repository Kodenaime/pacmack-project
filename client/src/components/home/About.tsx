import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg" id="about">
      <div className="max-w-lg mx-auto px-6">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Mission & Origin */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-black relative">
              About Pacmack
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h1>
            
            <div className="space-y-4 text-brand-black/80 leading-relaxed text-base md:text-lg">
              <p>
                The PACMACK community grew out of the International Third Culture Kids Conference (ITCKC) in Thailand, 2023. 
                What started as a response to the global South's need for TCK support has evolved into a permanent home 
                for Africa's missionary kids.
              </p>
              <p>
                The Pan African Conference for Missionary and Cross-Cultural Christian Workers’ Kids (PACMACK) 
                is designed specifically for MKs and children of cross-cultural workers across Africa.
              </p>
              <p className="font-medium italic text-brand-black">
                "Caught between cultures, managing high expectations, and carrying silent struggles—we provide 
                the space where these stories are heard."
              </p>
            </div>
          </div>

          {/* Right Column: The "Why" & Community Goals */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-black relative">
              Why a Community?
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h1>
            
            <div className="space-y-4 text-brand-black/80 text-base md:text-lg">
              <p>
                For over 20 years, we’ve seen a painful pattern: unresolved cultural struggles leading to 
                isolation and disconnect. We are breaking that cycle.
              </p>
              
              <ul className="space-y-4 mt-6">
                {[
                  "A safe, healing space for open sharing and encouragement.",
                  "Addressing neglected traumas and identity struggles.",
                  "Building a sense of belonging among young people.",
                  "Equipping them mentally, spiritually, and emotionally to thrive."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-smooth" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;