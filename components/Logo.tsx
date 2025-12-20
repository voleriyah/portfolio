import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 hover:opacity-90 transition-opacity">
      {/* Desktop Logo - L.svg - Smoothly scales from 48px (large) down to smaller sizes - visible at >1024px */}
      <div className="hidden lg:block flex-shrink-0">
        <Image
          src="/images/L.svg"
          alt="Valeriya Kostyuchenko Logo"
          width={307}
          height={48}
          priority
          className="h-auto"
          style={{ 
            width: 'auto', 
            // Fluid scaling: 48px at 1920px+ → 40px at 1024px (smooth transition)
            height: 'clamp(40px, 2.5vw + 1.5rem, 48px)',
            // Proportional width scaling: 307px at 1920px+ → 256px at 1024px
            maxWidth: 'clamp(256px, 18vw + 13rem, 307px)', 
            flexShrink: 0,
            transition: 'height 0.2s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
      {/* Mobile/Tablet Logo - M.svg - Smoothly scales from medium to small (28px-38px) - visible at <1024px */}
      <div className="block lg:hidden flex-shrink-0">
        <Image
          src="/images/M.svg"
          alt="Valeriya Kostyuchenko Logo"
          width={219}
          height={38}
          priority
          className="h-auto"
          style={{ 
            width: 'auto', 
            // Fluid scaling: 54.72px at 1024px → 40.32px at 320px (smooth transition) - 1.2x bigger from previous
            height: 'clamp(40.32px, calc((1.5vw + 1.25rem) * 1.44), 54.72px)',
            // Proportional width scaling: 315.36px at 1024px → 236.16px at 320px - 1.2x bigger from previous
            maxWidth: 'clamp(236.16px, calc((13vw + 10rem) * 1.44), 315.36px)', 
            flexShrink: 0,
            transition: 'height 0.2s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </Link>
  );
}
