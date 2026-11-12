'use client';

import { useEffect, useRef } from 'react';

// Макеты нарисованы на фиксированных холстах (десктоп 1440×1024, мобильный 393×852)
// и масштабируются под экран.
export default function Stage({
  width,
  height,
  fit,
  cropTop = 0,
  cropBottom = 0,
  children,
}: {
  width: number;
  height: number;
  fit: 'contain' | 'width';
  cropTop?: number;
  cropBottom?: number;
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apply = () => {
      const wrap = wrapRef.current;
      const stage = stageRef.current;
      if (!wrap || !stage) return;
      const visibleH = height - cropTop - cropBottom;
      const byWidth = window.innerWidth / width;
      const scale = fit === 'width' ? byWidth : Math.min(byWidth, window.innerHeight / visibleH);
      stage.style.transform = `scale(${scale})`;
      stage.style.top = `${-cropTop * scale}px`;
      // центр экрана в координатах холста — для элементов, которые центрируются по экрану
      stage.style.setProperty('--cx', `${window.innerWidth / 2 / scale}px`);
      wrap.style.width = `${width * scale}px`;
      wrap.style.height = `${visibleH * scale}px`;
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [width, height, fit, cropTop, cropBottom]);

  return (
    <div className="stage-wrap" ref={wrapRef}>
      <div className="stage" ref={stageRef} style={{ width, height }}>
        {children}
      </div>
    </div>
  );
}
