import React from 'react';
import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    category: 'ML / AI',
    color: '#00f3ff',
    icon: '🤖',
    skills: [
      { name: 'Scikit-learn', level: 90 },
      { name: 'TensorFlow',   level: 82 },
      { name: 'PyTorch',      level: 78 },
      { name: 'YOLOv8',       level: 92 },
      { name: 'ByteTrack',    level: 85 },
    ],
  },
  {
    category: 'NLP / LLM',
    color: '#bc13fe',
    icon: '🧬',
    skills: [
      { name: 'LangChain',    level: 88 },
      { name: 'HuggingFace',  level: 80 },
      { name: 'FAISS',        level: 84 },
      { name: 'RAG Pipelines',level: 86 },
    ],
  },
  {
    category: 'Data Science',
    color: '#ffd60a',
    icon: '📊',
    skills: [
      { name: 'Pandas',       level: 93 },
      { name: 'NumPy',        level: 91 },
      { name: 'Matplotlib',   level: 87 },
      { name: 'Seaborn',      level: 85 },
      { name: 'SciPy',        level: 78 },
    ],
  },
  {
    category: 'Languages',
    color: '#ff2d78',
    icon: '💻',
    skills: [
      { name: 'Python',       level: 95 },
      { name: 'C/C++',        level: 75 },
      { name: 'Java',         level: 72 },
      { name: 'SQL',          level: 80 },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: '#4ade80',
    icon: '🛠️',
    skills: [
      { name: 'OpenCV',       level: 88 },
      { name: 'Streamlit',    level: 90 },
      { name: 'Flask',        level: 75 },
      { name: 'Docker',       level: 70 },
      { name: 'Git',          level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, index }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between font-mono text-xs mb-1.5">
        <span style={{ color: '#cbd5e1' }}>{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg,${color}88,${color})`, boxShadow: `0 0 8px ${color}55` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <div className="font-mono text-xs mb-3" style={{ color: '#ffd60a', letterSpacing: '0.2em' }}>
          ▸ NEURAL CAPABILITY MATRIX
        </div>
        <h2 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          SKILLS <span style={{ color: '#ffd60a', textShadow: '0 0 20px rgba(255,214,10,0.5)' }}>MATRIX</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          System capabilities indexed by proficiency level. All modules operational.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div key={group.category}
            className="glass-card p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: gi * 0.1 }} viewport={{ once: true }}
            style={{ borderColor: `${group.color}22` }}
            whileHover={{ borderColor: `${group.color}55`, boxShadow: `0 0 30px ${group.color}15` }}
          >
            {/* Scan line */}
            <div className="dossier-scan absolute left-0 right-0 h-px opacity-20"
              style={{ background: `linear-gradient(90deg,transparent,${group.color},transparent)` }} />

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ background: `${group.color}11`, border: `1px solid ${group.color}33` }}>
                {group.icon}
              </div>
              <div>
                <div className="font-mono text-xs" style={{ color: '#64748b' }}>MODULE</div>
                <div className="font-display font-bold text-sm" style={{ color: group.color }}>{group.category}</div>
              </div>
            </div>

            {group.skills.map((skill, si) => (
              <SkillBar key={skill.name} {...skill} color={group.color} index={si} />
            ))}

            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: group.color }} />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: group.color }} />
          </motion.div>
        ))}

        {/* Summary card */}
        <motion.div
          className="glass-card p-6 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}
          style={{ borderColor: 'rgba(0,243,255,0.2)', background: 'linear-gradient(135deg,rgba(0,243,255,0.03),rgba(188,19,254,0.03))' }}
        >
          <div className="font-mono text-xs mb-3" style={{ color: '#64748b' }}>SYS_OVERVIEW</div>
          <div className="font-display font-black text-6xl mb-2" style={{ color: '#00f3ff', textShadow: '0 0 40px rgba(0,243,255,0.5)' }}>
            20+
          </div>
          <div className="font-mono text-sm text-white mb-4">Technologies Mastered</div>
          <div className="grid grid-cols-2 gap-3 w-full">
            {[
              { v: '7.78', l: 'CGPA', c: '#00f3ff' },
              { v: '94.2%', l: 'ACCURACY', c: '#bc13fe' },
              { v: '91.4%', l: 'mAP@50', c: '#ffd60a' },
              { v: '2025', l: 'PUBLISHED', c: '#ff2d78' },
            ].map(s => (
              <div key={s.l} className="rounded-lg p-2" style={{ background: `${s.c}08`, border: `1px solid ${s.c}22` }}>
                <div className="font-mono font-bold" style={{ color: s.c, fontSize: '1.1rem' }}>{s.v}</div>
                <div className="font-mono text-xs" style={{ color: '#64748b' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
