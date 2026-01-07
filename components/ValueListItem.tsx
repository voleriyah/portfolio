'use client';

import React from 'react';

interface ValueListItemProps {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
  color?: string;
}

export default function ValueListItem({
  number,
  title,
  subtitle,
  description,
  className = '',
  color = 'var(--main-medium-gray, #342927)',
}: ValueListItemProps) {
  return (
    <div
      className={`flex flex-col ${className}`}
      style={{
        width: '100%',
        maxWidth: '1692px',
        paddingRight: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 320px) / (768px - 320px))), 0px)',
        boxSizing: 'border-box',
      }}
    >
      {/* Number - Full width at top */}
      <span
        style={{

          color: color,
          fontFamily: '"Alegreya Sans"',
          fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)',
          width: '100%',
          marginBottom: 'clamp(8px, calc(8px + (16px - 8px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
        }}
      >
        {number}
      </span>

      {/* Title and Subtitle row - Aligned horizontally at top */}
      <div
        className="flex flex-col xl:flex-row items-start xl:items-start"
        style={{
          gap: 'clamp(0px, calc(0px + (350px - 0px) * ((100vw - 1280px) / (1920px - 1280px))), 350px)',
          width: '100%',
        }}
      >
        {/* Title */}
        <h3
          className="font-black xl:font-extrabold xl:w-[520px]"
          style={{
            color: color,
            fontFamily: '"Alegreya Sans"',
            fontSize: 'clamp(32px, calc(32px + (56px - 32px) * ((100vw - 320px) / (1920px - 320px))), 56px)',
            fontStyle: 'normal',
            paddingBottom: 'clamp(16px, calc(8px + (16px - 8px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
            lineHeight: 'normal',
            letterSpacing: 'clamp(0px, calc(0px + (-0.64px - 0px) * ((100vw - 320px) / (1920px - 320px))), -0.64px)',
            flexShrink: 0,
          }}
        >
          {title}
        </h3>

        {/* Subtitle and Description column */}
        <div className="flex-1 flex flex-col">
          {/* Subtitle */}
          {subtitle && (
            <p
              style={{
                color: color,
                fontFamily: '"Alegreya Sans"',
                fontSize: 'clamp(20px, calc(20px + (36px - 20px) * ((100vw - 320px) / (1920px - 320px))), 36px)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                maxWidth: '640px',
                letterSpacing: 'clamp(0px, calc(0px + (-0.44px - 0px) * ((100vw - 320px) / (1920px - 320px))), -0.44px)',
                textAlign: 'left',
                marginBottom: 'clamp(8px, calc(8px + (16px - 8px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
              }}
            >
              {subtitle}
            </p>
          )}
          
          {/* Description */}
          <p
            className="font-bold lg:font-normal"
            style={{
              color: color,
              fontFamily: '"Alegreya Sans"',
              fontSize: 'clamp(20px, calc(20px + (36px - 20px) * ((100vw - 320px) / (1920px - 320px))), 36px)',
              fontStyle: 'normal',
              lineHeight: 'normal',
              fontWeight: 400,
              letterSpacing: 'clamp(0px, calc(0px + (-0.44px - 0px) * ((100vw - 320px) / (1920px - 320px))), -0.44px)',
              textAlign: 'left',
              whiteSpace: 'pre-line',
              maxWidth: '640px',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}