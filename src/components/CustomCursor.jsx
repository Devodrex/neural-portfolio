import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    const move = e => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = (mouseX.current - 4) + 'px';
        dotRef.current.style.top  = (mouseY.current - 4) + 'px';
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
      ringX.current += (mouseX.current - ringX.current) * 0.13;
      ringY.current += (mouseY.current - ringY.current) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = (ringX.current - 16) + 'px';
        ringRef.current.style.top  = (ringY.current - 16) + 'px';
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
