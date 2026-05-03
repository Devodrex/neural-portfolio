import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 'pothole',
    code: 'CASE-FILE-001',
    classification: 'TOP_SECRET',
    title: 'Pothole Detection System',
    subtitle: 'Real-time CV + GPS Infrastructure Monitor',
    status: 'DEPLOYED',
    color: '#00f3ff',
    accent: '#bc13fe',
    stats: [
      { label: 'mAP@50',    value: '91.4%' },
      { label: 'FRAMEWORK', value: 'YOLOv8' },
      { label: 'TRACKER',   value: 'ByteTrack' },
      { label: 'REPORTING', value: 'GPS+CSV' },
    ],
    description: 'Developed during Tata Steel internship. Real-time pothole detection and tracking system with GPS-integrated CSV reporting for municipal maintenance workflows. Robust across varied lighting and road conditions.',
    tags: ['Python', 'OpenCV', 'YOLOv8', 'ByteTrack', 'GPS', 'Streamlit'],
    thumb: '🛣️',
  },
  {
    id: 'alzheimer',
    code: 'CASE-FILE-002',
    classification: 'CONFIDENTIAL',
    title: 'Alzheimer\'s Risk Predictor',
    subtitle: 'SVM-based Early Detection for Elderly',
    status: 'PUBLISHED',
    color: '#bc13fe',
    accent: '#ff2d78',
    stats: [
      { label: 'MODEL',     value: 'SVM/SVN' },
      { label: 'VENUE',     value: 'DoSCI-2025' },
      { label: 'COLLAB',    value: 'Univ. Delhi' },
      { label: 'COLLAB_2',  value: 'Calabria, IT' },
    ],
    description: 'Published research at International Conference on Computational Intelligence. Used Support Vector Networks to assess Alzheimer\'s risk in elderly citizens, focusing on enhancing early detection accuracy in healthcare applications.',
    tags: ['Python', 'Scikit-learn', 'SVM', 'Healthcare AI', 'Research'],
    thumb: '🧠',
  },
  {
    id: 'asd',
    code: 'CASE-FILE-003',
    classification: 'RESTRICTED',
    title: 'ASD Prediction Model',
    subtitle: 'Behavioral Clinical Data Classifier',
    status: 'COMPLETED',
    color: '#ffd60a',
    accent: '#00f3ff',
    stats: [
      { label: 'MODEL',     value: 'Random Forest' },
      { label: 'INPUTS',    value: 'Behavioral+Clinical' },
      { label: 'STACK',     value: 'Pandas+Sklearn' },
      { label: 'GOAL',      value: 'Early Diagnosis' },
    ],
    description: 'Built a Random Forest model to predict Autism Spectrum Disorder likelihood using behavioral and clinical data. Implemented preprocessing: missing values, categorical encoding, and feature scaling.',
    tags: ['Python', 'Pandas', 'Random Forest', 'Scikit-learn', 'ML'],
    thumb: '🔬',
  },
  {
    id: 'chatbot',
    code: 'CASE-FILE-004',
    classification: 'INTERNAL',
    title: 'RAG HR Chatbot',
    subtitle: 'LangChain + FAISS Enterprise Assistant',
    status: 'LIVE',
    color: '#ff2d78',
    accent: '#bc13fe',
    stats: [
      { label: 'ACCURACY', value: '94.2%' },
      { label: 'STACK',    value: 'LangChain+FAISS' },
      { label: 'CLIENT',   value: 'Tata Steel' },
      { label: 'DEPLOY',   value: 'Streamlit' },
    ],
    description: 'Developed an RAG-based HR chatbot for Tata Steel using LangChain and FAISS for vector search, achieving 94.2% query accuracy. Deployed via Streamlit dashboards for monitoring ML pipelines.',
    tags: ['LangChain', 'FAISS', 'HuggingFace', 'RAG', 'Streamlit', 'NLP'],
    thumb: '🤖',
  },
];

const CLASSIFICATION_COLORS = {
  TOP_SECRET:   '#ff2d78',
  CONFIDENTIAL: '#bc13fe',
  RESTRICTED:   '#ffd60a',
  INTERNAL:     '#00f3ff',
};

function DossierCard({ project, index }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      className="glass-card relative overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }}
      onClick={() => setRevealed(p => !p)}
      whileHover={{ scale: 1.02 }}
      style={{ borderColor: `${project.color}22` }}
    >
      {/* Scan line on hover */}
      <div className="dossier-scan absolute left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg,transparent,${project.color},transparent)`, top: 0 }} />

      {/* Classification stamp */}
      <div className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 rounded border"
        style={{ color: CLASSIFICATION_COLORS[project.classification], borderColor: `${CLASSIFICATION_COLORS[project.classification]}44`,
          background: `${CLASSIFICATION_COLORS[project.classification]}11` }}>
        {project.classification}
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
            style={{ background: `${project.color}11`, border: `1px solid ${project.color}33` }}>
            {project.thumb}
          </div>
          <div>
            <div className="font-mono text-xs mb-1" style={{ color: project.color }}>
              {project.code} // STATUS: <span style={{ color: project.accent }}>{project.status}</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white leading-tight">{project.title}</h3>
            <p className="font-mono text-xs mt-0.5" style={{ color: '#64748b' }}>{project.subtitle}</p>
          </div>
        </div>

        {/* Tech stats grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.stats.map(s => (
            <div key={s.label} className="rounded-lg p-2" style={{ background: `${project.color}08`, border: `1px solid ${project.color}15` }}>
              <div className="font-mono text-xs" style={{ color: '#64748b' }}>{s.label}</div>
              <div className="font-mono text-sm font-bold" style={{ color: project.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Reveal toggle */}
        <div className="mb-4">
          <button className="font-mono text-xs flex items-center gap-2 transition-all"
            style={{ color: project.color, background: 'none', border: 'none', cursor: 'none' }}>
            <span>{revealed ? '▼' : '▶'}</span>
            {revealed ? 'COLLAPSE_INTEL' : 'READ_INTEL'}
          </button>
          {revealed && (
            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              className="text-slate-400 text-sm leading-relaxed mt-3">
              {project.description}
            </motion.p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded"
              style={{ background: `${project.accent}11`, color: project.accent, border: `1px solid ${project.accent}22` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: project.color }} />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: project.color }} />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <div className="font-mono text-xs mb-3" style={{ color: '#00f3ff', letterSpacing: '0.2em' }}>
          ▸ CLASSIFIED INTELLIGENCE ARCHIVE
        </div>
        <h2 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          PROJECT <span style={{ color: '#00f3ff', textShadow: '0 0 20px rgba(0,243,255,0.5)' }}>CASE FILES</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Classified deployments and research operations. Click any file to access full intel.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => <DossierCard key={p.id} project={p} index={i} />)}
      </div>
    </section>
  );
}
