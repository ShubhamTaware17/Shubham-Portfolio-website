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
  roles: ['Frontend Developer', 'React.js Developer', 'React Native Developer', 'Full Stack Developer'],
  tagline:
    'Frontend Developer experienced in developing clean, reusable, and maintainable web and mobile applications.',
  about: [
    "Frontend Developer with a strong foundation in modern web development and a passion for building responsive, user-friendly, and visually engaging web applications.",
    "Experienced in developing clean, reusable, and maintainable interfaces using HTML, CSS, JavaScript, TypeScript, React.js, React Native, Spring Boot, and modern frontend technologies.",
    "Strong problem-solving, collaboration, and communication skills with a focus on delivering high-quality and scalable user experiences across web and mobile platforms.",
  ],
  email: 'shubham.taware108@gmail.com',
  phone: '+91 9923224600',
  location: 'Pune, Maharashtra',
  resumeUrl: '#',
  github: 'https://github.com/Shubham-Taware',
  linkedin: 'https://www.linkedin.com/in/shubham-taware-a94126298',
  instagram: 'https://instagram.com/shubhamtaware',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: PERSON.linkedin, icon: 'Linkedin' },
  { label: 'Email', href: `mailto:${PERSON.email}`, icon: 'Mail' },
  { label: 'Phone', href: `tel:${PERSON.phone}`, icon: 'Phone' },
  { label: 'GitHub', href: PERSON.github, icon: 'Github' },
];

