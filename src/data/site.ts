// Single source for contact details, the experience summary, and the
// homepage pivots / direct-link pages. Keep numbers in sync with the résumé.

export const contact = {
  email: 'hello@harshav.com',
  linkedin: 'https://www.linkedin.com/in/hvem/',
  resumePdf: '/downloads/harsha-vemulapalli-resume.pdf',
  location: 'Metro Detroit',
};

export const headlineStats = [
  { value: '25+', label: 'Years in design and research' },
  { value: '16', label: 'Years leading design organizations' },
  { value: '10+', label: 'Leaders grown into manager and director roles' },
  { value: '150+ → 1', label: 'Sites, from flagship properties to regional microsites, consolidated into Siemens.com' },
];

// "How I work" (kodawari) section on the homepage. Order matters: each step builds on the last.
export const capabilities = [
  {
    title: 'Start with shared values.',
    text: 'We name our values, turn them into behaviors we can see, and make roles and responsibilities clear, because clarity builds the trust people need to take creative risks.',
  },
  {
    title: 'Build the workshop, not just the work.',
    text: 'Great craft needs the right tools, processes, and room to grow. I build both: systems that make good work easier, and career paths that help every designer master their craft.',
  },
  {
    title: 'Sweat the details no one sees.',
    text: 'Shared standards, definitions of done, and launch reviews, so 70 people in seven countries ship to one uncompromised standard.',
  },
  {
    title: 'Measure it, then make it better.',
    text: 'A personal commitment to craft means holding the work to account: we measure every outcome, learn from it, and always imagine something better.',
  },
];

export const experience = [
  { company: 'Siemens', role: 'Global Director, Experience Design & Research', summary: '5→70 org, One Siemens catalog, AI product finder (+23% conversion)', years: '2023–now' },
  { company: 'Amazon', role: 'Sr. Manager, UX Smart Vehicle', summary: '13-person team, next-gen in-vehicle platform', years: '2022–23' },
  { company: 'VMware', role: 'Sr. Design Director', summary: 'Sub-to-SaaS transformation, CPQ −30% time-on-task', years: '2021–22' },
  { company: 'CARFAX', role: 'Director, Digital Brand UX & Research', summary: '+7% conversion, −26% dev churn', years: '2019–21' },
  { company: 'Robert Bosch', role: 'Head of Design, North America', summary: 'Employee zero → ~120-person practice, $6M saved', years: '2016–19' },
  { company: 'General Motors', role: 'UX Manager', summary: '7 apps in 23 languages in a year, $1M+ new revenue', years: '2014–16' },
  { company: 'Air Mobility Command', role: 'Design Manager', summary: 'Planning tools for 1,200+ daily missions, $2M+ in operational savings', years: '2013–14' },
  { company: 'CDC', role: 'UX & Analytics Manager', summary: 'HIPAA / Section 508, +70% HIV testing conversion', years: '2010–13' },
];

export interface Proof {
  value: string;
  label: string;
}

export type FeaturedFlag = 'regulated' | 'systems' | 'enterprise' | 'ai' | 'vehicle' | 'commerce';

export interface Lane {
  key: string;
  label: string;
  line: string;
  /** Hand-picked case study slugs, in display order… */
  caseStudies?: string[];
  /** …or every case study tagged with this flag, in portfolio order. */
  flag?: FeaturedFlag;
}

export interface FocusPage extends Lane {
  caseStudies: string[];
  proof: Proof[];
  /** Completes "A focused look at my work on …" */
  banner: string;
  headline: string;
  intro: string[];
}

export const allLane: Lane = {
  key: 'all',
  label: 'Everything',
  line: 'A cross-section of the work, across every focus.',
  caseStudies: ['siemens-design-system', 'siemens-finder', 'bosch-infotainment', 'gm-mychevrolet'],
};

