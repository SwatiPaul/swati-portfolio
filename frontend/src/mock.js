// Portfolio data for Swati Paul — Senior Frontend Developer (open to work)

export const personal = {
  name: 'Swati Paul',
  role: 'Senior Frontend Developer',
  location: 'Kolkata, India',
  email: 'swatipaul047@gmail.com',
  phone: '+91 98044 69688',
  linkedin: 'https://www.linkedin.com/in/swati-paul-2760701bb',
  github: 'https://github.com/swatipaul047',
  portfolio: 'https://devswatiportfolio.netlify.app',
  resume: 'https://devswatiportfolio.netlify.app/static/media/swatipaulresume.ba5f4b866fa5f68547cc.pdf',
  photo: 'https://devswatiportfolio.netlify.app/static/media/profile.jpg',
  brand: 'SWATI PAUL',
  status: 'Open to work',
  tagline: 'Open to new opportunities',
  heroTitle: 'Senior Frontend Developer\navailable for hire',
  heroSub: 'React \u00b7 Next.js \u00b7 Angular \u00b7 TypeScript. 4+ years turning designs into fast, pixel\u2011perfect production UIs. Open to full\u2011time, contract and remote roles worldwide.',
};

export const availability = {
  status: 'Open to work',
  roles: ['Senior Frontend Developer', 'React / Next.js Engineer', 'Angular Developer', 'UI Engineer'],
  types: ['Full\u2011time', 'Contract', 'Freelance', 'Remote'],
  noticePeriod: '2 weeks',
  timezone: 'IST (UTC+5:30) \u00b7 flexible with overlap',
};

export const testimonials = [
  {
    quote: 'Swati led the migration of our legacy CRM to a modern Next.js stack. Page loads dropped by ~30% and the team\u2019s velocity went up almost immediately.',
    name: 'Team Lead',
    company: 'FitOfficeX (Financial CRM)',
  },
  {
    quote: 'A rare mix of designer\u2019s eye and engineer\u2019s discipline. Angular NgRx architecture she set up is still holding strong two years later.',
    name: 'Engineering Manager',
    company: 'UBK Infotech',
  },
  {
    quote: 'Her Figma-to-code fidelity is genuinely 1:1. Reviews became about product decisions, not visual bugs.',
    name: 'Product Designer',
    company: 'Blu Cocoon Digital',
  },
  {
    quote: 'Detail-oriented, fast and communicative. Any team hiring frontend right now should talk to her.',
    name: 'Peer Developer',
    company: 'Freelance collaboration',
  },
];

export const projects = [
  {
    id: 'fitofficex',
    title: 'FitOfficeX CRM',
    slug: 'fitofficex-crm',
    stack: ['Next.js', 'React.js', 'TypeScript', 'REST APIs', 'Tailwind'],
    summary: 'Led end\u2011to\u2011end migration of a financial stock\u2011market CRM from a legacy codebase to a modern Next.js architecture with four core modules \u2014 Master, CRM (KYC/lead tracking), HR and Exchange Segment.',
    outcome: 'Built comprehensive report generation for P&L, trade summaries and segment dashboards. Integrated live market feeds and role\u2011based access; optimised heavy dashboards via memoisation and Turbopack for ~30% faster loads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    year: '2025',
    role: 'Lead Frontend',
  },
  {
    id: 'odr',
    title: 'ODR Portal',
    slug: 'odr-portal',
    stack: ['Next.js', 'REST APIs', 'Shadcn UI'],
    summary: 'Case\u2011management portal for online dispute resolution with user dashboards, role\u2011based access and real\u2011time case status updates.',
    outcome: 'A calm, focused interface that turns a complex legal workflow into a sequence of clear next steps for every stakeholder.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    year: '2024',
    role: 'Frontend Developer',
    live: 'https://fitmind.connectcloud365.com:29531',
  },
  {
    id: 'justplay',
    title: 'JustPlay \u2014 Streaming UI',
    slug: 'justplay',
    stack: ['React.js', 'TMDB API', 'CSS3', 'Context API'],
    summary: 'A Netflix\u2011inspired movie & show discovery UI with hero banner, search, category rows and detail views powered by the TMDB API.',
    outcome: 'Focus on cinematic hero states, hover previews and smooth carousels \u2014 a strong showcase of API integration, state management and responsive layout.',
    image: 'https://images.unsplash.com/photo-1489599735734-79b4212bea60?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1489599735734-79b4212bea60?w=800&q=80',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    id: 'tourist',
    title: 'Tourist \u2014 Car & Bus Rentals',
    slug: 'tourist',
    stack: ['React.js', 'Bootstrap', 'REST APIs'],
    summary: 'A tourism rental site for buses and cars \u2014 packages, pricing, booking flow and enquiry form for a real transport service.',
    outcome: 'Clean marketing site with strong CTAs, optimised images and a mobile\u2011first layout that converts phone visitors into calls.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    year: '2023',
    role: 'Frontend Developer',
  },
  {
    id: 'illtip',
    title: 'I\u2019ll Tip Service App',
    slug: 'illtip-service',
    stack: ['Angular', 'Material Design', 'NgRx'],
    summary: 'A cross\u2011platform service application with integrated chat, payment processing and one\u2011tap tipping.',
    outcome: 'A polished consumer product where micro\u2011interactions make every payment feel effortless.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    year: '2024',
    role: 'Angular Developer',
    live: 'https://illtip.com',
  },
  {
    id: 'pickey',
    title: 'Pickey Car Booking',
    slug: 'pickey',
    stack: ['React.js', 'Bootstrap', 'REST APIs'],
    summary: 'A real\u2011time booking management system with live availability tracking, booking history and an admin dashboard.',
    outcome: 'A minimal admin surface that lets operators respond faster and keeps customers informed at every step.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    year: '2023',
    role: 'Frontend Developer',
    live: 'https://pickeyapp.com',
  },
  {
    id: 'indiminds',
    title: 'Indiminds Portfolio',
    slug: 'indiminds',
    stack: ['Next.js', 'Tailwind CSS', 'SEO'],
    summary: 'A studio portfolio site with a strong editorial feel, third\u2011party integrations and full SEO optimisation.',
    outcome: 'A quiet, confident brand presence that ranks well and reads even better.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80',
    year: '2023',
    role: 'Frontend Developer',
    live: 'https://indiminds.com',
  },
];

