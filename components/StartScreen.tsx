'use client';

import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';

interface StartScreenProps {
  children?: ReactNode;
}

export default function StartScreen({ children }: StartScreenProps) {
  const [show, setShow] = useState(true); // ALWAYS TRUE on first render
  const [showContent, setShowContent] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showDiamonds, setShowDiamonds] = useState(false);
  const [stage, setStage] = useState(0);
  const [logoScale, setLogoScale] = useState(1);
  const [circleScale, setCircleScale] = useState(0);

  useEffect(() => {
    // Check if already visited AFTER mount
    if (typeof window !== 'undefined') {
      const visited = localStorage.getItem('portfolio-visited');
      if (visited === 'yes') {
        setShow(false);
        setShowContent(true);
        return;
      }
    }
    
    // Fade-in animations
    setTimeout(() => setShowWelcome(true), 200);     // Welcome через 200ms
    setTimeout(() => setShowDiamonds(true), 850);    // Ромбы через 650ms после Welcome (200+650)
    setTimeout(() => setShowLogo(true), 1300);       // Логотип через 450ms после ромбов (850+450)
    
    // Пульсация логотипа (начинается сразу с ромбами = 1300ms)
    setTimeout(() => setLogoScale(1.3), 1300);
    setTimeout(() => setLogoScale(1), 1700);
    setTimeout(() => setLogoScale(1.5), 2100);
    setTimeout(() => setLogoScale(1.3), 2500);
    
    // Пауза 100ms
    
    // Основная анимация (начинается с 2600ms)
    setTimeout(() => setStage(1), 2600);
    setTimeout(() => setLogoScale(1.7), 3032);
    setTimeout(() => setStage(2), 3400);
    setTimeout(() => setLogoScale(2.55), 3832);
    setTimeout(() => setStage(3), 4200);
    setTimeout(() => setLogoScale(3.825), 4632);
    setTimeout(() => setCircleScale(1), 4832);
    
    setTimeout(() => {
      setShow(false);
      setShowContent(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-visited', 'yes');
      }
    }, 6832);
  }, []);

  return (
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
              opacity: showWelcome ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out',
            }}
          >
            Welcome
          </div>

          {/* Темный овал под логотипом */}
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

          {/* Scaling wrapper */}
          <div style={{
            transform: 'scale(min(1, (100vw - 48px) / 1400px))',
            transformOrigin: 'center center',
            padding: '0 24px',
            position: 'relative',
            zIndex: 10,
            opacity: showLogo ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out',
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
              transform: stage >= 3 ? `translateX(600px) rotate(45deg)` : 'rotate(45deg)',
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-in-out',
              opacity: showDiamonds ? 1 : 0,
            }} />
            
            <div style={{ 
              position: 'absolute',
              left: '-450px',
              width: '38px', 
              height: '38px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: stage >= 2 ? `translateX(450px) rotate(45deg)` : 'rotate(45deg)',
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-in-out',
              opacity: showDiamonds ? 1 : 0,
            }} />
            
            <div style={{ 
              position: 'absolute',
              left: '-300px',
              width: '64px', 
              height: '64px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: stage >= 1 ? `translateX(300px) rotate(45deg)` : 'rotate(45deg)',
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-in-out',
              opacity: showDiamonds ? 1 : 0,
            }} />

            {/* Логотип */}
            <div style={{ 
              position: 'relative', 
              zIndex: 20,
              transform: `scale(${logoScale})`,
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
              <Image src="/images/start.svg" alt="Logo" width={200} height={200} priority />
            </div>

            {/* Правые ромбы */}
            <div style={{ 
              position: 'absolute',
              right: '-300px',
              width: '64px', 
              height: '64px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: stage >= 1 ? `translateX(-300px) rotate(45deg)` : 'rotate(45deg)',
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-in-out',
              opacity: showDiamonds ? 1 : 0,
            }} />
            
            <div style={{ 
              position: 'absolute',
              right: '-450px',
              width: '38px', 
              height: '38px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: stage >= 2 ? `translateX(-450px) rotate(45deg)` : 'rotate(45deg)',
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-in-out',
              opacity: showDiamonds ? 1 : 0,
            }} />
            
            <div style={{ 
              position: 'absolute',
              right: '-600px',
              width: '29px', 
              height: '29px', 
              borderRadius: '16px', 
              backgroundColor: '#1E1E1E',
              transform: stage >= 3 ? `translateX(-600px) rotate(45deg)` : 'rotate(45deg)',
              transition: 'transform 0.632s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-in-out',
              opacity: showDiamonds ? 1 : 0,
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
              opacity: showWelcome ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out',
            }}
          >
            Welcome
          </div>
        </div>
      )}
      
      {showContent && children}
    </>
  );
}