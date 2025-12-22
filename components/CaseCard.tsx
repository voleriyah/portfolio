'use client';

import React, { useState, useEffect } from 'react';
import MainButton from './MainButton';
import Image from 'next/image';

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
  desktopImageStyle?: React.CSSProperties;
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
  desktopImageSrc,
  desktopImageAlt = 'Desktop case image',
  desktopImageStyle,
  buttonText = 'View case',
  onButtonClick,
  className = '',
}: CaseCardProps) {
  const [buttonSize, setButtonSize] = useState<'large' | 'small'>('small');
  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      setButtonSize(width >= 1024 ? 'large' : 'small');
      setIsDesktop(width >= 1024);
    };
    
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return (
    <div className={`flex flex-col items-start relative ${className}`}>
      {/* Desktop Image - Visible only on desktop (>=1024px) */}
      {desktopImageSrc && (
        <Image
          src={desktopImageSrc}
          alt={desktopImageAlt}
          width={1920}
          height={391}
          className="absolute pointer-events-none z-10"
          priority={false}
          suppressHydrationWarning
          style={{
            display: isDesktop === true ? 'block' : 'none',
            width: '356px',
            height: '720px',
            flexShrink: 0,
            left: '594px',
            top: '50%',
            transform: 'translateY(-50%)',
            ...desktopImageStyle,
          }}
        />
      )}
      
      {/* Tags text - Above the card */}
      {tags && (
        <div
          style={{
            maxWidth: 'clamp(100%, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
            marginBottom: '32px',
            marginRight: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 1024px) / (1920px - 1024px))), 0px)',
          }}
        >
          <p
            className="font-bold lg:font-extrabold"
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
        className={`relative flex flex-col items-start ${className}`}
        style={{
          width: 'clamp(100%, calc(100% + (358px - 100%) * ((100vw - 320px) / (1024px - 320px))), clamp(358px, calc(358px + (994px - 358px) * ((100vw - 1024px) / (1920px - 1024px))), 994px))',
          maxWidth: '100%',
          boxSizing: 'border-box',
          height: 'clamp(auto, calc(400px + (460px - 400px) * ((100vw - 1024px) / (1920px - 1024px))), 460px)',
          minHeight: 'clamp(400px, calc(400px + (460px - 400px) * ((100vw - 1024px) / (1920px - 1024px))), 460px)',
          paddingTop: 'clamp(35px, calc(35px + (44px - 35px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
          paddingRight: 'clamp(24px, calc(24px + (44px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
          paddingBottom: 'clamp(35px, calc(35px + (44px - 35px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
          paddingLeft: 'clamp(24px, calc(24px + (44px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 44px)',
          gap: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 1024px) / (1920px - 1024px))), 48px)',
          border: '3px solid var(--main-red-accent, #F62F20)',
        }}
      >
      {/* iPhone Image - Visible on mobile/tablet (<1024px), hidden on desktop */}
      {phoneImageSrc && (
        <Image
          src={phoneImageSrc}
          alt={phoneImageAlt}
          width={300}
          height={600}
          className="absolute pointer-events-none z-10 lg:hidden"
          style={{
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
          maxWidth: 'clamp(460px, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
          alignSelf: 'stretch',
          color: 'var(--main-white, #FFF8E9)',
          fontFamily: '"Alegreya Sans"',
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
          maxWidth: 'clamp(460px, calc(100% + (300px - 100%) * ((100vw - 1024px) / (1920px - 1024px))), 300px)',
          color: 'var(--main-white, #FFF8E9)',
          textAlign: 'left',
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
            height: 'clamp(469px, calc(469px + (600px - 469px) * ((100vw - 320px) / (1024px - 320px))), 600px)',
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