import React from 'react';
import { motion } from 'framer-motion';
import conferenceImage from '../../assets/flier.png';

const About2025: React.FC = () => {
  return (
    <section className="py-20 bg-brand-white overflow-hidden" id="about-2025">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tight">
              The Journey to <span className="text-primary">Lagos</span>
            </h2>
            
            <div className="space-y-4 text-brand-black/80 text-lg leading-relaxed">
              <p>
                PACMACK 2025 was built on the foundation of the International Third Culture Kids Conference (ITCKC) held in Thailand in 2023. Inspired by the need for MK/TCK support networks in regions with fewer resources, we brought that vision home to Africa.
              </p>
              <p>
                Designed specifically for the children of cross-cultural Christian workers, the conference provided a space for those navigating unique 
                challenges, feeling caught between cultures and carrying silent struggles.
              </p>
              <p>
                From October 1st to 5th, we gathered at the Orchid Hotels Lekki to address neglected traumas and identity struggles, helping a new generation find the grace to thrive.
              </p>
            </div>

            {/* Quote Block */}
            <div className="mt-4 p-6 bg-brand-bg border-l-4 border-primary italic font-medium text-brand-black">
              "We sought to inspire MKs and CCKs in Africa to draw from the rich resource of their cross-cultural experience as a potential for excelling in life."
            </div>
          </motion.div>

          {/* Right Column: Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative element behind image */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-2xl -z-10" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-deep group">
              <img 
                src={conferenceImage} 
                alt="PACMACK 2025 Venue and Gathering" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-bold tracking-widest uppercase text-sm">
                  Orchid Hotels Lekki, Lagos
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About2025;