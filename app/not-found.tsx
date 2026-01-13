'use client';

import Link from 'next/link';
import MainButton from '@/components/MainButton';

export default function NotFound() {
  return (
    <main 
      className="min-h-screen bg-dark-bg flex items-center justify-center"
      style={{
        padding: 'clamp(16px, calc(16px + (144px - 16px) * ((100vw - 320px) / (1920px - 320px))), 144px)',
      }}
    >
      <div 
        className="flex flex-col items-center justify-center"
        style={{
          gap: 'clamp(32px, calc(32px + (64px - 32px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
          maxWidth: '100%',
          textAlign: 'center',
        }}
      >
        {/* Title: 404 */}
        <h1 
          className="font-erica uppercase"
          style={{
            color: '#F62F20',
            fontFamily: '"Erica One"',
            fontSize: 'clamp(40px, calc(40px + (108px - 40px) * ((100vw - 320px) / (1920px - 320px))), 108px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'clamp(72px, calc(72px + (147px - 72px) * ((100vw - 320px) / (1920px - 320px))), 147px)',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          404
        </h1>

        {/* Subtitle */}
        <p 
          style={{
            color: 'var(--main-white, #FFF8E9)',
            fontFamily: '"Alegreya Sans"',
            fontSize: 'clamp(20px, calc(20px + (34px - 20px) * ((100vw - 320px) / (1920px - 320px))), 34px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            textTransform: 'uppercase',
            margin: 0,
            maxWidth: '800px',
          }}
        >
          The page you are looking for cannot be found
        </p>

        {/* MainButton */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <MainButton>
            Go to the main page
          </MainButton>
        </Link>
      </div>
    </main>
  );
}
