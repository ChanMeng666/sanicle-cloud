// TeamMember interface definition
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  longBio: string;
  avatar: string;
  images: string[];
  leafColor: string;
  slug: string;
  achievements: string[];
  quote: string;
  experience: {
    company: string;
    title: string;
    period: string;
    location: string;
    previousRole?: {
      title: string;
      period: string;
    };
    description: string;
  };
  education?: {
    institution: string;
    degree: string;
    period: string;
  }[];
  certifications?: string[];
  skills?: string[];
  contact?: {
    email?: string;
    phone?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
    portfolio?: string;
    personal?: string;
    huggingface?: string;
  };
  languages?: string[];
}

// Team members data
export const teamMembers: TeamMember[] = [
  {
    name: "Dr.Omopeju Afanu",
    role: "Chief Executive Officer - CEO",
    bio: "A passionate advocate for women's health, leads with a user-first, insight-driven approach to product innovation.",
    longBio: `Dr. Omopeju Afanu is the visionary CEO of Sanicle, bringing her extensive medical expertise and passion for women's health to revolutionize menstrual wellness.
    
    With a background in medicine and a deep understanding of women's health challenges, Dr. Afanu recognized the gap in personalized menstrual health solutions. Her approach combines scientific rigor with user-centered design, ensuring that Sanicle addresses real needs with evidence-based solutions.
    
    Under her leadership, Sanicle has developed innovative AI-powered technology that makes personalized menstrual health accessible to everyone. Dr. Afanu regularly speaks at global health conferences about the importance of integrating technology with healthcare to improve outcomes for women worldwide.`,
    avatar: "OA",
    images: [
      "/images/team/OmopejuAfanu-white-background.svg",
      "/images/team/omopeju-speaking.jpg",
      "/images/team/omopeju-research.jpg"
    ],
    leafColor: "green",
    slug: "omopeju-afanu",
    achievements: [
      "Led development of AI-driven menstrual health tracking technology",
      "Published research on women's health technology accessibility",
      "Speaker at Women's Health Innovation Summit 2023"
    ],
    quote: "Technology has the power to transform women's healthcare when designed with empathy and scientific rigor.",
    experience: {
      company: "Sanicle",
      title: "Chief Executive Officer",
      period: "October 2024 - Present",
      location: "Toronto, Ontario, Canada",
      description: "Leading the management and development team of a pioneering FemTech start-up, dedicated to transforming workplace benefits for women with key focus on reproductive health. The mission centers on enhancing organizational productivity and efficiency by providing comprehensive support to women during critical life stages (menstruation and menopause).\n\nUsing Agile principles provide leadership and motivate the project team in the development of a Minimum Viable Product (MVP) / Proof of Concept (PoC) that addresses the unique needs of women in the workplace with an aim to improve the benefits package available to women facing reproductive health challenges, ensuring access to affordable care and resources that empower them to manage their symptoms effectively."
    },
    education: [
      {
        institution: "Harvard Business School Executive Education",
        degree: "Certificate, Business Administration and Management, General",
        period: "2021 - 2021"
      },
      {
        institution: "National Institute of Business Management (NIBM) Global",
        degree: "Executive Master of Business Management, Business Administration, Management and Operations",
        period: "September 2018 - May 2019"
      }
    ],
    certifications: [
      "Prince2 Foundation",
      "ICAgile Certified Professional - Agile Coaching",
      "Certified Management Consultant (CMC)",
      "Certified SAFe® 5 Scrum Master"
    ],
    skills: [
      "Backlog Management",
      "Product Management",
      "Organizational Change Management",
      "Business Analyst",
      "Agile Coach",
      "Product Owner",
      "Strategist"
    ],
    contact: {
      email: "omopejuafanu@gmail.com",
      linkedin: "http://www.linkedin.com/in/peju-afanu-7b9367110"
    }
  },
  {
    name: "Chaste Inegbedion",
    role: "Chief Product Officer",
    bio: "Known as 'Mr. Padman,' a global leader in femtech, using expertise in product management to build inclusive solutions.",
    longBio: `Chaste Inegbedion, affectionately known as "Mr. Padman," brings unparalleled expertise in femtech product development to his role as Chief Product Officer at Sanicle.
    
    With years of experience leading product teams in the health technology sector, Chaste has developed a reputation for creating intuitive, inclusive solutions that address real user needs. His approach to product management always starts with deep user research and empathy.
    
    Chaste is passionate about breaking taboos around menstrual health and ensuring that technology serves diverse populations. Under his guidance, Sanicle's product strategy emphasizes accessibility, privacy, and personalization.`,
    avatar: "CI",
    images: [
      "/images/team/ChasteInegbedion-white-background.svg",
      "/images/team/chaste-workshop.jpg",
      "/images/team/chaste-product.jpg"
    ],
    leafColor: "white",
    slug: "chaste-inegbedion",
    achievements: [
      "Pioneered user-centered design methodologies for menstrual health products",
      "Developed inclusive product testing frameworks",
      "Led cross-cultural research on menstrual health needs"
    ],
    quote: "Great products emerge from deep empathy and understanding of diverse user experiences.",
    experience: {
      company: "Sanicle",
      title: "Product Manager",
      period: "January 2021 - Present",
      location: "Tulsa, Oklahoma, United States",
      description: "Developed and executed a strategic business plan that secured $165,000 in funding by fostering partnerships with investors and industry leaders.\nLed the multidisciplinary team of seven to design and launch the Period Genie platform across multiple platforms within three months.\nDrove user acquisition and community engagement efforts by onboarding 4,100 beta users for the Period Genie platform.\nParticipated in the Founder Institute Accelerator to refine the business model, securing $2,000 in a competitive startup pitch environment.\nManaged cross-functional teams to achieve a 25% improvement in operational efficiency through meticulous budget, forecast, and KPI management."
    },
    education: [
      {
        institution: "University of Washington - Michael G. Foster School of Business",
        degree: "Product Management",
        period: "September 2022"
      },
      {
        institution: "Founder Institute",
        degree: "Organizational Product Management",
        period: "2020 - 2021"
      },
      {
        institution: "Olabisi Onabanjo University(O.O.U)",
        degree: "BSc Computer Engineering, Computer",
        period: "2004 - 2009"
      }
    ],
    certifications: [
      "Professional Scrum Master™ I (PSM I)",
      "Jira Fundamentals Badge",
      "Sales Certified - Selling SaaS Solutions",
      "Salesforce Certified Administrator (SCA)"
    ],
    skills: [
      "U.S. Pharmacopeia (USP)",
      "Project Management",
      "Business Planning",
      "Strategic Partnerships",
      "Digital Transformation"
    ],
    contact: {
      email: "charityloungeheroes@gmail.com",
      phone: "9294880608",
      linkedin: "http://www.linkedin.com/in/chastechrisinegbedion",
      twitter: "http://www.x.com/charitychaste",
      instagram: "http://www.instagram.com/charitychaste"
    }
  },
  {
    name: "Daryll Hall",
    role: "Chief AI Officer",
    bio: "AI and tech background, paired with experience in successful exits, fuels Sanicle's innovation.",
    longBio: `Daryll Hall serves as Sanicle's Chief AI Officer, bringing a unique blend of technical expertise and creative vision to the company's AI initiatives.
    
    With extensive experience in artificial intelligence and machine learning, Daryll has previously led teams that created innovative AI solutions in healthcare. His track record includes successful exits from tech startups, giving him valuable insights into scaling innovative technologies.
    
    At Sanicle, Daryll oversees the development of our AI capabilities, ensuring they are both technically sound and creatively applied to solve real-world menstrual health challenges. His leadership has been instrumental in developing Sanicle's personalized health insights and predictive analytics features.`,
    avatar: "DH",
    images: [
      "/images/team/DaryllHall-white-background.svg",
      "/images/team/daryll-coding.jpg",
      "/images/team/daryll-presentation.jpg"
    ],
    leafColor: "white",
    slug: "daryll-hall",
    achievements: [
      "Developed machine learning algorithms for menstrual cycle prediction",
      "Previous successful exit in health technology startup",
      "Mentor for AI ethics in healthcare applications"
    ],
    quote: "AI is at its best when it enhances human capabilities rather than replacing them.",
    experience: {
      company: "Sanicle",
      title: "Chief AI Officer and Experience Designer",
      period: "February 2025 - Present",
      location: "Tulsa, Oklahoma, United States",
      previousRole: {
        title: "Creative Project Manager and User Experience Designer",
        period: "July 2024 - February 2025"
      },
      description: "Develop and oversee the company's AI vision, ensuring it aligns with business objectives.\nIdentify opportunities for AI-driven innovation across departments.\nLead AI adoption, integration, and optimization in products, services, or operations.\nStay updated on emerging AI technologies and trends.\nFoster partnerships with universities, startups, and AI research institutions.\nPromote an AI-driven culture within the organization.\nEnsure AI solutions are scalable and adaptable to future advancements."
    },
    education: [
      {
        institution: "Robert Morris University",
        degree: "Master of Science - MS, Information Technology Project Management",
        period: "January 2015 - April 2017"
      },
      {
        institution: "Edinboro University of Pennsylvania - School of Graduate Studies",
        degree: "Bachelor of Arts - BA, Individualized Studies",
        period: "June 2012 - May 2014"
      }
    ],
    certifications: [
      "Unity | VR Designer Bootcamp",
      "XR Foundations Developer",
      "Avocademy - UX/UI Foundations",
      "XR Foundations Designer"
    ],
    skills: [
      "Virtual Reality Development",
      "Artificial Intelligence (AI)",
      "User Interface Design",
      "Project Management",
      "3D Modeling",
      "UX Design"
    ],
    contact: {
      email: "hll_daryll@hotmail.com",
      linkedin: "http://www.linkedin.com/in/daryll-hall-167435310",
      portfolio: "daryllhall.com/"
    }
  },
  {
    name: "Gabby Hurst",
    role: "Chief Experience Officer - CXO",
    bio: "Excels in product management, creating innovative, customer-centric solutions with technical insight and emotional intelligence.",
    longBio: `Gabby Hurst leads Sanicle's experience design as our Chief Experience Officer, ensuring that every interaction with our platform is intuitive, supportive, and empowering.
    
    With a background spanning product management and user experience design, Gabby brings a holistic perspective to creating solutions that truly meet users' needs. Her approach combines rigorous data analysis with deep emotional intelligence, allowing her to translate complex health information into accessible, actionable insights.
    
    Gabby's passion for improving women's health experiences stems from her own journey and the recognition that technology can play a transformative role when designed with genuine empathy. At Sanicle, she has pioneered user research methodologies that center diverse voices and experiences.`,
    avatar: "GH",
    images: [
      "/images/team/GabbyHurst-white-background.svg",
      "/images/team/gabby-design.jpg",
      "/images/team/gabby-workshop.jpg"
    ],
    leafColor: "white",
    slug: "gabby-hurst",
    achievements: [
      "Created Sanicle's user-centered research methodology",
      "Redesigned onboarding experience increasing user retention by 45%",
      "Speaker on inclusive design at UX for Healthcare conference"
    ],
    quote: "Great experiences are born from listening deeply to users and responding with genuine empathy.",
    experience: {
      company: "Sanicle",
      title: "Chief Experience Officer",
      period: "October 2024 - Present",
      location: "Greater Houston",
      description: "Leading Sanicle's experience design, ensuring every interaction with our platform is intuitive, supportive, and empowering. Pioneering user research methodologies that center diverse voices and experiences while combining rigorous data analysis with deep emotional intelligence to translate complex health information into accessible, actionable insights."
    },
    education: [
      {
        institution: "Chatham University",
        degree: "Master of Business Administration - MBA, Information Technology Project Management",
        period: ""
      },
      {
        institution: "Chatham University",
        degree: "Bachelor's Degree, Business/Corporate Communications",
        period: ""
      }
    ],
    certifications: [
      "Generative AI Overview for Project Managers",
      "Certified Contract Loan Processor",
      "Commercial Underwriting & Processing",
      "The Basics of Scrum",
      "Project Management Professional (PMP)"
    ],
    skills: [
      "Accounting",
      "Audio Editing",
      "Audio Post Production",
      "Project Management",
      "UX/UI Design"
    ],
    contact: {
      linkedin: "http://www.linkedin.com/in/gabby-h-p-159141202"
    }
  },
  {
    name: "Chan Meng",
    role: "Senior AI/ML Infrastructure Engineer",
    bio: "Full-stack developer leading AI-powered solutions for women's workplace health, with expertise in cloud-native architecture and mentorship for women in STEM.",
    longBio: `Chan Meng is Sanicle's Senior AI/ML Infrastructure Engineer, architecting the robust technical foundation that powers our AI-driven health insights.
    
    As an accomplished full-stack developer with specialized expertise in machine learning operations, Chan ensures that Sanicle's AI solutions are not only innovative but also scalable, reliable, and secure. Her work in cloud-native architecture has enabled Sanicle to deliver personalized insights to users around the world.
    
    Beyond her technical contributions, Chan is passionate about increasing representation in STEM fields. She actively mentors women in technology and leads Sanicle's initiatives to create more inclusive AI systems that work for diverse populations.`,
    avatar: "CM",
    images: [
      "/images/team/ChanMeng-white-background.svg",
      "/images/team/ChanMeng-1.webp",
      "/images/team/ChanMeng-2.webp"
    ],
    leafColor: "pink",
    slug: "chan-meng",
    achievements: [
      "Built Sanicle's cloud-native ML infrastructure",
      "Created mentorship program for women in AI",
      "Contributed to open-source projects for ethical AI development",
      "Speaker at UN CSW 69"
    ],
    quote: "The most powerful AI solutions are those that reflect the diversity of the users they serve.",
    experience: {
      company: "Sanicle",
      title: "Senior AI/ML Infrastructure Engineer",
      period: "March 2025 - Present",
      location: "Tulsa, Oklahoma, United States",
      description: "As Senior AI/ML Infrastructure Engineer at Sanicle, I lead the development of an AI-powered platform revolutionizing women's workplace health. I designed and deployed Sanicle AI (sanicle-ai.vercel.app), a full-stack web app using Next.js, TypeScript, and PostgreSQL, integrated with Gemini AI models for personalized menstrual and menopausal health support.\n\nKey features include user/HR dashboards, cycle tracking, and resource management, enhancing employee well-being and productivity. I spearheaded a scalable architecture with Vercel, Upstash Redis, and Drizzle ORM, achieving rapid MVP validation. Currently, I'm advancing the AI conversational agent \"Ask Sani\" and planning a mobile app, leveraging my full-stack expertise."
    },
    education: [
      {
        institution: "Lincoln University (NZ)",
        degree: "Master's Degree, Applied Computing",
        period: "November 2023 - December 2024"
      },
      {
        institution: "Jiangsu Normal University",
        degree: "Bachelor's Degree, Geography Science",
        period: "September 2012 - June 2016"
      }
    ],
    certifications: [
      "HackerRank Software Engineer Certificate",
      "HackerRank Frontend Developer (React)",
      "HackerRank Problem Solving (Intermediate)",
      "Microsoft Career Essentials in Software Development",
      "GitHub Professional Certificate"
    ],
    skills: [
      "Artificial Intelligence (AI)",
      "Full-Stack Development",
      "Machine Learning Infrastructure",
      "React",
      "Next.js",
      "TypeScript",
      "Cloud-Native Architecture",
      "PostgreSQL"
    ],
    contact: {
      email: "chanmeng.career@gmail.com",
      phone: "+64 02885235858",
      linkedin: "https://www.linkedin.com/in/chanmeng666/",
      github: "https://github.com/ChanMeng666",
      personal: "https://www.chanmeng.live/",
      huggingface: "https://huggingface.co/ChanMeng666"
    },
    languages: [
      "Japanese (Limited Working)",
      "English (Professional Working)",
      "Chinese (Native or Bilingual)",
      "Cantonese (Native or Bilingual)"
    ]
  },
] 