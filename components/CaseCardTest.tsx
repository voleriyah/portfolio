'use client';

import React, { useState, useEffect, useRef } from 'react';
import MainButton from './MainButton';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface CaseCardProps {
  size?: 'large' | 'small';
  title: string;
  description: string;
  tags?: string;
  imageSrc?: string;
  imageAlt?: string;
  phoneImageSrc?: string;
  phoneImageAlt?: string;
  desktopImageSrc?: string;
  desktopImageAlt?: string;
  desktopImageWidth?: number;
  desktopImageHeight?: number;
  desktopImageStyle?: React.CSSProperties;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  align?: 'left' | 'right';
  animateLine?: boolean;
}

export default function CaseCard({
  size = 'large',
  title,
  description,
  tags,
  imageSrc,
  imageAlt = 'Case image',
  phoneImageSrc,
  phoneImageAlt = 'Phone image',
  desktopImageSrc,
  desktopImageAlt = 'Desktop case image',
  desktopImageWidth = 356,
  desktopImageHeight = 720,
  desktopImageStyle,
  buttonText = 'View case',
  onButtonClick,
  className = '',
  align = 'left',
  animateLine,
}: CaseCardProps) {
  const [buttonSize, setButtonSize] = useState<'large' | 'small'>('small');
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });
  
  // Use animateLine prop if provided, otherwise use isInView
  const shouldAnimateLine = animateLine !== undefined ? animateLine : isInView;

  // Force animation when shouldAnimateLine changes
  useEffect(() => {
    if (lineRef.current && shouldAnimateLine) {
      console.log('Line animation triggered, align:', align);
      // Reset to ensure animation triggers
      const element = lineRef.current;
      element.style.transition = 'none';
      // For right-aligned cards, start from right (100%), for left-aligned start from left (0%)
      element.style.width = '0%';
      if (align === 'right') {
        element.style.marginLeft = 'auto';
      } else {
        element.style.marginLeft = '0';
      }
      
      // Force reflow
      element.offsetHeight;
      
      // Apply animation
      requestAnimationFrame(() => {
        console.log('Applying line animation, element:', element);
        element.style.transition = 'width 1.5s cubic-bezier(0.33, 1, 0.68, 1) 0.2s';
        element.style.width = '100%';
      });
    } else if (lineRef.current && !shouldAnimateLine) {
      // Reset when should not animate
      const element = lineRef.current;
      element.style.transition = 'none';
      element.style.width = '0%';
      if (align === 'right') {
        element.style.marginLeft = 'auto';
      } else {
        element.style.marginLeft = '0';
      }
    }
  }, [shouldAnimateLine, align]);

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      setButtonSize(width >= 1024 ? 'large' : 'small');
    };
    
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return (
    <div className={`flex ${align === 'right' ? 'flex-row-reverse' : 'flex-row'} items-end relative w-full ${className}`}>
      {/* Desktop Image - Visible only on desktop (>=1280px) */}
      {desktopImageSrc && (
        <Image
          src={desktopImageSrc}
          alt={desktopImageAlt}
          width={desktopImageWidth}
          height={desktopImageHeight}
          className="hidden xl:block absolute pointer-events-none z-10"
          style={{
            width: `${desktopImageWidth}px`,
            height: `${desktopImageHeight}px`,
            flexShrink: 0,
            left: align === 'left' ? '594px' : 'auto',
            right: align === 'right' ? '594px' : 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
            ...desktopImageStyle,
          }}
        />
      )}
      
      {/* Left Column: Tags + Card */}
      <div className="flex flex-col w-full xl:w-[994px]">
        {/* Tags text - Above the card */}
        {tags && (
          <div
            className={align === 'right' ? 'xl:self-end' : ''}
            style={{
              maxWidth: 'clamp(100%, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
              marginBottom: '32px',
              marginRight: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 1024px) / (1920px - 1024px))), 0px)',
            }}
          >
            <p
              className={`font-bold xl:font-extrabold ${align === 'right' ? 'text-left xl:text-right' : 'text-left'}`}
              style={{
                color: '#FFF8E9',
                fontFamily: '"Alegreya Sans"',
                fontSize: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.24px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.24px)',
                whiteSpace: 'pre-line',
              }}
            >
              {tags}
            </p>
          </div>
        )}

        {/* Card Container */}
        <div
          className="relative flex flex-col items-start w-full"
          style={{
            boxSizing: 'border-box',
            minHeight: 'clamp(400px, calc(400px + (460px - 400px) * ((100vw - 1024px) / (1920px - 1024px))), 460px)',
            paddingTop: 'clamp(35px, calc(35px + (44px - 35px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
            paddingRight: 'clamp(24px, calc(24px + (44px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
            paddingBottom: 'clamp(35px, calc(35px + (44px - 35px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
            paddingLeft: 'clamp(24px, calc(24px + (44px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
            gap: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 1024px) / (1920px - 1024px))), 48px)',
            border: '3px solid var(--main-red-accent, #F62F20)',
          }}
        >
          {/* iPhone Image - Visible on mobile/tablet (<1280px), hidden on desktop */}
          {phoneImageSrc && (
            <Image
              src={phoneImageSrc}
              alt={phoneImageAlt}
              width={300}
              height={600}
              className="xl:hidden w-auto"
              style={{
                height: 'auto',
                maxWidth: '50%',
                objectFit: 'contain',
                marginTop: '44px',
              }}
            />
          )}
          
          {/* Title */}
          <h3
            className={align === 'right' ? 'text-left xl:text-right xl:self-end' : 'text-left'}
            style={{
              maxWidth: 'clamp(460px, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
              color: 'var(--main-white, #FFF8E9)',
              fontFamily: '"Alegreya Sans"',
              fontSize: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 1024px) / (1920px - 1024px))), 48px)',
              fontStyle: 'normal',
              fontWeight: 900,
              lineHeight: 'normal',
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={align === 'right' ? 'text-left xl:text-right xl:self-end' : 'text-left'}
            style={{
              maxWidth: 'clamp(460px, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
              color: 'var(--main-white, #FFF8E9)',
              fontFamily: '"Alegreya Sans"',
              fontSize: 'clamp(20px, calc(20px + (32px - 20px) * ((100vw - 1024px) / (1920px - 1024px))), 32px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            {description}
          </p>

          {/* Button */}
          <div className={`w-full xl:w-auto ${align === 'right' ? 'xl:self-end' : ''}`}>
            <MainButton 
              size={buttonSize}
              onClick={onButtonClick}
            >
              {buttonText}
            </MainButton>
          </div>

          {/* Image Container - Visible on mobile/tablet (<1280px), hidden on desktop */}
          {imageSrc && (
            <div
              className="flex flex-col justify-center items-center self-stretch xl:hidden"
              style={{
                width: '100%',
                marginTop: '44px',
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={640}
                height={600}
                style={{
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Horizontal Line Column (hidden on mobile) */}
      <div className="hidden xl:block flex-1" style={{ minWidth: '0', width: '100%' }}>
        <div 
          ref={lineRef}
          className="h-[3px] bg-[#F62F20]"
          style={{
            width: '0%',
            height: '3px',
            display: 'block',
            backgroundColor: '#F62F20',
            minWidth: '0',
            marginLeft: align === 'right' ? 'auto' : '0',
          }}
        />
      </div>
    </div>
  );
}