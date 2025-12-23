'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import AnimatedContainerLine from './AnimatedContainerLine';

interface VerticalConnectorLineProps {
  align?: 'left' | 'right';
  hideOnMobile?: boolean;
  color?: string;
  showDiamond?: boolean;
}

export default function VerticalConnectorLine({ 
  align = 'left',
  hideOnMobile = false,
  color = '#F62F20',
  showDiamond = true,
}: VerticalConnectorLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const [showLine, setShowLine] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const isInView = useInView(lineRef, { 
    once: true,
    amount: 0.1,
  });

  useEffect(() => {
    const updateScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateScreen();
    window.addEventListener('resize', updateScreen);
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowLine(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div 
      ref={lineRef}
      className={`w-full mx-auto relative ${hideOnMobile ? 'hidden lg:block' : ''}`}
      style={{
        maxWidth: '1692px',
        height: 'clamp(230px, calc(230px + (432px - 230px) * ((100vw - 320px) / (1920px - 320px))), 432px)',
      }}
    >
      {showLine && (
        <div
          className="absolute top-0 h-full w-[3px]"
          style={{
            left: isDesktop && align === 'left' ? 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)' : !isDesktop ? '16px' : 'auto',
            right: isDesktop && align === 'right' ? 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)' : 'auto',
            zIndex: 0,
          }}
        >
          <AnimatedContainerLine 
            position={isDesktop && align === 'right' ? 'right' : 'left'} 
            showCaption={false} 
            diamondStopAt="bottom"
            color={color}
            showDiamond={showDiamond}
          />
        </div>
      )}
    </div>
  );
}