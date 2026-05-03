import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <div className="font-mono text-xs mb-3" style={{ color: '#4ade80', letterSpacing: '0.2em' }}>
          ▸ ESTABLISH CONNECTION
        </div>
        <h2 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          OPEN <span style={{ color: '#4ade80', textShadow: '0 0 20px rgba(74,222,128,0.5)' }}>CHANNEL</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Available for full-time roles, research collaboration, and freelance ML projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact info */}
        <motion.div
          className="glass-card p-8 relative overflow-hidden"
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          style={{ borderColor: 'rgba(74,222,128,0.2)' }}
        >
          <div className="scan-line" style={{ background: 'linear-gradient(90deg,transparent,rgba(74,222,128,0.2),transparent)' }} />

          <div className="font-mono text-xs mb-5" style={{ color: '#4ade80' }}>{'// CONTACT_PROTOCOLS'}</div>

          {[
            { icon: 'fas fa-map-marker-alt', label: 'LOCATION', value: 'Jamshedpur, India', color: '#00f3ff' },
            { icon: 'fas fa-phone', label: 'COMM_LINK', value: '+91-7480093271', color: '#bc13fe', copy: '+917480093271' },
            { icon: 'fab fa-linkedin', label: 'LINKEDIN', value: 'linkedin.com/in/adityakumarsingh', color: '#00f3ff' },
            { icon: 'fab fa-github', label: 'GITHUB', value: 'github.com/adityakumarsingh', color: '#bc13fe' },
          ].map(item => (
            <div key={item.label}
              className="flex items-center gap-4 p-3 rounded-xl mb-3 transition-all cursor-pointer group"
              style={{ background: `${item.color}08`, border: `1px solid ${item.color}15` }}
              onClick={() => item.copy && copy(item.copy)}
            >
              <i className={`${item.icon} w-4 text-center`} style={{ color: item.color }} />
              <div className="flex-1">
                <div className="font-mono text-xs" style={{ color: '#64748b' }}>{item.label}</div>
                <div className="font-mono text-sm" style={{ color: '#e2e8f0' }}>{item.value}</div>
              </div>
              {item.copy && (
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: item.color }}>
                  {copied ? 'COPIED!' : 'COPY'}
                </span>
              )}
            </div>
          ))}

          {/* Download CV big button */}
          <a
            href="/Aditya_CV.pdf"
            download
            className="btn-glitch mt-4 flex items-center justify-center gap-3 w-full py-3 rounded-xl font-display font-bold text-sm text-black transition-all"
            style={{ background: 'linear-gradient(135deg,#00f3ff,#bc13fe)', boxShadow: '0 0 30px rgba(0,243,255,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.animation = 'glitchEffect 0.3s linear'; e.currentTarget.style.boxShadow = '0 0 50px rgba(0,243,255,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.animation = ''; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,243,255,0.3)'; }}
          >
            <i className="fas fa-download" />
            DOWNLOAD_CV.PDF
          </a>

          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#4ade80' }} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#4ade80' }} />
        </motion.div>

        {/* Status panel */}
        <motion.div
          className="glass-card p-8 relative overflow-hidden flex flex-col justify-between"
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
          style={{ borderColor: 'rgba(0,243,255,0.2)', background: 'linear-gradient(135deg,rgba(0,243,255,0.02),rgba(188,19,254,0.02))' }}
        >
          <div>
            <div className="font-mono text-xs mb-5" style={{ color: '#00f3ff' }}>{'// SYSTEM_STATUS'}</div>
            {[
              { label: 'AVAILABILITY',     value: 'OPEN TO OPPORTUNITIES', color: '#4ade80' },
              { label: 'CURRENT_ROLE',     value: 'Student + Intern',       color: '#00f3ff' },
              { label: 'PREFERRED_STACK',  value: 'Python / ML / CV / NLP', color: '#bc13fe' },
              { label: 'LOCATION_PREF',    value: 'Remote / Hybrid / India', color: '#ffd60a' },
              { label: 'NOTICE_PERIOD',    value: 'IMMEDIATE',               color: '#ff2d78' },
            ].map(s => (
              <div key={s.label} className="flex items-center justify-between py-2.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                <span className="font-mono text-xs" style={{ color: '#64748b' }}>{s.label}</span>
                <span className="font-mono text-xs font-bold" style={{ color: s.color }}>{s.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl font-mono text-xs leading-relaxed" style={{ background: 'rgba(0,243,255,0.04)', border: '1px solid rgba(0,243,255,0.1)', color: '#94a3b8' }}>
            <span style={{ color: '#00f3ff' }}>{'>'} </span>
            Currently pursuing B.Tech at KIIT. Fresh from Tata Steel ML internship.
            Published researcher. Ready to build intelligent systems that matter.
            <span className="cursor-blink" style={{ color: '#00f3ff' }}> █</span>
          </div>

          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#00f3ff' }} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#00f3ff' }} />
        </motion.div>
      </div>
    </section>
  );
}
