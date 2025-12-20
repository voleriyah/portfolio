'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedLine() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    sectionRef.current = document.getElementById('expertise-section');
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Line scales from 0 to 1 based on scroll progress
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Text opacity: fades in when line reaches 50% (scroll progress 0.5)
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);

  if (!isMounted) return null;

  return (
    <div 
      className="absolute top-0 right-0 w-[3px] pointer-events-none z-10" 
      style={{ 
        height: '100%',
        right: 0,
      }}
    >
      {/* Vertical Line */}
      <motion.div
        className="absolute top-0 left-0 w-full"
        style={{
          height: '100%',
          backgroundColor: '#342927',
          scaleY: lineScale,
          transformOrigin: 'top',
        }}
      />
      
      {/* Diamond at bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#342927',
          opacity: lineScale,
          transform: 'translate(-50%, 50%) rotate(45deg)',
        }}
      />
      
      {/* Text - rotated 90deg, positioned at middle */}
      <motion.div
        className="absolute top-1/2 left-1/2 whitespace-nowrap"
        style={{
          opacity: textOpacity,
          transform: 'translate(-50%, -50%) rotate(90deg)',
        }}
      >
        <span className="font-alegreya text-sm font-medium" style={{ color: '#342927' }}>
          Backed with 15 years of experience
        </span>
      </motion.div>
    </div>
  );
}
