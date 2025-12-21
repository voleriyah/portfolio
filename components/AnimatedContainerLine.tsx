'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedContainerLineProps {
  position?: 'left' | 'right' | 'responsive';
  showCaption?: boolean;
  diamondStopAt?: 'middle' | 'bottom';
  gap?: number;
  color?: string;
}

export default function AnimatedContainerLine({ 
  position = 'right', 
  showCaption = true, 
  diamondStopAt = 'bottom',
  gap = 64,
  color = '#342927'
}: AnimatedContainerLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    once: true,
    amount: 0.1,
  });

  // Responsive positioning: right on mobile, left on desktop
  const getPositionStyle = () => {
    if (position === 'responsive') {
      return {}; // Use Tailwind classes for responsive positioning
    }
    return position === 'left' 
      ? { left: `${gap}px`, right: 'auto' }
      : { right: `${gap}px`, left: 'auto' };
  };

  const stopPosition = diamondStopAt === 'middle' ? '50%' : 'calc(100% - 5px)';

  const positionStyle = position === 'responsive' 
    ? {} 
    : getPositionStyle();

  return (
    <div 
      ref={containerRef} 
      className={`absolute top-0 w-[3px] pointer-events-none z-10 ${position === 'responsive' ? 'right-[44px] lg:right-auto lg:left-[44px]' : ''}`}
      style={{ 
        height: '100%',
        ...positionStyle,
      }}
    >
      {/* Vertical Line */}
      <motion.div 
        className="absolute top-0 left-0 w-full"
        style={{ 
          height: '100%',
          backgroundColor: color,
          transformOrigin: 'top',
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ 
          duration: 1.5, 
          ease: [0.25, 0.1, 0.25, 1], // Custom ease-out curve for smoother animation
        }}
      />
      
      {/* Sliding Diamond */}
      <motion.div
        className="absolute left-1/2 w-4 h-4"
        style={{
          backgroundColor: color,
        }}
        style={{
          transform: 'translateX(-50%) rotate(45deg)',
        }}
        initial={{ top: 0, opacity: 0 }}
        animate={isInView ? { top: stopPosition, opacity: 1 } : { top: 0, opacity: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.3, 
          ease: "easeOut" 
        }}
      />
      
      {/* Text - vertical writing mode, positioned 124px from top, 2 lines */}
      {showCaption && (
      <motion.div
        className="absolute left-1/2"
        style={{
          top: 0,
          // Margin top: scales from 80px at 320px to 124px at 1920px (benchmark)
          marginTop: 'clamp(80px, calc(80px + (124px - 80px) * ((100vw - 320px) / (1920px - 320px))), 124px)',
          transform: 'translateX(-50%)',
          transformOrigin: 'center',
          // Padding left: scales from 24px at 320px to 32px at 1920px (benchmark)
          paddingLeft: 'clamp(24px, calc(24px + (32px - 24px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
          // Padding right: scales from 28px at 320px to 38px at 1920px (benchmark)
          paddingRight: 'clamp(28px, calc(28px + (38px - 28px) * ((100vw - 320px) / (1920px - 320px))), 38px)',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ 
          duration: 1.5, 
          ease: [0.25, 0.1, 0.25, 1], // Custom ease-out curve for smoother animation
          delay: 0.75 
        }}
      >
                <span 
                  className="font-alegreya font-bold text-dark-brown text-lg lg:text-[27px] tracking-vertical-sm lg:tracking-vertical-lg"
                  style={{ 
                    fontFamily: '"Alegreya Sans"',
                    fontStyle: 'normal',
                    lineHeight: 'normal',
                  }}
                >
                  Backed with 15 years<br />
                  of experience
                </span>
      </motion.div>
      )}
    </div>
  );
}