export const focusPages: FocusPage[] = [
  {
    key: 'enterprise',
    label: 'Enterprise & regulated platforms',
    line: 'B2B platforms, design systems at scale, and products built under regulation, including a CPQ modernization at VMware that cut time-on-task 30%.',
    banner: 'AI-native design organizations for B2B platforms',
    headline: 'I build AI-native design orgs, and the quality systems that let them ship at scale.',
    intro: [
      'At Siemens I lead a 70-person design, research, and content org across seven countries, with AI built into how it works: a Copilot research agent for the team and an AI-powered product finder that lifted conversion 23%. Quality is a system, not a hope: a governed design system, definitions of done, and launch reviews built with Product and Engineering.',
      'I’ve led design through inflection points before, including VMware’s shift from subscriptions to SaaS. I haven’t built compliance software, but I’ve designed high-stakes experiences for users from first-timer to expert, from public health at the CDC to industrial platforms at Siemens.',
    ],
    proof: [
      { value: '5 → 70', label: 'Design, research, and content org grown across seven countries' },
      { value: '+20%', label: 'Research data use, and 34% faster time-to-insight, from an AI research agent' },
      { value: '100K+', label: 'Pages on one governed design system, consolidated from 150+ sites' },
      { value: '−30%', label: 'Time-on-task on VMware’s CPQ through the Sub-to-SaaS shift' },
    ],
    caseStudies: ['siemens-design-system', 'siemens-finder', 'vmware-measurement', 'cdc-hivtest'],
  },
  {
    key: 'mobility',
    label: 'Mobility',
    line: 'Digital experiences for vehicle buyers and owners, where measurable growth meets crafted interaction.',
    banner: 'digital experiences for vehicle buyers and owners',
    headline: 'I lead teams where growth meets craft, from first click to years of ownership.',
    intro: [
      'I lead design where conversion and craft meet. At CARFAX my 30-person team redesigned the vehicle history experience millions of buyers rely on, lifting conversion 7% and cutting dev churn 26%. At Siemens we A/B-tested, then scaled, an AI-powered product finder inside a marketplace of hundreds of thousands of products, lifting conversion 23%.',
      'At GM I led the design of the full owner journey across seven brands, from the vehicle configurator and purchase and finance flows to seven owner apps in 23 languages. My teams also designed in-vehicle experiences at Bosch and Amazon, and I grew Bosch’s practice from employee zero to ~120, grounded in usability testing, A/B tests, and data-informed iteration.',
    ],
    proof: [
      { value: '+23%', label: 'Conversion from an A/B-tested, AI-powered product finder at Siemens' },
      { value: '+7%', label: 'Conversion from CARFAX’s end-to-end redesign' },
      { value: '7 brands', label: 'Owner journey design at GM, from configurator and purchase to 7 apps in 23 languages' },
      { value: '0 → ~120', label: 'Bosch’s North American design practice, built from employee zero' },
    ],
    caseStudies: ['siemens-finder', 'siemens-design-system', 'gm-mychevrolet', 'bosch-infotainment'],
  },
];

const [enterprisePage] = focusPages;

// The homepage focus buttons ("The work behind the numbers"), in order.
export const homeLanes: Lane[] = [
  allLane,
  enterprisePage,
  {
    key: 'vehicles',
    label: 'Mobility',
    line: 'How people research, buy, and own their vehicles, from CARFAX’s vehicle history (+7% conversion) to MyChevrolet’s owner apps in 23 languages.',
    flag: 'vehicle',
  },
  {
    key: 'research',
    label: 'Research & insight',
    line: 'Research that shapes strategy, from company-wide measurement programs and job-site field studies to a Copilot research agent that lifted research data use 20% and cut time-to-insight 34%.',
    caseStudies: ['vmware-measurement', 'bosch-power-tools', 'bosch-infotainment', 'cdc-hivtest'],
  },
  {
    key: 'ai',
    label: 'AI & machine learning',
    line: 'Designing with AI and machine learning since 2016, in the product and in the practice, including a Copilot research agent that lifted research data use 20% and cut time-to-insight 34%.',
    flag: 'ai',
  },
  {
    key: 'commerce',
    label: 'Commerce & conversion',
    line: 'Experiences that turn interest into action, and action into revenue, including a CARFAX redesign that lifted conversion 7%.',
    flag: 'commerce',
  },
];
