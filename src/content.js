// All the site copy lives here so it can be edited without touching layout code.

export const profile = {
  name: 'Leanne Lacey Byrne',
  firstName: 'Leanne',
  tagline: 'a full-stack developer who started out in a biotech lab.',
  location: 'Based in Dublin, Ireland.',
  email: 'leannelb111@gmail.com',
  linkedin: 'https://www.linkedin.com/in/leannelaceybyrne/',
  youtube: 'https://www.youtube.com/c/lillycode',
  // Drop files into /public and set these, e.g. '/leanne.jpg' and '/Leanne-CV.pdf'.
  photo: '/leanne.jpg',
  cv: null,
}

export const about = [
  "I'm a full-stack developer working across React, Angular, Java and Spring Boot. I hold a double honours degree in Computer Science and Biology, a master's in Immunology & Global Health, and a certificate in Big Data from Wrexham University.",
  "I didn't take the usual route into software. I started in biotech as a process technologist and bioprocess scientist, moved into QC and QA, and then became a developer. Years of writing SOPs and chasing defects taught me to care about the details and the people who rely on the finished product.",
  "Lately I've been building with AI: agentic workflows, fine-tuning models, and putting LLMs into real products. I'm also a certified Scrum Master, so I'm as comfortable running a sprint as I am writing the code.",
]

export const skills = [
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Reusable component libraries', 'UX & web design'],
  },
  {
    title: 'Backend & Data',
    items: ['Java', 'Spring Boot', 'REST API integration', 'SQL', 'Big Data analytics', 'OpenSearch'],
  },
  {
    title: 'AI & Agentic Work',
    items: ['Agentic workflows', 'Model fine-tuning', 'LLM integration', 'Prompt engineering', 'Claude Code', 'AI-assisted development'],
  },
  {
    title: 'Ways of Working',
    items: ['Scrum (PSM I, SMC)', 'Agile delivery', 'Test planning & QA', 'Stakeholder management', 'Terminal & WebStorm power user'],
  },
]

export const caseStudies = [
  {
    name: 'Coverly',
    image: '/work/coverly.jpg',
    blurb:
      "A health-insurance navigator for Irish patients. I built the waitlist landing page and a working prototype in React, covering policy onboarding, matching a referral to a specialist, tracking bookings, and a rebate calculator.",
    tags: ['React', 'Vite', 'Tailwind', 'Product design'],
    link: 'https://coverly.ie',
    cta: 'Visit Coverly →',
  },
  {
    name: 'Eliatra',
    image: '/work/eliatra.jpg',
    blurb:
      'Custom development and support for OpenSearch, including the Encryption at Rest plugin and Coretex Axiom, an on-premise AI platform for document processing.',
    tags: ['OpenSearch', 'Java', 'AI', 'Enterprise'],
    link: 'https://eliatra.com',
    cta: 'Visit Eliatra →',
  },
  {
    name: 'LillyCode on YouTube',
    image: '/work/lillycode.jpg',
    blurb:
      "My channel, where I share what I'm learning about code, from web development basics to the tools I use every day.",
    tags: ['Teaching', 'Content', 'Community'],
    link: 'https://www.youtube.com/c/lillycode',
    cta: 'Watch on YouTube →',
  },
]

export const process = [
  '1 · Understand the problem',
  '2 · Plan & break it down',
  '3 · Build in small slices',
  '4 · Test like a QA',
  '5 · Ship & iterate',
]

export const journey = [
  { role: 'Developer', note: 'Angular and React apps, API integration, reusable component libraries' },
  { role: 'Developer & Project Manager', note: 'Owned delivery end to end, from sprint planning to release' },
  { role: 'QA Tester', note: 'Test plans, defect tracking in Jira and Mantis, regression testing' },
  { role: 'E-Learning Consultant', note: 'Managed client projects and built interactive web-based training' },
  { role: 'QC Analyst', note: 'Wrote SOPs, analysed data and ran training at a company start-up' },
  { role: 'Bioprocess Scientist', note: 'Designed and ran experiments, and volunteered as a biotechnology agent at Pfizer' },
  { role: 'Process Technologist', note: 'Trained staff and helped scale up a process by about 250%' },
]

export const learning =
  "I keep learning outside of work. My certifications include Professional Scrum Master I and Scrum Master Certified from Scrum.org, and courses in JavaScript and Java fundamentals, web design and UX, developer tooling (the Mac terminal and WebStorm), communication, and productivity."
