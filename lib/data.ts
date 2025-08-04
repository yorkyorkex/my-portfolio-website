import { Experience, Education, Project, Skill, Award, VolunteerWork, ContactInfo, Reference } from '@/types';

export const contactInfo: ContactInfo = {
  email: 'yorkyuex@gmail.com',
  phone: '+61 416 556 319',
  linkedin: 'https://linkedin.com/in/hsiang-jen-yu-184b22267',
  github: 'https://github.com/hsiangjeny', // Add your GitHub if available
  location: 'Brisbane, Australia'
};

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Braiv Tech Pty Ltd',
    position: 'Software Developer',
    location: 'Brisbane',
    duration: 'August 2024 - November 2024',
    description: [
      'Improved web performance by building responsive apps with React, Next.js, TypeScript',
      'Reduced deployment time through CI/CD pipeline automation',
      'Enhanced scalability and uptime by managing Google Cloud & Firebase infrastructure',
      'Boosted data processing speed via RESTful API integration'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Google Cloud', 'Firebase', 'CI/CD', 'REST APIs'],
    achievements: [
      'Significantly improved web performance metrics',
      'Streamlined deployment processes',
      'Enhanced system scalability and reliability'
    ]
  },
  {
    id: '2',
    company: 'Imagine Realities',
    position: 'Unity Project Developer',
    location: 'Brisbane',
    duration: 'June 2024 - February 2025',
    description: [
      'Engaged students by developing an AR/VR Unity app for STEM events',
      'Designed immersive 3D environments, improving learning engagement and user retention',
      'Collaborated with educators to align features with curriculum, increasing usability'
    ],
    technologies: ['Unity', 'C#', 'AR/VR', '3D Development'],
    achievements: [
      'Increased student engagement in STEM learning',
      'Improved learning retention through immersive experiences'
    ]
  },
  {
    id: '3',
    company: 'Cliftons Brisbane',
    position: 'IT Support Technician',
    location: 'Brisbane',
    duration: 'June 2024 - Present',
    description: [
      'Ensured zero tech disruptions across multiple high-profile events by delivering timely AV/IT support',
      'Resolved issues within minutes, directly improving client satisfaction and feedback scores',
      'Set up and maintained IT/AV systems for large attendees per session',
      'Coordinated with cross-functional teams to maintain seamless operations'
    ],
    technologies: ['AV Systems', 'IT Support', 'Event Technology'],
    achievements: [
      'Achieved zero technical disruptions',
      'Improved client satisfaction scores',
      'Maintained seamless operations for large events'
    ]
  },
  {
    id: '4',
    company: 'Tai Lee Industrial Co., Ltd.',
    position: 'Administration Assistant',
    location: 'New Taipei City',
    duration: 'March 2020 - May 2022',
    description: [
      'Cut data errors by streamlining inventory systems',
      'Reduced processing time through improved internal workflows',
      'Managed communications across departments and external partners'
    ],
    technologies: ['Data Management', 'Process Optimization'],
    achievements: [
      'Significantly reduced data errors',
      'Improved workflow efficiency',
      'Enhanced cross-departmental communication'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Queensland University of Technology',
    degree: 'Master of Information Technology',
    location: 'Brisbane',
    duration: 'July 2023 - June 2025',
    gpa: '6.107 / 7.0',
    achievements: [
      'Executive Dean\'s Commendation for Academic Excellence',
      'Best Research Paper Award'
    ],
    coursework: ['Algorithms & Data Structures', 'Web & App Development', 'Cybersecurity']
  },
  {
    id: '2',
    institution: 'China University of Science and Technology',
    degree: 'Bachelor of Information Management',
    location: 'Taipei',
    duration: 'August 2019 - June 2021',
    gpa: '4.0 / 4.0',
    coursework: ['Business Management', 'Information Systems']
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'backend', level: 4, icon: '☕' },
  { name: 'JavaScript', category: 'frontend', level: 5, icon: '🟨' },
  { name: 'TypeScript', category: 'frontend', level: 5, icon: '🔷' },
  { name: 'Python', category: 'backend', level: 4, icon: '🐍' },
  { name: 'C++', category: 'backend', level: 4, icon: '⚙️' },
  { name: 'C#', category: 'backend', level: 4, icon: '🔵' },
  { name: 'HTML', category: 'frontend', level: 5, icon: '🌐' },
  { name: 'CSS', category: 'frontend', level: 5, icon: '🎨' },
  { name: 'SQL', category: 'backend', level: 4, icon: '🗄️' },

  // Frameworks, Libraries & Architecture
  { name: 'React', category: 'frontend', level: 5, icon: '⚛️' },
  { name: 'React Native', category: 'frontend', level: 4, icon: '📱' },
  { name: 'Next.js', category: 'frontend', level: 5, icon: '🔺' },
  { name: 'Node.js', category: 'backend', level: 4, icon: '🟢' },
  { name: 'Express.js', category: 'backend', level: 4, icon: '🚀' },
  { name: 'Auth.js', category: 'backend', level: 4, icon: '🔐' },
  { name: '.NET', category: 'backend', level: 4, icon: '🔷' },
  { name: 'MVC', category: 'backend', level: 4, icon: '🏗️' },
  { name: 'Bootstrap', category: 'frontend', level: 4, icon: '📐' },
  { name: 'Tailwind CSS', category: 'frontend', level: 5, icon: '💨' },
  { name: 'Unity', category: 'tools', level: 4, icon: '🎮' },

  // Databases & ORMs
  { name: 'PostgreSQL', category: 'backend', level: 4, icon: '🐘' },
  { name: 'MySQL', category: 'backend', level: 4, icon: '🗃️' },
  { name: 'Firebase', category: 'backend', level: 4, icon: '🔥' },
  { name: 'Convex', category: 'backend', level: 3, icon: '📊' },
  { name: 'Prisma ORM', category: 'backend', level: 4, icon: '🔺' },

  // Cloud & Backend Services
  { name: 'AWS S3', category: 'cloud', level: 4, icon: '☁️' },
  { name: 'Vercel', category: 'cloud', level: 5, icon: '▲' },
  { name: 'Google Cloud Platform', category: 'cloud', level: 4, icon: '🌤️' },
  { name: 'IAM', category: 'cloud', level: 3, icon: '🔑' },

  // APIs & Integration
  { name: 'REST APIs', category: 'backend', level: 5, icon: '🔗' },
  { name: 'CRUD Operations', category: 'backend', level: 5, icon: '🔄' },
  { name: 'Mux Video API', category: 'backend', level: 3, icon: '🎥' },
  { name: 'Spotify API', category: 'backend', level: 3, icon: '🎵' },
  { name: 'YouTube Data API', category: 'backend', level: 3, icon: '📺' },

  // Testing
  { name: 'Unit Testing', category: 'backend', level: 4, icon: '🧪' },
  { name: 'Functional Testing', category: 'backend', level: 4, icon: '⚗️' },

  // Data Analytics & Visualization
  { name: 'Tableau', category: 'tools', level: 4, icon: '📈' },
  { name: 'Power BI', category: 'tools', level: 4, icon: '📊' },

  // UI/UX & Prototyping Tools
  { name: 'Figma', category: 'tools', level: 4, icon: '🎨' },
  { name: 'Balsamiq', category: 'tools', level: 3, icon: '✏️' },

  // Productivity & Business Tools
  { name: 'Microsoft Excel', category: 'tools', level: 5, icon: '📗' },
  { name: 'Microsoft Word', category: 'tools', level: 5, icon: '📄' },
  { name: 'Microsoft 365 Dynamics', category: 'tools', level: 4, icon: '🏢' },
  { name: 'Notion', category: 'tools', level: 4, icon: '📝' },
  { name: 'Jira', category: 'tools', level: 4, icon: '📋' },
  { name: 'Scrum', category: 'soft', level: 4, icon: '🏃‍♂️' },

  // DevOps & CI/CD Tools
  { name: 'CLI', category: 'cloud', level: 4, icon: '💻' },
  { name: 'GitHub Actions', category: 'cloud', level: 4, icon: '⚡' },
  { name: 'CI/CD', category: 'cloud', level: 4, icon: '🔄' },

  // Developer Tools & AI
  { name: 'Git', category: 'tools', level: 5, icon: '📋' },
  { name: 'GitHub', category: 'tools', level: 5, icon: '🐙' },
  { name: 'Docker', category: 'cloud', level: 3, icon: '🐳' },
  { name: 'VS Code', category: 'tools', level: 5, icon: '💻' },
  { name: 'Cursor', category: 'tools', level: 4, icon: '🎯' },
  { name: 'PyCharm', category: 'tools', level: 4, icon: '🐍' },
  { name: 'Visual Studio', category: 'tools', level: 4, icon: '🔵' },
  { name: 'Copilot', category: 'tools', level: 4, icon: '👨‍💻' },
  { name: 'ChatGPT', category: 'tools', level: 5, icon: '🤖' },
  { name: 'OpenAI', category: 'tools', level: 4, icon: '🔮' },
  { name: 'Claude', category: 'tools', level: 5, icon: '🧠' },

  // Soft Skills
  { name: 'Team Collaboration', category: 'soft', level: 5, icon: '👥' },
  { name: 'Communication', category: 'soft', level: 5, icon: '💬' },
  { name: 'Problem Solving', category: 'soft', level: 5, icon: '🧩' },
  { name: 'Public Speaking', category: 'soft', level: 4, icon: '🎤' }
];

