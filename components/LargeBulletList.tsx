'use client';

import React from 'react';

interface LargeBulletListProps {
  items: string[];
  className?: string;
}

export default function LargeBulletList({ items, className = '' }: LargeBulletListProps) {
  const useColumns = items.length > 3;
  const firstColumnItems = useColumns ? items.slice(0, Math.ceil(items.length / 2)) : items;
  const secondColumnItems = useColumns ? items.slice(Math.ceil(items.length / 2)) : [];

  return (
    <div
      className={`w-full ${className}`}
      style={{
        maxWidth: useColumns ? '100%' : '600px',
        paddingLeft: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 320px) / (1920px - 320px))), 0px)',
        paddingRight: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 320px) / (1920px - 320px))), 0px)',
      }}
    >
      <div className={useColumns ? 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12' : ''}>
        {/* First Column */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {firstColumnItems.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4"
              style={{
                marginBottom: index < firstColumnItems.length - 1 ? 'clamp(24px, calc(24px + (32px - 24px) * ((100vw - 320px) / (1920px - 320px))), 32px)' : 0,
              }}
            >
              {/* Number Container */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 'clamp(54px, calc(54px + (95px - 54px) * ((100vw - 320px) / (1920px - 320px))), 95px)',
                  height: 'clamp(54px, calc(54px + (95px - 54px) * ((100vw - 320px) / (1920px - 320px))), 95px)',
                }}
              >
                {/* Number */}
                <span
                  style={{
                    color: '#F62F20',
                    textAlign: 'justify',
                    fontFamily: '"Erica One", cursive',
                    fontSize: 'clamp(36px, calc(36px + (64px - 36px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    textTransform: 'uppercase',
                  }}
                >
                  {index + 1}.
                </span>
              </div>

              {/* List Item Text */}
              <div
                className="flex-1"
                style={{
                  color: 'var(--main-white, #FFF8E9)',
                  fontFamily: '"Alegreya Sans", sans-serif',
                  fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)',
                  paddingTop: 'clamp(8px, calc(8px + (16px - 8px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
                }}
              >
                {item}
              </div>
            </li>
          ))}
        </ul>

        {/* Second Column (only if more than 3 items) */}
        {useColumns && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {secondColumnItems.map((item, index) => {
              const itemNumber = firstColumnItems.length + index + 1;
              return (
                <li
                  key={index}
                  className="flex items-start gap-4"
                  style={{
                    marginBottom: index < secondColumnItems.length - 1 ? 'clamp(24px, calc(24px + (32px - 24px) * ((100vw - 320px) / (1920px - 320px))), 32px)' : 0,
                  }}
                >
                  {/* Number Container */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 'clamp(54px, calc(54px + (95px - 54px) * ((100vw - 320px) / (1920px - 320px))), 95px)',
                      height: 'clamp(54px, calc(54px + (95px - 54px) * ((100vw - 320px) / (1920px - 320px))), 95px)',
                    }}
                  >
                    {/* Number */}
                    <span
                      style={{
                        color: '#F62F20',
                        textAlign: 'justify',
                        fontFamily: '"Erica One", cursive',
                        fontSize: 'clamp(36px, calc(36px + (64px - 36px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        textTransform: 'uppercase',
                      }}
                    >
                      {itemNumber}.
                    </span>
                  </div>

                  {/* List Item Text */}
                  <div
                    className="flex-1"
                    style={{
                      color: 'var(--main-white, #FFF8E9)',
                      fontFamily: '"Alegreya Sans", sans-serif',
                      fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)',
                      paddingTop: 'clamp(8px, calc(8px + (16px - 8px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
                    }}
                  >
                    {item}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

