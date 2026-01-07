'use client';

import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';

interface StartScreenProps {
  children?: ReactNode;
}

export default function StartScreen({ children }: StartScreenProps) {
  const [show, setShow] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [stage, setStage] = useState(0);
  const [logoScale, setLogoScale] = useState(1);
  const [circleScale, setCircleScale] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setShowContent(true);
      return;
    }
    
    const visited = localStorage.getItem('portfolio-visited');
    
    if (visited === 'yes') {
      setShowContent(true);
      return;
    }

    setShow(true);
    
    setTimeout(() => setStage(1), 100);
    setTimeout(() => setLogoScale(1.2), 532);
    setTimeout(() => setStage(2), 900);
    setTimeout(() => setLogoScale(1.44), 1332);
    setTimeout(() => setStage(3), 1700);
    setTimeout(() => setLogoScale(1.728), 2132);
    setTimeout(() => setCircleScale(1), 3000);
    
    setTimeout(() => {
      setShow(false);
      setShowContent(true);
      localStorage.setItem('portfolio-visited', 'yes');
    }, 4000);
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
      )}
      
      {showContent && children}
    </>
  );
}