export const concepts = [
  { name: 'Vaeron', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80' },
  { name: 'Crimson Dusk Studio', image: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=900&q=80' },
  { name: 'Harlow Architecture', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80' },
  { name: 'Vertaform Studio', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80' },
  { name: 'Studio Linea', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80' },
  { name: 'Casa Alba', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80' },
];

export const skills = {
  Languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  Frameworks: ['React.js', 'Next.js', 'Angular', 'Redux', 'NgRx'],
  Styling: ['Tailwind CSS', 'Shadcn UI', 'SASS/SCSS', 'Bootstrap', 'MUI', 'Angular Material'],
  Tooling: ['Git', 'GitHub', 'Figma', 'Framer', 'Webpack', 'Turbopack'],
  Performance: ['Core Web Vitals', 'Lazy Loading', 'Code Splitting', 'Image Optimisation'],
  Learning: ['Docker', 'GitHub Actions', 'AWS EC2', 'CI/CD'],
};

export const experience = [
  {
    role: 'Associate UI Developer',
    company: 'Blu Cocoon Digital Pvt. Ltd.',
    period: 'Mar 2023 \u2013 Present',
    location: 'Kolkata, India',
    points: [
      'Architected Next.js applications with Tailwind CSS and Shadcn UI; achieved 30% faster page loads via Turbopack and lazy loading.',
      'Converted Figma and Framer wireframes into pixel\u2011perfect UIs with 100% design fidelity across Chrome, Firefox, Safari and Edge.',
      'Integrated RESTful APIs for dynamic data, authentication and role\u2011based access; built File Manager dashboards and data\u2011viz panels.',
      'Delivered POC features for new product initiatives; contributed to Git workflows, code reviews and sprint planning.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'UBK Infotech Pvt. Ltd.',
    period: 'Jul 2022 \u2013 Feb 2023',
    location: 'Kolkata, India',
    points: [
      'Built responsive mobile\u2011first UIs using React.js, HTML5, CSS3 and JavaScript for client\u2011facing products.',
      'Implemented NgRx/Redux state management patterns for scalable, maintainable multi\u2011module applications.',
      'Integrated REST APIs; reduced UI bug backlog by 20% through peer reviews and sprint retros.',
    ],
  },
];

export const education = [
  { school: 'Vidyasagar University', degree: 'Master of Science (M.Sc.)', period: '2017 \u2013 2019', location: 'Kolkata' },
  { school: 'Calcutta University', degree: 'Bachelor of Science (B.Sc.)', period: '2013 \u2013 2016', location: 'Kolkata' },
  { school: 'Central Institute of Technology', degree: 'Web Design & Development', period: '2021', location: 'Kolkata' },
];

export const certifications = [
  { name: 'ReactJS Front-end Development', issuer: 'Ejobindia', year: '2024' },
  { name: 'Angular Development', issuer: 'Udemy', year: '2023' },
  { name: 'Web Design & Development', issuer: 'CIT', year: '2021' },
];

export const pricing = {
  base: 1327,
  items: [
    { name: 'Custom Design', desc: 'Tailored to your brand and audience', included: true },
    { name: 'Optimised for Every Device', desc: 'Smartphone, tablet, and desktop', included: true },
    { name: 'Animations & Interactions', desc: 'Bringing your website to life', included: true },
    { name: 'Home Page', desc: 'Your brand at first glance', included: true },
    { name: 'Legal Pages', desc: 'Legal notice and privacy policy', included: true },
  ],
  addons: [
    { name: 'Contact Form', from: 150, desc: 'So potential clients can reach you directly' },
    { name: 'Content Management', from: 500, desc: 'Update content yourself, no technical knowledge needed' },
    { name: 'Multiple Languages', from: 300, desc: 'So every visitor can understand your website' },
    { name: 'Logo & Branding', from: 800, desc: 'No logo yet? I\u2019ll create one that fits your brand.' },
  ],
};

export const faqs = [
  { q: 'Are you available to be hired right now?', a: 'Yes \u2014 I\u2019m actively open to Senior Frontend Developer roles (full\u2011time, contract or freelance), remote or based in Kolkata. Notice period is around 2 weeks.' },
  { q: 'What tech stack do you specialise in?', a: 'React.js, Next.js, TypeScript and Angular for applications; Tailwind CSS, Shadcn UI, SASS and Angular Material for styling; NgRx/Redux for state; REST APIs for data.' },
  { q: 'Do you also freelance on side projects?', a: 'Yes. If you have a landing page, portfolio or small SaaS UI to ship, I take on freelance work in parallel with my primary role.' },
  { q: 'Can I see production examples?', a: 'Absolutely \u2014 the Projects section links to production apps I\u2019ve shipped (financial CRM, dispute-resolution portal, streaming UI, and more).' },
  { q: 'How do we start a conversation?', a: 'Use the contact form below, email swatipaul047@gmail.com or connect on LinkedIn. I reply within one business day.' },
  { q: 'Are you open to relocation?', a: 'Open to remote-first roles worldwide and select on-site opportunities within India.' },
];
