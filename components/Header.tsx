'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from './Logo';
import CustomLink from './CustomLink';

// Menu items configuration
const menuItems = [
  { label: 'cases', href: '/cases', external: false },
  { label: 'about', href: '/about', external: false },
  { label: 'my leadership', href: '/leadership', external: false },
  { label: 'medium', href: 'https://voleriyah.medium.com', external: true },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className="w-full bg-dark-bg flex items-center justify-center flex-shrink-0 fixed top-0 left-0 right-0 z-[55]"
      style={{
        height: 'clamp(92px, calc(92px + (124px - 92px) * ((100vw - 320px) / (1920px - 320px))), 124px)',
      }}>
      {/* Responsive Container */}
      <div 
        className="w-full max-w-full lg:max-w-[1920px] 2xl:mx-auto flex items-center justify-between relative"
        style={{
          paddingTop: 'clamp(16px, calc(16px + (38px - 16px) * ((100vw - 320px) / (1920px - 320px))), 38px)',
          paddingBottom: 'clamp(16px, calc(16px + (38px - 16px) * ((100vw - 320px) / (1920px - 320px))), 38px)',
          paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
          paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
          boxSizing: 'border-box',
        }}>
        
        {/* Logo - Desktop */}
        <div 
          className="hidden lg:flex items-center flex-shrink-0"
          style={{
            marginLeft: 'clamp(0px, calc((100vw - 1024px) * (48px / 896px)), 48px)',
          }}>
          <Logo />
        </div>
        
        {/* Logo - Mobile */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3 flex-shrink-0 relative z-10">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <nav 
          className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-auto lg:flex-shrink-0"
          style={{
            gap: 'clamp(24px, calc(24px + (100vw - 1024px) * (24px / 896px)), 48px)',
            marginRight: 'clamp(0px, calc((100vw - 1024px) * (48px / 896px)), 48px)',
          }}>
          {menuItems.map((item) => (
            <CustomLink
              key={item.label}
              href={item.href}
              showExternalIcon={item.external}
              className="whitespace-nowrap hover:text-cream transition-colors"
            >
              {item.label.toUpperCase()}
            </CustomLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 flex-shrink-0 transition-transform hover:scale-105 active:scale-95 relative z-[60]"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          style={{
            position: isMobileMenuOpen ? 'fixed' : 'relative',
            top: isMobileMenuOpen ? 'clamp(16px, calc(16px + (38px - 16px) * ((100vw - 320px) / (1920px - 320px))), 38px)' : 'auto',
            right: isMobileMenuOpen ? 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)' : 'auto',
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <rect
              x="8"
              y="11"
              width="28"
              height="3"
              rx="1"
              fill={isMobileMenuOpen ? "#1E1E1E" : "#FFF8E9"}
              style={{
                transform: isMobileMenuOpen 
                  ? 'translateY(9.5px) rotate(-45deg)' 
                  : 'translateY(0px) rotate(0deg)',
                transformOrigin: '22px 12.5px',
                transition: 'transform 0.2s ease-in-out, fill 0.2s ease-in-out',
                transitionDelay: isMobileMenuOpen ? '0.2s' : '0s',
              }}
            />
            <rect
              x="8"
              y="20"
              width="28"
              height="3"
              rx="1"
              fill="#F62F20"
              style={{
                transform: isMobileMenuOpen 
                  ? 'translateY(-20px)' 
                  : 'translateY(0px)',
                marginBottom: isMobileMenuOpen ? '2px' : '0px',
                transition: 'transform 0.2s ease-in-out, margin-bottom 0.2s ease-in-out',
                transitionDelay: '0s',
              }}
            />
            <rect
              x="8"
              y="29"
              width="28"
              height="3"
              rx="1"
              fill={isMobileMenuOpen ? "#1E1E1E" : "#FFF8E9"}
              style={{
                transform: isMobileMenuOpen 
                  ? 'translateY(-9.5px) rotate(45deg)' 
                  : 'translateY(0px) rotate(0deg)',
                transformOrigin: '21px 30.5px',
                transition: 'transform 0.2s ease-in-out, fill 0.2s ease-in-out',
                transitionDelay: isMobileMenuOpen ? '0.2s' : '0s',
              }}
            />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-cream z-50 lg:hidden overflow-y-auto">
            {/* Header bar in overlay - same height and padding as main header */}
            <div 
              className="w-full max-w-full lg:max-w-[1920px] 2xl:mx-auto flex items-center justify-between relative"
              style={{
                height: 'clamp(92px, calc(92px + (124px - 92px) * ((100vw - 320px) / (1920px - 320px))), 124px)',
                paddingTop: 'clamp(16px, calc(16px + (38px - 16px) * ((100vw - 320px) / (1920px - 320px))), 38px)',
                paddingBottom: 'clamp(16px, calc(16px + (38px - 16px) * ((100vw - 320px) / (1920px - 320px))), 38px)',
                paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
                paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
                boxSizing: 'border-box',
              }}
            >
              {/* Logo - same position as header */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <Logo />
              </div>
            </div>

            {/* Menu content */}
            <nav className="flex flex-col items-start justify-start px-4 sm:px-6 md:px-8 py-8 gap-[64px]">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="font-erica text-[36px] font-normal leading-[44px] text-dark-bg uppercase hover:opacity-70 transition-opacity text-left w-full"
                  style={{
                    color: '#1E1E1E',
                    fontFamily: 'var(--font-erica)',
                    fontSize: '36px',
                    fontWeight: 400,
                    lineHeight: '44px',
                  }}
                >
                  {item.label.toUpperCase()}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}