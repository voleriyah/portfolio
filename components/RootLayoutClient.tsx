'use client';

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import StartScreen from '@/components/StartScreen';

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isUnsupportedBrowser, setIsUnsupportedBrowser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    
    // Check for Firefox (any version)
    const isFirefox = /Firefox/.test(userAgent);
    
    // Check for Safari < 18 (Version/17 or lower)
    const safariMatch = userAgent.match(/Version\/(\d+)/);
    const isSafariOld = safariMatch && parseInt(safariMatch[1]) < 18;
    
    if (isFirefox || isSafariOld) {
      setIsUnsupportedBrowser(true);
    }
  }, []);

  if (isUnsupportedBrowser) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#1E1E1E',
        color: '#FFF8E9',
        padding: '32px',
        fontFamily: 'var(--font-alegreya)',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 800,
          marginBottom: '24px',
          color: '#F62F20',
        }}>
          Browser Not Supported
        </h1>
        <p style={{
          fontSize: '24px',
          marginBottom: '32px',
          maxWidth: '600px',
        }}>
          This website requires Safari 18+ or Chrome for best experience.
        </p>
        <p style={{
          fontSize: '18px',
          opacity: 0.7,
        }}>
          Please update your browser or use Chrome to view this portfolio.
        </p>
      </div>
    );
  }

  return (
    <StartScreen>
      <Header />
      {children}
    </StartScreen>
  );
}
