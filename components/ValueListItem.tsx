'use client';

import React from 'react';

interface ValueListItemProps {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
}

export default function ValueListItem({
  number,
  title,
  subtitle,
  description,
  className = '',
}: ValueListItemProps) {
  return (
    <div
      className={`flex flex-col ${className}`}
      style={{
        // Width: 100% on mobile (fits screen with padding), scales to 1692px (1920px desktop)
        width: 'clamp(100%, calc(100% + (1692px - 100%) * ((100vw - 320px) / (1920px - 320px))), 1692px)',
        // Padding on mobile: 16px left and right
       // paddingLeft: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 320px) / (768px - 320px))), 0px)',
        paddingRight: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 320px) / (768px - 320px))), 0px)',
        boxSizing: 'border-box',
      }}
    >
      {/* Number - Full width at top */}
      <span
        style={{
          color: 'var(--main-medium-gray, #342927)',
          fontFamily: '"Alegreya Sans"',
          // Font size: scales from 18px (mobile) to 32px (1920px desktop)
          fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          // Letter spacing: scales from -0.18px (mobile) to -0.32px (1920px desktop)
          letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)',
          width: '100%',
          marginBottom: 'clamp(8px, calc(8px + (16px - 8px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
        }}
      >
        {number}
      </span>

      {/* Title and Subtitle row - Aligned horizontally at top */}
      <div
        className="flex flex-col md:flex-row items-start md:items-start"
        style={{
          // Gap between title and subtitle: scales from 0px (mobile) to 350px (1920px desktop)
          gap: 'clamp(0px, calc(0px + (350px - 0px) * ((100vw - 768px) / (1920px - 768px))), 350px)',
          width: '100%',
        }}
      >
        {/* Title */}
        <h3
          className="font-black lg:font-extrabold"
          style={{
            color: 'var(--main-medium-gray, #342927)',
            minWidth: '500px',
            fontFamily: '"Alegreya Sans"',
            // Font size: scales from 32px (mobile) to 64px (1920px desktop)
            fontSize: 'clamp(32px, calc(32px + (64px - 32px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
            fontStyle: 'normal',
            paddingBottom: 'clamp(16px, calc(8px + (16px - 8px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
            lineHeight: 'normal',
            // Letter spacing: scales from 0px (mobile) to -0.64px (1920px desktop)
            letterSpacing: 'clamp(0px, calc(0px + (-0.64px - 0px) * ((100vw - 320px) / (1920px - 320px))), -0.64px)',
          }}
        >
          {title}
        </h3>

        {/* Subtitle and Description column */}
        <div className="flex-1 flex flex-col" >
          {/* Subtitle */}
          {subtitle && (
            <p
              style={{
                color: '#342927',
                fontFamily: '"Alegreya Sans"',
                // Font size: scales from 20px (mobile) to 44px (1920px desktop)
                fontSize: 'clamp(20px, calc(20px + (44px - 20px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                width: 'clamp(320px, calc(320px + (640px - 320px) * ((100vw - 320px) / (1920px - 320px))), 640px)',

                // Letter spacing: scales from 0px (mobile) to -0.44px (1920px desktop)
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
              color: '#342927',
              fontFamily: '"Alegreya Sans"',
              // Font size: scales from 20px (mobile) to 44px (1920px desktop)
              fontSize: 'clamp(20px, calc(20px + (44px - 20px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
              fontStyle: 'normal',
              lineHeight: 'normal',
              fontWeight: 400,
              // Letter spacing: scales from 0px (mobile) to -0.44px (1920px desktop)
              letterSpacing: 'clamp(0px, calc(0px + (-0.44px - 0px) * ((100vw - 320px) / (1920px - 320px))), -0.44px)',
              textAlign: 'left',
              whiteSpace: 'pre-line',
              minWidth: '300px',
              width: 'clamp(320px, calc(320px + (640px - 320px) * ((100vw - 320px) / (1920px - 320px))), 640px)',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

