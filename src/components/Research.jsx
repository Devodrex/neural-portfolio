import React from 'react';
import { motion } from 'framer-motion';

export default function Research() {
  return (
    <section id="research" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <div className="font-mono text-xs mb-3" style={{ color: '#ff2d78', letterSpacing: '0.2em' }}>
          ▸ PUBLISHED INTELLIGENCE
        </div>
        <h2 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          RESEARCH <span style={{ color: '#ff2d78', textShadow: '0 0 20px rgba(255,45,120,0.5)' }}>ARCHIVE</span>
        </h2>
      </motion.div>

      <motion.div
        className="glass-card relative overflow-hidden p-8"
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}
        style={{ borderColor: 'rgba(255,45,120,0.25)', background: 'linear-gradient(135deg,rgba(255,45,120,0.03),rgba(188,19,254,0.03))' }}
      >
        <div className="dossier-scan absolute left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,45,120,0.4),transparent)' }} />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
              style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.3)' }}>
              🧠
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(255,45,120,0.15)', color: '#ff2d78', border: '1px solid rgba(255,45,120,0.3)' }}>
                INTERNATIONAL CONFERENCE
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(0,243,255,0.1)', color: '#00f3ff', border: '1px solid rgba(0,243,255,0.2)' }}>
                DoSCI-2025
              </span>
              <span className="font-mono text-xs" style={{ color: '#64748b' }}>MAR 2025</span>
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-2">
              Predicting Likelihood of Alzheimer's Disease using SVN
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Developed an ML model using Support Vector Networks to assess Alzheimer's risk in elderly citizens.
              Presented at the International Conference on Computational Intelligence (DoSCI-2025) in collaboration
              with the University of Delhi and the University of Calabria, Italy. Focused on enhancing early
              detection accuracy in healthcare applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {[
                { label: 'MODEL', value: 'Support Vector Network', color: '#ff2d78' },
                { label: 'VENUE', value: 'DoSCI-2025 // ICCI',     color: '#bc13fe' },
                { label: 'COLLAB', value: 'Delhi + Calabria, IT',  color: '#00f3ff' },
              ].map(s => (
                <div key={s.label} className="rounded-xl p-3" style={{ background: `${s.color}08`, border: `1px solid ${s.color}22` }}>
                  <div className="font-mono text-xs mb-1" style={{ color: '#64748b' }}>{s.label}</div>
                  <div className="font-mono text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {['Python', 'SVM', 'Scikit-learn', 'Healthcare AI', 'Early Detection', 'Neuroscience'].map(tag => (
                <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{ background: 'rgba(255,45,120,0.08)', color: '#ff2d78', border: '1px solid rgba(255,45,120,0.2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#ff2d78' }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#ff2d78' }} />
      </motion.div>
    </section>
  );
}
