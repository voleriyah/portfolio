'use client';

import React from 'react';
import ShimmerImage from './ShimmerImage';

interface ImageContainerProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export default function ImageContainer({ 
  src, 
  alt, 
  caption, 
  width, 
  height 
}: ImageContainerProps) {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: 'clamp(320px, calc(320px + (1024px - 320px) * ((100vw - 320px) / (1920px - 320px))), 1024px)',
        paddingTop: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)',
        paddingBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)',
        paddingLeft: 'clamp(16px, calc(16px + (32px - 16px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
        paddingRight: 'clamp(16px, calc(16px + (32px - 16px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
        gap: '10px',
      }}
    >
      <div
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        <ShimmerImage
          src={src}
          alt={alt}
          width={width || 1024}
          height={height || 768}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
      {caption && (
        <p 
          className="text-l"
          style={{
            marginTop: '24px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

