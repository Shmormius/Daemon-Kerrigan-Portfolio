// Common types used throughout the application

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  attributes: string[];
  to: string;
}

export interface CarouselItem {
  title: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  subject: string;
  message: string;
}

export interface CommonApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ContactSubmissionResponse {
  id: string;
  timestamp: string;
}

// Navigation types
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

// Glass effect configuration
export interface GlassConfig {
  enableRainBackground?: boolean;
  enableHoverEffect?: boolean;
  opacity?: number;
  blurAmount?: number;
}

// About page types
export interface JobExperience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  minor?: string;
  graduationDate: string;
  classes: string[];
}

export interface MapLocation {
  name: string;
  embedUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}
