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
  // Frontend
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'Next.js', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  { name: 'Tailwind CSS', category: 'frontend', level: 4 },
  { name: 'Bootstrap', category: 'frontend', level: 4 },
  
  // Backend
  { name: 'Firebase', category: 'backend', level: 4 },
  { name: 'C#', category: 'backend', level: 4 },
  { name: 'C++', category: 'backend', level: 3 },
  { name: 'SQL', category: 'backend', level: 4 },
  { name: 'REST APIs', category: 'backend', level: 4 },
  
  // Cloud & DevOps
  { name: 'Google Cloud Platform', category: 'cloud', level: 4 },
  { name: 'CI/CD', category: 'cloud', level: 4 },
  { name: 'Git', category: 'cloud', level: 4 },
  
  // Tools
  { name: 'Unity', category: 'tools', level: 4 },
  { name: 'GitHub', category: 'tools', level: 4 },
  
  // Soft Skills
  { name: 'Team Collaboration', category: 'soft', level: 5 },
  { name: 'Communication', category: 'soft', level: 5 },
  { name: 'Problem Solving', category: 'soft', level: 5 },
  { name: 'Public Speaking', category: 'soft', level: 4 }
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

// Project templates for future additions
export const projectTemplates: Project[] = [
  {
    id: 'template-web',
    title: 'Web Application Template',
    description: 'Modern web application built with React and Next.js',
    longDescription: 'A comprehensive web application featuring responsive design, user authentication, and real-time data management.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    features: [
      'Responsive design for all devices',
      'User authentication and authorization',
      'Real-time data synchronization',
      'Progressive Web App capabilities',
      'SEO optimization'
    ],
    category: 'web',
    status: 'planned',
    highlights: [
      'Modern tech stack',
      'Performance optimized',
      'Scalable architecture'
    ]
  },
  {
    id: 'template-mobile',
    title: 'Mobile App Template',
    description: 'Cross-platform mobile application',
    longDescription: 'Cross-platform mobile application with native performance and modern UI.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    features: [
      'Cross-platform compatibility',
      'Native performance',
      'Offline functionality',
      'Push notifications',
      'Biometric authentication'
    ],
    category: 'mobile',
    status: 'planned',
    highlights: [
      'Native performance',
      'Cross-platform solution',
      'Modern UX design'
    ]
  },
  {
    id: 'template-arvr',
    title: 'AR/VR Experience Template',
    description: 'Immersive AR/VR application built with Unity',
    longDescription: 'Immersive augmented and virtual reality experience for educational and entertainment purposes.',
    technologies: ['Unity', 'C#', 'AR Foundation', 'XR Toolkit'],
    features: [
      'Immersive 3D environments',
      'Hand tracking and gestures',
      'Multi-platform support',
      'Educational content',
      'Interactive elements'
    ],
    category: 'ar-vr',
    status: 'planned',
    highlights: [
      'Cutting-edge technology',
      'Educational impact',
      'Immersive experience'
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