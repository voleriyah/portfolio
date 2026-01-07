'use client';

import React from 'react';
import Image from 'next/image';
import CustomLink from './CustomLink';

interface FooterProps {
  marginTop?: string;
}

export default function Footer({ marginTop }: FooterProps) {
  return (
    <footer 
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
          
          <div 
            className="flex flex-col lg:flex-row items-start"
            style={{
              gap: 'clamp(32px, calc(32px + (64px - 32px) * ((100vw - 768px) / (1920px - 768px))), 64px)',
            }}
          >
            <CustomLink href="https://www.linkedin.com/in/voleriyah" iconType="linkedin" variant="footer" showExternalIcon={true}>
              Connect
            </CustomLink>
            <CustomLink href="mailto:valeriya.kostyuchenko@gmail.com" iconType="email" variant="footer" showExternalIcon={true}>
              E-mail
            </CustomLink>
            <CustomLink href="https://t.me/voleriyah" iconType="telegram" variant="footer"  showExternalIcon={true}>Telegram</CustomLink>
          </div>

          <p
            style={{
              color: '#FFF8E9',
              fontFamily: '"Alegreya Sans", sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 'normal',
              marginTop: '120px',
            }}
          >
            © 2026 Valeriya Kostyuchenko. All rights reserved.
          </p>
        </div>
      </div>

      {/* Pattern Image - СЛЕВА за контейнером */}
      <div className="hidden lg:block absolute top-0 left-0 w-1/2 h-full">
        <Image
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
      </div>

      {/* Pattern на мобиле */}
      <div className="lg:hidden w-full">
        <Image src="/images/pattern.svg" alt="Pattern" width={987} height={974} className="w-full h-auto" />
      </div>
    </footer>
  );
}