export const awards: Award[] = [
  {
    id: '1',
    title: 'QUT Executive Deans\' Commendation for Academic Excellence',
    organization: 'Queensland University of Technology',
    date: 'July 2025',
    location: 'Brisbane',
    description: 'Recognized for high academic performance in the Computer Science program.'
  },
  {
    id: '2',
    title: 'QUT Best Research Paper Award',
    organization: 'Queensland University of Technology',
    date: 'October 2024',
    location: 'Brisbane',
    description: 'Awarded for research on university IT programs and industry needs at the 5th Annual Research in IT Practice Conference.'
  },
  {
    id: '3',
    title: 'QUT Executive Deans\' Commendation for Academic Excellence',
    organization: 'Queensland University of Technology',
    date: 'December 2023',
    location: 'Brisbane',
    description: 'Recognized for consistently high academic performance in the Master of IT program.'
  },
  {
    id: '4',
    title: 'Second Prize in National Competition for Industrial Engineering and Management',
    organization: 'National College Student Competition',
    date: 'May 2020',
    location: 'Taipei',
    description: 'Recognized for innovation and technical expertise in the Information Systems Group.'
  }
];

export const volunteerWork: VolunteerWork[] = [
  {
    id: '1',
    organization: 'Something Tech',
    role: 'Campaign Volunteer',
    location: 'Brisbane',
    duration: 'August 2024',
    description: [
      'Organized and supported tech workshops, including IT/AV setup and speaker logistics',
      'Provided on-site tech support, ensuring smooth event flow and user experience'
    ]
  },
  {
    id: '2',
    organization: 'BeerOps Brisbane',
    role: 'Merchandise Table Volunteer',
    location: 'Brisbane',
    duration: 'July 2024',
    description: [
      'Managed merchandise sales and provided product info to attendees',
      'Assisted with logistics and handled cash/payment operations'
    ]
  },
  {
    id: '3',
    organization: 'Bookfest Brisbane Lifeline Australia',
    role: 'Customer Service Staff',
    location: 'Brisbane',
    duration: 'June 2024',
    description: [
      'Helped customers with bulk purchases, trolleys, and POS operations',
      'Coordinated with staff on inventory and restocking, ensuring smooth service'
    ]
  }
];

