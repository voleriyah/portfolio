'use client';

import React, { useState, useEffect } from 'react';
import MainButton from './MainButton';
import Image from 'next/image';

interface CaseCardProps {
  size?: 'large' | 'small';
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  phoneImageSrc?: string;
  phoneImageAlt?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function CaseCard({
  size = 'large',
  title,
  description,
  imageSrc,
  imageAlt = 'Case image',
  phoneImageSrc,
  phoneImageAlt = 'Phone image',
  buttonText = 'View case',
  onButtonClick,
  className = '',
}: CaseCardProps) {
  // Responsive: scales from small (320px) to large (1920px)
  // At mobile (320px): small card dimensions
  // At desktop (1920px): large card dimensions
  const [buttonSize, setButtonSize] = useState<'large' | 'small'>('small');

  useEffect(() => {
    const updateButtonSize = () => {
      setButtonSize(window.innerWidth >= 1024 ? 'large' : 'small');
    };
    
    updateButtonSize();
    window.addEventListener('resize', updateButtonSize);
    return () => window.removeEventListener('resize', updateButtonSize);
  }, []);

  return (
    <div
      className={`relative flex flex-col items-start ${className}`}
      style={{
        // Width: scales from 358px (mobile) to 994px (1920px)
        width: 'clamp(358px, calc(358px + (994px - 358px) * ((100vw - 320px) / (1920px - 320px))), 994px)',
        // Height: scales from auto (mobile) to 460px (1920px)
        height: 'clamp(auto, calc(400px + (460px - 400px) * ((100vw - 320px) / (1920px - 320px))), 460px)',
        minHeight: 'clamp(400px, calc(400px + (460px - 400px) * ((100vw - 320px) / (1920px - 320px))), 460px)',
        // Padding: scales from 35px 24px (mobile) to 44px (1920px)
        paddingTop: 'clamp(35px, calc(35px + (44px - 35px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
        paddingRight: 'clamp(24px, calc(24px + (44px - 24px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
        paddingBottom: 'clamp(35px, calc(35px + (44px - 35px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
        paddingLeft: 'clamp(24px, calc(24px + (44px - 24px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
        // Gap: scales from 32px (mobile) to 48px (1920px)
        gap: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)',
        border: '3px solid var(--main-red-accent, #F62F20)',
      }}
    >
      {/* iPhone Image - Positioned on top of card - Hidden on desktop (1024px+) */}
      {phoneImageSrc && (
        <Image
          src={phoneImageSrc}
          alt={phoneImageAlt}
          width={300}
          height={600}
          className="absolute pointer-events-none z-10 md:hidden"
          style={{
            // Left position: scales from mobile to 594px at tablet
            left: 'clamp(20px, calc(20px + (594px - 20px) * ((100vw - 320px) / (1024px - 320px))), 594px)',
            top: '-100px', // Position on top of the card
            width: 'auto',
            height: 'clamp(200px, calc(200px + (400px - 200px) * ((100vw - 320px) / (1024px - 320px))), 400px)',
            objectFit: 'contain',
          }}
        />
      )}
      {/* Title */}
      <h3
        style={{
          // Max-width: 300px at 1920px desktop (fixed to avoid iPhone image intersection), full width on mobile
          maxWidth: 'clamp(100%, calc(100% + (300px - 100%) * ((100vw - 320px) / (1920px - 320px))), 300px)',
          alignSelf: 'stretch',
          color: 'var(--main-white, #FFF8E9)',
          fontFamily: '"Alegreya Sans"',
          // Font size: scales from 32px (mobile) to 48px (1920px)
          fontSize: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)',
          fontStyle: 'normal',
          fontWeight: 900,
          lineHeight: 'normal',
          textAlign: 'left',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          // Max-width: 300px at 1920px desktop (fixed to avoid iPhone image intersection), full width on mobile
          maxWidth: 'clamp(100%, calc(100% + (300px - 100%) * ((100vw - 320px) / (1920px - 320px))), 300px)',
          color: 'var(--main-white, #FFF8E9)',
          textAlign: 'left',
          fontFamily: '"Alegreya Sans"',
          // Font size: scales from 20px (mobile) to 32px (1920px)
          fontSize: 'clamp(20px, calc(20px + (32px - 20px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        {description}
      </p>

      {/* Button - Aligned left, with 32px gap before image on mobile */}
      <div
        className="w-full md:w-auto"
        style={{
          marginBottom: 'clamp(32px, calc(32px + (0px - 32px) * ((100vw - 320px) / (1024px - 320px))), 0px)',
        }}
      >
        <MainButton 
          size={buttonSize}
          onClick={onButtonClick}
        >
          {buttonText}
        </MainButton>
      </div>

      {/* Image Container - Hidden on desktop (1024px+) */}
      {imageSrc && (
        <div
          className="flex flex-col justify-center items-center self-stretch md:hidden"
          style={{
            // Height: scales from 469px (mobile) to 600px (tablet)
            height: 'clamp(469px, calc(469px + (600px - 469px) * ((100vw - 320px) / (1024px - 320px))), 600px)',
            // Padding: scales from mobile padding
            paddingTop: '23.5px',
            paddingRight: '51.82px',
            paddingBottom: '25.412px',
            paddingLeft: '51px',
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={640}
            height={600}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </div>
  );
}

