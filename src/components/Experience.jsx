import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TERMINAL_ENTRIES = [
  { type: 'system',  text: 'NEURAL-LINK TERMINAL v2.5 // EXPERIENCE_LOG.sh',           color: '#00f3ff' },
  { type: 'cmd',     text: '$ cat experience.log | grep "PROFESSIONAL"',               color: '#64748b' },
  { type: 'blank',   text: '' },
  { type: 'header',  text: '[ENTRY_001] // TATA STEEL UTILITIES & INFRASTRUCTURE',      color: '#ffd60a' },
  { type: 'info',    text: '  ROLE     : Machine Learning Intern',                      color: '#e2e8f0' },
  { type: 'info',    text: '  PERIOD   : May 2025 – July 2025',                        color: '#e2e8f0' },
  { type: 'info',    text: '  LOCATION : Jamshedpur, India',                           color: '#e2e8f0' },
  { type: 'success', text: '  ✓ Built pothole detection system (YOLOv8 + ByteTrack)',  color: '#4ade80' },
  { type: 'success', text: '  ✓ GPS-integrated reporting → mAP@50: 91.4%',            color: '#4ade80' },
  { type: 'success', text: '  ✓ RAG HR Chatbot (LangChain, FAISS) → 94.2% accuracy', color: '#4ade80' },
  { type: 'success', text: '  ✓ Streamlit dashboards for ML pipeline monitoring',      color: '#4ade80' },
  { type: 'blank',   text: '' },
  { type: 'cmd',     text: '$ cat experience.log | grep "ACADEMIC"',                   color: '#64748b' },
  { type: 'blank',   text: '' },
  { type: 'header',  text: '[ENTRY_002] // KALINGA INSTITUTE OF INDUSTRIAL TECH',      color: '#bc13fe' },
  { type: 'info',    text: '  DEGREE   : B.Tech – Computer Science',                   color: '#e2e8f0' },
  { type: 'info',    text: '  PERIOD   : Sept 2022 – Present',                         color: '#e2e8f0' },
  { type: 'info',    text: '  CGPA     : 7.78 / 10',                                  color: '#e2e8f0' },
  { type: 'info',    text: '  LOCATION : Bhubaneswar, India',                          color: '#e2e8f0' },
  { type: 'blank',   text: '' },
  { type: 'header',  text: '[ENTRY_003] // D.B.M.S ENGLISH SCHOOL (ISC) — 2022',     color: '#ff2d78' },
  { type: 'info',    text: '  CLASS    : XII — 84.5%',                                 color: '#e2e8f0' },
  { type: 'blank',   text: '' },
  { type: 'header',  text: '[ENTRY_004] // D.B.M.S ENGLISH SCHOOL (ICSE) — 2020',    color: '#ff2d78' },
  { type: 'info',    text: '  CLASS    : X — 90.0%',                                  color: '#e2e8f0' },
  { type: 'blank',   text: '' },
  { type: 'cmd',     text: '$ cat certifications.log',                                 color: '#64748b' },
  { type: 'blank',   text: '' },
  { type: 'success', text: '  ✓ Oracle AI Vector Search — Oracle University',          color: '#00f3ff' },
  { type: 'success', text: '  ✓ OCI Data Science — Oracle University',                color: '#00f3ff' },
  { type: 'success', text: '  ✓ Google Data Analytics — Coursera',                    color: '#00f3ff' },
  { type: 'blank',   text: '' },
  { type: 'system',  text: '// END OF LOG // ALL RECORDS VERIFIED',                   color: '#4ade80' },
  { type: 'cursor',  text: '█',                                                        color: '#00f3ff' },
];

function TerminalLine({ entry, delay }) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (entry.type === 'blank' || entry.type === 'cursor') { setDone(true); return; }
    let i = 0;
    const t = setTimeout(() => {
      const interval = setInterval(() => {
        setText(entry.text.slice(0, i + 1));
        i++;
        if (i >= entry.text.length) { clearInterval(interval); setDone(true); }
      }, 12);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(t);
  }, [entry.text, delay, entry.type]);

  if (entry.type === 'blank') return <div className="h-2" />;

  return (
    <motion.div
      className="font-mono text-xs leading-6 terminal-line"
      style={{ color: entry.color || '#e2e8f0' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: delay / 1000 }}
    >
      {text}
      {!done && <span className="cursor-blink" style={{ color: '#00f3ff' }}>█</span>}
      {entry.type === 'cursor' && <span className="cursor-blink" style={{ color: '#00f3ff' }}>█</span>}
    </motion.div>
  );
}

export default function Experience() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  let cumDelay = 0;
  const withDelays = TERMINAL_ENTRIES.map(entry => {
    const d = cumDelay;
    cumDelay += entry.type === 'blank' ? 0 : entry.text.length * 12 + 100;
    return { entry, delay: d };
  });

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <div className="font-mono text-xs mb-3" style={{ color: '#bc13fe', letterSpacing: '0.2em' }}>
          ▸ ENCRYPTED EXPERIENCE DATABASE
        </div>
        <h2 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          EXPERIENCE <span style={{ color: '#bc13fe', textShadow: '0 0 20px rgba(188,19,254,0.5)' }}>LOG</span>
        </h2>
      </motion.div>

      <motion.div ref={ref}
        className="glass-card relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}
        style={{ borderColor: 'rgba(188,19,254,0.2)' }}
      >
        {/* Terminal header bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(0,243,255,0.1)', background: 'rgba(0,243,255,0.03)' }}>
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="font-mono text-xs ml-3" style={{ color: '#64748b' }}>
            aditya@neural-link:~$ experience_log.sh
          </span>
          <span className="ml-auto font-mono text-xs" style={{ color: '#00f3ff' }}>TERMINAL v2.5</span>
        </div>

        {/* Scan line */}
        <div className="scan-line" style={{ background: 'linear-gradient(90deg,transparent,rgba(188,19,254,0.2),transparent)' }} />

        {/* Terminal content */}
        <div className="p-6 overflow-auto" style={{ maxHeight: 560, background: 'rgba(2,5,16,0.6)' }}>
          {started
            ? withDelays.map(({ entry, delay }, i) => (
                <TerminalLine key={i} entry={entry} delay={delay} />
              ))
            : <div className="font-mono text-xs" style={{ color: '#00f3ff' }}>
                Scroll into view to initialize terminal...
              </div>
          }
        </div>

        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#bc13fe' }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#bc13fe' }} />
      </motion.div>
    </section>
  );
}
