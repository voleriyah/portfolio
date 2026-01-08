'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface VerticalConnectorLineProps {
  align?: 'left' | 'right';
  hideOnMobile?: boolean;
  color?: string;
  showDiamond?: boolean;
  animate?: boolean; // External trigger for animation
  height?: string; // Custom height, defaults to responsive clamp
}

export default function VerticalConnectorLine({ 
  align = 'left',
  hideOnMobile = false,
  color = '#F62F20',
  showDiamond = true,
  animate,
  height = 'clamp(230px, calc(230px + (432px - 230px) * ((100vw - 320px) / (1920px - 320px))), 432px)',
}: VerticalConnectorLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLine, setShowLine] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const isInView = useInView(containerRef, { 
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

  // Use external animate prop if provided, otherwise use isInView
  useEffect(() => {
    if (animate !== undefined) {
      if (animate) {
        const timer = setTimeout(() => {
          setShowLine(true);
        }, 1500);
        return () => clearTimeout(timer);
      } else {
        setShowLine(false);
      }
    } else {
      // Default behavior: запускаем линию через 1.5s ПОСЛЕ того как элемент в зоне видимости
      if (isInView) {
        const timer = setTimeout(() => {
          setShowLine(true);
        }, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [animate, isInView]);

  return (
    <div 
      ref={containerRef}
      className={`w-full mx-auto relative ${hideOnMobile ? 'hidden lg:block' : ''}`}
      style={{
        maxWidth: '1692px',
        height: height,
      }}
    >
      {showLine && (
        <div
          ref={lineRef}
          className="absolute top-0 h-full w-[3px] pointer-events-none"
          style={{
            left: align === 'left' ? 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)' : 'auto',
            right: align === 'right' ? 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)' : 'auto',
            zIndex: 0,
          }}
        >
          {/* Vertical Line */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            style={{ 
              backgroundColor: color,
              transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
          
          {/* Diamond */}
          {showDiamond && (
            <motion.div
              className="absolute left-1/2 w-4 h-4"
              style={{
                backgroundColor: color,
                transform: 'translateX(-50%) rotate(45deg)',
              }}
              initial={{ top: 0, opacity: 0 }}
              animate={{ top: 'calc(100% - 5px)', opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3, 
                ease: "easeOut" 
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}