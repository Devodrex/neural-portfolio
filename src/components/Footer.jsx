import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t py-8 text-center" style={{ borderColor: 'rgba(0,243,255,0.08)' }}>
      <div className="font-mono text-xs" style={{ color: '#334155' }}>
        <span style={{ color: '#00f3ff' }}>AKS</span>{' // NEURAL-LINK PORTFOLIO // BUILT WITH '}
        <span style={{ color: '#ff2d78' }}>♥</span>{' AND FRAMER MOTION // '}
        <span style={{ color: '#bc13fe' }}> 2025</span>
      </div>
      <div className="font-mono text-xs mt-1" style={{ color: '#1e293b' }}>
        SYSTEM UPTIME: 99.9% // ALL MODULES OPERATIONAL
      </div>
    </footer>
  );
}
