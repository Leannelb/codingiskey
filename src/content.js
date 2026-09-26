// All the site copy lives here so it can be edited without touching layout code.

export const profile = {
  name: 'Leanne Lacey-Byrne',
  firstName: 'Leanne',
  role: 'Frontend / AI Platform Engineer',
  company: 'Fidelity Investments',
  intro:
    'Senior Software Engineer building large-scale financial platforms for millions of customers. 8 years shipping high-availability platforms in fintech, payments and AI search: React, TypeScript, OpenSearch, AWS.',
  credentials: [
    'Senior Developer @ Fidelity Investments',
    'Ex-Lead Developer @ Eliatra (AI Search)',
    'Ex-Frontend & Scrum Master @ Clover (Fiserv)',
    'OSMC Speaker 2023 & 2024',
    'Founder, Coverly',
  ],
  location: 'Based in Newbridge, Kildare · Hybrid, Citywest',
  photoCaption: 'Kildare, Ireland',
  email: 'leannelaceybyrne@outlook.com',
  linkedin: 'https://www.linkedin.com/in/leannelaceybyrne/',
  youtube: 'https://www.youtube.com/c/lillycode',
  // Drop files into /public and set these, e.g. '/leanne.jpg' and '/Leanne-CV.pdf'.
  photo: '/leanne.jpg',
  cv: null,
}

export const about = [
  "I'm a Senior Software Engineer at Fidelity Investments, building large-scale financial platforms for millions of customers around the world.",
  'I specialise in frontend platform work: React and TypeScript, reusable component libraries and design systems, quality at scale (Jest, Vite, Cypress), and AI search platforms (OpenSearch/Elasticsearch, GraphQL, AWS).',
  'Before Fidelity I was Lead Developer at Eliatra. I owned the React data and search platform and the mid-tier integrations for AI-driven products, drove the testing strategy with Jest and Vite, and designed scalable, highly available systems with AWS engineers. I spoke at OSMC in 2023 and 2024 on AI automation, security and frontend integration.',
  'Before that I was Frontend Developer and Scrum Master at Clover (Fiserv), an enterprise payments platform used by millions of merchants. I built Angular features and a component library while leading agile delivery for two teams in a regulated, high-availability environment.',
  "I'm a certified Scrum Master (PSM I), on the Pursuit of Excellence in Leadership programme (2025 to present), and a Women in Tech speaker (WIN Spotlight, and Newstalk with Jess Kelly).",
  "I switched careers to get here. I spent six years in pharma and biotech as a process technologist, in QC and in QA, writing SOPs, chasing defects and helping scale a process by 250%. In 2018 I moved to Malta to break into tech and documented the journey as LillyCode on YouTube. Now I mentor women into engineering. I hold a double honours degree in Computer Science and Biology, a master's in Immunology & Global Health, and a certificate in Big Data from Wrexham University.",
  'Lately I work on AI platform engineering: agentic workflows, LLM retrieval with OpenSearch, and Claude Code.',
]

export const skills = [
  {
    title: 'Frontend Platform',
    items: ['React', 'TypeScript', 'Redux', 'Angular', 'Design systems', 'Material UI', 'Tailwind', 'Reusable component libraries'],
  },
  {
    title: 'Quality & Delivery at Scale',
    items: ['Jest', 'Vitest', 'Cypress', 'Code reviews', 'CI/CD: Git, Jenkins, GitLab, GitHub', 'AWS ECS/EKS', 'Docker'],
  },
  {
    title: 'AI Search Platform',
    items: ['OpenSearch', 'Elasticsearch', 'GraphQL', 'REST', 'AWS Lambda', 'LLM retrieval', 'Agentic workflows', 'Claude Code'],
  },
  {
    title: 'Leadership',
    items: ['Scrum Master (2 teams)', 'Agile delivery', 'Stakeholder alignment', 'Mentorship', 'Technical writing', 'OSMC speaker'],
  },
]

export const alsoSkills = 'Also: Java · Spring Boot · SQL · Big Data'

export const caseStudies = [
  {
    name: 'Coverly',
    role: 'Founder',
    image: '/work/coverly.jpg',
    blurb:
      'A health-insurance navigator for Irish patients. I built the waitlist site and a React prototype covering policy onboarding, specialist matching, booking tracking and a rebate calculator. Part of New Frontiers (Enterprise Ireland).',
    tags: ['React', 'Vite', 'Tailwind', 'Product'],
    link: 'https://coverly.ie',
    cta: 'Visit Coverly →',
  },
  {
    name: 'LillyCode on YouTube',
    role: 'Creator',
    image: '/work/lillycode.jpg',
    blurb:
      'The channel where I documented my move from biotech into tech, including 100 Days of Code, and where I share what I learn with people starting out.',
    tags: ['Teaching', 'React', 'Community'],
    link: 'https://www.youtube.com/c/lillycode',
    cta: 'Watch on YouTube →',
  },
  {
    name: 'Eliatra',
    role: 'Lead Developer · AI Search',
    image: '/work/eliatra.jpg',
    blurb:
      'I owned the React and OpenSearch platform, set the testing strategy with Jest and Vite, and built highly available systems for AI workloads with AWS engineers. The work included Coretex Axiom, an on-premise AI platform for document processing.',
    tags: ['React', 'TypeScript', 'OpenSearch', 'AWS', 'Jest'],
    link: 'https://eliatra.com',
    cta: 'Visit Eliatra →',
  },
]

// Set `link` on the fireside chat entry to show it on the site.
export const talks = [
  {
    name: 'Experiments with OpenSearch and AI',
    event: 'OSMC 2023 · with Jochen Kressin',
    image: '/work/osmc-2023.jpg',
    blurb: 'How LLMs can make OpenSearch easier to use by turning plain-language questions into complex DSL queries.',
    link: 'https://www.youtube.com/watch?v=wJC7vLcXRzY',
    slides: 'https://www.slideshare.net/slideshow/osmc-2023-experiments-with-opensearch-and-ai-by-jochen-kressin-leanne-lacebyrne/263978317',
  },
  {
    name: 'SecureAI: A Scalable, Secure, and Compliant AI Solution',
    event: 'OSMC 2024 · with Lucas Jeanniot',
    image: '/work/osmc-2024.jpg',
    blurb: 'The architecture of an on-premise LLM platform, from data ingestion and vector embeddings to RAG, followed by a live demo.',
    link: 'https://www.youtube.com/watch?v=uJ7YdA42RnE',
    slides: 'https://www.slideshare.net/slideshow/osmc-2024-secureai-a-scalable-secure-and-compliant-ai-solution-by-leanne-lacey-byrne-lucas-jeannniot-pdf/273809293',
  },
  {
    name: 'Fireside Chat',
    event: '',
    image: null,
    blurb: '',
    link: null,
  },
]

export const process = [
  '1 · Understand the system & constraints (HA, compliance, performance)',
  '2 · Define the paved road: RFC, design system, testing strategy',
  '3 · Build in small slices that 2+ teams can reuse',
  '4 · Quality as a platform: Jest, Vite, Cypress, code reviews, docs',
  '5 · Ship, measure, mentor',
]

export const learning =
  "I keep learning outside of work. My certifications include Professional Scrum Master I and Scrum Master Certified from Scrum.org, and courses in JavaScript and Java fundamentals, web design and UX, developer tooling (the Mac terminal and WebStorm), communication, and productivity."
