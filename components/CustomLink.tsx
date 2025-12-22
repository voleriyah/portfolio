import Link from 'next/link';
import Image from 'next/image';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  iconType?: 'linkedin' | 'email' | 'internal' | null;
  showExternalIcon?: boolean;
  className?: string;
  variant?: 'default' | 'footer';
}

export default function CustomLink({
  href,
  children,
  iconType = null,
  showExternalIcon = false,
  className = '',
  variant = 'default',
}: CustomLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');

  // Get icon source based on iconType
  const getIconSrc = () => {
    if (iconType === 'linkedin') return '/images/icons/linkedin.svg';
    if (iconType === 'email') return '/images/icons/email.svg';
    if (iconType === 'internal') return '/images/icons/internal.svg';
    return null;
  };

  const iconSrc = getIconSrc();
  
  // Get alt text for icon
  const getIconAlt = () => {
    if (iconType === 'linkedin') return 'LinkedIn';
    if (iconType === 'email') return 'Email';
    if (iconType === 'internal') return 'Internal link';
    return 'Icon';
  };

  // Default styling (red underline)
  const defaultLinkProps = {
    className: `font-alegreya font-bold text-primary-red underline tracking-[0.32px] decoration-solid ${className}`,
    style: {
      color: 'var(--main-red-accent, #F62F20)',
      fontSize: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
      fontWeight: 700,
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

  // Footer variant styling
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
      {/* Left side icons (linkedin, email) */}
      {iconSrc && iconType !== 'internal' && (
        <Image
          src={iconSrc}
          alt={getIconAlt()}
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
      {/* Right side internal icon */}
      {iconType === 'internal' && (
        <Image
          src="/images/icons/internal.svg"
          alt="Internal link"
          width={24}
          height={24}
          className="flex-shrink-0"
          style={{
            width: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
            height: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
          }}
        />
      )}
      {/* Right side external icon */}
      {showExternalIcon && (
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
      {/* Right side internal icon */}
      {iconType === 'internal' && (
        <Image
          src="/images/icons/internal.svg"
          alt="Internal link"
          width={24}
          height={24}
          className="inline-block flex-shrink-0"
          style={{
            width: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
            height: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
          }}
        />
      )}
      {/* Right side external icon */}
      {showExternalIcon && (
        <Image
          src="/images/external.svg"
          alt="External link"
          width={24}
          height={24}
          className="inline-block flex-shrink-0"
          style={{
            width: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
            height: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
          }}
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