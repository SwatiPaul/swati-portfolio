import React from 'react';
import { skills, personal } from '../mock';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="relative pt-40 pb-20">
        <div className="ambient-blob" style={{ width: 500, height: 500, background: '#7a1e4a', top: '5%', left: '-10%', opacity: 0.35 }} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-6">About</div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#f2ead8] leading-[1.02]">
              A senior frontend developer<br />with an eye for the details
            </h1>
          </div>
          <div className="md:col-span-5 text-[#cfc4a8] leading-relaxed">
            <p>4+ years of shipping fast, accessible, pixel‑perfect UIs for finance, legal, mobility and creative brands. Based in {personal.location}.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-[#d9a679]/10 rounded-full blur-3xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 max-w-md">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80" alt="Swati Paul" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-6 text-[#cfc4a8] leading-relaxed max-w-lg">
            <div className="font-serif text-3xl text-[#f2ead8]">Hi, I’m Swati.</div>
            <p>I build modern, performant web applications with React, Next.js, Angular and TypeScript. My focus is on the boundary between design and engineering — turning Figma and Framer files into production UIs that stay pixel‑perfect across every browser and device.</p>
            <p>Recently I’ve led the migration of a financial CRM to a modern Next.js architecture, cutting page‑load times by ~30%. Alongside client work, I’m actively growing into DevOps — Docker, GitHub Actions, AWS EC2 and CI/CD pipelines — so I can deliver full‑cycle solutions.</p>
            <p>Outside of code, I care a lot about typography, motion, and the small details that make a product feel considered.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-[12px] tracking-widest-2 uppercase text-[#f2ead8] link-underline mt-4">Start a project <ArrowUpRight size={14} /></Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Toolkit</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#f2ead8] mb-12">Skills &amp; tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-white/10 bg-[#22101c]/50 p-6">
                <div className="text-[11px] tracking-widest-2 uppercase text-[#d9a679] mb-4">{group}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[13px] text-[#f2ead8]">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Experience</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#f2ead8] mb-12">Where I’ve worked</h2>
          <div className="space-y-8">
            {[
              { role: 'Senior Frontend Developer', company: 'Freelance / Contract', period: 'Mar 2025 – Present', points: ['Architected Next.js applications with Tailwind and Shadcn UI; 30% faster load via Turbopack and lazy loading.', 'Converted Figma/Framer wireframes into pixel‑perfect, cross‑browser UIs.', 'Boosted SEO scores through structured data, lazy loading and image optimisation.'] },
              { role: 'Frontend Developer (Angular)', company: 'Enterprise projects', period: '2022 – 2025', points: ['Built scalable UIs with Angular, NgRx/Redux for complex multi‑module apps.', 'Integrated REST APIs; 20% reduction in UI bug backlog through code reviews and retros.'] },
              { role: 'Frontend Developer', company: 'UBK Infotech Pvt. Ltd.', period: '2021 – 2022', points: ['Built responsive mobile‑first UIs with React.js.', 'Improved load speed via lazy loading, code splitting and asset minification.'] },
            ].map((j) => (
              <div key={j.role} className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-white/10">
                <div className="md:col-span-3 text-[11px] tracking-widest-2 uppercase text-[#8b7f66]">{j.period}</div>
                <div className="md:col-span-9">
                  <div className="font-serif text-2xl text-[#f2ead8]">{j.role}</div>
                  <div className="text-[#d9a679] text-[13px] mt-1 mb-4">{j.company}</div>
                  <ul className="space-y-2 text-[#cfc4a8] text-[15px] leading-relaxed">
                    {j.points.map((p) => (<li key={p} className="flex gap-3"><span className="text-[#d9a679] mt-2">&mdash;</span><span>{p}</span></li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