// Real projects showcase
export const projects: Project[] = [
  {
    id: 'entertainer-website',
    title: 'Personal Website of an Entertainer',
    description: 'Professional website for a Korean entertainer showcasing music, acting career, and fan engagement',
    longDescription: 'A beautifully designed personal website for IU (Lee Ji-eun), a Korean artist. Features elegant design with gradient backgrounds, professional portfolio sections, and multimedia content showcase. Built with modern web technologies and optimized for fan engagement.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Modern UI/UX'],
    features: [
      'Elegant gradient background design',
      'Professional artist portfolio showcase',
      'Responsive design for all devices',
      'Multi-page navigation system',
      'Interactive user interface',
      'Professional typography and layout',
      'Fan-focused content organization',
      'Modern web design principles'
    ],
    githubUrl: 'https://github.com/yorkyorkex/my-app',
    liveUrl: 'https://my-app-bay-six-92.vercel.app/',
    imageUrl: '/images/entertainer-website.svg',
    category: 'web',
    status: 'completed',
    highlights: [
      'Professional entertainer showcase',
      'Elegant visual design',
      'Fan engagement focused',
      'Modern web technologies'
    ]
  },
  {
    id: 'team-project-management',
    title: 'Team Project Management System',
    description: 'Comprehensive project management application for team collaboration',
    longDescription: 'A full-stack project management system designed for teams to collaborate effectively. Features real-time updates, task management, team communication, and project tracking with modern UI/UX design.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Real-time Database'],
    features: [
      'Real-time project collaboration',
      'Task creation and assignment',
      'Team member management',
      'Project progress tracking',
      'Interactive dashboard',
      'Responsive design',
      'User authentication and authorization',
      'Notification system'
    ],
    githubUrl: 'https://github.com/yorkyorkex/project-managment-app',
    liveUrl: 'https://project-managment-app-theta.vercel.app/',
    imageUrl: '/images/project-management.svg',
    category: 'fullstack',
    status: 'completed',
    highlights: [
      'Real-time collaboration features',
      'Comprehensive project tracking',
      'Modern team management tools',
      'Scalable Firebase backend'
    ]
  },
  {
    id: 'task-management-mobile',
    title: 'Task Management Mobile Application',
    description: 'Mobile-optimized task management application with modern UX',
    longDescription: 'A mobile-first task management application built with modern web technologies. Features intuitive touch interface, offline capability, and seamless task organization for productivity on-the-go.',
    technologies: ['React', 'PWA', 'TypeScript', 'CSS3', 'Local Storage', 'Service Workers'],
    features: [
      'Mobile-first responsive design',
      'Touch-optimized interface',
      'Offline functionality',
      'Task creation and organization',
      'Progress tracking',
      'Category management',
      'Priority settings',
      'Dark/Light theme support'
    ],
    githubUrl: 'https://github.com/yorkyorkex/todo-mobile-app',
    liveUrl: 'https://todo-mobile-app.vercel.app/',
    imageUrl: '/images/task-management.svg',
    category: 'mobile',
    status: 'completed',
    highlights: [
      'Mobile-optimized UX',
      'Progressive Web App',
      'Offline-first approach',
      'Intuitive task management'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Professional portfolio website showcasing development skills and experience',
    longDescription: 'A modern, responsive portfolio website built with Next.js and TypeScript. Features dark mode, dynamic skills showcase, and comprehensive project documentation. Optimized for performance and SEO with clean, professional design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React', 'Vercel'],
    features: [
      'Dark mode by default with theme toggle',
      'Dynamic skills showcase with 60+ technologies',
      'Responsive design optimized for all devices',
      'Performance optimized with Next.js',
      'SEO optimization and metadata',
      'Interactive animations and transitions',
      'Professional typography and design system'
    ],
    githubUrl: 'https://github.com/yorkyorkex/my-portfolio-website',
    liveUrl: 'https://my-portfolio-website-livid-two.vercel.app/',
    imageUrl: '/images/portfolio-website.svg',
    category: 'web',
    status: 'completed',
    highlights: [
      'Modern Next.js 14 architecture',
      'Comprehensive skill showcase',
      'Professional design system',
      'Performance optimized'
    ]
  }
];

export const references: Reference[] = [
  {
    name: 'James Xabregas',
    position: 'Chief Technology Officer',
    company: 'Braiv Tech Pty Ltd',
    email: 'james@braiv.co',
    phone: '+61 409 475 012',
    relationship: 'Supervised my role as a Software Developer, overseeing my contributions to front-end and back-end projects.'
  },
  {
    name: 'Ghislain Pourbaix',
    position: 'Venue Manager',
    company: 'Cliftons Brisbane',
    email: 'ghislain.pourbaix@cliftons.com',
    phone: '+61 413 455 093',
    relationship: 'Oversaw my work as an IT Support Technician, focusing on event technology operations and technical coordination.'
  },
  {
    name: 'Ann Stevens',
    position: 'Chief Executive Officer',
    company: 'Imagine Realities',
    email: 'ann.stevens@imaginerealities.com.au',
    phone: '+61 419 640 139',
    relationship: 'Mentored me in Unity development for AR/VR projects under the \'Girls Day Out in STEM\' initiative.'
  }
];