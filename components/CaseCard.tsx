'use client';

import React, { useState, useEffect } from 'react';
import MainButton from './MainButton';
import Image from 'next/image';

interface CaseCardProps {
  size?: 'large' | 'small';
  title: string;
  description: string;
  tags?: string; // Hashtags or tags text above the card
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
  tags,
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
    <div className={`flex flex-col items-start ${className}`}>
      {/* Tags text - Above the card */}
      {tags && (
        <div
          style={{
            maxWidth: 'clamp(100%, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
            marginBottom: '32px',
            // Right margin: 16px on mobile/tablet, scales to 0px on desktop
            marginRight: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 1024px) / (1920px - 1024px))), 0px)',
          }}
        >
          <p
            className="font-bold lg:font-extrabold"
            style={{
              color: '#FFF8E9',
              fontFamily: '"Alegreya Sans"',
              // Font size: scales from 18px (mobile) to 24px (1920px)
              fontSize: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
              fontStyle: 'normal',
              lineHeight: 'normal',
              // Letter spacing: scales from -0.18px (mobile) to -0.24px (1920px)
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
        className={`relative flex flex-col items-start ${className}`}
        style={{
          // Mobile & Tablet (<1024px): 100% width (small card), Desktop (>=1024px): scales from 358px to 994px (1920px)
          width: 'clamp(100%, calc(100% + (358px - 100%) * ((100vw - 320px) / (1024px - 320px))), clamp(358px, calc(358px + (994px - 358px) * ((100vw - 1024px) / (1920px - 1024px))), 994px))',
          maxWidth: '100%', // Prevent overflow on mobile/tablet
          boxSizing: 'border-box',
          // Height: small card on mobile/tablet, scales to large card on desktop
          height: 'clamp(auto, calc(400px + (460px - 400px) * ((100vw - 1024px) / (1920px - 1024px))), 460px)',
          minHeight: 'clamp(400px, calc(400px + (460px - 400px) * ((100vw - 1024px) / (1920px - 1024px))), 460px)',
          // Padding: small card (35px 24px) on mobile/tablet, scales to large card (44px) on desktop
          paddingTop: 'clamp(35px, calc(35px + (44px - 35px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
          paddingRight: 'clamp(24px, calc(24px + (44px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
          paddingBottom: 'clamp(35px, calc(35px + (44px - 35px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
          paddingLeft: 'clamp(24px, calc(24px + (44px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
          // Gap: small card (32px) on mobile/tablet, scales to large card (48px) on desktop
          gap: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 1024px) / (1920px - 1024px))), 48px)',
          border: '3px solid var(--main-red-accent, #F62F20)',
        }}
      >
      {/* iPhone Image - Positioned on top of card - Visible on mobile/tablet (<1024px), hidden on desktop */}
      {phoneImageSrc && (
        <Image
          src={phoneImageSrc}
          alt={phoneImageAlt}
          width={300}
          height={600}
          className="absolute pointer-events-none z-10 lg:hidden"
          style={{
            // Left position: center on mobile/tablet
            left: '50%',
            top: 'clamp(-100px, calc(-100px + (-60px - -100px) * ((100vw - 320px) / (1024px - 320px))), -60px)',
            transform: 'translateX(-50%)',
            width: 'auto',
            height: 'clamp(200px, calc(200px + (300px - 200px) * ((100vw - 320px) / (1024px - 320px))), 300px)',
            objectFit: 'contain',
          }}
        />
      )}
      {/* Title */}
      <h3
        style={{
          // Max-width: 300px at 1920px desktop (fixed to avoid iPhone image intersection), full width on mobile/tablet
          maxWidth: 'clamp(460px, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
          alignSelf: 'stretch',
          color: 'var(--main-white, #FFF8E9)',
          fontFamily: '"Alegreya Sans"',
          // Font size: small card (32px) on mobile/tablet, scales to large card (48px) on desktop
          fontSize: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 1024px) / (1920px - 1024px))), 48px)',
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
          // Max-width: 300px at 1920px desktop (fixed to avoid iPhone image intersection), full width on mobile/tablet
          maxWidth: 'clamp(460px, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
          color: 'var(--main-white, #FFF8E9)',
          textAlign: 'left',
          fontFamily: '"Alegreya Sans"',
          // Font size: small card (20px) on mobile/tablet, scales to large card (32px) on desktop
          fontSize: 'clamp(20px, calc(20px + (32px - 20px) * ((100vw - 1024px) / (1920px - 1024px))), 32px)',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        {description}
      </p>

      {/* Button - Aligned left, with 32px gap before image on mobile/tablet */}
      <div
        className="w-full lg:w-auto"
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

      {/* Image Container - Visible on mobile/tablet (<1024px), hidden on desktop */}
      {imageSrc && (
        <div
          className="flex flex-col justify-center items-center self-stretch lg:hidden"
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
    </div>
  );
}

