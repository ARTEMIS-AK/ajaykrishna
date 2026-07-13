export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  link: string;
  imagePlaceholderText: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PortfolioContent {
  personal: {
    name: string;
    role: string;
    subhead: string;
    bio: string;
    education: string;
    educationSub: string;
    location: string;
    buildingNext: string;
    buildingNextSub: string;
    hobby: string;
    email: string;
    phone: string;
    linkedin: string;
  };
  stats: {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
  }[];
  marquee: string[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
}

export const content: PortfolioContent = {
  personal: {
    name: "Ajay Krishna",
    role: "PRODUCT ASSOCIATE — GENERALIST BUILDER",
    subhead: "From strategy to design to shipping — I own the full product lifecycle.",
    bio: "I'm a generalist who wears multiple hats. I do designs, prototypes, PRDs, marketing, growth, social media, and dev — all in one.",
    education: "IIIT Kottayam",
    educationSub: "CSE with Cyber Security specialization, CGPA 8.56",
    location: "Based in Chennai, working with UK teams",
    buildingNext: "LOVD",
    buildingNextSub: "Premium gifting brand and soundwave keepsake customizer.",
    hobby: "When I'm bored, I build prototypes or hit the gym.",
    email: "ajaykrishna9638@gmail.com",
    phone: "+91 82473 40743",
    linkedin: "https://www.linkedin.com/in/ajaykrishna-narayanasetti/",
  },
  stats: [
    {
      value: 60,
      suffix: "%+",
      label: "Organic Traffic Growth"
    },
    {
      value: 500,
      suffix: "+",
      label: "Active Users on SkillfulSense"
    },
    {
      value: 10,
      suffix: "+",
      label: "Products Designed & Prototyped"
    }
  ],
  marquee: [
    "React",
    "FastAPI",
    "Figma",
    "OpenAI",
    "Whisper",
    "TailwindCSS",
    "Jira",
    "Python",
    "TypeScript",
    "LLMs/RAG",
    "Voice AI",
    "Agile/Scrum",
    "Product Strategy",
    "Go-To-Market",
    "Growth Hacking",
    "Product Management",
    "UI/UX Design"
  ],
  skills: [
    {
      title: "Development",
      skills: ["Python", "TypeScript", "React", "TailwindCSS", "FastAPI", "HTML/CSS"]
    },
    {
      title: "AI & Automation",
      skills: ["LLMs", "RAG", "Voice AI", "Whisper", "OpenAI API", "Prompt Engineering"]
    },
    {
      title: "Design",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Visual Dev"]
    },
    {
      title: "Product",
      skills: ["PRDs", "GTM Strategy", "Competitive Analysis", "Pricing Strategy", "User Stories", "Agile", "Roadmapping", "Stakeholder Management"]
    }
  ],
  experience: [
    {
      company: "Bapon Technologies",
      role: "Product Associate",
      period: "Apr 2025 – Present",
      bullets: [
        "Own client proposals, tenders, pricing strategy, and documentation end to end, serving as the first point of contact.",
        "Designed and prototyped 10+ production-grade interfaces in Figma, translating complex logic into seamless user paths.",
        "Built AI products hands-on across SkillfulSense, HyrSense, and custom UK client platforms.",
        "Wrote detailed PRDs, user stories, and acceptance criteria in Jira to align cross-functional pilot programs.",
        "Authored and executed growth experiments that increased organic search signups by 40%."
      ],
      tags: ["Figma", "Product Management", "AI Building", "Jira", "SEO/Growth"]
    }
  ],
  projects: [
    {
      id: "skillfulsense",
      title: "SkillfulSense",
      description: "AI-based skill assessment platform scaling to 500+ users with GPT-driven voice interviews.",
      longDescription: "Features interactive, voice-based coding and behavioral evaluations. Drove 60% organic traffic growth via programmatic SEO strategy.",
      stack: ["React", "FastAPI", "OpenAI", "TailwindCSS"],
      link: "https://skillfulsense.com",
      imagePlaceholderText: "SkillfulSense Dashboard"
    },
    {
      id: "hyrsense",
      title: "HyrSense",
      description: "AI mock interview platform with real-time adaptive voice interaction rounds.",
      longDescription: "Conducts conversational audio-first interviews across behavioral & domain-specific tracks. Built utilizing Whisper speech-to-text models.",
      stack: ["React", "FastAPI", "OpenAI", "Whisper"],
      link: "https://hyrsense.com",
      imagePlaceholderText: "HyrSense Interview Screen"
    },
    {
      id: "kingstrust",
      title: "King's Trust GenAI Pilot",
      description: "GenAI learning modules and tools built and delivered for 1,000+ UK youth.",
      longDescription: "Coordinated directly with UK charity organizers. Delivered GenAI core competencies across 9 high-impact live interactive sessions.",
      stack: ["Figma", "Prompt Engineering", "Educational Tech"],
      link: "#",
      imagePlaceholderText: "King's Trust Cohort Portal"
    },
    {
      id: "ukrail",
      title: "UK Rail AI Optimization",
      description: "Autonomous ML model agents designed to optimize UK railway operations.",
      longDescription: "Collaborated on early prototypes. Successfully identified maintenance inefficiencies, projecting up to 18% cost reduction potential.",
      stack: ["Python", "FastAPI", "LLM Agents", "Data Models"],
      link: "#",
      imagePlaceholderText: "UK Rail Maintenance Agent"
    }
  ]
};
