// Макеты нарисованы на фиксированных холстах (десктоп 1440×1024, мобильный 393×852).
// Масштаб считается чистым CSS (без JS): --s = min(ширина экрана / ширина холста,
// высота экрана / видимая высота холста). Используем `zoom`, а не transform: scale —
// тогда текст и векторные картинки пересчитываются по итоговому размеру и остаются
// чёткими (transform растягивает уже отрисованный слой, особенно на анимированной
// бегущей строке). Размер не зависит от pinch-zoom: vw/svh привязаны к layout viewport.
import type { CSSProperties } from 'react';

export default function Stage({
  width,
  height,
  cropTop = 0,
  cropBottom = 0,
  children,
}: {
  width: number;
  height: number;
  cropTop?: number;
  cropBottom?: number;
  children: React.ReactNode;
}) {
  const visibleH = height - cropTop - cropBottom;
  // tan(atan2(a, b)) = a / b — способ получить безразмерное число из двух длин
  const scale = `min(tan(atan2(100vw, ${width}px)), tan(atan2(100svh, ${visibleH}px)))`;
  const wrapStyle = {
    '--s': scale,
    width: `calc(${width} * var(--s) * 1px)`,
    height: `calc(${visibleH} * var(--s) * 1px)`,
  } as CSSProperties;
  const stageStyle = { width, height, top: -cropTop } as CSSProperties;

  return (
    <div className="stage-wrap" style={wrapStyle}>
      <div className="stage" style={stageStyle}>
        {children}
      </div>
    </div>
  );
}
