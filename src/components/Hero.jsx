import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SKILLS = [
  { id: 'python',  label: 'Python',         color: '#00f3ff', x: -200, y: -120 },
  { id: 'yolo',    label: 'YOLOv8',         color: '#bc13fe', x:  220, y: -80  },
  { id: 'java',    label: 'Java',           color: '#ff2d78', x: -230, y:  80  },
  { id: 'ml',      label: 'Machine Learning',color: '#ffd60a', x:  200, y:  120 },
  { id: 'lang',    label: 'LangChain',      color: '#00f3ff', x:    0, y: -190 },
];

const STATS = [
  { label: 'NEURAL_LOAD', value: '94.2%', color: '#00f3ff' },
  { label: 'SYSTEM_TEMP', value: '36.6°C', color: '#bc13fe' },
  { label: 'mAP@50',      value: '91.4%', color: '#ffd60a' },
  { label: 'UPTIME',      value: '99.9%', color: '#ff2d78' },
];

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const svgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [imgCenter, setImgCenter] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [statIndex, setStatIndex] = useState(0);

  const roles = ['ML Engineer', 'Data Scientist', 'CV Researcher', 'AI Builder'];
  const [roleIdx, setRoleIdx] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1.5]);

  // Typing animation
  useEffect(() => {
    const role = roles[roleIdx];
    let i = 0;
    setTypedText('');
    const interval = setInterval(() => {
      setTypedText(role.slice(0, i + 1));
      i++;
      if (i >= role.length) {
        clearInterval(interval);
        setTimeout(() => setRoleIdx(p => (p + 1) % roles.length), 1800);
      }
    }, 80);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleIdx]);

  // Rotating stats
  useEffect(() => {
    const t = setInterval(() => setStatIndex(p => (p + 1) % STATS.length), 2000);
    return () => clearInterval(t);
  }, []);

  // Track image center for string anchoring
  useEffect(() => {
    const updateCenter = () => {
      if (imageRef.current) {
        const r = imageRef.current.getBoundingClientRect();
        setImgCenter({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }
    };
    updateCenter();
    window.addEventListener('resize', updateCenter);
    window.addEventListener('scroll', updateCenter);
    return () => { window.removeEventListener('resize', updateCenter); window.removeEventListener('scroll', updateCenter); };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMove = e => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Compute node absolute positions relative to image center
  const getNodePos = (skill) => ({
    x: imgCenter.x + skill.x,
    y: imgCenter.y + skill.y,
  });

  // Rubber-band bezier: control point pulled toward mouse
  const getBezierPath = (skill) => {
    const node = getNodePos(skill);
    const dx = mouse.x - imgCenter.x;
    const dy = mouse.y - imgCenter.y;
    const cx = imgCenter.x + dx * 0.3;
    const cy = imgCenter.y + dy * 0.3;
    return `M ${imgCenter.x} ${imgCenter.y} Q ${cx} ${cy} ${node.x} ${node.y}`;
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-overlay"
      style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(0,243,255,0.04) 0%, #020510 70%)' }}
    >
      {/* Scan line */}
      <div className="scan-line" />

      {/* SVG string layer — full viewport */}
      <svg
        ref={svgRef}
        className="fixed inset-0 pointer-events-none"
        style={{ width: '100vw', height: '100vh', zIndex: 20 }}
      >
        <defs>
          {SKILLS.map(s => (
            <filter key={s.id} id={`glow-${s.id}`}>
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          ))}
        </defs>
        {SKILLS.map(skill => {
          const node = getNodePos(skill);
          const isHov = hovered === skill.id;
          return (
            <g key={skill.id}>
              <path
                d={getBezierPath(skill)}
                fill="none"
                stroke={skill.color}
                strokeWidth={isHov ? 2 : 1}
                strokeDasharray={isHov ? 'none' : '6 4'}
                opacity={isHov ? 0.9 : 0.4}
                style={{ transition: 'stroke-width 0.2s, opacity 0.2s' }}
                filter={`url(#glow-${skill.id})`}
              />
              {/* Pulse dot on node */}
              <circle cx={node.x} cy={node.y} r={isHov ? 7 : 4} fill={skill.color} opacity={0.8}
                filter={`url(#glow-${skill.id})`} />
              <circle cx={node.x} cy={node.y} r={isHov ? 14 : 8} fill="none" stroke={skill.color}
                strokeWidth="1" opacity={0.3} className="pulse-ring" />
            </g>
          );
        })}
      </svg>

      {/* Floating skill nodes */}
      {SKILLS.map((skill, i) => {
        const node = getNodePos(skill);
        return (
          <div
            key={skill.id}
            className="fixed skill-node glass-card px-3 py-1.5 cursor-pointer select-none"
            style={{
              left: node.x - 60,
              top: node.y - 16,
              zIndex: 30,
              borderColor: `${skill.color}33`,
              boxShadow: hovered === skill.id ? `0 0 20px ${skill.color}66` : 'none',
              animationDelay: `${i * 0.5}s`,
              transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={() => setHovered(skill.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.label}</span>
          </div>
        );
      })}

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-7xl mx-auto px-6 pt-24 pb-12">

        {/* Left: Text */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border font-mono text-xs"
            style={{ borderColor: 'rgba(0,243,255,0.3)', color: '#00f3ff', background: 'rgba(0,243,255,0.05)' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            SYSTEM ONLINE // NEURAL-LINK v2.5
          </div>

          <h1 className="font-display font-black leading-tight mb-3" style={{ fontSize: 'clamp(2.8rem,6vw,4.5rem)' }}>
            <span style={{ color: '#fff' }}>ADITYA</span><br />
            <span className="glitch-text" data-text="KUMAR SINGH" style={{ color: '#00f3ff', textShadow: '0 0 30px rgba(0,243,255,0.6)' }}>
              KUMAR SINGH
            </span>
          </h1>

          <div className="font-mono text-lg mb-5" style={{ color: '#bc13fe' }}>
            <span style={{ color: '#64748b' }}>{'>'} </span>
            {typedText}
            <span className="cursor-blink">█</span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
            B.Tech CS @ KIIT • ML Researcher • Tata Steel Intern<br />
            Building intelligent systems that see, think, and act.<br />
            <span style={{ color: '#00f3ff' }}>DoSCI-2025</span> published researcher.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="btn-glitch px-6 py-2.5 rounded-full font-display font-bold text-sm text-black"
              style={{ background: 'linear-gradient(135deg,#00f3ff,#bc13fe)', boxShadow: '0 0 20px rgba(0,243,255,0.4)' }}>
              VIEW CASE FILES
            </a>
            <a
              href="/Aditya_CV.pdf"
              download
              className="btn-glitch px-6 py-2.5 rounded-full font-display font-bold text-sm border"
              style={{ borderColor: 'rgba(0,243,255,0.4)', color: '#00f3ff' }}
              onMouseEnter={e => { e.currentTarget.style.animation = 'glitchEffect 0.3s linear'; }}
              onMouseLeave={e => { e.currentTarget.style.animation = ''; }}
            >
              DOWNLOAD CV ↓
            </a>
          </div>

          {/* Stat ticker */}
          <div className="glass-card px-4 py-3 rounded-lg font-mono text-xs flex items-center gap-4">
            <span style={{ color: '#64748b' }}>SYS_STAT //</span>
            {STATS.map((s, i) => (
              <motion.span key={s.label}
                animate={{ opacity: statIndex === i ? 1 : 0.2, scale: statIndex === i ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
                style={{ color: s.color }}>
                {s.label}: <strong>{s.value}</strong>
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right: Profile image with HUD */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative" style={{ width: 360, height: 400 }}>
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="orbit-ring absolute rounded-full" style={{
                width: 380, height: 380,
                border: '1px dashed rgba(0,243,255,0.2)',
              }} />
              <div className="orbit-ring-reverse absolute rounded-full" style={{
                width: 320, height: 320,
                border: '1px dashed rgba(188,19,254,0.2)',
              }} />
            </div>

            {/* HUD bracket frame */}
            <div className="hud-bracket relative p-2" style={{ zIndex: 10 }}>
              <span />
              {/* Image with scroll scale */}
              <motion.div ref={imageRef} style={{ scale }} className="relative">
                <div className="relative overflow-hidden rounded-2xl" style={{
                  boxShadow: '0 0 0 2px #020510, 0 0 0 3px #00f3ff, 0 0 60px rgba(0,243,255,0.3)',
                }}>
                  <img src="/profile.png" alt="Aditya Kumar Singh"
                    className="w-72 h-80 object-cover object-top" />
                  {/* Scan overlay */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="scan-line" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,243,255,0.25),transparent)' }} />
                    {/* Holographic grid */}
                    <div className="absolute inset-0 grid-overlay opacity-20" />
                    {/* Top HUD data */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between font-mono text-xs" style={{ color: '#00f3ff' }}>
                      <span>ID:AKS_001</span>
                      <span>●REC</span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 font-mono text-xs" style={{ color: '#00f3ff' }}>
                      <div className="flex justify-between mb-1">
                        <span>CGPA: 7.78</span>
                        <span>KIIT·CS</span>
                      </div>
                      <div className="w-full h-0.5 rounded" style={{ background: 'linear-gradient(90deg,#00f3ff,#bc13fe)' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-1.5 rounded-full font-mono text-xs flex items-center gap-2"
              style={{ zIndex: 20, color: '#4ade80', borderColor: 'rgba(74,222,128,0.3)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              AVAILABLE FOR HIRE
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-xs"
        style={{ color: '#334155', zIndex: 10 }}
        animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>SCROLL_DOWN</span>
        <span>↓</span>
      </motion.div>
    </section>
  );
}
