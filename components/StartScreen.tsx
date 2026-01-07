'use client';

import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';

interface StartScreenProps {
  children?: ReactNode;
}

export default function StartScreen({ children }: StartScreenProps) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [stage, setStage] = useState(0);
  const [logoScale, setLogoScale] = useState(1);
  const [circleScale, setCircleScale] = useState(0);

  // First mount effect
  useEffect(() => {
    setMounted(true);
    
    // Check visited immediately on mount
    if (typeof window !== 'undefined') {
      const visited = localStorage.getItem('portfolio-visited');
      if (visited === 'yes') {
        setShowContent(true);
      } else {
        setShow(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted || !show) {
      return;
    }
    
    setTimeout(() => setLogoScale(1.3), 200);       // +10% через 200ms
    setTimeout(() => setLogoScale(1), 600);         // обратно через 400ms
    setTimeout(() => setLogoScale(1.5), 1000);      // +10% снова через 400ms
    setTimeout(() => setLogoScale(1.3), 1400);        // обратно через 400ms
    
    // Пауза 100ms
    
    // Основная анимация (начинается с 1500ms)
    setTimeout(() => setStage(1), 1500);            // было 100, +1400
    setTimeout(() => setLogoScale(1.7), 1932);      // было 532, +1400 (было 1.2, теперь +50%)
    setTimeout(() => setStage(2), 2300);            // было 900, +1400
    setTimeout(() => setLogoScale(2.55), 2732);     // было 1332, +1400 (было 1.44, теперь 1.5*1.5)
    setTimeout(() => setStage(3), 3100);            // было 1700, +1400
    setTimeout(() => setLogoScale(3.825), 3532);    // было 2132, +1400 (было 1.728, теперь 2.25*1.5)
    setTimeout(() => setCircleScale(1), 3732);      // начало сразу после анимации ромбов (3100 + 632ms transition)
    
    setTimeout(() => {
      setShow(false);
      setShowContent(true);
      localStorage.setItem('portfolio-visited', 'yes');
    }, 5732);                                       // 3732 + 2000ms (circle transition)
  }, [mounted, show]);

  return (
    <>
      {!mounted ? null : (
        <>
          {show && (
        <div 
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: '#F62F20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Top Welcome */}
          <div 
            className="subtitle-l"
            style={{
              position: 'absolute',
              top: '64px',
              left: '0',
              right: '0',
              textAlign: 'center',
              zIndex: 100,
            }}
          >
            Welcome
          </div>

          {/* Темный овал под логотипом - OUTSIDE wrapper */}
          {show && (
            <div style={{
              position: 'absolute',
              width: '280px',
              height: '200px',
              borderRadius: '50%',
              backgroundColor: '#1E1E1E',
              transform: `scale(${circleScale === 1 ? 15 : 0})`,
              transition: 'transform 2s cubic-bezier(0.33, 1, 0.68, 1)',
              zIndex: 5,
            }} />
          )}

          {/* Scaling wrapper */}
          <div style={{
            transform: 'scale(min(1, (100vw - 48px) / 1400px))',
            transformOrigin: 'center center',
            padding: '0 24px',
            position: 'relative',
            zIndex: 10,
          }}>

            <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            
            {/* Левые ромбы */}
            <div style={{ 
              position: 'absolute',
              left: '-600px',
              width: '29px', 
              height: '29px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: `translateX(${stage >= 3 ? '600px' : '0'}) rotate(45deg)`,
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }} />
            
            <div style={{ 
              position: 'absolute',
              left: '-450px',
              width: '38px', 
              height: '38px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: `translateX(${stage >= 2 ? '450px' : '0'}) rotate(45deg)`,
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }} />
            
            <div style={{ 
              position: 'absolute',
              left: '-300px',
              width: '64px', 
              height: '64px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: `translateX(${stage >= 1 ? '300px' : '0'}) rotate(45deg)`,
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }} />

            {/* Логотип */}
            <div style={{ 
              position: 'relative', 
              zIndex: 20,
              transform: `scale(${logoScale})`,
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
              <Image src="/images/start.svg" alt="Logo" width={200} height={200} />
            </div>

            {/* Правые ромбы */}
            <div style={{ 
              position: 'absolute',
              right: '-300px',
              width: '64px', 
              height: '64px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: `translateX(${stage >= 1 ? '-300px' : '0'}) rotate(45deg)`,
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }} />
            
            <div style={{ 
              position: 'absolute',
              right: '-450px',
              width: '38px', 
              height: '38px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: `translateX(${stage >= 2 ? '-450px' : '0'}) rotate(45deg)`,
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }} />
            
            <div style={{ 
              position: 'absolute',
              right: '-600px',
              width: '29px', 
              height: '29px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: `translateX(${stage >= 3 ? '-600px' : '0'}) rotate(45deg)`,
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }} />
          </div>
          </div>

          {/* Bottom Welcome */}
          <div 
            className="subtitle-l"
            style={{
              position: 'absolute',
              bottom: '64px',
              left: '0',
              right: '0',
              textAlign: 'center',
              zIndex: 100,
            }}
          >
            Welcome
          </div>
        </div>
          )}
          
          {showContent && children}
        </>
      )}
    </>
  );
}