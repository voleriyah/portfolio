// AnimatedGasfisHeader.jsx - Компонент для вашего лендинга

import React, { useEffect, useState } from 'react';

const AnimatedGasfisHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
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
                  ? 'bg-gradient-to-br from-[#f5f0e8] to-[#ebe5dc]' 
                  : 'bg-[#F13729]'
                }
              `}
              style={{
                height: isHighlight ? 'clamp(90px, 20.5vw, 347px)' : `clamp(${index % 2 === 0 ? '138px' : '124px'}, ${index % 2 === 0 ? '32.4vw' : '29.6vw'}, ${height}px)`,
                transformOrigin: 'top',
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? `translateY(0) scaleY(1) ${isHighlight ? 'skewX(5deg)' : ''}`
                  : 'translateY(-100%) scaleY(0)',
                transition: `all 0.8s ease-out ${index * 0.05}s`,
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
          top-[65%] lg:top-[98%]
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}
        style={{
          fontFamily: '"Erica One", cursive',
          fontWeight: 400,
          //top: 'clamp(26%, 4vw + 22%, 98%)',
          transform: 'translate(-50%, -50%)',
     
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
