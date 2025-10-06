export interface Program {
  id: string;
  title: string;
  category: string;
  level: string;
  description: string;
  tagline?: string;
  featured?: boolean;
}

export const programs: Program[] = [
  // Diploma Level 2
  {
    id: "diploma-2-business",
    title: "Level 2 Diploma in Business",
    category: "diploma",
    level: "2",
    description: "Build foundational business knowledge and skills. Perfect for beginners looking to start their business career.",
    tagline: "Start your business journey",
  },
  {
    id: "diploma-2-cyber",
    title: "Level 2 Diploma in Beginners in Cyber Security",
    category: "diploma",
    level: "2",
    description: "Learn the basics of protecting business data from digital threats in this beginner-friendly cybersecurity program.",
    tagline: "Cyber security: Protecting business data from digital threats",
    featured: true,
  },
  
  // Diploma Level 3
  {
    id: "diploma-3-business",
    title: "Level 3 Integrated Diploma in Business and Management",
    category: "diploma",
    level: "3",
    description: "Develop comprehensive business management skills with integrated learning approach.",
    tagline: "Driving growth through leadership and strategy",
  },
  
  // Diploma Level 4
  {
    id: "diploma-4-accounting",
    title: "Level 4 Diploma in Accounting and Finance",
    category: "diploma",
    level: "4",
    description: "Master accounting principles, financial management, and business finance fundamentals.",
    tagline: "Managing money, measuring success",
  },
  {
    id: "diploma-4-hospitality",
    title: "Level 4 Diploma in Hospitality and Tourism Management",
    category: "diploma",
    level: "4",
    description: "Learn to manage hospitality operations and create exceptional guest experiences.",
    tagline: "Creating experiences, managing destinations",
  },
  {
    id: "diploma-4-psychology",
    title: "Level 4 Diploma in Psychology",
    category: "diploma",
    level: "4",
    description: "Explore human behavior, cognition, and psychological principles.",
    tagline: "Understanding minds, shaping behaviors",
  },
  {
    id: "diploma-4-cyber",
    title: "Level 4 Diploma in Cyber Security",
    category: "diploma",
    level: "4",
    description: "Develop practical skills in protecting systems and networks from cyber threats.",
    tagline: "Defending systems, safeguarding data",
  },
  {
    id: "diploma-4-it",
    title: "Level 4 Diploma in Information Technology",
    category: "diploma",
    level: "4",
    description: "Build essential IT skills covering software, hardware, and network fundamentals.",
    tagline: "Powering innovation, enabling connectivity",
  },
  {
    id: "diploma-4-ai",
    title: "Level 4 Diploma in Artificial Intelligence",
    category: "diploma",
    level: "4",
    description: "Gain foundational knowledge in AI concepts, machine learning, and intelligent systems.",
    tagline: "Advanced AI skills and applications",
    featured: true,
  },
  
  // Diploma Level 5
  {
    id: "diploma-5-accounting",
    title: "Level 5 Diploma in Accounting and Finance",
    category: "diploma",
    level: "5",
    description: "Advanced accounting and financial management for career progression.",
    tagline: "Managing money, measuring success",
  },
  {
    id: "diploma-5-hospitality",
    title: "Level 5 Diploma in Hospitality and Tourism Management",
    category: "diploma",
    level: "5",
    description: "Advanced hospitality management with strategic tourism operations.",
  },
  {
    id: "diploma-5-psychology",
    title: "Level 5 Diploma in Psychology",
    category: "diploma",
    level: "5",
    description: "Advanced psychological theories and research methodologies.",
  },
  {
    id: "diploma-5-it",
    title: "Level 5 Diploma in Information Technology",
    category: "diploma",
    level: "5",
    description: "Advanced IT systems, programming, and infrastructure management.",
  },
  {
    id: "diploma-5-cyber",
    title: "Level 5 Diploma in Cyber Security",
    category: "diploma",
    level: "5",
    description: "Advanced cybersecurity techniques, threat analysis, and security architecture.",
  },
  {
    id: "diploma-5-business-extended",
    title: "Extended Level 5 Diploma in Business Management",
    category: "diploma",
    level: "5",
    description: "Comprehensive business management education with extended modules.",
    tagline: "Empowering success through leadership",
  },
  
  // Diploma Level 7
  {
    id: "diploma-7-accounting",
    title: "Level 7 Diploma in Accounting and Finance",
    category: "diploma",
    level: "7",
    description: "Postgraduate-level accounting and financial leadership skills.",
  },
  {
    id: "diploma-7-data-science",
    title: "Level 7 Diploma in Data Science",
    category: "diploma",
    level: "7",
    description: "Advanced data analytics, machine learning, and big data technologies.",
  },
  {
    id: "diploma-7-health",
    title: "Level 7 Diploma in Health and Social Care",
    category: "diploma",
    level: "7",
    description: "Strategic healthcare management and social care leadership.",
  },
  {
    id: "diploma-7-education",
    title: "Level 7 Diploma in Education Management and Leadership",
    category: "diploma",
    level: "7",
    description: "Lead educational institutions with advanced management strategies.",
  },
  {
    id: "diploma-7-hr",
    title: "Level 7 Diploma in Human Resource Management",
    category: "diploma",
    level: "7",
    description: "Strategic HR leadership, talent management, and organizational development.",
  },
  {
    id: "diploma-7-hospitality",
    title: "Level 7 Diploma in Hospitality and Tourism Management",
    category: "diploma",
    level: "7",
    description: "Executive-level hospitality and tourism industry leadership.",
  },
  {
    id: "diploma-7-psychology",
    title: "Level 7 Diploma in Psychology",
    category: "diploma",
    level: "7",
    description: "Advanced professional psychology practice and research.",
  },
  {
    id: "diploma-7-strategic-mgmt",
    title: "Level 7 Diploma in Strategic Management and Leadership",
    category: "diploma",
    level: "7",
    description: "Executive leadership, strategic planning, and organizational transformation.",
  },
  {
    id: "diploma-7-marketing",
    title: "Level 7 Diploma in Strategic Marketing",
    category: "diploma",
    level: "7",
    description: "Advanced marketing strategy, digital marketing, and brand management.",
  },
  {
    id: "diploma-7-it",
    title: "Level 7 Diploma in Information Technology",
    category: "diploma",
    level: "7",
    description: "Strategic IT leadership and enterprise systems management.",
  },

  // Walsh College - Undergraduate
  {
    id: "walsh-bba-general",
    title: "Bachelor of Business Administration in General Business",
    category: "walsh",
    level: "Bachelor",
    description: "Comprehensive business education covering all key business disciplines.",
    featured: true,
  },
  {
    id: "walsh-bba-marketing",
    title: "BBA in Marketing",
    category: "walsh",
    level: "Bachelor",
    description: "Master marketing strategies, consumer behavior, and digital marketing.",
  },
  {
    id: "walsh-bba-finance",
    title: "BBA in Finance",
    category: "walsh",
    level: "Bachelor",
    description: "Financial analysis, investment strategies, and corporate finance.",
  },
  {
    id: "walsh-bba-entrepreneurship",
    title: "BBA in Entrepreneurship",
    category: "walsh",
    level: "Bachelor",
    description: "Launch and grow successful ventures with entrepreneurial skills.",
  },
  {
    id: "walsh-bba-accounting",
    title: "BBA in Accounting",
    category: "walsh",
    level: "Bachelor",
    description: "Professional accounting standards and financial reporting.",
  },
  {
    id: "walsh-bba-hr",
    title: "BBA in Human Resource Management",
    category: "walsh",
    level: "Bachelor",
    description: "Talent acquisition, employee development, and HR strategy.",
  },
  {
    id: "walsh-bba-international",
    title: "BBA in International Business",
    category: "walsh",
    level: "Bachelor",
    description: "Global business operations and cross-cultural management.",
  },
  {
    id: "walsh-bsc-it",
    title: "BSc in Information Technology",
    category: "walsh",
    level: "Bachelor",
    description: "Software development, systems administration, and IT infrastructure.",
  },
  {
    id: "walsh-bsc-cyber",
    title: "BSc in Cyber Security",
    category: "walsh",
    level: "Bachelor",
    description: "Protect organizations from cyber threats and security breaches.",
  },
  {
    id: "walsh-bsc-data",
    title: "BSc in Data Analytics",
    category: "walsh",
    level: "Bachelor",
    description: "Data analysis, visualization, and business intelligence.",
  },

  // Walsh College - Postgraduate
  {
    id: "walsh-mba",
    title: "MBA (Master of Business Administration)",
    category: "walsh",
    level: "Master",
    description: "Advance your career with comprehensive business leadership education.",
    featured: true,
  },
  {
    id: "walsh-msc-management",
    title: "MSc in Management",
    category: "walsh",
    level: "Master",
    description: "Strategic management and organizational leadership.",
  },
  {
    id: "walsh-msc-marketing",
    title: "MSc in Marketing",
    category: "walsh",
    level: "Master",
    description: "Advanced marketing strategies and consumer insights.",
  },
  {
    id: "walsh-msc-finance",
    title: "MSc in Finance",
    category: "walsh",
    level: "Master",
    description: "Financial modeling, risk management, and investment analysis.",
  },
  {
    id: "walsh-stem-mba",
    title: "STEM MBA",
    category: "walsh",
    level: "Master",
    description: "Combine business acumen with technical expertise.",
  },
  {
    id: "walsh-msc-ai",
    title: "MSc in AI and Machine Learning",
    category: "walsh",
    level: "Master",
    description: "Advanced artificial intelligence and machine learning applications.",
  },
  {
    id: "walsh-msc-data-analytics",
    title: "MSc in Data Analytics",
    category: "walsh",
    level: "Master",
    description: "Big data, predictive analytics, and data-driven decision making.",
  },
  {
    id: "walsh-msc-it-master",
    title: "MSc in Information Technology",
    category: "walsh",
    level: "Master",
    description: "Advanced IT systems, cloud computing, and enterprise architecture.",
  },

  // Walsh College - Doctorate
  {
    id: "walsh-dba-accounting",
    title: "Doctor of Business Administration in Accounting",
    category: "walsh",
    level: "Doctorate",
    description: "Research-focused accounting scholarship and practice.",
  },
  {
    id: "walsh-dba",
    title: "Doctor of Business Administration (DBA)",
    category: "walsh",
    level: "Doctorate",
    description: "Applied business research and executive leadership.",
  },
  {
    id: "walsh-phd-leadership",
    title: "PhD in Organizational Leadership",
    category: "walsh",
    level: "Doctorate",
    description: "Transformational leadership theory and organizational change.",
  },
  {
    id: "walsh-phd-ai",
    title: "PhD in Artificial Intelligence & Machine Learning",
    category: "walsh",
    level: "Doctorate",
    description: "Cutting-edge AI research and advanced machine learning systems.",
  },
  {
    id: "walsh-phd-data",
    title: "PhD in Data Analytics",
    category: "walsh",
    level: "Doctorate",
    description: "Advanced data science research and analytics methodologies.",
  },
  {
    id: "walsh-phd-cyber",
    title: "PhD in Cyber Security",
    category: "walsh",
    level: "Doctorate",
    description: "Cybersecurity research, cryptography, and threat intelligence.",
  },

  // Walsh Accelerated - Bachelor
  {
    id: "walsh-accel-bba-general",
    title: "BBA in General Business (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Fast-track business degree with flexible scheduling.",
  },
  {
    id: "walsh-accel-marketing",
    title: "Bachelor of Marketing (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Accelerated marketing degree for career changers.",
  },
  {
    id: "walsh-accel-finance",
    title: "Bachelor of Finance (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Fast-track finance degree with practical focus.",
  },
  {
    id: "walsh-accel-entrepreneurship",
    title: "Bachelor of Entrepreneurship (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Launch your startup while earning your degree.",
  },
  {
    id: "walsh-accel-accounting",
    title: "Bachelor of Accounting (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Accelerated accounting program for working professionals.",
  },
  {
    id: "walsh-accel-hr",
    title: "Bachelor of Human Resource Management (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Fast-track HR degree with practical workplace applications.",
  },
  {
    id: "walsh-accel-international",
    title: "Bachelor of International Business (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Accelerated global business education.",
  },
  {
    id: "walsh-accel-it",
    title: "Bachelor of Science in Information Technology (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Fast-track IT degree for tech professionals.",
  },
  {
    id: "walsh-accel-cyber",
    title: "Bachelor of Science in Cyber Security (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Accelerated cybersecurity program for career advancement.",
  },
  {
    id: "walsh-accel-data",
    title: "Bachelor of Data Analytics (Accelerated)",
    category: "walsh-accelerated",
    level: "Bachelor",
    description: "Fast-track data analytics degree.",
  },

  // Walsh Accelerated - Postgraduate
  {
    id: "walsh-accel-mba",
    title: "MBA (Accelerated)",
    category: "walsh-accelerated",
    level: "Master",
    description: "Accelerated MBA for experienced professionals.",
  },
  {
    id: "walsh-accel-mgmt",
    title: "Master of Science in Management (Accelerated)",
    category: "walsh-accelerated",
    level: "Master",
    description: "Fast-track management master's degree.",
  },
  {
    id: "walsh-accel-finance-master",
    title: "Master of Science in Finance (Accelerated)",
    category: "walsh-accelerated",
    level: "Master",
    description: "Accelerated finance master's program.",
  },
  {
    id: "walsh-accel-marketing-master",
    title: "Master of Science in Marketing (Accelerated)",
    category: "walsh-accelerated",
    level: "Master",
    description: "Fast-track marketing master's degree.",
  },
  {
    id: "walsh-accel-data-master",
    title: "Master of Science in Data Analytics (Accelerated)",
    category: "walsh-accelerated",
    level: "Master",
    description: "Accelerated data analytics master's program.",
  },
  {
    id: "walsh-accel-it-master",
    title: "Master of Science in Information Technology (Accelerated)",
    category: "walsh-accelerated",
    level: "Master",
    description: "Fast-track IT master's degree.",
  },
  {
    id: "walsh-accel-ai-master",
    title: "MSc in AI & Machine Learning (Accelerated)",
    category: "walsh-accelerated",
    level: "Master",
    description: "Accelerated AI and machine learning program.",
  },

  // Walsh Accelerated - Doctorate
  {
    id: "walsh-accel-dba",
    title: "Doctorate in Business (DBA) (Accelerated)",
    category: "walsh-accelerated",
    level: "Doctorate",
    description: "Fast-track doctoral business program for executives.",
  },

  // PPA - Bachelor
  {
    id: "ppa-marketing",
    title: "Bachelor of Marketing",
    category: "ppa",
    level: "Bachelor",
    description: "Professional marketing pathway with industry certification.",
  },
  {
    id: "ppa-international",
    title: "Bachelor of International Business",
    category: "ppa",
    level: "Bachelor",
    description: "Global business focus with professional accreditation.",
  },
  {
    id: "ppa-hr",
    title: "Bachelor of Human Resource Management",
    category: "ppa",
    level: "Bachelor",
    description: "Professional HR qualification with practical focus.",
  },

  // PPA - MBA
  {
    id: "ppa-mba-accounting",
    title: "MBA in Accounting and Finance",
    category: "ppa",
    level: "Master",
    description: "Specialized MBA combining accounting and finance expertise.",
  },
  {
    id: "ppa-mba-hr",
    title: "MBA in Human Resource Management",
    category: "ppa",
    level: "Master",
    description: "Strategic HR MBA for senior HR professionals.",
  },
  {
    id: "ppa-mba-international",
    title: "MBA in International Business",
    category: "ppa",
    level: "Master",
    description: "Global business MBA with international perspective.",
  },
  {
    id: "ppa-mba-supply",
    title: "MBA in Supply Chain Management",
    category: "ppa",
    level: "Master",
    description: "Specialized supply chain and logistics MBA.",
  },

  // PPA - Top-Up Bachelor
  {
    id: "ppa-topup-acca",
    title: "BBA for ACCA (Top-Up)",
    category: "ppa",
    level: "Bachelor",
    description: "Complete your BBA with ACCA qualification pathway.",
  },
  {
    id: "ppa-topup-bba",
    title: "Bachelor of Business Administration (Top-Up)",
    category: "ppa",
    level: "Bachelor",
    description: "Complete your BBA degree quickly with prior learning.",
  },

  // PPA - Top-Up Master
  {
    id: "ppa-topup-mba",
    title: "MBA (Top-Up)",
    category: "ppa",
    level: "Master",
    description: "Complete your MBA with accelerated top-up program.",
  },
  {
    id: "ppa-topup-mba-acca",
    title: "MBA for ACCA (Top-Up)",
    category: "ppa",
    level: "Master",
    description: "MBA completion for ACCA-qualified professionals.",
  },

  // EIE - Undergraduate
  {
    id: "eie-ba-business",
    title: "BA in Business Management",
    category: "eie",
    level: "Bachelor",
    description: "European-standard business management degree with global perspective.",
    tagline: "Business leadership and management skills",
  },
  {
    id: "eie-ba-accountancy",
    title: "BA in Accountancy and Finance",
    category: "eie",
    level: "Bachelor",
    description: "European business school qualification in accounting and finance.",
    tagline: "Build financial expertise for global success",
  },
  {
    id: "eie-ba-tourism",
    title: "BA in Tourism and Hospitality Management",
    category: "eie",
    level: "Bachelor",
    description: "Manage global hospitality and tourism operations.",
    tagline: "Manage hospitality and tourism industry operations",
  },

  // EIE - Postgraduate
  {
    id: "eie-mba",
    title: "MBA",
    category: "eie",
    level: "Master",
    description: "Innovative European MBA designed for global business leaders.",
    tagline: "Innovative European MBA for Global Leaders",
  },
  {
    id: "eie-mba-accounting",
    title: "MBA in Accounting & Finance",
    category: "eie",
    level: "Master",
    description: "Advance your accounting career with a specialized European MBA.",
    tagline: "Advance Accounting Career with MBA",
  },
  {
    id: "eie-mba-hospitality",
    title: "MBA in Hospitality & Tourism",
    category: "eie",
    level: "Master",
    description: "Lead the global hospitality and tourism industry.",
    tagline: "Global Hospitality and Tourism Leadership",
  },
];

export const categories = [
  { id: "all", label: "All Programs" },
  { id: "diploma", label: "Diploma Programs" },
  { id: "walsh", label: "Walsh College" },
  { id: "walsh-accelerated", label: "Walsh Accelerated" },
  { id: "ppa", label: "PPA Programs" },
  { id: "eie", label: "EIE European Business School" },
];

export const getFeaturedPrograms = () => programs.filter(p => p.featured);
