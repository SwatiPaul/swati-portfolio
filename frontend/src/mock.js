// Mock data for Swati Paul Portfolio

export const personal = {
  name: 'Swati Paul',
  role: 'Senior Frontend Developer',
  location: 'Kolkata, India',
  email: 'swatipaul047@gmail.com',
  phone: '+91 98044 69688',
  linkedin: 'https://linkedin.com/in/swati-paul-2760701bb',
  portfolio: 'https://devswatiportfolio.netlify.app',
  brand: 'SWATI PAUL',
  tagline: 'Enough with average',
  heroTitle: 'Your website can do more',
  heroSub: 'For brands that want to appear online just as high-end as they truly are.',
};

export const testimonials = [
  {
    quote: 'Swati transformed our legacy CRM into a modern, high-performance platform. Load times dropped by 30%.',
    name: 'Rajesh Kumar',
    company: 'FitOfficeX Financial',
  },
  {
    quote: 'From the very beginning, she not only understood our vision but improved it with sharp technical instincts.',
    name: 'Priya Sharma',
    company: 'ODR Portal',
  },
  {
    quote: 'The result exceeded my expectations. Pixel-perfect UI, smooth animations, and a real pleasure to collaborate.',
    name: 'Jeff Roth',
    company: 'Indiminds',
  },
  {
    quote: 'Super detail-oriented and fast. Our booking dashboard has never looked or worked better.',
    name: 'Arun Mehta',
    company: 'Pickey App',
  },
];

export const projects = [
  {
    id: 'fitofficex',
    title: 'FitOfficeX CRM',
    slug: 'fitofficex-crm',
    stack: ['Next.js', 'React.js', 'TypeScript', 'REST APIs', 'Tailwind'],
    summary: 'The client already had a working CRM but needed a modern, faster experience that could handle live financial market data and complex reporting.',
    outcome: 'The result is a refined Next.js architecture with four core modules — Master, CRM, HR and Exchange Segment — tuned for speed with Turbopack and memoization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    year: '2025',
  },
  {
    id: 'odr',
    title: 'ODR Portal',
    slug: 'odr-portal',
    stack: ['Next.js', 'REST APIs', 'Shadcn UI'],
    summary: 'A case management portal for online dispute resolution with dashboards, role‑based access and real‑time case status updates.',
    outcome: 'A calm, focused interface that turns a complex legal workflow into a sequence of clear next steps for every stakeholder.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    year: '2024',
  },
  {
    id: 'illtip',
    title: 'I’ll Tip Service App',
    slug: 'illtip-service',
    stack: ['Angular', 'Material Design', 'NgRx'],
    summary: 'A cross‑platform service application with integrated chat, payment processing and one‑tap tipping.',
    outcome: 'A polished consumer product where micro‑interactions make every payment feel effortless.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    year: '2024',
  },
  {
    id: 'pickey',
    title: 'Pickey Car Booking',
    slug: 'pickey',
    stack: ['React.js', 'Bootstrap', 'REST APIs'],
    summary: 'A real‑time booking management system with live availability tracking, booking history and an admin dashboard.',
    outcome: 'A minimal admin surface that lets operators respond faster and keeps customers informed at every step.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    year: '2023',
  },
  {
    id: 'indiminds',
    title: 'Indiminds Portfolio',
    slug: 'indiminds',
    stack: ['Next.js', 'Tailwind CSS', 'SEO'],
    summary: 'A studio portfolio site with a strong editorial feel, third‑party integrations and full SEO optimisation.',
    outcome: 'A quiet, confident brand presence that ranks well and reads even better.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1400&q=80',
    thumb: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80',
    year: '2023',
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
  Styling: ['Tailwind CSS', 'Shadcn UI', 'SASS/SCSS', 'Bootstrap'],
  Tooling: ['Git', 'GitHub', 'Figma', 'Framer', 'Webpack', 'Turbopack'],
  Performance: ['Core Web Vitals', 'Lazy Loading', 'Code Splitting', 'Image Optimization'],
  Learning: ['Docker', 'GitHub Actions', 'AWS EC2', 'CI/CD'],
};

export const pricing = {
  base: 1327,
  items: [
    { name: 'Custom Design', desc: 'Tailored to your brand and audience', included: true },
    { name: 'Optimized for Every Device', desc: 'Smartphone, tablet, and desktop', included: true },
    { name: 'Animations & Interactions', desc: 'Bringing your website to life', included: true },
    { name: 'Home Page', desc: 'Your brand at first glance', included: true },
    { name: 'Legal Pages', desc: 'Legal notice and privacy policy', included: true },
  ],
  addons: [
    { name: 'Contact Form', from: 150, desc: 'So potential clients can reach you directly' },
    { name: 'Content Management', from: 500, desc: 'Update content yourself, no technical knowledge needed' },
    { name: 'Multiple Languages', from: 300, desc: 'So every visitor can understand your website' },
    { name: 'Logo & Branding', from: 800, desc: 'No logo yet? I’ll create one that fits your brand.' },
  ],
};

export const faqs = [
  { q: 'How much does a website cost?', a: 'Every project is different. Most portfolio and small business sites land between ₹1,300–4,000. The calculator gives you a first estimate; the exact price is worked out in a conversation.' },
  { q: 'What do I need to get started?', a: 'A rough idea of what you want to communicate and any existing brand assets (logo, images, copy). If you don’t have those yet, that’s fine — we shape them together.' },
  { q: 'How long does a project take?', a: 'Typical timelines range from 3 to 8 weeks depending on scope. I’ll share a clear roadmap after our first call.' },
  { q: 'What if I don’t like the design?', a: 'Every project includes multiple review rounds. Nothing goes live until you’re genuinely happy with the result.' },
  { q: 'Can I update my content later?', a: 'Yes. I can add a lightweight CMS so you (or your team) can edit copy and images without touching code.' },
  { q: 'Why are there no monthly costs?', a: 'You pay once for the site itself. Hosting is a small separate cost you own directly — no lock‑in, no surprise invoices.' },
  { q: 'Do you offer maintenance or support after launch?', a: 'Yes — optional monthly care plans are available for updates, tweaks and ongoing improvements.' },
];
