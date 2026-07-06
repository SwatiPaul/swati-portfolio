import React from 'react';
import ContactSection from '../components/sections/ContactSection';

export default function Contact() {
  return (
    <div className="pt-32">
      <section className="pt-16 pb-8">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Get in touch</div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#f2ead8] leading-[1.02] max-w-3xl">
            Let’s build something extraordinary
          </h1>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
