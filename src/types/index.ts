export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  github?: string;
  demo: string;
  playStore?: string;
  featured?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  status: 'completed' | 'pursuing';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Achievement {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
