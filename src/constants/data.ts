import type {
  SkillCategory,
  Experience,
  Project,
  Education,
  Certificate,
  Service,
  Testimonial,
  Achievement,
  NavLink,
  SocialLink,
} from '../types';

export const PERSON = {
  name: 'Shubham Taware',
  roles: ['Frontend Developer', 'React Developer', 'MERN Stack Developer'],
  tagline:
    'I build scalable, modern, responsive and user-friendly web applications with exceptional user experience.',
  about: [
    "I'm a passionate Frontend Developer with experience in React.js, JavaScript, TypeScript, Tailwind CSS and modern web technologies.",
    'I enjoy building beautiful user interfaces, solving complex problems and creating fast, responsive applications.',
    'I am continuously learning new technologies and improving my development skills.',
  ],
  email: 'shubham.taware@example.com',
  phone: '+91 98765 43210',
  location: 'Pune, Maharashtra, India',
  resumeUrl: '#',
  github: 'https://github.com/shubhamtaware',
  linkedin: 'https://linkedin.com/in/shubhamtaware',
  instagram: 'https://instagram.com/shubhamtaware',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: PERSON.github, icon: 'Github' },
  { label: 'LinkedIn', href: PERSON.linkedin, icon: 'Linkedin' },
  { label: 'Instagram', href: PERSON.instagram, icon: 'Instagram' },
  { label: 'Email', href: `mailto:${PERSON.email}`, icon: 'Mail' },
  { label: 'Phone', href: `tel:${PERSON.phone}`, icon: 'Phone' },
];

