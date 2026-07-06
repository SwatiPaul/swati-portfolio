import React from 'react';
import { projects } from '../mock';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <div>
      <section className="relative pt-40 pb-20">
        <div className="ambient-blob" style={{ width: 500, height: 500, background: '#5a1e40', top: '-10%', right: '-10%', opacity: 0.35 }} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-6">Selected work</div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#f2ead8] leading-[1.02] max-w-4xl">
            Projects I’ve shipped with brands I trust
          </h1>
          <p className="mt-8 text-[#cfc4a8] max-w-2xl leading-relaxed">
            A small selection of production work — real teams, real users, real deadlines. Each project is a considered mix of engineering, design and product thinking.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 space-y-32">
          {projects.map((p, i) => (
            <div key={p.id} className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center`}>
              <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#d9a679]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative overflow-hidden rounded-2xl border border-white/5">
                    <img src={p.image} alt={p.title} className="w-full h-[420px] md:h-[520px] object-cover transform group-hover:scale-[1.03] transition-transform duration-[1200ms]" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="flex items-center gap-4 text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">
                  <span>{p.year}</span>
                  <span className="w-8 h-px bg-white/20" />
                  <span>{p.stack[0]}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-[#f2ead8] mb-6">{p.title}</h2>
                <p className="text-[#cfc4a8] leading-relaxed mb-4">{p.summary}</p>
                <p className="text-[#cfc4a8] leading-relaxed mb-8">{p.outcome}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.stack.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full border border-white/10 text-[11px] tracking-wider-1 uppercase text-[#cfc4a8]">{s}</span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-[12px] tracking-widest-2 uppercase text-[#f2ead8] link-underline">
                  Discuss a similar project <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
