'use client';

import { useRef, ReactNode, useEffect, useState } from 'react';

interface TimelineStep {
  title: string;
  content?: ReactNode;
}

interface HorizontalTimelineProps {
  steps: TimelineStep[];
}

// Компонент для текста внутри карточки
export function TimelineCardText({ children }: { children: ReactNode }) {
  return (
    <div 
      className="text-[#342927] font-['Alegreya_Sans'] font-normal tracking-[-0.18px]"
      style={{
        fontSize: 'clamp(16px, 1.8vw, 22px)',
        lineHeight: 'normal',
      }}
    >
      {children}
    </div>
  );
}

// Компонент для заголовков внутри карточки
export function TimelineCardHeading({ children }: { children: ReactNode }) {
  return (
    <h4 
      className="text-[#342927] font-['Alegreya_Sans'] font-bold tracking-[-0.18px]"
      style={{
        fontSize: 'clamp(16px, 1.8vw, 22px)',
        lineHeight: 'normal',
      }}
    >
      {children}
    </h4>
  );
}

export default function HorizontalTimeline({ steps }: HorizontalTimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineStyles, setLineStyles] = useState({ left: 0, right: 0 });
  const [shouldStretch, setShouldStretch] = useState(false);

  // Вычисляем позицию линии и проверяем нужно ли растягивание
  useEffect(() => {
    const calculateLine = () => {
      if (scrollRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 400; // максимальная ширина карточки
        const gap = 48;
        const totalWidthNeeded = steps.length * cardWidth + (steps.length - 1) * gap;
        
        // Если карточки не заполняют контейнер - растягиваем
        const stretch = totalWidthNeeded < containerWidth;
        setShouldStretch(stretch);

        // Находим первый и последний ромб
        const firstDiamond = containerRef.current.querySelector('.timeline-step:first-child');
        const lastDiamond = containerRef.current.querySelector('.timeline-step:last-child');
        
        if (firstDiamond && lastDiamond) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const firstRect = firstDiamond.getBoundingClientRect();
          const lastRect = lastDiamond.getBoundingClientRect();
          
          const leftOffset = (firstRect.left - containerRect.left) + (firstRect.width / 2);
          const rightOffset = (containerRect.right - lastRect.right) + (lastRect.width / 2);
          
          setLineStyles({
            left: leftOffset,
            right: rightOffset
          });
        }
      }
    };

    calculateLine();
    window.addEventListener('resize', calculateLine);
    
    // Небольшая задержка для правильного расчета после рендера
    const timer = setTimeout(calculateLine, 100);
    
    return () => {
      window.removeEventListener('resize', calculateLine);
      clearTimeout(timer);
    };
  }, [steps]);

  const gap = 48;

  return (
    <div className="w-full relative px-4 sm:px-6 lg:px-8">
      {/* Scrollable container */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide pt-16"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div 
          ref={containerRef}
          className="relative mx-auto"
          style={{
            maxWidth: '1692px',
          }}
        >
          {/* Horizontal line - начинается и заканчивается в середине ромбов */}
          <div 
            className="absolute top-0 h-[3px] bg-[#F62F20]"
            style={{
              left: `${lineStyles.left}px`,
              right: `${lineStyles.right}px`,
            }}
          />

          {/* Timeline steps */}
          <div 
            className={`flex ${shouldStretch ? 'justify-between w-full' : ''}`}
            style={!shouldStretch ? { gap: `${gap}px` } : undefined}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="timeline-step relative flex flex-col items-start flex-shrink-0"
                style={{
                  width: 'clamp(295px, 23.4vw, 400px)',
                }}
              >
                {/* Diamond - выровнен по центру карточки */}
                <div 
  className="absolute top-0 left-1/2 bg-[#F62F20] border-[3px] border-[#F62F20]"
  style={{
    width: 'clamp(24px, 3vw, 32px)',
    height: 'clamp(24px, 3vw, 32px)',
    transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  }}
/>

                {/* Title - фиксированная высота для выравнивания */}
                <div 
                  className="text-center w-full"
                  style={{
                    marginTop: 'clamp(32px, 3vw, 48px)',
                    minHeight: 'clamp(50px, 7vw, 80px)',
                  }}
                >
                  <h3 
                    className="text-[#FFF8E9] font-['Alegreya_Sans'] font-bold tracking-[-0.24px]"
                    style={{
                      fontSize: 'clamp(16px, 2vw, 24px)',
                      lineHeight: 'clamp(20px, 2.5vw, 30px)',
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Card - адаптивный отступ от заголовка */}
                <div 
                  className="flex flex-col items-start gap-4 border-[3px] border-[#F62F20] bg-[#FFF8E9] p-6 w-full h-full"
                  style={{
                    minHeight: '450px',
                    marginTop: 'clamp(16px, 3vw, 48px)',
                  }}
                >
                  {step.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}