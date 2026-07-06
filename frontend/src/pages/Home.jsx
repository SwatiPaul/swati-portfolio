import React, { useEffect, useRef } from 'react';
import ThreeBackground from '../components/ThreeBackground';
import { personal } from '../mock';
import { Link } from 'react-router-dom';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ConceptsSection from '../components/sections/ConceptsSection';
import AboutTeaser from '../components/sections/AboutTeaser';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="ambient-blob" style={{ width: 520, height: 520, background: '#5a1e40', top: '-10%', left: '-10%' }} />
        <div className="ambient-blob" style={{ width: 640, height: 640, background: '#3a1428', bottom: '-20%', right: '-15%' }} />
        <ThreeBackground />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="text-[11px] md:text-[13px] tracking-widest-2 uppercase text-[#cfc4a8] mb-8">{personal.tagline}</div>
          <h1 className="font-serif text-[44px] sm:text-[64px] md:text-[92px] leading-[1.02] tracking-tight text-[#f2ead8]">
            Your website<br className="hidden md:block" /> can do more
          </h1>
          <p className="mt-8 text-[15px] md:text-[17px] text-[#cfc4a8] max-w-2xl mx-auto leading-relaxed">
            {personal.heroSub}
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#f2ead8] text-[#1a0a12] text-[12px] tracking-widest-2 uppercase hover:bg-white hover:shadow-[0_20px_60px_-10px_rgba(242,234,216,0.35)] transition-all duration-500"
            >
              Start Project
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 text-[11px] tracking-widest-2 text-[#8b7f66] uppercase z-10">
          <span className="inline-block animate-pulse">scroll to explore</span>
        </div>
      </section>

      <Reveal><TestimonialsSection /></Reveal>
      <Reveal><ProjectsSection /></Reveal>
      <Reveal><ConceptsSection /></Reveal>
      <Reveal><AboutTeaser /></Reveal>
      <Reveal><PricingSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
    </div>
  );
}
