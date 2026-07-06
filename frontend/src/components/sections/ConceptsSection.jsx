import React, { useState } from 'react';
import { concepts } from '../../mock';

export default function ConceptsSection() {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? concepts : concepts.slice(0, 3);

  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Design Explorations</div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#f2ead8]">Concepts</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.name} className="group relative rounded-2xl overflow-hidden border border-white/5 hover-lift">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a12] via-transparent to-transparent z-10 pointer-events-none" />
              <img src={c.image} alt={c.name} className="w-full h-[360px] object-cover transform group-hover:scale-[1.06] transition-transform duration-[1200ms]" />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="text-[11px] tracking-widest-2 uppercase text-[#d9a679] mb-1">Concept</div>
                <div className="font-serif text-2xl text-[#f2ead8]">{c.name}</div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button onClick={() => setShowAll(true)} className="px-8 py-3 rounded-full border border-[#f2ead8]/30 text-[12px] tracking-widest-2 uppercase text-[#f2ead8] hover:bg-[#f2ead8]/10 transition-colors">
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
