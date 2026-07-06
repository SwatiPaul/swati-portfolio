import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function AboutTeaser() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="ambient-blob" style={{ width: 500, height: 500, background: '#7a1e4a', top: '20%', right: '-10%', opacity: 0.35 }} />
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-[#d9a679]/10 rounded-full blur-3xl" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 max-w-md">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80"
              alt="Swati Paul"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#f2ead8] leading-[1.05]">
            Meet the <em className="text-[#d9a679] not-italic font-normal">person</em><br />
            <em className="text-[#d9a679] not-italic font-normal">behind</em> the design
          </h2>
          <div className="mt-10 space-y-6 text-[#cfc4a8] leading-relaxed max-w-lg">
            <div className="font-serif text-2xl text-[#f2ead8]">Hey,</div>
            <p>
              my name is <span className="text-[#f2ead8]">Swati Paul</span>, senior frontend developer from Kolkata, India. I build <span className="text-[#f2ead8]">high‑end websites and applications for visual brands</span>.
            </p>
            <p>
              With 4+ years of experience across React, Next.js, Angular and TypeScript, I combine strong technical foundations with a real design sensibility — the result is digital experiences that feel considered, fast, and unmistakably yours.
            </p>
            <p>Let’s make your website something extraordinary.</p>
          </div>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-[12px] tracking-widest-2 uppercase text-[#f2ead8] link-underline">
            Learn more <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
