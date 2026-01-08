'use client';

import React, { useState, useEffect, useRef } from 'react';
import ShimmerImage from './ShimmerImage';
import CustomLink from './CustomLink';
import { motion } from 'framer-motion';

interface FooterProps {
  marginTop?: string;
}

export default function Footer({ marginTop }: FooterProps) {
  const [showFooterImageAndTitle, setShowFooterImageAndTitle] = useState(false);
  const [showFooterButtons, setShowFooterButtons] = useState(false);
  const [showFooterCopyright, setShowFooterCopyright] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  // Footer animation - triggered by scroll (10% visibility)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkScrollPosition = () => {
      if (!footerRef.current) return;
      
      const windowHeight = window.innerHeight;
      const rect = footerRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate visible portion
      const visibleTop = Math.max(0, -elementTop);
      const visibleBottom = Math.min(elementHeight, windowHeight - elementTop);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visiblePercentage = elementHeight > 0 ? (visibleHeight / elementHeight) * 100 : 0;
      
      // 10% visible - start animation sequence
      if (visiblePercentage >= 10 && !showFooterImageAndTitle) {
        setShowFooterImageAndTitle(true);
        // Buttons appear after 400ms
        setTimeout(() => {
          setShowFooterButtons(true);
        }, 400);
        // Copyright appears after 800ms
        setTimeout(() => {
          setShowFooterCopyright(true);
        }, 800);
      }
    };
    
    // Initial check
    checkScrollPosition();
    
    // Add scroll listener with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [showFooterImageAndTitle]);
  return (
    <footer 
      ref={footerRef}
      className="w-full bg-dark-bg relative overflow-hidden" 
      style={{ 
        marginTop: marginTop || 'clamp(72px, calc(72px + (132px - 72px) * ((130vw - 320px) / (1920px - 320px))), 132px)' 
      }}
    >
      <div
        className="w-full mx-auto flex flex-col lg:flex-row"
        style={{
          maxWidth: '1692px',
        }}
      >
        {/* Title and Links */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-start relative z-10 lg:ml-auto"
          style={{
            paddingTop: 'clamp(40px, calc(40px + (260px - 40px) * ((100vw - 320px) / (1920px - 320px))), 260px)',
            paddingLeft: 'clamp(16px, calc(16px + (64px - 16px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
            paddingRight: 'clamp(16px, calc(16px + (64px - 16px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
            paddingBottom: 'clamp(40px, calc(40px + (64px - 40px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
            gap: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showFooterImageAndTitle ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h2
              style={{
                color: '#FFF8E9',
                fontFamily: '"Erica One", cursive',
                fontSize: 'clamp(68px, calc(68px + (116px - 68px) * ((100vw - 320px) / (1920px - 320px))), 116px)',
                fontWeight: 400,
                textTransform: 'uppercase',
                lineHeight: 'normal',
              }}
            >
              Let's <br/> connect
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col lg:flex-row items-start"
            style={{
              gap: 'clamp(32px, calc(32px + (64px - 32px) * ((100vw - 768px) / (1920px - 768px))), 64px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: showFooterButtons ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <CustomLink href="https://www.linkedin.com/in/voleriyah" iconType="linkedin" variant="footer" showExternalIcon={true}>
              Connect
            </CustomLink>
            <CustomLink href="mailto:valeriya.kostyuchenko@gmail.com" iconType="email" variant="footer" showExternalIcon={true}>
              Mail
            </CustomLink>
            <CustomLink href="https://t.me/voleriyah" iconType="telegram" variant="footer"  showExternalIcon={true}>Telegram</CustomLink>
          </motion.div>

          <motion.p
            style={{
              color: '#FFF8E9',
              fontFamily: '"Alegreya Sans", sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 'normal',
              marginTop: '120px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: showFooterCopyright ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            © 2026 Valeriya Kostyuchenko. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Pattern Image - СЛЕВА за контейнером */}
      <motion.div 
        className="hidden lg:block absolute top-0 left-0 w-1/2 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: showFooterImageAndTitle ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <ShimmerImage
          src="/images/pattern.svg"
          alt="Pattern"
          width={987}
          height={974}
          className="w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'left center',
          }}
        />
      </motion.div>

      {/* Pattern на мобиле */}
      <motion.div 
        className="lg:hidden w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: showFooterImageAndTitle ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <ShimmerImage src="/images/pattern.svg" alt="Pattern" width={987} height={974} className="w-full h-auto" />
      </motion.div>
    </footer>
  );
}

