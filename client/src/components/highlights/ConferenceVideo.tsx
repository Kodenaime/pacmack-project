import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiMaximize, FiVolume2 } from 'react-icons/fi';

const ConferenceVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container-lg">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              The <span className="text-[#F07B50]">Experience</span> <br /> Captured
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium">
              Five days of transformation, compressed into a cinematic journey. 
              Witness the worship, the tears, and the joy of PACMACK 2025.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-sm">
              <span className="w-12 h-[2px] bg-primary"></span>
              Official Recap Film
            </div>
          </div>
        </div>

        {/* Cinematic Video Player Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group aspect-video bg-[#1a1a1a] rounded-none border-12 border-white/5 overflow-hidden shadow-2xl"
        >
          {/* Native Video Element - Link your OneDrive Direct URL here */}
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/assets/video-poster.jpg" // Add a nice thumbnail image
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="YOUR_ONEDRIVE_DIRECT_VIDEO_LINK" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom Overlay Controls */}
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 bg-black/20 group-hover:bg-black/40 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
            onClick={togglePlay}
          >
            <button className="w-24 h-24 md:w-32 md:h-32 bg-primary text-black rounded-full flex items-center justify-center shadow-deep transform transition-transform group-hover:scale-110 active:scale-95">
              {isPlaying ? <FiPause size={40} /> : <FiPlay size={40} className="ml-2" />}
            </button>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent flex justify-between items-center translate-y-full group-hover:translate-y-0 transition-transform">
            <div className="flex items-center gap-4">
              <FiVolume2 className="text-primary" />
              <span className="text-xs font-black uppercase tracking-widest">PACMACK 2025: THRIVE RECAP</span>
            </div>
            <FiMaximize className="cursor-pointer hover:text-primary transition-colors" />
          </div>
        </motion.div>

        {/* Sub-text */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-black text-2xl">01</span>
            <p className="text-sm font-bold uppercase text-gray-400">Cinematography</p>
            <p className="text-xs">Capturing the heart of Lagos and the soul of the community.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-primary font-black text-2xl">02</span>
            <p className="text-sm font-bold uppercase text-gray-400">Theme</p>
            <p className="text-xs">Exploring identity, trauma, and the grace to thrive.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-primary font-black text-2xl">03</span>
            <p className="text-sm font-bold uppercase text-gray-400">Impact</p>
            <p className="text-xs">A movement born from 150+ hearts gathered in one place.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConferenceVideo;