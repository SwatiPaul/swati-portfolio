import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Mail, Phone, Code2, Menu, X } from 'lucide-react';
import { personal } from '../mock';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'backdrop-blur-md bg-[#1a0a12]/70 border-b border-white/5' : 'bg-transparent'}`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-[#d9a679]/40 text-[#d9a679] group-hover:bg-[#d9a679]/10 transition-colors">
            <Code2 size={16} />
          </span>
          <span className="text-[13px] tracking-widest-2 text-[#f2ead8] font-medium">{personal.brand}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[13px] tracking-wider-1 uppercase link-underline transition-colors ${
                  isActive ? 'text-[#f2ead8]' : 'text-[#cfc4a8] hover:text-[#f2ead8]'
                }`
              }
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <div className="h-6 w-px bg-white/15" />
          <a href={`mailto:${personal.email}`} className="text-[#cfc4a8] hover:text-[#d9a679] transition-colors" aria-label="Email"><Mail size={18} /></a>
          <a href={`tel:${personal.phone}`} className="text-[#cfc4a8] hover:text-[#d9a679] transition-colors" aria-label="Phone"><Phone size={18} /></a>
          <div className="flex items-center gap-2 text-[12px] tracking-widest-2">
            <button onClick={() => setLang('EN')} className={lang === 'EN' ? 'text-[#f2ead8]' : 'text-[#7d6f57] hover:text-[#cfc4a8]'}>EN</button>
            <button onClick={() => setLang('DE')} className={lang === 'DE' ? 'text-[#f2ead8]' : 'text-[#7d6f57] hover:text-[#cfc4a8]'}>DE</button>
          </div>
        </div>

        <button className="lg:hidden text-[#f2ead8]" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1a0a12]/95 backdrop-blur-md border-t border-white/5 px-6 py-6">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `text-sm tracking-wider-1 uppercase ${isActive ? 'text-[#f2ead8]' : 'text-[#cfc4a8]'}`}>{l.label}</NavLink>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
              <a href={`mailto:${personal.email}`} className="text-[#cfc4a8]"><Mail size={18} /></a>
              <a href={`tel:${personal.phone}`} className="text-[#cfc4a8]"><Phone size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
