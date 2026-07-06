import React from 'react';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '../components/sections/FAQSection';

export default function Services() {
  return (
    <div className="pt-32">
      <section className="pt-16 pb-4">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Pricing</div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#f2ead8] leading-[1.02] max-w-3xl">
            Transparent pricing, no monthly lock‑in
          </h1>
        </div>
      </section>
      <PricingSection />
      <FAQSection />
    </div>
  );
}
