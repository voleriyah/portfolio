'use client';

import React, { useState, useEffect, useRef } from 'react';
import AnimatedContainerLine from '@/components/AnimatedContainerLine';
import { motion, useInView } from 'framer-motion';
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
  desktopImageWidth?: number;
  desktopImageHeight?: number;
  desktopImageStyle?: React.CSSProperties;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  align?: 'left' | 'right';
  showVerticalLine?: boolean; // Показывать ли вертикальную линию
  showHorizontalLine?: boolean; // Показывать ли горизонтальную линию
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
  showVerticalLine = false,
  showHorizontalLine = true,
}: CaseCardProps) {
  const [buttonSize, setButtonSize] = useState<'large' | 'small'>('small');
  const [isDesktop, setIsDesktop] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(cardContainerRef, { 
    once: true,
    amount: 0.9,
  });

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      setButtonSize(width >= 1024 ? 'large' : 'small');
      setIsDesktop(width >= 1024 && width <= 1920);
    };
    
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return (
    <div className={`flex flex-col items-start relative w-full ${align === 'right' ? 'xl:items-end' : ''} ${className}`}>
      {/* Desktop Image */}
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
      
      {/* Tags */}
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
        ref={cardContainerRef}
        className="relative flex flex-col items-start w-full xl:w-[994px]"
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
        {/* Phone Image */}
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

        {/* Mobile Image Container */}
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
      
      {/* Horizontal Animated Line + Vertical Line */}
      {isDesktop && (
        <>
          {/* Horizontal Line */}
          {showHorizontalLine && (
            <motion.div
              className="h-[3px] w-full absolute bottom-0"
              style={{
                backgroundColor: 'var(--main-red-accent, #F62F20)',
                transformOrigin: align === 'right' ? 'right' : 'left',
                zIndex: 0,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          )}
          
          {/* Vertical Line - идёт ВВЕРХ от конца горизонтальной линии */}
          {showVerticalLine && (
            <div
              className="absolute"
              style={{
                left: align === 'left' ? 0 : 'auto',
                right: align === 'right' ? 0 : 'auto',
                bottom: '3px', // Начинается от конца горизонтальной линии (3px высота)
                height: 'clamp(194px, calc(194px + (388px - 194px) * ((100vw - 1024px) / (1920px - 1024px))), 388px)', // Padding между карточками
                zIndex: 0,
              }}
            >
              <AnimatedContainerLine 
                position={align === 'left' ? 'left' : 'right'} 
                showCaption={false} 
                diamondStopAt="bottom" 
                color="#F62F20"
              />
            </div>
          )}
        </>
      )}
      
      {/* Mobile Vertical Lines - только вертикальные по левому краю на <1024px */}
      {!isDesktop && showVerticalLine && (
        <div
          className="absolute left-0"
          style={{
            bottom: '3px',
            height: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1024px - 320px))), 194px)',
            zIndex: 0,
          }}
        >
          <AnimatedContainerLine 
            position="left" 
            showCaption={false} 
            diamondStopAt="bottom" 
            color="#F62F20"
          />
        </div>
      )}
    </div>
  );
}