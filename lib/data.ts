export const personalData = {
  name: 'Varshan K',
  title: 'Full Stack Developer',
  tagline: 'Building human-centered web experiences with passion and precision',
  description: 'Interactive and empathetic developer passionate about creating simple, human-centered designs and web solutions.',
  location: 'Coimbatore, Tamilnadu-641668',
  email: 'varshanrio05@gmail.com',
  phone: '9626949995',
  linkedin: 'https://www.linkedin.com/in/varshan-k-v005',
  github: 'https://github.com/varshan054685',
  instagram: 'https://instagram.com/im_luffy_56',
  whatsapp: 'https://wa.me/919626949995',
  resumeLink: '/Varshan_Resume.pdf',
};


export const skills = {
  categories: [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: '/icons/skills/html5.svg', color: '#e34c26', description: 'Used to structure web content and ensure accessibility across devices.' },
        { name: 'CSS3', icon: '/icons/skills/css3.svg', color: '#264de4', description: 'Used to create responsive layouts and visually appealing designs.' },
        { name: 'JavaScript', icon: '/icons/skills/javascript.svg', color: '#f7df1e', description: 'Used to implement complex features and interactive elements.' },
        { name: 'TypeScript', icon: '/icons/skills/typescript.svg', color: '#3178c6', description: 'Used to add static typing and improve code quality in large-scale applications.' },
        { name: 'React.js', icon: '/icons/skills/react.svg', color: '#61dafb', description: 'Used to build interactive dashboards, SPAs, and reusable UI components.' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: '/icons/skills/nodejs.svg', color: '#339933', description: 'Used to create REST APIs, authentication systems, and backend services.' },
        { name: 'Express.js', icon: '/icons/skills/express.svg', color: '#ffffff', description: 'Used to build robust web applications and scalable API endpoints.' },
        { name: 'Python', icon: '/icons/skills/python.svg', color: '#3776ab', description: 'Used for backend logic, data processing, and AI/ML integrations.' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: '/icons/skills/mongodb.svg', color: '#47a248', description: 'Used for flexible, document-oriented data storage and management.' },
        { name: 'PostgreSQL', icon: '/icons/skills/postgresql.svg', color: '#336791', description: 'Used for reliable relational data storage with complex querying.' },
      ],
    },
    {
      title: 'UI/UX & Styling',
      skills: [
        { name: 'Tailwind CSS', icon: '/icons/skills/tailwindcss.svg', color: '#06b6d4', description: 'Used for rapid UI development with a utility-first approach.' },
        { name: 'MUI', icon: '/icons/skills/materialui.svg', color: '#007fff', description: 'Used for building professional-grade UI with pre-designed React components.' },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: '/icons/skills/git.svg', color: '#f05032', description: 'Used for version control and collaborative development.' },
        { name: 'GitHub', icon: '/icons/skills/github.svg', color: '#ffffff', description: 'Used for hosting repositories and managing CI/CD workflows.' },
      ],
    },
  ],
  workApproach: [
    {
      title: 'Collaboration',
      description: 'Active communicator in team environments, focusing on code reviews and shared project goals.',
      icon: 'Users',
    },
    {
      title: 'Coding Principles',
      description: 'Committed to writing clean, maintainable, and DRY code with a focus on scalable architecture.',
      icon: 'Code2',
    },
    {
      title: 'Problem-Solving',
      description: 'Approaching complex challenges with a systematic debugging process and architectural thinking.',
      icon: 'Lightbulb',
    },
    {
      title: 'Learning Mindset',
      description: 'Continuously expanding my tech stack and staying updated with industry best practices.',
      icon: 'TrendingUp',
    },
  ],
  currentlyLearning: [
    { name: 'System Design basics', icon: 'Layout' },
    { name: 'Advanced React patterns', icon: 'Atom' },
    { name: 'Backend scalability concepts', icon: 'Server' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'AI Chatbot',
    description: 'Team-based hackathon chatbot with real-time interaction. Won 1st prize at Internal Hackathon 2025 for this innovative solution.',
    longDescription: 'An intelligent chatbot built for a hackathon competition that enables real-time conversations. The project features natural language processing capabilities, responsive UI, and seamless integration with backend services. This project won the 1st prize at the Internal Hackathon 2025.',
    image: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    description: 'Full-stack online shopping platform with authentication, cart functionality, and payment integration.',
    longDescription: 'A complete e-commerce solution built with the MERN stack. Features include user authentication, product catalog, shopping cart, checkout process, and admin dashboard. The application is fully responsive and optimized for performance.',
    image: '/images/ecommerce.png',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/varshan054685/mern-shop',
    live: 'https://mern-shop-flax.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Event Registration System',
    description: 'Web app for college event management and student registration with real-time updates.',
    longDescription: 'A comprehensive event management platform designed for educational institutions. Features include event creation, student registration, automated email notifications, attendance tracking, and analytics dashboard.',
    image: '/images/event.png',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/varshan054685/college-event-registration',
    live: 'https://college-event-registration-nine.vercel.app/',
    featured: true,
  },
  {
    id: 4,
    title: 'Automatic Time-Table Scheduler',
    description: 'Automated scheduling system to reduce timetable conflicts using AI algorithms.',
    longDescription: 'An intelligent scheduling system that automatically generates optimized timetables for educational institutions. Uses constraint satisfaction algorithms to minimize conflicts and maximize resource utilization.',
    image: '/images/scheduler.png',
    tech: ['PostgreSQL', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/varshan054685/Automatic_Time-Table_scheduler',
    live: 'https://automatic-time-table-scheduler.vercel.app/',
    featured: true,
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    description: 'Professional portfolio website showcasing skills, projects, and experience with a modern UI.',
    longDescription: 'A high-performance personal portfolio built with Next.js and TypeScript. Features smooth animations with Framer Motion, responsive design with Tailwind CSS, and centralized data management for easy updates.',
    image: '/images/portfolio.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/varshan054685/portfolio',
    live: 'https://varshan-portfolio.vercel.app',
    featured: true,
  },
  {
    id: 6,
    title: 'Lumina Finance App',
    description: 'A modern finance tracking application with AI insights and comprehensive dashboard capabilities.',
    longDescription: 'Lumina is an advanced personal finance application designed to help users manage their money effectively. It features intuitive dashboards, transaction tracking, budget goal setting, and AI-driven predictive insights for smarter financial decisions.',
    image: '/images/lumina.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    github: 'https://github.com/varshan054685/studio.git',
    live: 'https://lumina-expense.netlify.app',
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    type: 'award',
    title: '1st Prize - Internal Hackathon',
    organization: 'KPR College',
    year: '2025',
    description: 'Won first place for presenting an innovative tech solution: AI Chatbot project',
    icon: 'Trophy',
  },
  {
    id: 2,
    type: 'award',
    title: '2nd Prize - Football Tournament',
    organization: 'Literacy Mission MHSS',
    year: '2022',
    description: 'Journal Level Football Tournament',
    icon: 'Medal',
  },
  {
    id: 3,
    type: 'participation',
    title: 'Tamizhi Hackathon',
    organization: 'State Level Event',
    year: '2025',
    description: 'Chosen to participate in a state-level innovation event dedicated to advancing Tamil language technology solutions',
    icon: 'Handshake',
  },
  {
    id: 4,
    type: 'participation',
    title: 'Smart India Hackathon (SIH)',
    organization: 'National Level',
    year: '2024',
    description: 'Competed in a national-level innovation challenge, contributing to team-based solution design, development, and presentation',
    icon: 'Globe',
  },
];

export const education = [
  {
    id: 1,
    degree: 'B.Com (Information Technology)',
    institution: 'KPR College of Arts, Science & Research',
    location: 'Coimbatore',
    period: '2023 – 2026',
    description: 'Pursuing Bachelor of Commerce with specialization in Information Technology',
    icon: 'GraduationCap',
  },
  {
    id: 2,
    degree: 'Higher Secondary Education (HSC)',
    institution: 'Literacy Mission Matriculation HSS',
    location: 'Coimbatore',
    period: '2021 – 2023',
    description: 'Completed with 77% aggregate',
    icon: 'School',
  },
];
