export const portfolioData = {
  hero: {
    name: "Amogh Shukla",
    title: "Assistant Vice President - DevOps & System Architecture",
    subtitle: "13+ years of IT expertise in automating processes, implementing cutting-edge technologies, and leading high-performance teams to deliver scalable solutions.",
    email: "amoghshukla@gmail.com",
    linkedin: "https://www.linkedin.com/in/amogh-shukla-82814036"
  },
  
  about: {
    description: "Seasoned IT professional with over 13 years of comprehensive experience in DevOps, system administration, and technical leadership. Currently serving as Assistant Vice President at HDFC Bank, I specialize in automating complex processes, implementing innovative technologies, and solving challenging technical problems. My expertise spans across cloud platforms, containerization, database administration, and enterprise system architecture.",
    highlights: [
      "13+ years of progressive IT experience across banking and telecom sectors",
      "Expert in DevOps practices, automation, and cloud technologies", 
      "Proven track record in team leadership and cross-functional collaboration",
      "Strong background in system administration and database management",
      "MBA in Information Systems with BE in Instrumentation Engineering"
    ],
    stats: [
      { label: "Years Experience", value: "13+" },
      { label: "Major Projects", value: "50+" },
      { label: "Team Members Led", value: "25+" },
      { label: "Certifications", value: "6+" }
    ]
  },

  experience: [
    {
      id: 1,
      company: "HDFC Bank",
      position: "Assistant Vice President",
      duration: "April 2023 - Present",
      type: "Full-time",
      description: "Leading DevOps initiatives and system architecture for one of India's largest private banks, focusing on automation, scalability, and operational excellence.",
      achievements: [
        "Spearheaded digital transformation initiatives reducing deployment time by 60%",
        "Implemented robust DevOps pipelines improving system reliability by 45%", 
        "Led cross-functional teams to deliver critical banking infrastructure projects",
        "Established automated monitoring systems reducing incident response time by 70%"
      ]
    },
    {
      id: 2,
      company: "Jio Platforms Limited (JPL)",
      position: "Manager",
      duration: "April 2022 - April 2023",
      type: "Full-time",
      description: "Managed large-scale telecom infrastructure and DevOps operations for India's largest digital services platform.",
      achievements: [
        "Managed infrastructure supporting 400+ million subscribers",
        "Implemented containerization strategies reducing resource costs by 35%",
        "Led automation projects improving operational efficiency by 50%",
        "Coordinated with multiple engineering teams for seamless service delivery"
      ]
    },
    {
      id: 3,
      company: "Jio Platforms Limited (JPL)", 
      position: "SME - Sr. Ops Engineer/Deputy Manager",
      duration: "February 2019 - March 2022",
      type: "Full-time",
      description: "Senior technical role focusing on operations engineering and system optimization for telecom infrastructure.",
      achievements: [
        "Designed and implemented scalable system architectures",
        "Optimized database performance improving query response by 40%",
        "Established best practices for system monitoring and alerting",
        "Mentored junior engineers in DevOps and system administration"
      ]
    },
    {
      id: 4,
      company: "Automation Anywhere",
      position: "Senior Technical Support Engineer",
      duration: "January 2019 - February 2019",
      type: "Full-time", 
      description: "Provided advanced technical support for RPA solutions and automation platforms.",
      achievements: [
        "Resolved complex automation issues with 95% customer satisfaction",
        "Created technical documentation for enterprise RPA implementations",
        "Collaborated with product teams to improve automation tools"
      ]
    },
    {
      id: 5,
      company: "Seclore",
      position: "Technical Support Engineer", 
      duration: "June 2016 - January 2019",
      type: "Full-time",
      description: "Managed technical support operations for enterprise security solutions and data protection platforms.",
      achievements: [
        "Maintained 98% uptime for critical security infrastructure",
        "Implemented automated backup and recovery systems",
        "Reduced support ticket resolution time by 30%",
        "Developed internal tools for system monitoring"
      ]
    },
    {
      id: 6,
      company: "NSDL Database Management Limited",
      position: "Assistant Manager",
      duration: "November 2012 - May 2016", 
      type: "Full-time",
      description: "Linux System Administrator handling application support, database administration, and system auditing for financial services infrastructure.",
      achievements: [
        "Managed critical financial database systems with 99.9% uptime",
        "Implemented automated system auditing processes",
        "Led database optimization projects improving performance by 25%",
        "Established disaster recovery procedures for business continuity"
      ]
    }
  ],

  skills: {
    technical: [
      { name: "DevOps & Automation", level: 95, category: "DevOps" },
      { name: "Linux System Administration", level: 90, category: "Systems" },
      { name: "Docker & Containerization", level: 85, category: "DevOps" },
      { name: "Shell Scripting", level: 90, category: "Programming" },
      { name: "Database Administration", level: 85, category: "Database" },
      { name: "Azure Cloud Platform", level: 80, category: "Cloud" },
      { name: "SQL & Oracle", level: 85, category: "Database" },
      { name: "Active Directory", level: 80, category: "Systems" },
      { name: "Citrix VDR & XenApp", level: 75, category: "Virtualization" },
      { name: "SharePoint Administration", level: 70, category: "Collaboration" }
    ],
    soft: [
      { name: "Team Leadership", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Project Management", level: 85 },
      { name: "Strategic Planning", level: 80 },
      { name: "Communication", level: 85 },
      { name: "Mentoring", level: 80 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Banking Infrastructure Modernization",
      description: "Led the modernization of core banking infrastructure at HDFC Bank, implementing containerized microservices and automated deployment pipelines.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "Azure DevOps", "MongoDB"],
      highlights: [
        "Reduced deployment time from 4 hours to 30 minutes",
        "Achieved 99.99% system uptime", 
        "Implemented automated rollback mechanisms",
        "Enhanced security compliance by 40%"
      ],
      status: "Production"
    },
    {
      id: 2,
      title: "Telecom Network Automation Platform",
      description: "Developed comprehensive automation platform for Jio's telecom infrastructure, managing network operations and service provisioning.",
      technologies: ["Python", "Ansible", "Linux", "Oracle DB", "Monitoring Tools"],
      highlights: [
        "Automated 80% of routine network operations",
        "Managed infrastructure for 400M+ users",
        "Reduced manual interventions by 65%",
        "Improved incident response time by 50%"
      ],
      status: "Production"
    },
    {
      id: 3,
      title: "Enterprise Security System Overhaul", 
      description: "Redesigned and implemented enterprise-grade security systems for data protection and access management across multiple environments.",
      technologies: ["Active Directory", "Linux", "Security Tools", "Scripting"],
      highlights: [
        "Enhanced security posture by 60%",
        "Implemented zero-downtime security updates",
        "Reduced security incidents by 45%",
        "Automated compliance reporting"
      ],
      status: "Production" 
    },
    {
      id: 4,
      title: "Financial Database Optimization",
      description: "Optimized critical financial database systems at NSDL, improving performance and implementing robust backup strategies.",
      technologies: ["Oracle", "SQL", "Linux", "Backup Solutions", "Monitoring"],
      highlights: [
        "Improved query performance by 40%",
        "Achieved 99.9% database uptime",
        "Implemented automated backup systems", 
        "Reduced recovery time by 70%"
      ],
      status: "Production"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2021",
      credentialId: "Credly Badge",
      verificationUrl: "https://www.credly.com/badges/4d375e07-b064-4a1b-aaef-edf8a1831a54",
      description: "Foundational knowledge of cloud services and Azure platform capabilities."
    },
    {
      id: 2, 
      name: "DevOps Foundations",
      issuer: "LinkedIn Learning",
      date: "2023",
      description: "Comprehensive understanding of DevOps principles, practices, and tools."
    },
    {
      id: 3,
      name: "Docker Essential Training: Orchestration", 
      issuer: "LinkedIn Learning",
      date: "2023",
      description: "Advanced Docker containerization and orchestration techniques."
    },
    {
      id: 4,
      name: "Managing Your Time So It Doesn't Manage You",
      issuer: "LinkedIn Learning", 
      date: "2023",
      description: "Professional development in time management and productivity optimization."
    },
    {
      id: 5,
      name: "Quality Management for Business Excellence",
      issuer: "LinkedIn Learning",
      date: "2022", 
      description: "Strategic approach to quality management in business operations."
    },
    {
      id: 6,
      name: "Agile Project Planning",
      issuer: "LinkedIn Learning",
      date: "2022",
      description: "Agile methodologies and project planning best practices."
    }
  ],

  contact: {
    email: "amoghshukla@gmail.com",
    linkedin: "https://www.linkedin.com/in/amogh-shukla-82814036",
    location: "Mumbai, India",
    availability: "Open to new opportunities"
  }
};