export const portfolioData = {
  personal: {
    name: "Amit Kumar Singh",
    shortName: "Amit",
    role: "Computer Science (AI) Student & Software Developer",
    titles: [
      "Software Engineer",
      "AI & Machine Learning Enthusiast",
      "Full-Stack Web Developer",
      "Problem Solver & Competitive Programmer"
    ],
    email: "amitkumarsinghtelari@gmail.com",
    phone: "+91-8863905919",
    whatsapp: "918863905919",
    location: "Kolkata / Kaimur, India",
    university: "Techno India University, Kolkata",
    degree: "B.Tech, Computer Science and Engineering (Artificial Intelligence)",
    graduationYear: "2023 – 2027",
    cgpa: "8.37",
    bio: "Motivated Computer Science Engineering student with a strong foundation in C++, Data Structures & Algorithms, Web Development, SQL, and Machine Learning. Hands-on experience building web-based and machine-learning projects, with a relentless drive for building scalable software, solving algorithmic challenges, and crafting intelligent web experiences.",
    avatar: "/amit-avatar.jpg",
    resumeUrl: "/Amit_Kumar_Singh_Resume.pdf",
    githubUsername: "amitx22",
    githubUrl: "https://github.com/amitx22",
    linkedinUsername: "amitkumarsingh1527",
    linkedinUrl: "https://linkedin.com/in/amitkumarsingh1527",
  },

  stats: [
    { label: "CGPA (TIU Kolkata)", value: "8.37", sub: "B.Tech CSE (AI)" },
    { label: "LeetCode Rating", value: "1603", sub: "Contest Problem Solver" },
    { label: "CodeChef Star", value: "1★", sub: "Max Rating 1086" },
    { label: "Certifications", value: "6+", sub: "Deloitte, IBM, Tata, etc." },
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      rating: "1603",
      badge: "Active Solver",
      metricName: "Max Contest Rating",
      username: "amitx22",
      profileUrl: "https://leetcode.com/u/amitx22/",
      icon: "Code2",
      color: "from-amber-500 to-orange-600",
      accent: "#f59e0b",
      description: "Consistent problem solver focused on Data Structures, Algorithms, and high-frequency patterns."
    },
    {
      platform: "CodeChef",
      rating: "1086",
      badge: "1 Star",
      metricName: "Division Rating",
      username: "amitx22",
      profileUrl: "https://www.codechef.com/users/amitx22",
      icon: "Award",
      color: "from-amber-700 to-yellow-600",
      accent: "#d97706",
      description: "Participating in timed competitive programming contests, optimizing time and space complexity."
    },
    {
      platform: "HackerRank",
      rating: "3 Star ★★★",
      badge: "Problem Solving (Gold)",
      metricName: "Proficiency Badge",
      username: "amitx22",
      profileUrl: "https://www.hackerrank.com/profile/amitx22",
      icon: "Terminal",
      color: "from-emerald-500 to-teal-600",
      accent: "#10b981",
      description: "Certified 3-Star in Problem Solving and core algorithmic computation."
    }
  ],

  skills: {
    languages: [
      { name: "C++", level: 90, icon: "Code", highlight: "DSA & Problem Solving" },
      { name: "C", level: 85, icon: "Cpu", highlight: "Low-level Systems" },
      { name: "Java", level: 80, icon: "FileCode2", highlight: "OOP & Architecture" },
      { name: "JavaScript", level: 88, icon: "FileJson", highlight: "Modern ES6+ / Async" },
      { name: "Python", level: 82, icon: "Brain", highlight: "ML, Pandas, Scripting" },
      { name: "SQL", level: 85, icon: "Database", highlight: "Queries & Relational Schema" },
    ],
    webTech: [
      { name: "React.js", level: 88, icon: "Atom", highlight: "Components, Hooks, State" },
      { name: "Node.js", level: 80, icon: "Server", highlight: "Backend Runtime" },
      { name: "Express.js", level: 78, icon: "Network", highlight: "RESTful API Endpoints" },
      { name: "HTML5", level: 95, icon: "Layout", highlight: "Semantic Structure & SEO" },
      { name: "CSS3", level: 90, icon: "Palette", highlight: "Responsive, Animations, Glassmorphism" },
      { name: "LocalStorage API", level: 92, icon: "HardDrive", highlight: "Client-side Persistence" },
    ],
    databases: [
      { name: "MySQL", level: 85, icon: "Database", highlight: "Relational Design, Joins, Triggers" },
      { name: "MongoDB", level: 78, icon: "Layers", highlight: "NoSQL, Collections, Mongoose" },
    ],
    dataAndML: [
      { name: "Pandas", level: 85, icon: "Table", highlight: "Data Manipulation & Cleaning" },
      { name: "NumPy", level: 82, icon: "Binary", highlight: "Array Computation & Matrices" },
      { name: "Scikit-Learn", level: 80, icon: "BrainCircuit", highlight: "Supervised Regression & Models" },
      { name: "Matplotlib & Seaborn", level: 78, icon: "BarChart3", highlight: "Statistical Visualization" },
      { name: "Streamlit", level: 88, icon: "MonitorPlay", highlight: "Interactive ML Dashboards" },
      { name: "Jupyter Notebook", level: 90, icon: "BookOpen", highlight: "Data Experiments & Prototyping" },
    ],
    tools: [
      { name: "Git", level: 88, icon: "GitBranch", highlight: "Version Control & Branching" },
      { name: "GitHub", level: 90, icon: "Github", highlight: "Collaboration & Repositories" },
      { name: "VS Code", level: 92, icon: "TerminalSquare", highlight: "Debugging & Extensions" },
    ],
    coursework: [
      { name: "Data Structures & Algorithms", icon: "Boxes", desc: "Arrays, Trees, Graphs, DP, Recursion" },
      { name: "Object-Oriented Programming (OOP)", icon: "Component", desc: "Encapsulation, Polymorphism, Inheritance" },
      { name: "Database Management Systems (DBMS)", icon: "Database", desc: "Normalization, ACID, Indexing, Transactions" },
      { name: "Operating Systems", icon: "Cpu", desc: "Processes, Threads, Memory Mgmt, Scheduling" },
      { name: "Computer Networks", icon: "Network", desc: "TCP/IP, OSI Layers, HTTP/HTTPS, Routing" },
      { name: "Software Engineering", icon: "ShieldCheck", desc: "SDLC, Agile, Testing, Architecture" },
      { name: "Artificial Intelligence", icon: "Sparkles", desc: "Heuristics, Search, Regression, Neural Nets" },
    ]
  },

  projects: [
    {
      id: "ai-resume-intelligence",
      title: "ResuMind AI – Resume Intelligence & Career Platform",
      category: "AI & Machine Learning",
      type: "Generative AI & Hybrid RAG Assistant",
      featured: true,
      description: "An AI-powered resume analysis, job matching, and interview preparation platform powered by Google Gemini AI and Hybrid RAG (FAISS + BM25 + Cross-Encoder) for contextual document intelligence.",
      technologies: ["Python", "Streamlit", "Google Gemini AI", "Hybrid RAG", "FAISS", "BM25", "Sentence Transformers", "PyPDF"],
      highlights: [
        "Engineered a Hybrid RAG pipeline combining FAISS dense vector search, BM25 keyword matching, and Cross-Encoder re-ranking for grounded retrieval.",
        "Integrated Google Gemini AI for in-depth resume audits, identifying strengths, critical skill gaps, and ATS-tailored recommendations.",
        "Developed an intelligent Job Match engine calculating compatibility scores and alignment metrics between resumes and job descriptions.",
        "Built an interactive AI Mock Interview module generating role-specific questions and evaluating answers with actionable feedback."
      ],
      github: "https://github.com/amitx22/Ai-Resume-Intelligence",
      demo: "https://ai-resume-intelligence-ewmnhaehwreunf6wmgj55k.streamlit.app/",
      icon: "Brain",
      badge: "GenAI & RAG"
    },
    {
      id: "salary-prediction-app",
      title: "Salary Prediction App",
      category: "AI & Machine Learning",
      type: "ML Web Application",
      featured: true,
      description: "A machine learning web application that predicts professional salary figures based on candidate experience, education, and relevant demographic attributes with high regression accuracy.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Jupyter Notebook", "HTML/CSS"],
      highlights: [
        "Performed end-to-end data preprocessing, missing-value imputation, and feature engineering using Pandas & NumPy.",
        "Trained and evaluated multiple regression algorithms with Scikit-learn to identify optimal model performance.",
        "Built a responsive, user-friendly interactive Streamlit interface for live parameter tuning and instant visual predictions.",
        "Integrated statistical graphs to visualize salary trends across various job roles and experience brackets."
      ],
      github: "https://github.com/amitx22/salary-prediction-app",
      demo: "https://github.com/amitx22/salary-prediction-app",
      icon: "TrendingUp",
      badge: "Machine Learning"
    },
    {
      id: "smart-study-dashboard",
      title: "Smart Study Dashboard",
      category: "Full Stack Web",
      type: "Productivity & Task App",
      featured: true,
      description: "A high-performance study management dashboard built to empower students with daily task scheduling, milestone monitoring, and study habit progress tracking with zero-latency local persistence.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "LocalStorage API", "Responsive Web Design"],
      highlights: [
        "Engineered full CRUD (Create, Read, Update, Delete) task workflows using pure modular vanilla JavaScript.",
        "Implemented real-time client-side data persistence via the browser LocalStorage API, removing backend dependency.",
        "Designed an interactive, dark-mode ready UI with dynamic progress rings, task priority tagging, and completion metrics.",
        "Fully optimized responsive layout delivering seamless experience on smartphones, tablets, and desktops."
      ],
      github: "https://github.com/amitx22/smart-study-dashboard",
      demo: "https://github.com/amitx22/smart-study-dashboard",
      icon: "CheckSquare",
      badge: "Web Application"
    },
    {
      id: "personal-portfolio",
      title: "Dynamic AI & Full-Stack Portfolio Portal",
      category: "Full Stack Web",
      type: "Modern Web Platform",
      featured: true,
      description: "Modern, high-aesthetic responsive portfolio built with React, interactive glassmorphism, responsive grid architecture, and real-time Gmail dispatch connectivity for instant recruiter inquiries.",
      technologies: ["React.js", "JavaScript ES6+", "Lucide Icons", "EmailJS Live Dispatch", "Modern Glassmorphism CSS"],
      highlights: [
        "Architected a scalable component system with dynamic filtering, animated typography, and glassmorphic micro-interactions.",
        "Integrated real-time Gmail delivery pipeline with immediate user confirmation, form validation, and direct mail fallback.",
        "Mobile-first responsive design engineered for fast load speeds, fluid animations, and accessible semantic UI.",
        "Embedded live download capability for authentic PDF resume and social links."
      ],
      github: "https://github.com/amitx22",
      demo: "#",
      icon: "Globe",
      badge: "Featured Portfolio"
    }
  ],

  certifications: [
    {
      title: "Technology Consulting Job Simulation",
      issuer: "Accenture",
      date: "April 2026",
      status: "Verified Credential",
      description: "Hands-on simulation advising clients on technology modernization, cloud migration strategies, and enterprise solution roadmaps.",
      icon: "Briefcase"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "Jan 2026",
      status: "Certified",
      description: "Mastered core supervised & unsupervised algorithms, regression, classification, clustering, and Scikit-learn pipelines.",
      icon: "Brain"
    },
    {
      title: "PBEL – Virtual Internship Certificate",
      issuer: "PBEL",
      date: "Jan 2026",
      status: "Internship Completed",
      description: "Practical engineering internship focused on software engineering paradigms, code review, and project lifecycle.",
      icon: "Award"
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata",
      date: "Dec 2025",
      status: "Job Simulation",
      description: "Leveraged Generative AI and advanced analytical tools to extract actionable enterprise insights from complex datasets.",
      icon: "Sparkles"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Nov 2025",
      status: "Job Simulation",
      description: "Conducted data exploration, visual dashboard creation, and strategic business data interpretation.",
      icon: "BarChart2"
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      date: "Nov 2025",
      status: "Job Simulation",
      description: "Hands-on simulation in software development lifecycle, secure coding practices, and technology solution architecture.",
      icon: "Layers"
    },
  ],

  education: [
    {
      institution: "Techno India University, Kolkata",
      degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
      period: "2023 – 2027",
      score: "CGPA: 8.37",
      scoreType: "CGPA",
      status: "Pursuing (Undergraduate)",
      location: "Kolkata, West Bengal",
      details: "Specializing in Artificial Intelligence and Machine Learning along with core computer science foundations. Active participant in coding hackathons and technical clubs."
    },
    {
      institution: "Kisan Inter College, Akaurha, Chainpur, Kaimur",
      degree: "Higher Secondary Certificate (Class 12) - BSEB",
      period: "2021 – 2023",
      score: "81.8%",
      scoreType: "Percentage",
      status: "Completed (First Division with Distinction)",
      location: "Kaimur, Bihar",
      details: "Core focus on Physics, Chemistry, and Mathematics (PCM) with rigorous analytical training."
    },
    {
      institution: "Paradise Children Academy, Lalpur, Kudra, Kaimur",
      degree: "Secondary School Examination (Class 10) - CBSE",
      period: "2019 – 2021",
      score: "78.4%",
      scoreType: "Percentage",
      status: "Completed",
      location: "Kudra, Bihar",
      details: "Comprehensive foundational education with excellence in Science and Mathematics."
    }
  ]
};
