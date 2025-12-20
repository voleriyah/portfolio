'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from './Logo';
import CustomLink from './CustomLink';

// Menu items configuration
const menuItems = [
  { label: 'cases', href: '#cases', external: false },
  { label: 'about', href: '#about', external: false },
  { label: 'my leadership', href: '#my-leadership', external: false },
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
      className="w-full bg-dark-bg flex items-center justify-center flex-shrink-0 relative z-[55]"
      style={{
        // Scales from 92px at mobile to 124px at 1920px+
        // Using viewport units: 124px at 1920px = 6.458vw, but needs to scale from 92px minimum
        height: 'clamp(92px, calc(92px + (124px - 92px) * ((100vw - 320px) / (1920px - 320px))), 124px)',
      }}>
      {/* Responsive Container: adaptive width and padding, centered for >1920px */}
      <div 
        className="w-full max-w-full lg:max-w-[1920px] 2xl:mx-auto flex items-center justify-between relative"
        style={{
          // Vertical padding: scales from 16px at mobile to 38px at 1920px
          paddingTop: 'clamp(16px, calc(16px + (38px - 16px) * ((100vw - 320px) / (1920px - 320px))), 38px)',
          paddingBottom: 'clamp(16px, calc(16px + (38px - 16px) * ((100vw - 320px) / (1920px - 320px))), 38px)',
          // Horizontal padding: scales from 16px at mobile to 72px at 1920px
          paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
          paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
          boxSizing: 'border-box',
        }}>
        
        {/* Logo - Left side with responsive margin - applies at >1024px */}
        <div 
          className="flex items-center flex-shrink-0 lg:block hidden"
          style={{
            // Margin: 0 below 1024px, scales to 48px at 1920px
            // Formula: (vw - 1024) * (48 / (1920 - 1024)), clamped to 0-48px
            marginLeft: 'clamp(0px, calc((100vw - 1024px) * (48px / 896px)), 48px)',
          }}>
          <Logo />
        </div>
        {/* Mobile Logo - visible on mobile/tablet */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 lg:hidden">
          <Logo />
        </div>

        {/* Desktop Menu - Right side with responsive gap, visible at >1024px */}
        <nav 
          className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-auto lg:flex-shrink-0"
          style={{
            // Gap between menu items: 24px at 1024px, scales to 48px at 1920px
            // Base 24px + scaling: 24 + (vw - 1024) * (24 / 896)
            gap: 'clamp(24px, calc(24px + (100vw - 1024px) * (24px / 896px)), 48px)',
            // Right margin: 0 at 1024px, scales to 48px at 1920px
            marginRight: 'clamp(0px, calc((100vw - 1024px) * (48px / 896px)), 48px)',
          }}>
          {menuItems.map((item) => (
            <CustomLink
              key={item.label}
              href={item.href}
              showExternalIcon={item.external}
              fontSize="text-[16px] lg:text-[18px] xl:text-[20px]"
              className="whitespace-nowrap hover:text-cream transition-colors"
            >
              {item.label.toUpperCase()}
            </CustomLink>
          ))}
        </nav>

        {/* Mobile Menu Button - Visible only on mobile/tablet (<1024px) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 flex-shrink-0 transition-transform hover:scale-105 active:scale-95 relative z-[60]"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {/* Animated Burger Icon */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            {/* Top line (cream) - moves down after 0.2s, then rotates to -45deg simultaneously with bottom to form symmetric cross */}
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
            {/* Middle line (red) - moves up to top position smoothly (0.2s), becomes horizontal red line */}
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
            {/* Bottom line (cream) - moves up and rotates to 45deg simultaneously with top line after 0.2s delay to form symmetric cross */}
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
                transition: 'transform 0.2s ease-in-out, fill 0.2s ease-in-out, transform-origin 0.2s ease-in-out',
                transitionDelay: isMobileMenuOpen ? '0.2s' : '0s',
              }}
            />
          </svg>
        </button>

        {/* Mobile Menu Overlay - Full screen overlay on mobile/tablet (<1024px) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-cream z-50 lg:hidden overflow-y-auto">
            {/* Menu content */}
            <nav className="flex flex-col items-start justify-start min-h-screen px-4 sm:px-6 md:px-8 py-8 pt-8 gap-[64px]">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="font-erica text-[36px] font-normal leading-[44px] text-dark-bg uppercase
                    hover:opacity-70 transition-opacity
                    text-left w-full"
                  style={{
                    marginTop: index === 0 ? '72px' : undefined,
                  }}
                  style={{
                    color: '#1E1E1E',
                    textAlign: 'left',
                    fontFamily: 'var(--font-erica)',
                    fontSize: '36px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '44px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label.toUpperCase()}
                  {/* Don't show external icon on mobile for any items */}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
