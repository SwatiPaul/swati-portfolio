import React, { useState } from 'react';
import { faqs } from '../../mock';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Frequently asked</div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#f2ead8]">FAQ</h2>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left py-6 flex items-start justify-between gap-6 group"
            >
              <div className="flex-1">
                <div className="font-serif text-xl md:text-2xl text-[#f2ead8] group-hover:text-[#d9a679] transition-colors">{f.q}</div>
                {open === i && (
                  <div className="mt-4 text-[#cfc4a8] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500">{f.a}</div>
                )}
              </div>
              <span className="mt-2 shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-[#f2ead8]">
                {open === i ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
