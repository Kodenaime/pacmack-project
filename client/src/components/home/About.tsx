import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg" id="about">
      <div className="container-lg px-6">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: About PACMACK */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-black text-brand-black relative uppercase tracking-tight">
              About PACMACK
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
            </h1>
            
            <div className="space-y-6 text-brand-black/80 leading-relaxed text-sm md:text-base font-semibold">
              <p>
                Pan-African Care for Missionary and Cross-cultural Kids PACMACK is a community of MK/TCK Caregivers and adult MKs/TCKs across mission organizations and sending churches in Africa.
              </p>
              
              <p>
                PACMACK is a community that seeks through a united effort and networking to:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Raise awareness about the impact of missionary life and frequent movements on the children of Africa's Cross-cultural workers.",
                  "Encourage the formation of MK/TCK care communities across Africa through conferences, Booth camps, training of core leaders, resource development and resource deployment.",
                  "Facilitate and encourage the formation of MK/ TCK communities in the different regions and countries in Africa. Thereby expanding the spiritual and social network of the MKs/TCKs, giving them a belonging, a space where they are seen, heard and supported.",
                  "PACMACK supports such communities with access to training, counselling, debriefing, trauma healing and educational contents necessary for MKs/TCK to find purpose in their identity, remain rooted in Christ while finding their place in the global Gospel mandate.",
                  "To advocate and advance the need for intentional parental care, and organizational policies for the well being of the families and the children of the workers."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 text-xs font-bold text-primary">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-4 border-t border-brand-gray/10 font-bold text-brand-black">
                PACMACK works across mission organizations and sending churches across countries in Africa.
              </p>
            </div>
          </div>

          {/* Right Column: Why PACMACK? */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-black text-brand-black relative uppercase tracking-tight">
              Why PACMACK?
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
            </h1>
            
            <div className="space-y-6 text-brand-black/80 leading-relaxed text-sm md:text-base font-semibold">
              <p>
                Increasing involvement of Africa in sending Cross-Cultural workers in frontier missionary engagements has resulted in a rapidly growing demography of Cross-cultural children (MKs, PKs) in Africa. A large number of these children have grown and are growing up in complex cultural environments without an existing support network, and without adequate resources to process the unique challenges of their experiences.
              </p>

              <p>
                In many African contexts, the experiences, feelings, and trauma of children are rarely acknowledged. The common belief is “they are children; what do they know? They will adapt.” But in reality, many do not simply adapt - they carry wounds silently into adulthood.
              </p>

              <p>
                Over more than 20 years of working with MKs, we have observed a painful pattern: because these struggles often remain unresolved, many eventually take a complete 180-degree turn away from church, the things of God, and anything connected to their parents’ life’s work. The very children whose parents labored sacrificially in ministry sometimes grow up feeling disconnected, resentful, and alone.
              </p>
              
              <div className="border-t border-brand-gray/10 pt-4">
                <p className="font-bold text-brand-black mb-3">
                  PACMACK was born out of a vision to break that cycle by:
                </p>
                <ul className="space-y-3">
                  {[
                    "Providing a safe and healing space where MKs can share openly and receive encouragement.",
                    "Addressing neglected traumas and identity struggles, helping them find grace to thrive.",
                    "Building a sense of community and belonging among young people who often feel isolated.",
                    "Equipping them mentally, spiritually, emotionally, and practically to fulfill their God-given purpose."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;