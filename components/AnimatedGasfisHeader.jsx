// AnimatedGasfisHeader.jsx - Компонент для вашего лендинга

import React, { useEffect, useState } from 'react';

const AnimatedGasfisHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSkewed, setIsSkewed] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Запускаем наклон белой полосы через 0.8s после появления полос
          setTimeout(() => {
            setIsSkewed(true);
          }, 800);
        }
      },
      { threshold: 0.2 } // Запускаем когда 20% блока видно
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[1692px] bg-[#342927] overflow-visible mx-auto"
      style={{
        // Height: scales from 200px (mobile) to 548px (1920px)
        height: 'clamp(200px, calc(200px + (548px - 200px) * ((100vw - 320px) / (1920px - 320px))), 548px)',
      }}
    >
      {/* Контейнер с полосами */}
      <div className="absolute inset-0 flex gap-[clamp(10px,2.7vw,45px)] items-start justify-center">
        {[...Array(15)].map((_, index) => {
          // Белая полоса - 4-я справа = индекс 11 (15 - 4 = 11)
          const isHighlight = index === 11;
          // Чередующиеся высоты: четные индексы 548px, нечетные 500px
          const height = index % 2 === 0 ? 548 : 500;
          
          return (
            <div
              key={index}
              className={`
                relative w-[clamp(16px,4.3vw,72px)]
                ${isHighlight 
                  ? 'bg-cream' 
                  : 'bg-primary-red'
                }
              `}
              style={{
                height: isHighlight ? 'clamp(90px, 20.5vw, 347px)' : `clamp(${index % 2 === 0 ? '138px' : '124px'}, ${index % 2 === 0 ? '32.4vw' : '29.6vw'}, ${height}px)`,
                transformOrigin: 'top',
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                ? `scaleY(1) ${isHighlight ? (isSkewed ? 'skewX(5deg)' : 'skewX(0deg)') : ''}`
                : 'scaleY(0)',
              transition: isHighlight 
                ? 'opacity 0.8s ease-out, transform 0.8s ease-out'
                : 'all 0.8s ease-out',
                zIndex: index % 2 === 0 ? 20 : 5, // Четные перекрывают, нечетные под заголовком
              }}
            />
          );
        })}
      </div>

      {/* Заголовок GASFIS */}
      <h1 
        className={`
          absolute left-1/2
          font-normal text-[#FFF8E9]
          uppercase z-10
          transition-all duration-1000 delay-[800ms]
          top-[65%] lg:top-[99%]
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}
        style={{
          fontFamily: '"Erica One", cursive',
          fontWeight: 400,
          //top: 'clamp(26%, 4vw + 22%, 98%)',
          transform: 'translate(-50%, -50%)',
          overflowX: 'hidden',
     
          // Font size: scales from 72px at 320px to 316px at 1920px (benchmark)
          fontSize: 'clamp(68px, calc(60px + (316px - 60px) * ((100vw - 320px) / (1920px - 320px))), 316px)',
          // Letter spacing: scales from 21.6px at 320px to 94.8px at 1920px (benchmark) - proportional to font size
          letterSpacing: 'clamp(21.6px, calc(21.6px + (94.8px - 21.6px) * ((100vw - 320px) / (1920px - 320px))), 94.8px)',
          //textAlign: 'justify',
          paddingLeft: 'clamp(20px, 5.6vw, 94.8px)',
        }}
      >
        CASES
      </h1>

      {/* Google Fonts для Erica One */}
      <link
        href="https://fonts.googleapis.com/css2?family=Erica+One&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default AnimatedGasfisHeader;
