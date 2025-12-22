// AnimatedGasfisHeader.jsx - Компонент для вашего лендинга

import React, { useEffect, useState, useRef } from 'react';

const AnimatedGasfisHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSkewed, setIsSkewed] = useState(false);
  const containerRef = useRef(null);
  const [screenSize, setScreenSize] = useState('mobile');

  useEffect(() => {
    // Определяем размер экрана
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setScreenSize('xl');
      } else if (width >= 1440) {
        setScreenSize('desktop');
      } else if (width >= 1380) {
        setScreenSize('laptop-lg');
      } else if (width >= 1024) {
        setScreenSize('laptop');
      } else if (width >= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    // Фиксим overflow принудительно
    document.body.style.setProperty('overflow-x', 'hidden', 'important');
    document.documentElement.style.setProperty('overflow-x', 'hidden', 'important');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setIsSkewed(true);
          }, 580);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[1692px] bg-[#342927] overflow-visible mx-auto"
      style={{
        height: screenSize === 'xl' ? '548px' 
          : screenSize === 'desktop' ? '548px' 
          : screenSize === 'laptop-lg' ? '520px' 
          : screenSize === 'laptop' ? '500px' 
          : screenSize === 'tablet' ? '450px' 
          : '350px'
      }}
    >
      {/* Контейнер с полосами */}
      <div className="absolute inset-0 flex gap-[clamp(10px,2.7vw,45px)] items-start justify-center">
        {[...Array(15)].map((_, index) => {
          const isHighlight = index === 11;
          const height = index % 2 === 0 ? 548 : 500;
          
          return (
            <div
              key={index}
              className={`
                relative w-[clamp(16px,4.3vw,72px)]
                ${isHighlight ? `white-stripe bg-[#FFF8E9] ${isSkewed ? 'animate-skew' : ''}` : 'bg-[#F13729]'}
              `}
              style={{
                height: isHighlight ? 'clamp(90px, 20.5vw, 347px)' : `clamp(${index % 2 === 0 ? '138px' : '124px'}, ${index % 2 === 0 ? '32.4vw' : '29.6vw'}, ${height}px)`,
                transformOrigin: 'top',
                opacity: isVisible ? 1 : 0,
                transform: `scaleY(${isVisible ? 1 : 0})`,
                transition: 'opacity 580ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 580ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                zIndex: index % 2 === 0 ? 20 : 5,
              }}
            />
          );
        })}
      </div>

      {/* Заголовок CASES */}
      <h1 
        className={`
          cases-title
          absolute left-1/2
          font-normal text-[#FFF8E9]
          uppercase z-10
          transition-all duration-1000 delay-[800ms]
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}
        style={{
          fontFamily: '"Erica One", cursive',
          fontWeight: 400,
          fontSize: 'clamp(68px, calc(60px + (316px - 60px) * ((100vw - 320px) / (1920px - 320px))), 316px)',
          letterSpacing: 'clamp(21.6px, calc(21.6px + (94.8px - 21.6px) * ((100vw - 320px) / (1920px - 320px))), 94.8px)',
          paddingLeft: 'clamp(12px, 5.6vw, 94.8px)',
          top: screenSize === 'xl' ? '100%' 
            : screenSize === 'desktop' ? '86%' 
            : screenSize === 'laptop-lg' ? '88%' 
            : screenSize === 'laptop' ? '70%' 
            : screenSize === 'tablet' ? '56%' 
            : '40%',
        }}
      >
        CASES
      </h1>

      {/* Стили */}
      <style>{`
        .cases-title {
          transform: translate(-50%, -50%) !important;
        }
        
        /* Анимация наклона белой полосы с bounce */
        @keyframes skewBounce {
          0% {
            transform: scaleY(1) skewX(0deg);
          }
          100% {
            transform: scaleY(1) skewX(5deg);
          }
        }
        
        .white-stripe.animate-skew {
          animation: skewBounce 1212ms cubic-bezier(0.68, -0.6, 0.32, 1.6) 580ms forwards;
        }
      `}</style>
    </div>
  );
};

export default AnimatedGasfisHeader;