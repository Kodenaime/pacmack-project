// For the resource library (Classes, PDFs, Videos)
export type ResourceType = 'video' | 'audio' | 'pdf' | 'document';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: ResourceType;
  thumbnailUrl?: string;
  link: string; // YouTube ID for video, URL for audio/PDF
  dateAdded: string;
}

// For the Community Member registration
export interface CommunityMember {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  interests: string[]; // e.g., ["Networking", "Resources", "Mentorship"]
  location?: string;
  joinedAt: string;
}

// For the Media Gallery
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'workshop' | 'plenary' | 'social';
}