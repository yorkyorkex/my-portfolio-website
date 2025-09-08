export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
}

export interface Project {
  id: string;
  number: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  category: 'web' | 'mobile' | 'ar-vr' | 'backend' | 'fullstack';
  status: 'completed' | 'in-progress' | 'planned';
  highlights?: string[];
  githubLabel?: string;
  liveLabel?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tools' | 'soft';
  level: number; // 1-5
  icon?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  imageUrl?: string;
  description: string;
}

export interface VolunteerWork {
  id: string;
  organization: string;
  role: string;
  location: string;
  duration: string;
  description: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  location: string;
}

export interface Reference {
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
  relationship: string;
}