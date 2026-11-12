'use client';

import { useEffect, useRef } from 'react';

// Макет нарисован на холсте 1440×1024. Масштабируем его под ширину экрана.
const DESIGN_W = 1440;
const DESIGN_H = 1024;

export default function Stage({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      const wrap = wrapRef.current;
      const stage = stageRef.current;
      if (!wrap || !stage) return;
      const scale = Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H);
      stage.style.transform = `scale(${scale})`;
      wrap.style.width = `${DESIGN_W * scale}px`;
      wrap.style.height = `${DESIGN_H * scale}px`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return (
    <div className="stage-wrap" ref={wrapRef}>
      <div className="stage" ref={stageRef}>
        {children}
      </div>
    </div>
  );
}
