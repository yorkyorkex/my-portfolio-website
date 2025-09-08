import { Experience, Education, Project, Skill, Award, Certification, VolunteerWork, ContactInfo, Reference } from '@/types';

export const contactInfo: ContactInfo = {
  email: 'yorkyuex@gmail.com',
  phone: '+61 416 556 319',
  linkedin: 'https://linkedin.com/in/hsiang-jen-yu-184b22267',
  github: 'https://github.com/hsiangjeny', // Add your GitHub if available
  location: 'Australia, New Zealand'
};

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Braiv Tech Pty Ltd',
    position: 'Software Developer',
    location: 'Brisbane',
    duration: 'August 2024 - November 2024',
    description: [
      'Built AI-powered media translation tools enabling multi-language video playback and AI dubbing',
      'Built multilingual UIs with React, Next.js, TypeScript, and integrated translation APIs',
      'Optimized real-time sync using Firebase, implemented unit and functional tests',
      'Automated deployments via CI/CD on Google Cloud for faster, reliable releases'
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
    position: 'Software Developer',
    location: 'Brisbane',
    duration: 'June 2024 - February 2025',
    description: [
      'Engaged numerous students by developing an AR/VR application using C# and .NET for STEM events',
      'Designed an immersive 3D Gaming project in Unity, enhancing learning engagement',
      'Collaborated with tech educators to align .NET app features with the curriculum, increasing usability'
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
      'Ensured system uptime across high-profile events by proactive IT/AV monitoring and support',
      'Diagnosed and resolved hardware, software, and network issues, improving client satisfaction',
      'Configured, deployed, and maintained enterprise-grade IT/AV systems',
      'Collaborated with cross-functional teams to integrate technology solutions and seamless operations'
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
    position: 'Administration Officer',
    location: 'New Taipei City',
    duration: 'March 2020 - May 2022',
    description: [
      'Optimized the inventory database to reduce data errors through system automation',
      'Streamlined workflows by introducing digital process management tools.',
      'Coordinated system integration and information flow across departments and external partners'
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
    description: 'Recognized for high academic performance in the Computer Science program.',
    imageUrl: '/2025 QUT Executive Deans Commendation for Academic Excellence.png'
  },
  {
    id: '2',
    title: 'QUT Best Research Paper Award',
    organization: 'Queensland University of Technology',
    date: 'October 2024',
    location: 'Brisbane',
    description: 'Awarded for research on university IT programs and industry needs at the 5th Annual Research in IT Practice Conference.',
    imageUrl: '/2024 QUT Best Research Papers and Outputs Awards.png'
  },
  {
    id: '3',
    title: 'QUT Executive Deans\' Commendation for Academic Excellence',
    organization: 'Queensland University of Technology',
    date: 'December 2023',
    location: 'Brisbane',
    description: 'Recognized for consistently high academic performance in the Master of IT program.',
    imageUrl: '/2023 QUT Executive Deans Commendation for Academic Excellence.png'
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

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Deloitte Australia - Cyber Security Virtual Internship',
    organization: 'Deloitte',
    date: 'July 2025',
    credentialId: 'xoCwz9QQqEjBogJRF',
    imageUrl: '/Cyber security.png',
    description: 'Completed virtual internship program focusing on cybersecurity fundamentals, threat assessment, and security implementation strategies.'
  },
  {
    id: '2',
    title: 'Deloitte Australia - Data Analytics Virtual Internship',
    organization: 'Deloitte',
    date: 'July 2025',
    credentialId: 'GEIEHAdveFGVQyHBb',
    imageUrl: '/Data Analyst.png',
    description: 'Completed comprehensive data analytics program covering data visualization, statistical analysis, and business intelligence tools.'
  },
  {
    id: '3',
    title: 'Deloitte Australia - Technology Job Simulation',
    organization: 'Deloitte',
    date: 'July 2025',
    credentialId: 'njg83iGnBToSNz5t3',
    imageUrl: '/Coding Dvelopment.png',
    description: 'Participated in technology job simulation covering software development, system design, and technology consulting practices.'
  },
  {
    id: '4',
    title: 'Tata - GenAI Powered Data Analytics Virtual Internship',
    organization: 'Tata Group',
    date: 'July 2025',
    credentialId: 'DZe4jcSEd68tng2Yz',
    imageUrl: '/GenAI Powered Data Analytics.png',
    description: 'Completed advanced program in AI-powered data analytics, focusing on machine learning applications and generative AI in business intelligence.'
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
    id: 'ai-media-translation',
    number: 1,
    title: 'AI-Powered Media Translation & Dubbing Platform',
    description: 'An AI-driven platform enabling media translation, multilingual dubbing, and customized video playbook for global audiences.',
    longDescription: 'A comprehensive AI-powered platform that revolutionizes media localization through automated translation, natural-sounding multilingual dubbing, and customizable video playback experiences. Built for Braiv Tech to serve global media companies seeking efficient, high-quality localization solutions.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Google Cloud', 'RESTful API', 'CI/CD', 'Mux API', 'ElevenLabs AI Dubbing', 'Video Player Customization', 'UI/UX Design'],
    features: [
      'Responsive multilingual UI with real-time sync via Firebase/Google Cloud',
      'Custom video player themes using Mux API with branded playback',
      'Advanced caption and highlight color customization',
      'Translation API integration supporting multiple languages',
      'Document formatting preservation during translation',
      'AI-powered dubbing via ElevenLabs for natural-sounding voiceovers',
      'Optimized deployment pipelines for faster releases',
      'Performance-optimized API for smooth playback experience'
    ],
    githubUrl: undefined,
    liveUrl: 'https://www.braiv.co/',
    liveLabel: 'Product Website',
    imageUrl: '/1.png',
    category: 'fullstack',
    status: 'completed',
    highlights: [
      'Built responsive multilingual UI with real-time sync',
      'Developed custom video player themes with branded playback',
      'Integrated AI-powered dubbing for natural multilingual voiceovers',
      'Optimized deployment and API performance for production'
    ]
  },
  {
    id: 'backroads-explorer',
    number: 2,
    title: 'BackRoads Explorer - Travel & Tourism Website',
    description: 'Modern travel website showcasing destinations and experiences with responsive React architecture',
    longDescription: 'A comprehensive travel and tourism platform built with React.js, designed to inspire wanderlust and showcase beautiful destinations. Features responsive design, interactive user interface, and optimized performance for seamless browsing across all devices. Built with Create React App and deployed on Netlify for reliable hosting and fast global access.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Create React App', 'Netlify', 'Responsive Design', 'Modern Web Standards'],
    features: [
      'Interactive travel destination showcase',
      'Responsive design optimized for all device sizes',
      'Modern React component architecture with reusable components',
      'Fast loading performance with optimized asset management',
      'Professional travel-focused user interface design',
      'Cross-browser compatibility and web accessibility standards',
      'Netlify deployment with continuous integration pipeline',
      'SEO-friendly structure for better search visibility',
      'Mobile-first approach for optimal travel browsing experience'
    ],
    githubUrl: 'https://github.com/yorkyorkex/backroads-app',
    liveUrl: 'https://backroads-app-york.netlify.app/',
    imageUrl: '/12.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Built modern travel platform with React.js architecture',
      'Implemented responsive design for optimal mobile travel browsing',
      'Deployed production-ready application with Netlify hosting',
      'Demonstrated clean code practices with component-based design'
    ]
  },
  {
    id: 'chatconnect-messaging-app',
    number: 3,
    title: 'ChatConnect - Real-Time Messaging Application',
    description: 'Modern WhatsApp-inspired messaging application built with React, featuring real-time chat functionality and responsive design',
    longDescription: 'A feature-rich real-time messaging application inspired by WhatsApp, built with React and modern web technologies. Designed to demonstrate proficiency in building complex user interfaces, state management, and interactive communication features. Features a clean, intuitive interface that replicates the familiar messaging experience with modern web standards.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Create React App', 'Real-time Communication', 'Responsive Design', 'Netlify'],
    features: [
      'Real-time messaging interface with familiar WhatsApp-like design',
      'Interactive chat components with message threading',
      'Contact list management and user profiles',
      'Responsive design optimized for mobile and desktop devices',
      'Modern React component architecture with hooks and state management',
      'Clean user interface with intuitive navigation patterns',
      'Message status indicators and timestamps',
      'Cross-browser compatibility and modern web standards',
      'Netlify deployment with continuous integration'
    ],
    githubUrl: 'https://github.com/yorkyorkex/whats-app',
    liveUrl: 'https://whats-app-york.netlify.app/',
    imageUrl: '/13.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Built real-time messaging interface with React fundamentals',
      'Implemented familiar WhatsApp-inspired user experience',
      'Demonstrated modern JavaScript and component-based architecture',
      'Deployed production-ready messaging application'
    ]
  },
  {
    id: 'reactcraft-studio',
    number: 4,
    title: 'ReactCraft Studio - E-Book Store',
    description: 'Interactive e-book store built with React fundamentals, demonstrating core React concepts and modern web development practices',
    longDescription: 'A comprehensive e-book store application showcasing fundamental React development skills and modern web application architecture. Built as part of a React course curriculum, this project demonstrates mastery of React components, state management, event handling, and responsive design. Features an intuitive user interface for browsing and managing digital book collections with clean, professional design.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Create React App', 'Responsive Design', 'Modern Web Standards', 'Vercel Deployment'],
    features: [
      'Interactive e-book catalog with browsing functionality',
      'Responsive design optimized for all device sizes',
      'Component-based React architecture demonstrating best practices',
      'Modern JavaScript ES6+ features and React hooks',
      'Clean user interface with intuitive navigation',
      'State management for shopping cart and user interactions',
      'Event handling for user interactions and form processing',
      'Professional deployment pipeline with Vercel hosting',
      'Cross-browser compatibility and web standards compliance'
    ],
    githubUrl: 'https://github.com/yorkyorkex/react-course-project',
    liveUrl: 'https://react-course-project-sooty.vercel.app/',
    imageUrl: '/11.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Mastered React fundamentals through practical e-book store implementation',
      'Applied modern JavaScript and web development best practices',
      'Demonstrated component-based architecture and state management',
      'Successfully deployed production-ready application to Vercel'
    ]
  },
  {
    id: 'nova-ai-chat-assistant',
    number: 5,
    title: 'Nova Chat - Intelligent AI Assistant',
    description: 'Versatile AI chatbot with neon UI design, enabling seamless conversations across multiple domains from travel planning to code analysis',
    longDescription: 'An intelligent AI-powered chat assistant built with modern web technologies and integrated with advanced language models. Nova Chat features a sleek neon-themed interface and provides versatile conversational AI capabilities, supporting everything from travel planning and creative brainstorming to technical code explanations and content rewriting. Built for speed and user experience with Next.js and Vercel AI SDK.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel AI SDK', 'AI/ML Integration', 'Responsive Design', 'Modern UI/UX', 'OpenAI API', 'Streaming Responses', 'Real-time Chat'],
    features: [
      'Intelligent conversational AI with multi-domain expertise',
      'Sleek neon-themed user interface design',
      'Real-time streaming responses for instant feedback',
      'Versatile functionality: trip planning, code explanation, brainstorming',
      'Content rewriting and text optimization capabilities',
      'Fast response times with optimized AI integration',
      'Clean, minimalist chat interface for enhanced UX',
      'Built with Next.js for optimal performance and SEO',
      'Vercel AI SDK integration for advanced AI features',
      'Responsive design compatible with all devices'
    ],
    githubUrl: 'https://github.com/yorkyorkex/chatbot',
    liveUrl: 'https://chatbot-beige-one-96.vercel.app/',
    imageUrl: '/10.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Built intelligent AI assistant with multi-domain conversational abilities',
      'Designed modern neon-themed UI for enhanced user engagement',
      'Integrated Vercel AI SDK for advanced streaming responses',
      'Developed versatile AI features supporting diverse use cases'
    ]
  },
  {
    id: 'propertyhub-rental-platform',
    number: 6,
    title: 'PropertyHub - Modern E-Commerce Rental Platform',
    description: 'Full-stack rental property platform with advanced search, favorites, and landlord contact features',
    longDescription: 'A comprehensive e-commerce rental platform built with Next.js and TypeScript, designed to streamline property rental processes. Features advanced property search and filtering, user favorites management, responsive design, and direct landlord communication. Built with modern web technologies and optimized for excellent user experience across all devices.',
    technologies: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'SQLite', 'Better-SQLite3', 'API Routes', 'Vercel', 'Responsive Design'],
    features: [
      'Advanced property search and filtering system',
      'User favorites management for saved properties',
      'Responsive design optimized for all devices',
      'Direct landlord contact functionality',
      'Detailed property information display (price, location, amenities)',
      'Modern UI with clean, intuitive design',
      'SQLite database integration for data persistence',
      'RESTful API routes for seamless data management',
      'Vercel deployment for reliable hosting'
    ],
    githubUrl: 'https://github.com/yorkyorkex/E-commerce-Rental-Website',
    liveUrl: 'https://e-commerce-rental-website.vercel.app/',
    imageUrl: '/9.png',
    category: 'fullstack',
    status: 'completed',
    highlights: [
      'Built comprehensive rental property search platform',
      'Implemented advanced filtering and favorites system',
      'Designed modern responsive UI for optimal user experience',
      'Integrated SQLite database with RESTful API architecture'
    ]
  },
  {
    id: 'ai-dice-agent-mcp',
    number: 7,
    title: 'AI Dice Agent - MCP Server for Claude Desktop',
    description: 'Intelligent AI agent providing dice rolling functionality through Model Context Protocol for Claude Desktop applications',
    longDescription: 'An advanced AI agent built as a Model Context Protocol (MCP) server that seamlessly integrates with Claude Desktop to provide intelligent dice rolling capabilities. Designed for tabletop gaming, probability simulations, and random number generation with AI-assisted decision making. Features comprehensive dice support, interactive web interface, and smart gaming assistance.',
    technologies: ['TypeScript', 'Node.js', 'MCP Protocol', 'Vercel', 'Web API', 'Claude Desktop', 'AI Integration', 'Server Development'],
    features: [
      'AI-powered Model Context Protocol (MCP) server implementation',
      'Intelligent dice rolling with contextual game assistance',
      'Support for standard gaming dice (d2, d4, d6, d8, d10, d12, d20, d100)',
      'Custom dice configuration with AI-suggested optimal settings',
      'Smart multiple dice rolling with probability analysis',
      'Interactive web interface for testing agent functionality',
      'Real-time AI-assisted gaming decisions and recommendations',
      'Seamless Claude Desktop integration for natural language gaming',
      'Vercel deployment with reliable cloud hosting'
    ],
    githubUrl: undefined,
    liveUrl: 'https://rolldice-mcpserver-seven.vercel.app/',
    liveLabel: 'Live Demo',
    imageUrl: '/8.png',
    category: 'backend',
    status: 'completed',
    highlights: [
      'Built intelligent AI agent for Claude Desktop integration',
      'Implemented advanced Model Context Protocol (MCP) server',
      'Created AI-assisted dice system for enhanced gaming experience',
      'Developed comprehensive testing interface with real-time AI feedback'
    ]
  },
  {
    id: 'wizard-budget',
    number: 8,
    title: 'Wizard Budget – Cross-Platform Personal Finance Management Mobile App',
    description: 'A cross-platform mobile application for tracking income and expenses, budgeting, and visualizing personal finance trends with secure MySQL-powered data management.',
    longDescription: 'A comprehensive personal finance management app designed for cross-platform mobile use. Features secure user authentication, persistent data storage, and interactive financial dashboards. Built with React Native and Expo for optimal mobile performance and user experience.',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MySQL', 'RESTful API', 'SQL', 'Authentication', 'Data Visualization', 'Mobile UI Design'],
    features: [
      'Cross-platform mobile budget tracking for income and expenses',
      'Secure user authentication and session management',
      'Persistent data storage using MySQL database',
      'RESTful API integration for seamless data synchronization',
      'Interactive dashboards with visualized financial insights',
      'Transaction categorization and analysis tools',
      'Mobile-optimized UI/UX design for enhanced usability',
      'Real-time financial data updates and notifications'
    ],
    githubUrl: 'https://github.com/yorkyorkex/budget',
    liveUrl: undefined,
    imageUrl: '/2.png',
    category: 'mobile',
    status: 'completed',
    highlights: [
      'Designed cross-platform mobile budget tracking app',
      'Implemented secure authentication with MySQL backend',
      'Built interactive dashboards for financial insights',
      'Applied mobile UI/UX principles for better engagement'
    ]
  },
  {
    id: 'interactive-3d-building',
    number: 9,
    title: 'Interactive 3D Building Visualization & AR/VR Simulation Platform',
    description: 'An immersive 3D building visualization system with BIM/IFC integration and AR/VR simulation using Tilt Five.',
    longDescription: 'A cutting-edge 3D visualization platform that transforms architectural data into immersive interactive experiences. Features comprehensive BIM/IFC integration for accurate building representation and revolutionary AR/VR simulation capabilities using Tilt Five hardware for unprecedented architectural visualization.',
    technologies: ['Unity 3D', 'C#', '.NET Framework', 'BIM/IFC Integration', 'AR/VR Simulation', 'Tilt Five', 'Prefab System', 'Git', '3D Modeling', 'UI Interaction Design'],
    features: [
      '3D interactive building visualization system in Unity',
      'Detailed exploration of architectural structures',
      'BIM/IFC model data integration for accurate representation',
      'AR/VR simulation using Tilt Five hardware',
      'Immersive building walkthrough experiences',
      'C# scripts for object interactions and camera movement',
      'Building component highlighting and selection',
      '.NET framework integration for complex data processing',
      'Performance-optimized 3D rendering and interactivity'
    ],
    githubUrl: 'https://unity.com/',
    liveUrl: 'https://www.tiltfive.com/',
    githubLabel: 'Development Engine',
    liveLabel: 'AR Device',
    imageUrl: '/3.png',
    category: 'ar-vr',
    status: 'completed',
    highlights: [
      'Developed 3D interactive building visualization in Unity',
      'Integrated BIM/IFC model data for accurate architecture',
      'Implemented AR/VR simulation with Tilt Five hardware',
      'Created C# scripts for enhanced object interactions'
    ]
  },
  {
    id: 'entertainer-website',
    number: 10,
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
    imageUrl: '/4.png',
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
    number: 11,
    title: 'Team Project Management System',
    description: 'Comprehensive project management application for team collaboration',
    longDescription: 'A full-stack project management system designed for teams to collaborate effectively. Features real-time updates, task management, team communication, and project tracking with modern UI/UX design.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Firebase', 'MySQL', 'Tailwind CSS', 'Real-time Database'],
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
    imageUrl: '/5.png',
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
    id: 'reviews-carousel-react',
    number: 12,
    title: 'Reviews Carousel - Interactive Customer Testimonials',
    description: 'Dynamic React application featuring an interactive reviews carousel with seamless navigation and random selection functionality',
    longDescription: 'An elegant customer reviews carousel built with React to demonstrate advanced state management and user interaction patterns. Features smooth navigation through testimonials, random review discovery, and responsive design. Built to showcase mastery of React fundamentals including array manipulation, state control, and component-based architecture while creating an engaging user experience for customer feedback display.',
    technologies: ['React', 'JavaScript ES6+', 'CSS3', 'HTML5', 'React Hooks', 'State Management', 'Component Architecture', 'React Icons', 'Responsive Design'],
    features: [
      'Interactive reviews carousel with smooth navigation',
      'Previous/Next navigation with circular array traversal',
      'Random review selection for content discovery',
      'Dynamic rendering of customer testimonials',
      'Responsive design optimized for all devices',
      'Clean testimonial display with images, names, and job titles',
      'React state management for current review index',
      'Modulus operator implementation for seamless cycling',
      'Modern JavaScript array manipulation techniques',
      'Professional UI design for customer feedback showcase'
    ],
    githubUrl: 'https://github.com/yorkyorkex/03-reviews',
    liveUrl: 'https://03-reviews-york.netlify.app/',
    imageUrl: '/17.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Built interactive reviews carousel with React state management',
      'Implemented circular navigation using modulus operator for seamless cycling',
      'Created dynamic customer testimonial showcase with professional design',
      'Demonstrated advanced array manipulation and user interaction patterns'
    ]
  },
  {
    id: 'tours-explorer-react',
    number: 13,
    title: 'Tours Explorer - Interactive Travel Showcase',
    description: 'Dynamic React application for exploring and managing tour information with API integration and interactive features',
    longDescription: 'A comprehensive tour management React application showcasing advanced React concepts through real-world travel industry functionality. Features dynamic API data fetching, interactive tour management, and responsive design. Built to demonstrate proficiency in React state management, component lifecycle, user interactions, and modern JavaScript practices with a focus on practical travel booking interface design.',
    technologies: ['React', 'JavaScript ES6+', 'Vite', 'Fetch API', 'CSS3', 'HTML5', 'React Hooks', 'State Management', 'Component Architecture', 'API Integration'],
    features: [
      'Dynamic tour data fetching from external API',
      'Interactive tour list with individual management capabilities',
      'Remove tour functionality with state updates',
      'Expandable tour descriptions with "Read More" feature',
      'Loading state handling with dedicated components',
      'Re-fetch functionality for data refresh',
      'Responsive design optimized for travel browsing',
      'Component-based architecture (App, Tours, Tour, Loading)',
      'Modern React patterns and best practices',
      'User-friendly travel interface design'
    ],
    githubUrl: 'https://github.com/yorkyorkex/02-tours',
    liveUrl: 'https://02-tours-york.netlify.app/',
    imageUrl: '/16.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Built interactive tour management system with React fundamentals',
      'Implemented API data fetching with loading states and error handling',
      'Created dynamic user interactions for tour exploration and management',
      'Applied modern JavaScript and component-based architecture patterns'
    ]
  },
  {
    id: 'birthday-buddy-react',
    number: 14,
    title: 'Birthday Buddy - React Fundamentals Showcase',
    description: 'Interactive React application for managing birthday lists, demonstrating core React concepts and state management',
    longDescription: 'A clean, educational React application built to demonstrate fundamental React concepts through a practical birthday management interface. Features dynamic state management, component composition, and responsive design while teaching essential React skills through hands-on implementation. Built with Vite for optimal development experience and modern JavaScript practices.',
    technologies: ['React', 'Vite', 'JavaScript ES6+', 'CSS3', 'HTML5', 'React Hooks', 'State Management', 'Component Architecture', 'Responsive Design'],
    features: [
      'Dynamic birthday list management with React state',
      'Interactive person cards with responsive image rendering',
      'Real-time counter showing number of people in the list',
      'Clear all functionality with state reset',
      'Component-based architecture demonstrating React best practices',
      'Modern JavaScript ES6+ features and React hooks',
      'Clean, intuitive user interface design',
      'Vite build system for fast development and optimal performance',
      'Educational code structure ideal for learning React fundamentals'
    ],
    githubUrl: 'https://github.com/yorkyorkex/01-birthday-buddy',
    liveUrl: 'https://01-birthday-buddy-york.netlify.app/',
    imageUrl: '/15.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Mastered React fundamentals through practical birthday list implementation',
      'Demonstrated state management and component composition patterns',
      'Built educational showcase with clean, reusable React components',
      'Applied modern JavaScript and Vite for optimized development workflow'
    ]
  },
  {
    id: 'task-management-mobile',
    number: 15,
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
    imageUrl: '/6.png',
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
    number: 16,
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
    imageUrl: '/7.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Modern Next.js 14 architecture',
      'Comprehensive skill showcase',
      'Professional design system',
      'Performance optimized'
    ]
  },
  {
    id: 'advanced-react-mastery',
    number: 17,
    title: 'Advanced React Mastery - Interactive Learning Showcase',
    description: 'Comprehensive React learning project demonstrating 15 advanced concepts through interactive examples and hands-on implementations',
    longDescription: 'An extensive React learning showcase featuring 15 interactive projects that demonstrate mastery of advanced React concepts and modern development practices. Built with Vite for optimal development experience, this project serves as a comprehensive portfolio of React skills including hooks, state management, context patterns, and component architecture. Each mini-project focuses on specific React fundamentals while showcasing clean code practices and modern JavaScript implementation.',
    technologies: ['React', 'JavaScript ES6+', 'Vite', 'CSS3', 'HTML5', 'React Hooks', 'Context API', 'React Router', 'Component Architecture', 'Modern Web Standards'],
    features: [
      'Interactive showcase of 15 React concept demonstrations',
      'Advanced React hooks implementation (useState, useEffect, useRef, useContext, useReducer)',
      'Modern state management patterns and best practices',
      'Context API and reducer patterns for complex state handling',
      'Conditional rendering and dynamic component behavior',
      'Form handling and user interaction patterns',
      'React Router integration for navigation',
      'Vite build system for fast development and optimal bundling',
      'Clean, modular component architecture',
      'Educational code structure ideal for learning and reference'
    ],
    githubUrl: 'https://github.com/yorkyorkex/03-advanced-react',
    liveUrl: 'https://react-udemy-project.netlify.app/',
    imageUrl: '/14.png',
    category: 'web',
    status: 'completed',
    highlights: [
      'Mastered 15 advanced React concepts through hands-on implementation',
      'Demonstrated modern React hooks and state management patterns',
      'Built educational showcase with clean, reusable component architecture',
      'Applied Vite for optimized development workflow and performance'
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