export const ABOUT_CARDS = [
  { label: 'Experience', value: '2+ Years', icon: 'Briefcase' },
  { label: 'Projects', value: '15+', icon: 'FolderGit2' },
  { label: 'Certifications', value: '5+', icon: 'Award' },
  { label: 'Education', value: 'B.Sc CS', icon: 'GraduationCap' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 92, icon: 'Atom' },
      { name: 'JavaScript', level: 90, icon: 'Braces' },
      { name: 'TypeScript', level: 85, icon: 'FileCode2' },
      { name: 'HTML5', level: 95, icon: 'Code' },
      { name: 'CSS3', level: 92, icon: 'Palette' },
      { name: 'Tailwind CSS', level: 90, icon: 'Wind' },
      { name: 'Bootstrap', level: 85, icon: 'Grid3x3' },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 82, icon: 'Hexagon' },
      { name: 'Express.js', level: 80, icon: 'Network' },
      { name: 'MongoDB', level: 78, icon: 'Database' },
      { name: 'MySQL', level: 75, icon: 'Database' },
      { name: 'REST APIs', level: 85, icon: 'Webhook' },
    ],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 88, icon: 'GitBranch' },
      { name: 'GitHub', level: 88, icon: 'Github' },
      { name: 'VS Code', level: 92, icon: 'SquareCode' },
      { name: 'Figma', level: 70, icon: 'Figma' },
      { name: 'Postman', level: 82, icon: 'Send' },
      { name: 'Render', level: 75, icon: 'Cloud' },
      { name: 'Vercel', level: 85, icon: 'Triangle' },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'caryanam',
    role: 'Software Developer',
    company: 'Caryanam India Pvt Ltd',
    period: '2023 — Present',
    location: 'Pune, India',
    description:
      'Building and maintaining full-stack web applications with React, Node.js and modern web technologies.',
    responsibilities: [
      'Developed responsive React applications with reusable component architecture',
      'Integrated REST APIs and managed complex application state',
      'Created reusable UI components used across multiple projects',
      'Collaborated with backend team to design and consume APIs efficiently',
      'Improved application performance through code splitting and lazy loading',
      'Built a comprehensive Admin Dashboard with analytics and reporting',
      'Worked on a Property Management System for real estate operations',
      'Contributed to a React Native mobile application for field operations',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Tailwind CSS', 'React Native'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    description: 'A full-featured e-commerce clone with product listings, cart, checkout and authentication.',
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
    featured: true,
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'Streaming UI clone with movie browsing, trailers, authentication and personalized rows.',
    image: 'https://images.pexels.com/photos/7236803/pexels-photo-7236803.jpeg',
    tech: ['React', 'Firebase', 'TMDB API', 'Tailwind'],
    category: 'Frontend',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
    featured: true,
  },
  {
    id: 'swiggy-clone',
    title: 'Swiggy Clone',
    description: 'Food delivery platform with restaurant listings, cart, live order tracking and search.',
    image: 'https://images.pexels.com/photos/1639657/pexels-photo-1639657.jpeg',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
  {
    id: 'nike-store',
    title: 'Nike Store',
    description: 'Premium product showcase with 3D product views, cart and smooth animations.',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    tech: ['React', 'Three.js', 'Tailwind', 'Framer Motion'],
    category: 'Frontend',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
  {
    id: 'coffee-landing',
    title: 'Coffee Landing Page',
    description: 'A beautiful, conversion-focused landing page for a premium coffee brand.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    category: 'Landing Page',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'This very website — a premium, animated, fully responsive developer portfolio.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'Frontend',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
  {
    id: 'dealskb',
    title: 'DealsKB Marketplace',
    description: 'A deals and coupons marketplace with search, filtering and user submissions.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
  {
    id: 'caryanam-no-broker',
    title: 'Caryanam No Broker',
    description: 'Rental property platform connecting tenants and owners directly, no broker fees.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    category: 'Full Stack',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
  {
    id: 'caryanam-broker',
    title: 'Caryanam Broker',
    description: 'Broker management portal with property listings, leads and client tracking.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind'],
    category: 'Full Stack',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
  {
    id: 'caryanam-finserv',
    title: 'Caryanam FinServ',
    description: 'Financial services dashboard with loan management and document verification.',
    image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
  {
    id: 'autohub-native',
    title: 'AutoHub Native',
    description: 'React Native mobile app for automotive service booking and vehicle management.',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
    tech: ['React Native', 'Expo', 'Node.js'],
    category: 'Mobile',
    github: 'https://github.com/shubhamtaware',
    demo: '#',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Landing Page', 'Mobile'];

export const EDUCATION: Education[] = [
  {
    id: 'bsc',
    degree: 'B.Sc Computer Science',
    institution: 'Savitribai Phule Pune University',
    period: '2020 — 2023',
    description: 'Completed Bachelor of Science in Computer Science with a strong foundation in programming, data structures, algorithms and software engineering principles.',
    status: 'completed',
  },
  {
    id: 'pgdm',
    degree: 'PGDM Information Technology',
    institution: 'Pune Institute of Business Management',
    period: '2024 — Present',
    description: 'Currently pursuing Post Graduate Diploma in Management with specialization in Information Technology, focusing on software architecture, project management and emerging technologies.',
    status: 'pursuing',
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'react-cert',
    title: 'React — The Complete Guide',
    issuer: 'Udemy',
    date: '2024',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
  },
  {
    id: 'js-cert',
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '2023',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
  },
  {
    id: 'node-cert',
    title: 'Node.js, Express & MongoDB Bootcamp',
    issuer: 'Udemy',
    date: '2023',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
  },
  {
    id: 'ts-cert',
    title: 'TypeScript: The Complete Developer Guide',
    issuer: 'Udemy',
    date: '2024',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg',
  },
  {
    id: 'tailwind-cert',
    title: 'Tailwind CSS Mastery',
    issuer: 'Scrimba',
    date: '2023',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Pixel-perfect, accessible and performant interfaces built with React and modern CSS.',
    icon: 'Layout',
  },
  {
    id: 'react',
    title: 'React Development',
    description: 'Scalable component architecture with hooks, context and state management best practices.',
    icon: 'Atom',
  },
  {
    id: 'responsive',
    title: 'Responsive Website Design',
    description: 'Flawless experiences across mobile, tablet and desktop with a mobile-first approach.',
    icon: 'Smartphone',
  },
  {
    id: 'api',
    title: 'API Integration',
    description: 'Clean REST/GraphQL integration with robust error handling and data fetching patterns.',
    icon: 'Webhook',
  },
  {
    id: 'landing',
    title: 'Landing Pages',
    description: 'Conversion-focused landing pages with smooth animations and clear calls to action.',
    icon: 'Rocket',
  },
  {
    id: 'ui',
    title: 'UI Development',
    description: 'Design-system-driven UI development turning Figma mockups into production code.',
    icon: 'Palette',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahul Sharma',
    role: 'CTO',
    company: 'Caryanam India',
    content:
      'Shubham delivered our Admin Dashboard ahead of schedule with exceptional code quality. His React expertise and attention to detail made a real difference.',
    avatar: 'https://images.pexels.com/photos/220817/pexels-photo-220817.jpeg',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Priya Deshpande',
    role: 'Product Manager',
    company: 'Caryanam India',
    content:
      'One of the most reliable developers I have worked with. Shubham takes ownership, communicates clearly and ships polished, bug-free features.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Amit Patel',
    role: 'Senior Engineer',
    company: 'Freelance Client',
    content:
      'Shubham built our marketplace frontend from scratch. The performance and UX were outstanding — our bounce rate dropped significantly after launch.',
    avatar: 'https://images.pexels.com/photos/6975092/pexels-photo-6975092.jpeg',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Sneha Kulkarni',
    role: 'UI/UX Designer',
    company: 'Caryanam India',
    content:
      'As a designer, I love working with Shubham. He translates Figma designs into code with 100% accuracy and adds thoughtful micro-interactions.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    rating: 5,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'projects', label: 'Projects Completed', value: 15, suffix: '+', icon: 'FolderGit2' },
  { id: 'tech', label: 'Technologies Learned', value: 20, suffix: '+', icon: 'Cpu' },
  { id: 'github', label: 'GitHub Contributions', value: 500, suffix: '+', icon: 'Github' },
  { id: 'certs', label: 'Certificates', value: 5, suffix: '+', icon: 'Award' },
];
