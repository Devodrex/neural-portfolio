import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  useEffect(() => {
    const move = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = (mouseX - 4) + 'px';
        dotRef.current.style.top  = (mouseY - 4) + 'px';
      }
    };

    const hoverOn = e => {
      if (e.target.closest('a,button,[role="button"]')) {
        ringRef.current?.classList.add('hovering');
      }
    };
    const hoverOff = () => ringRef.current?.classList.remove('hovering');

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', hoverOn);
    document.addEventListener('mouseout', hoverOff);

    let raf;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = (ringX - 16) + 'px';
        ringRef.current.style.top  = (ringY - 16) + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', hoverOn);
      document.removeEventListener('mouseout', hoverOff);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
