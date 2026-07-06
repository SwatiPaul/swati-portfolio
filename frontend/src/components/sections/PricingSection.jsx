import React, { useState } from 'react';
import { pricing } from '../../mock';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';

export default function PricingSection() {
  const [pages, setPages] = useState([1]);
  const [addons, setAddons] = useState({
    'Contact Form': false,
    'Content Management': false,
    'Multiple Languages': false,
    'Logo & Branding': false,
  });

  const addonTotal = pricing.addons.reduce((s, a) => (addons[a.name] ? s + a.from : s), 0);
  const pagesExtra = Math.max(0, pages[0] - 1) * 220;
  const total = pricing.base + addonTotal + pagesExtra;

  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Pricing</div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#f2ead8]">What your website costs</h2>
          <p className="mt-6 text-[#cfc4a8] max-w-2xl mx-auto">
            Every project is different. The calculator gives you a first estimate; the exact price is worked out in a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-[#22101c]/50 p-8 md:p-10">
            <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-2">Base</div>
            <h3 className="font-serif text-3xl text-[#f2ead8] mb-8">The foundation of every website</h3>
            <ul className="space-y-5">
              {pricing.items.map((it) => (
                <li key={it.name} className="flex items-start gap-4">
                  <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#d9a679]/15 text-[#d9a679]"><Check size={14} /></span>
                  <div>
                    <div className="text-[#f2ead8] text-[15px]">{it.name}</div>
                    <div className="text-[#8b7f66] text-[13px] mt-1">{it.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[#f2ead8] text-[15px]">Number of Pages</div>
                <div className="text-[#d9a679] font-serif text-2xl">{pages[0]}</div>
              </div>
              <p className="text-[#8b7f66] text-[13px] mb-4">How many pages should your website have?</p>
              <Slider value={pages} onValueChange={setPages} min={1} max={12} step={1} className="[&_[role=slider]]:bg-[#d9a679] [&_[role=slider]]:border-[#d9a679]" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#22101c]/50 p-8 md:p-10">
            <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-8">Add-ons</div>
            <div className="space-y-5">
              {pricing.addons.map((a) => (
                <div key={a.name} className="flex items-start justify-between gap-6 pb-5 border-b border-white/5 last:border-none">
                  <div>
                    <div className="text-[#f2ead8] text-[15px]">{a.name}</div>
                    <div className="text-[#8b7f66] text-[13px] mt-1">{a.desc}</div>
                    <div className="text-[#d9a679] text-[12px] tracking-wider-1 mt-2">from ₹{a.from}</div>
                  </div>
                  <Switch checked={addons[a.name]} onCheckedChange={(v) => setAddons({ ...addons, [a.name]: v })} />
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex items-end justify-between">
              <div>
                <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66]">Estimated total</div>
                <div className="font-serif text-5xl text-[#f2ead8] mt-2">from ₹{total.toLocaleString('en-IN')}</div>
              </div>
              <Link to="/contact" className="px-6 py-3 rounded-full bg-[#f2ead8] text-[#1a0a12] text-[12px] tracking-widest-2 uppercase hover:bg-white transition-colors">Get in touch</Link>
            </div>
            <p className="text-[#8b7f66] text-[12px] mt-4">All figures are non‑binding. I’ll put together a tailored quote after an initial call.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
