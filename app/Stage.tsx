// Макеты нарисованы на фиксированных холстах (десктоп 1440×1024, мобильный 393×852).
// Все размеры внутри слайда заданы как calc(N * var(--u)), где --u = «1px холста».
// Масштаб --u задаётся ОДИН раз на обёртке (см. .desktop-stage / .mobile-stage в globals.css):
//   min(ширина экрана / ширина холста, высота экрана / видимая высота холста).
// Никакого JS, transform и zoom: браузер вёрстает всё сразу в итоговом размере,
// поэтому текст чёткий, а pinch-zoom и поворот ничего не ломают.
import type { CSSProperties } from 'react';

export default function Stage({
  variant,
  width,
  height,
  cropTop = 0,
  cropBottom = 0,
  children,
}: {
  variant: 'desktop' | 'mobile';
  width: number;
  height: number;
  cropTop?: number;
  cropBottom?: number;
  children: React.ReactNode;
}) {
  const visibleH = height - cropTop - cropBottom;
  const u = (n: number) => `calc(${n} * var(--u))`;
  const wrapStyle = { width: u(width), height: u(visibleH) } as CSSProperties;
  const stageStyle = { width: u(width), height: u(height), top: u(-cropTop) } as CSSProperties;
  return (
    <div className={`stage-wrap ${variant}-stage`} style={wrapStyle}>
      <div className="stage" style={stageStyle}>
        {children}
      </div>
    </div>
  );
}
