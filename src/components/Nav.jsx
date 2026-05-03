import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '#hero',       label: 'HOME' },
  { href: '#projects',   label: 'CASE FILES' },
  { href: '#experience', label: 'EXP LOG' },
  { href: '#skills',     label: 'SKILLS' },
  { href: '#research',   label: 'RESEARCH' },
  { href: '#contact',    label: 'CONTACT' },
];

const DOCK_LINKS = [
  { href: 'https://linkedin.com', icon: 'fab fa-linkedin', color: '#00f3ff', label: 'LinkedIn' },
  { href: 'https://github.com',   icon: 'fab fa-github',   color: '#bc13fe', label: 'GitHub' },
  { href: 'mailto:adityakumarsingh@email.com', icon: 'fas fa-envelope', color: '#ff2d78', label: 'Email' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top nav */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center"
        style={{
          background: scrolled ? 'rgba(2,5,16,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,243,255,0.08)' : 'none',
          transition: 'all 0.3s',
        }}
        initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <a href="#hero" className="font-display font-black text-xl no-underline">
            <span style={{ color: '#00f3ff', textShadow: '0 0 20px rgba(0,243,255,0.6)' }}>AKS</span>
            <span style={{ color: '#fff' }}>//NEURAL</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href}
                  className="font-mono text-xs no-underline transition-all duration-200"
                  style={{ color: active === l.href.slice(1) ? '#00f3ff' : '#64748b' }}>
                  {active === l.href.slice(1) && <span style={{ color: '#bc13fe' }}>{'> '}</span>}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="/Aditya_CV.pdf" download
            className="hidden md:block btn-glitch font-mono text-xs px-4 py-2 rounded-full border no-underline transition-all duration-300"
            style={{ borderColor: 'rgba(0,243,255,0.4)', color: '#00f3ff' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,243,255,0.4)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            DOWNLOAD_CV
          </a>

          <button className="md:hidden text-cyan-400 text-xl" onClick={() => setMenuOpen(p => !p)}
            style={{ background: 'none', border: 'none', cursor: 'none' }}>
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 z-40 p-6"
            style={{ background: 'rgba(2,5,16,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,243,255,0.1)' }}
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          >
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block py-2.5 font-mono text-sm no-underline"
                style={{ color: active === l.href.slice(1) ? '#00f3ff' : '#94a3b8' }}>
                <span style={{ color: '#bc13fe' }}>{'>'} </span>{l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating side dock */}
      <motion.div
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
      >
        {DOCK_LINKS.map(link => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer"
            title={link.label}
            className="w-10 h-10 rounded-full flex items-center justify-center glass-card transition-all duration-300 no-underline"
            style={{ borderColor: `${link.color}22` }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 20px ${link.color}88`; e.currentTarget.style.borderColor = link.color; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = `${link.color}22`; }}
          >
            <i className={link.icon} style={{ color: link.color, fontSize: '1rem' }} />
          </a>
        ))}
        <div className="w-px h-16 rounded" style={{ background: 'linear-gradient(to bottom,rgba(0,243,255,0.3),transparent)' }} />
      </motion.div>
    </>
  );
}
