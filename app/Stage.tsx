'use client';

import { useEffect, useRef } from 'react';

// Макеты нарисованы на фиксированных холстах (десктоп 1440×1024, мобильный 393×852)
// и масштабируются под экран.
export default function Stage({
  width,
  height,
  fit,
  children,
}: {
  width: number;
  height: number;
  fit: 'contain' | 'width';
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apply = () => {
      const wrap = wrapRef.current;
      const stage = stageRef.current;
      if (!wrap || !stage) return;
      const byWidth = window.innerWidth / width;
      const scale = fit === 'width' ? byWidth : Math.min(byWidth, window.innerHeight / height);
      stage.style.transform = `scale(${scale})`;
      wrap.style.width = `${width * scale}px`;
      wrap.style.height = `${height * scale}px`;
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [width, height, fit]);

  return (
    <div className="stage-wrap" ref={wrapRef}>
      <div className="stage" ref={stageRef} style={{ width, height }}>
        {children}
      </div>
    </div>
  );
}
