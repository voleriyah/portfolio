'use client';

import React from 'react';
import Image from 'next/image';

interface RisksProps {
  number: string;
  riskDescription: string;
  mitigationStrategy: string;
  outcome: string;
}

export default function Risks({ number, riskDescription, mitigationStrategy, outcome }: RisksProps) {
  return (
    <div
      className="flex flex-col justify-start items-center flex-shrink-0 w-full"
      style={{
        minHeight: 'clamp(467px, calc(467px + (785px - 467px) * ((100vw - 320px) / (1920px - 320px))), 785px)',
        paddingTop: '24px',
        paddingRight: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 48px)',
        paddingBottom: '24px',
        paddingLeft: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 48px)',
        gap: 'clamp(16px, calc(16px + (32px - 16px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
        border: '3px solid var(--main-red-accent, #F62F20)',
        background: '#1E1E1E',
      }}
    >
      {/* Number */}
      <span
        style={{
          color: '#FFF8E9',
          textAlign: 'center',
          fontFamily: '"Erica One", cursive',
          fontSize: 'clamp(36px, calc(36px + (56px - 36px) * ((100vw - 320px) / (1920px - 320px))), clamp(40px, 2.92vw, 56px))',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          textTransform: 'uppercase',
        }}
      >
        {number}.
      </span>

      {/* Risk Description */}
      <p
        style={{
          color: '#FFF8E9',
          textAlign: 'center',
          fontFamily: '"Alegreya Sans", sans-serif',
          fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), clamp(22px, 1.67vw, 32px))',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), clamp(-0.22px, -0.017vw, -0.32px))',
        }}
      >
        {riskDescription}
      </p>

      {/* Arrow Down Image */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="/images/arrow-down.svg"
          alt="Arrow down"
          width={44}
          height={44}
          style={{
            width: 'clamp(32px, calc(32px + (44px - 32px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
            height: 'clamp(32px, calc(32px + (44px - 32px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
          }}
        />
      </div>

      {/* Mitigation Strategy */}
      <p
        style={{
          color: '#FFF8E9',
          textAlign: 'center',
          fontFamily: '"Alegreya Sans", sans-serif',
          fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), clamp(22px, 1.67vw, 32px))',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), clamp(-0.22px, -0.017vw, -0.32px))',
        }}
      >
        {mitigationStrategy}
      </p>

      {/* Equal Sign */}
      <span
        style={{
          color: '#FFF8E9',
          textAlign: 'center',
          fontFamily: '"Alegreya Sans", sans-serif',
          fontSize: 'clamp(28px, calc(28px + (42px - 28px) * ((100vw - 320px) / (1920px - 320px))), clamp(32px, 2.19vw, 42px))',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: 'clamp(-0.28px, calc(-0.28px + (-0.42px - -0.28px) * ((100vw - 320px) / (1920px - 320px))), clamp(-0.32px, -0.022vw, -0.42px))',
        }}
      >
        =
      </span>

      {/* Outcome */}
      <p
        style={{
          color: '#FFF8E9',
          textAlign: 'center',
          fontFamily: '"Alegreya Sans", sans-serif',
          fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), clamp(22px, 1.67vw, 32px))',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), clamp(-0.22px, -0.017vw, -0.32px))',
        }}
      >
        {outcome}
      </p>
    </div>
  );
}

