import React, { useState } from 'react';
import { personal } from '../../mock';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from '../../hooks/use-toast';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      toast({ title: 'Please add your email and a short message.', description: 'These fields are required.' });
      return;
    }
    setSent(true);
    toast({ title: 'Thank you for reaching out!', description: 'I appreciate your message and will get back to you shortly.' });
    setForm({ name: '', email: '', phone: '', website: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="ambient-blob" style={{ width: 520, height: 520, background: '#7a1e4a', bottom: '10%', left: '-10%', opacity: 0.3 }} />
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Ready for the next step?</div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#f2ead8] leading-[1.05]">Tell me about your brand</h2>
          <p className="mt-8 text-[#cfc4a8] leading-relaxed max-w-md">
            Tell me a little about your brand and project goals — I’ll get back to you within one business day with next steps.
          </p>
          <div className="mt-10 space-y-4">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-4 text-[#cfc4a8] hover:text-[#d9a679] transition-colors">
              <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center"><Mail size={16} /></span>
              <span>{personal.email}</span>
            </a>
            <a href={`tel:${personal.phone}`} className="flex items-center gap-4 text-[#cfc4a8] hover:text-[#d9a679] transition-colors">
              <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center"><Phone size={16} /></span>
              <span>{personal.phone}</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#cfc4a8] hover:text-[#d9a679] transition-colors">
              <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center"><Linkedin size={16} /></span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-white/10 bg-[#22101c]/50 p-8 md:p-10">
          <div>
            <label className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66]">Name</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 bg-transparent border-white/10 focus-visible:ring-[#d9a679] text-[#f2ead8]" />
          </div>
          <div>
            <label className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66]">Email *</label>
            <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 bg-transparent border-white/10 focus-visible:ring-[#d9a679] text-[#f2ead8]" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66]">Phone</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 bg-transparent border-white/10 focus-visible:ring-[#d9a679] text-[#f2ead8]" />
            </div>
            <div>
              <label className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66]">Your website</label>
              <Input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="mt-2 bg-transparent border-white/10 focus-visible:ring-[#d9a679] text-[#f2ead8]" />
            </div>
          </div>
          <div>
            <label className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66]">Message</label>
            <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 bg-transparent border-white/10 focus-visible:ring-[#d9a679] text-[#f2ead8]" />
          </div>
          <p className="text-[11px] text-[#8b7f66]">I use your details to answer your request. Further information can be found in the privacy policy.</p>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#f2ead8] text-[#1a0a12] text-[12px] tracking-widest-2 uppercase hover:bg-white transition-colors">
            <Send size={14} /> {sent ? 'Sent — send another?' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
