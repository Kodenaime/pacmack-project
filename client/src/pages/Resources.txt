import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ResourceCard from '../components/others/ResourcesCard';
import type { Resource, ResourceType } from '../types';

// Updated Mock Data with Video, Audio, and PDF
const MOCK_RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Thriving in Transition: Plenary 1',
    description: 'A deep dive into the identity shifts MKs face when moving across borders.',
    category: 'Identity',
    type: 'video',
    link: 'dQw4w9WgXcQ', // Use the YouTube ID for the modal
    dateAdded: '2025-10-02'
  },
  {
    id: '2',
    title: 'MK Mental Health Toolkit',
    description: 'A comprehensive PDF guide on processing cultural trauma and isolation.',
    category: 'Wellness',
    type: 'pdf',
    link: '/files/mental-health-guide.pdf',
    dateAdded: '2025-10-04'
  },
  {
    id: '3',
    title: 'Identity & Belonging Podcast',
    description: 'A recorded session discussing the complexities of belonging in a multicultural world.',
    category: 'Podcast',
    type: 'audio',
    link: 'https://example.com/audio-session.mp3',
    dateAdded: '2025-11-15'
  }
];

const Resources: React.FC = () => {
  // Tabs include 'audio' now
  const [activeTab, setActiveTab] = useState<ResourceType | 'all'>('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredResources = MOCK_RESOURCES.filter(res => 
    activeTab === 'all' ? true : res.type === activeTab
  );

  const tabs: (ResourceType | 'all')[] = ['all', 'video', 'audio', 'pdf'];

  return (
    <div className="bg-brand-bg min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="grow pt-32 pb-20">
        <div className="container-lg">
          
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-4">Community Library</h1>
            <p className="text-brand-text max-w-2xl text-lg">
              Explore our collection of plenaries, workshop materials, and audio sessions designed for the PACMACK community.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-10 border-b border-brand-gray/20 pb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-smooth capitalize
                  ${activeTab === tab 
                    ? 'bg-primary text-brand-black shadow-medium' 
                    : 'bg-brand-white text-brand-text hover:text-brand-black hover:bg-brand-gray/10'
                  }`}
              >
                {tab === 'all' ? 'All Resources' : `${tab}s`}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map(resource => (
                <ResourceCard 
                  key={resource.id} 
                  resource={resource} 
                  onOpenVideo={(id) => setSelectedVideo(id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-brand-white rounded-2xl border border-dashed border-brand-gray/30">
              <p className="text-brand-text text-lg">No {activeTab !== 'all' ? activeTab : ''} resources found in this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Video Modal Overlay */}
      {selectedVideo && (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-300">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition-smooth focus:outline-none"
            aria-label="Close video"
          >
            <FiX />
          </button>
          
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-deep bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="PACMACK Session Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Resources;