import React from 'react';
import { Link } from 'react-router-dom';
import { personal, projects } from '../mock';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#140610] mt-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Website</div>
          <ul className="space-y-2 text-[14px] text-[#cfc4a8]">
            <li><Link to="/" className="hover:text-[#d9a679]">Home</Link></li>
            <li><Link to="/projects" className="hover:text-[#d9a679]">Projects</Link></li>
            <li><Link to="/services" className="hover:text-[#d9a679]">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-[#d9a679]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#d9a679]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Projects</div>
          <ul className="space-y-2 text-[14px] text-[#cfc4a8]">
            {projects.slice(0, 4).map(p => (
              <li key={p.id}><Link to="/projects" className="hover:text-[#d9a679]">{p.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Social</div>
          <ul className="space-y-2 text-[14px] text-[#cfc4a8]">
            <li><Link to="/contact" className="hover:text-[#d9a679]">Contact Form</Link></li>
            <li><a href={`mailto:${personal.email}`} className="hover:text-[#d9a679]">Email</a></li>
            <li><a href={`tel:${personal.phone}`} className="hover:text-[#d9a679]">Phone</a></li>
            <li><a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#d9a679]">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-widest-2 uppercase text-[#8b7f66] mb-4">Contact</div>
          <ul className="space-y-2 text-[14px] text-[#cfc4a8]">
            <li>{personal.email}</li>
            <li>{personal.phone}</li>
            <li>{personal.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[#8b7f66]">
          <div>Copyright © 2026 Swati Paul — Web development from {personal.location}</div>
          <div className="flex items-center gap-6">
            <a href="#legal" className="hover:text-[#d9a679]">Legal notice</a>
            <a href="#privacy" className="hover:text-[#d9a679]">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
