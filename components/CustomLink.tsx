import Link from 'next/link';
import Image from 'next/image';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  showExternalIcon?: boolean;
  iconType?: 'linkedin' | 'email' | null;
  className?: string;
  fontSize?: string; // Optional font size override (default: 32px)
  variant?: 'default' | 'footer'; // Variant for different styling
}

export default function CustomLink({
  href,
  children,
  showExternalIcon = false,
  iconType = null,
  className = '',
  fontSize = 'text-[32px]',
  variant = 'default',
}: CustomLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
  const shouldShowIcon = showExternalIcon || isExternal;

  // Get icon source based on iconType
  const getIconSrc = () => {
    if (iconType === 'linkedin') return '/images/icons/linkedin.svg';
    if (iconType === 'email') return '/images/icons/email.svg';
    return null;
  };

  const iconSrc = getIconSrc();

  // Default styling (red underline)
  const defaultLinkProps = {
    className: `font-alegreya ${fontSize} font-bold text-primary-red underline 
      tracking-[0.32px] decoration-solid ${className}`,
    style: {
      color: 'var(--main-red-accent, #F62F20)',
      textDecorationLine: 'underline' as const,
      textDecorationStyle: 'solid' as const,
      textDecorationSkipInk: 'auto' as const,
      textDecorationThickness: 'auto' as const,
      textUnderlineOffset: 'auto' as const,
      textUnderlinePosition: 'from-font' as const,
    },
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
  };

  // Footer variant styling (cream color, no underline)
  const footerLinkProps = {
    className: `flex items-center gap-3 hover:opacity-80 transition-opacity ${className}`,
    style: {
      color: 'var(--main-red-accent, #F62F20)',
      fontFamily: '"Alegreya Sans", sans-serif',
      fontSize: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
      fontWeight: 700,
      textDecoration: 'none',
    },
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
  };

  const linkProps = variant === 'footer' ? footerLinkProps : defaultLinkProps;

  const linkContent = variant === 'footer' ? (
    <>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconType === 'linkedin' ? 'LinkedIn' : 'Email'}
          width={44}
          height={44}
          className="flex-shrink-0"
          style={{
            width: 'clamp(32px, calc(32px + (44px - 32px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
            height: 'clamp(32px, calc(32px + (44px - 32px) * ((100vw - 320px) / (1920px - 320px))), 44px)',
          }}
        />
      )}
      <span>{children}</span>
      {shouldShowIcon && (
        <Image
          src="/images/external.svg"
          alt="External link"
          width={24}
          height={24}
          className="flex-shrink-0"
          style={{
            width: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
            height: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
          }}
        />
      )}
    </>
  ) : (
    <span className="inline-flex items-center gap-2">
      {children}
      {shouldShowIcon && (
        <Image
          src="/images/external.svg"
          alt="External link"
          width={24}
          height={24}
          className="inline-block flex-shrink-0"
        />
      )}
    </span>
  );

  if (isExternal) {
    return (
      <a href={href} {...linkProps}>
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href} {...linkProps}>
      {linkContent}
    </Link>
  );
}