export const ABOUT_CARDS = [
  { label: 'Experience', value: '1.5+ Years', icon: 'Briefcase' },
  { label: 'Projects', value: '6+ Live', icon: 'FolderGit2' },
  { label: 'Degree', value: 'B.Sc CS 70%', icon: 'Award' },
  { label: 'Pursuing', value: 'PGDM IT', icon: 'GraduationCap' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & Mobile',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 95, icon: 'Atom' },
      { name: 'React Native', level: 92, icon: 'Smartphone' },
      { name: 'JavaScript (ES6+)', level: 92, icon: 'Braces' },
      { name: 'TypeScript', level: 88, icon: 'FileCode2' },
      { name: 'HTML5 & CSS3', level: 95, icon: 'Code' },
      { name: 'Tailwind CSS', level: 92, icon: 'Wind' },
      { name: 'Bootstrap', level: 88, icon: 'Grid3x3' },
      { name: 'jQuery & Sass', level: 82, icon: 'Palette' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: 'Server',
    skills: [
      { name: 'Spring Boot', level: 85, icon: 'Leaf' },
      { name: 'Spring MVC', level: 82, icon: 'Layers' },
      { name: 'REST APIs', level: 92, icon: 'Webhook' },
      { name: 'Java', level: 85, icon: 'Coffee' },
      { name: 'Node.js & Express', level: 80, icon: 'Hexagon' },
      { name: 'MySQL & PostgreSQL', level: 85, icon: 'Database' },
      { name: 'MongoDB', level: 80, icon: 'Database' },
      { name: 'SQL', level: 88, icon: 'Database' },
    ],
  },
  {
    title: 'Tools & Concepts',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 92, icon: 'GitBranch' },
      { name: 'Postman', level: 90, icon: 'Send' },
      { name: 'VS Code & IntelliJ', level: 92, icon: 'SquareCode' },
      { name: 'Maven & npm', level: 88, icon: 'Package' },
      { name: 'OOP & Data Structures', level: 88, icon: 'Cpu' },
      { name: 'Responsive Design', level: 95, icon: 'Layout' },
      { name: 'Agile/Scrum', level: 85, icon: 'Users' },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'caryanam',
    role: 'Frontend Developer',
    company: 'Caryanam India Pvt. Ltd.',
    period: '2024 — Present',
    location: 'Pune, Maharashtra',
    description:
      'Developed and maintained responsive web and mobile application interfaces using React.js, React Native, JavaScript, and modern frontend technologies.',
    responsibilities: [
      'Developed and maintained responsive web and mobile application interfaces using React.js, React Native, JavaScript, and modern frontend technologies.',
      'Built reusable UI components and integrated REST APIs to deliver scalable and user-friendly application features.',
      'Collaborated with backend developers to integrate APIs, handle application state, debug issues, and improve overall application performance.',
      'Used Git and GitHub for version control, code collaboration, and maintaining production-ready development workflows.',
    ],
    tech: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'Spring Boot', 'REST APIs', 'Tailwind CSS', 'Git'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'caryanam-live',
    title: 'Caryanam Live',
    description: 'Developed a full-featured vehicle auction, bidding, and training management platform supporting Student, Faculty, Executor, and Admin workflows with role-based UI and live room access.',
    image: '/projects/caryanam-live.png',
    tech: ['React.js', 'React Native', 'TypeScript', 'Spring Boot', 'REST APIs'],
    category: 'Full Stack',
    demo: 'https://www.caryanamlive.com/',
    playStore: 'https://play.google.com/store/apps/details?id=com.caryanambiddingapp',
    featured: true,
  },
  {
    id: 'rentalchaavi',
    title: 'RentalChaavi',
    description: 'A real-estate rental platform enabling users to explore, search, and manage property-related information with responsive mobile & web interfaces and Spring Boot REST APIs.',
    image: '/projects/rentalchaavi.png',
    tech: ['React Native', 'Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    category: 'Full Stack',
    demo: 'https://rentalchaavi.com/',
    playStore: 'https://play.google.com/store/apps/details?id=com.caryanam_broker_new',
    featured: true,
  },
  {
    id: 'caryanam',
    title: 'Caryanam',
    description: 'Developed frontend modules for a real-estate & automotive platform with responsive screens, user-friendly property management workflows, and REST API integration.',
    image: '/projects/caryanam.png',
    tech: ['React Native', 'Java', 'Spring Boot', 'REST APIs', 'React.js'],
    category: 'Full Stack',
    demo: 'https://caryanam.com/',
    playStore: 'https://play.google.com/store/apps/details?id=com.caryanamapp',
    featured: true,
  },
  {
    id: 'vahanfinserv',
    title: 'VahanFinserv',
    description: 'Developed frontend screens and user workflows for a vehicle finance-related mobile and web application with dynamic forms, validation, and REST API data rendering.',
    image: '/projects/vahanfinserv.png',
    tech: ['React Native', 'Java', 'Spring Boot', 'REST APIs'],
    category: 'Full Stack',
    demo: 'https://vahanfinserv.com/',
    playStore: 'https://play.google.com/store/apps/details?id=tempfinservapp.com',
    featured: true,
  },
  {
    id: 'dealskb',
    title: 'DealsKB',
    description: 'Deals, coupons, and offers marketplace platform with merchant management, category search, and real-time discount discovery.',
    image: '/projects/dealskb.png',
    tech: ['React.js', 'React Native', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    category: 'Full Stack',
    demo: 'https://dealskb.com/',
    playStore: 'https://play.google.com/store/apps/details?id=com.dealskb.app',
    featured: true,
  },
  {
    id: 'awajmanki',
    title: 'AwajManki',
    description: 'An anonymous thought-sharing web and mobile platform enabling authentic conversations with AI-powered moderation, Indian language support, and voice-to-text.',
    image: '/projects/awaazmanki.png',
    tech: ['React.js', 'React Native', 'JavaScript', 'REST APIs', 'Tailwind CSS'],
    category: 'Full Stack',
    demo: 'https://awaazmanki.com/',
    playStore: 'https://play.google.com/store/apps/details?id=com.mannkiavaajapp',
    featured: true,
  },
  {
    id: 'caryanamlive-app',
    title: 'Caryanamlive Mobile App',
    description: 'Android application for live B2B car auctions and real-time vehicle bidding with instant inspection reports and dealer room access.',
    image: '/projects/caryanambidding-app.png',
    tech: ['React Native', 'Expo', 'REST APIs', 'WebSockets'],
    category: 'Mobile',
    demo: 'https://play.google.com/store/apps/details?id=com.caryanambiddingapp',
    playStore: 'https://play.google.com/store/apps/details?id=com.caryanambiddingapp',
    featured: false,
  },
  {
    id: 'awajmanki-app',
    title: 'AawajManki Mobile App',
    description: 'Cross-platform anonymous thoughts and community mobile application built with React Native with AI moderation and audio-to-text.',
    image: '/projects/awajmanki-app.png',
    tech: ['React Native', 'JavaScript', 'REST APIs', 'Redux'],
    category: 'Mobile',
    demo: 'https://play.google.com/store/apps/details?id=com.mannkiavaajapp',
    playStore: 'https://play.google.com/store/apps/details?id=com.mannkiavaajapp',
    featured: false,
  },
  {
    id: 'rentalchaavi-app',
    title: 'RentalChaavi Mobile App',
    description: 'Android application built with React Native for property brokers and managers to handle client visits, listings, and tenant agreements on the go.',
    image: '/projects/rentalchaavi-app.png',
    tech: ['React Native', 'Java', 'Spring Boot', 'REST APIs'],
    category: 'Mobile',
    demo: 'https://play.google.com/store/apps/details?id=com.caryanam_broker_new',
    playStore: 'https://play.google.com/store/apps/details?id=com.caryanam_broker_new',
    featured: false,
  },
  {
    id: 'caryanam-app',
    title: 'Caryanam Mobile App',
    description: 'Customer mobile app enabling instant vehicle service scheduling, real-time job card tracking, and digital payments on Android.',
    image: '/projects/caryanam-app.png',
    tech: ['React Native', 'Java', 'Spring Boot', 'REST APIs'],
    category: 'Mobile',
    demo: 'https://play.google.com/store/apps/details?id=com.caryanamapp',
    playStore: 'https://play.google.com/store/apps/details?id=com.caryanamapp',
    featured: false,
  },
  {
    id: 'dealskb-app',
    title: 'DealsKB Mobile App',
    description: 'Mobile discount finder and coupons application for browsing local deals and discovering exclusive merchant discounts.',
    image: '/projects/dealskb-app.png',
    tech: ['React Native', 'JavaScript', 'REST APIs'],
    category: 'Mobile',
    demo: 'https://play.google.com/store/apps/details?id=com.dealskb.app',
    playStore: 'https://play.google.com/store/apps/details?id=com.dealskb.app',
    featured: false,
  },
  {
    id: 'vahan-finserv-app',
    title: 'Vahan Finserv Mobile App',
    description: 'Vehicle loan management mobile application for sales executives and customers to calculate loan EMIs and track loan approvals.',
    image: '/projects/vahanfinserv-app.png',
    tech: ['React Native', 'Java', 'Spring Boot', 'REST APIs'],
    category: 'Mobile',
    demo: 'https://play.google.com/store/apps/details?id=tempfinservapp.com',
    playStore: 'https://play.google.com/store/apps/details?id=tempfinservapp.com',
    featured: false,
  },
];

export const PROJECT_CATEGORIES = ['All', 'Full Stack', 'Mobile'];

export const EDUCATION: Education[] = [
  {
    id: 'pgdm',
    degree: 'PGDM in Information Technology',
    institution: 'MITSDE, Pune, India',
    period: '2024 — Present',
    description: 'Pursuing Post Graduate Diploma in Management in Information Technology, focusing on enterprise software architecture, software project management, and emerging IT technologies.',
    status: 'pursuing',
  },
  {
    id: 'bsc',
    degree: 'Bachelor of Science in Computer Science – 70%',
    institution: 'Malwanchal University, India',
    period: '2020 — 2023',
    description: 'Completed Bachelor of Science in Computer Science with 70%, building a strong foundation in Java, Data Structures, OOP, SQL Databases, and Web Development.',
    status: 'completed',
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
    description: 'Pixel-perfect, accessible, and high-performance interfaces built with modern HTML5, CSS3, Tailwind CSS, and TypeScript.',
    icon: 'Layout',
  },
  {
    id: 'react',
    title: 'React Development',
    description: 'Scalable SPA architecture with React.js, custom hooks, Redux Toolkit, Context API, and modern component design patterns.',
    icon: 'Atom',
  },
  {
    id: 'react-native',
    title: 'React Native App Development',
    description: 'Cross-platform mobile applications for Android & iOS with smooth 60fps animations, offline capabilities, and Play Store deployments.',
    icon: 'Smartphone',
  },
  {
    id: 'responsive',
    title: 'Responsive Website Development',
    description: 'Mobile-first, fully responsive layouts delivering flawless user experiences across smartphones, tablets, and ultra-wide desktops.',
    icon: 'MonitorSmartphone',
  },
  {
    id: 'api',
    title: 'API Integration',
    description: 'Seamless RESTful API integration, robust Axios data pipelines, token authentication, and comprehensive error handling.',
    icon: 'Webhook',
  },
  {
    id: 'optimization',
    title: 'Bug Fixing & Performance Optimization',
    description: 'Identifying and fixing complex UI/state bugs, optimizing Core Web Vitals, code-splitting, and enhancing overall app load speed.',
    icon: 'Zap',
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
