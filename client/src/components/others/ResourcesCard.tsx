import React from 'react';
import { FiPlayCircle, FiFileText, FiHeadphones } from 'react-icons/fi';
// import { FiPlayCircle, FiFileText, FiDownload, FiExternalLink, FiHeadphones } from 'react-icons/fi';
import type { Resource } from '../../types';

interface ResourceCardProps {
  resource: Resource;
  onOpenVideo: (id: string) => void; // Callback for the modal
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onOpenVideo }) => {
  const isVideo = resource.type === 'video';
  const isAudio = resource.type === 'audio';
  
  const handleAction = (e: React.MouseEvent) => {
    if (isVideo) {
      e.preventDefault();
      onOpenVideo(resource.link);
    }
  };

  return (
    <div className="group bg-brand-white rounded-2xl border border-brand-gray/20 overflow-hidden shadow-soft transition-smooth hover:shadow-medium flex flex-col h-full">
      
      {/* Media Preview Area */}
      <div className="relative aspect-video bg-brand-black/5 flex items-center justify-center overflow-hidden">
        {resource.thumbnailUrl ? (
          <img src={resource.thumbnailUrl} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
        ) : (
          <div className="text-brand-gray/40">
            {isVideo && <FiPlayCircle size={48} />}
            {isAudio && <FiHeadphones size={48} />}
            {!isVideo && !isAudio && <FiFileText size={48} />}
          </div>
        )}
        
        <span className="absolute top-3 left-3 bg-brand-white/90 backdrop-blur-md text-brand-black text-[10px] font-bold px-2 py-1 rounded-md">
          {resource.category}
        </span>
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="text-lg font-bold text-brand-black mb-2 line-clamp-1">{resource.title}</h3>
        <p className="text-brand-text text-sm line-clamp-2 mb-6">{resource.description}</p>

        <div className="mt-auto pt-4 border-t border-brand-gray/10 flex justify-between items-center">
          {/* Format Icon Badge */}
          <div className="flex items-center gap-2 text-primary">
            {isVideo && <FiPlayCircle />}
            {isAudio && <FiHeadphones />}
            {resource.type === 'pdf' && <FiFileText />}
            <span className="text-[10px] font-bold uppercase tracking-widest">{resource.type}</span>
          </div>
          
          <a 
            href={resource.link} 
            onClick={handleAction}
            target={isVideo ? "_self" : "_blank"} 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-brand-black hover:text-primary transition-smooth"
          >
            {isVideo ? "Watch Video" : isAudio ? "Listen Now" : "Download PDF"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;