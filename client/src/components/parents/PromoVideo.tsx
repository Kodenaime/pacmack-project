import React, { useRef, useState } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';

interface PromoVideoProps {
  /** Public path to the compressed MP4 (e.g. /videos/promo.mp4) */
  src: string;
  /** Public path to the poster/thumbnail image */
  poster: string;
  /** Short label shown above the video */
  title?: string;
}

const PromoVideo: React.FC<PromoVideoProps> = ({ src, poster, title = 'Watch the Video' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // The video src is only injected after the user clicks play, so nothing
  // downloads on initial page load.
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!started) {
      setStarted(true);
      // Wait a tick so the src is in the DOM before calling play().
      requestAnimationFrame(() => {
        video.play();
        setIsPlaying(true);
      });
      return;
    }

    video.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <section className="py-16 md:py-20 bg-neutral-900 text-white" id="promo-video">
      <div className="container-lg">
        <div className="text-center mb-10">
          <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm inline-block mb-4">
            Introduction Video
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
            {title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group aspect-video bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={poster}
              preload="none"
              controls={started}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              {started && <source src={src} type="video/mp4" />}
            </video>

            {/* Click-to-play overlay, only before playback starts */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 hover:bg-black/60 transition-colors cursor-pointer"
                aria-label="Play video"
              >
                <span className="w-20 h-20 md:w-24 md:h-24 bg-primary text-black rounded-full flex items-center justify-center shadow-deep transition-transform group-hover:scale-110 active:scale-95">
                  <FiPlay size={36} className="ml-1" />
                </span>
                <span className="text-sm font-bold uppercase tracking-widest text-white/90">
                  Click to Play
                </span>
              </button>
            )}

            {/* Pause control, only visible while playing */}
            {isPlaying && (
              <button
                onClick={handlePause}
                className="absolute top-4 right-4 p-3 bg-black/60 text-white rounded-full hover:bg-primary hover:text-black transition-colors cursor-pointer"
                aria-label="Pause video"
              >
                <FiPause size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;
