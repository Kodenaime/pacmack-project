// For the resource library (Classes, PDFs, Videos)
export type ResourceType = 'video' | 'pdf' | 'document' | 'link';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string; // e.g., "Missionary Care", "Education"
  type: ResourceType;
  thumbnailUrl?: string;
  link: string; // URL to the resource
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