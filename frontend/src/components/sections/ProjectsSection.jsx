import React from 'react';
import { projects } from '../../mock';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectsSection() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="ambient-blob" style={{ width: 460, height: 460, background: '#5a1e40', top: '10%', left: '-10%', opacity: 0.35 }} />
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Case Studies</div>
            <h2 className="font-serif text-4xl md:text-6xl text-[#f2ead8]">Projects</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-widest-2 uppercase text-[#cfc4a8] hover:text-[#d9a679] transition-colors">
            View all <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="space-y-32 md:space-y-40">
          {projects.slice(0, 2).map((p, i) => (
            <div key={p.id} className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              <div className="relative group [direction:ltr]">
                <div className="absolute -inset-4 bg-[#d9a679]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative overflow-hidden rounded-2xl border border-white/5">
                  <img src={p.image} alt={p.title} className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-[1.03] transition-transform duration-[1200ms]" />
                </div>
              </div>
              <div className="[direction:ltr]">
                <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-3">{p.stack.join(' · ')}</div>
                <h3 className="font-serif text-3xl md:text-5xl text-[#f2ead8] mb-6">{p.title}</h3>
                <p className="text-[#cfc4a8] leading-relaxed mb-6 max-w-lg">{p.summary}</p>
                <p className="text-[#cfc4a8] leading-relaxed mb-8 max-w-lg">{p.outcome}</p>
                <Link to="/projects" className="inline-flex items-center gap-2 text-[12px] tracking-widest-2 uppercase text-[#f2ead8] link-underline">
                  Learn more <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
