import React, { useEffect, useRef } from 'react';
import { testimonials } from '../../mock';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const list = [...testimonials, ...testimonials];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-16 text-center">
        <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Testimonials</div>
        <h2 className="font-serif text-4xl md:text-6xl text-[#f2ead8]">See For Yourself</h2>
        <p className="mt-6 text-[#cfc4a8] max-w-2xl mx-auto">
          Real experiences say more than any promise. Discover what my clients think about working with me and how their projects came to life.
        </p>
      </div>

      <div className="relative">
        <div className="marquee-track flex gap-6 w-max" ref={trackRef}>
          {list.map((t, i) => (
            <div key={i} className="w-[360px] md:w-[420px] shrink-0 p-8 md:p-10 rounded-2xl bg-[#22101c]/70 border border-white/5 backdrop-blur-sm hover-lift">
              <Quote className="text-[#d9a679] mb-4" size={28} />
              <p className="text-[#f2ead8] leading-relaxed text-[15px]">
                {t.quote}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-[#f2ead8] text-sm font-medium">{t.name}</div>
                <div className="text-[#8b7f66] text-xs tracking-wider-1 uppercase mt-1">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
