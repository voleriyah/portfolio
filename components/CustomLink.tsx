import Link from 'next/link';
import Image from 'next/image';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  showExternalIcon?: boolean;
  className?: string;
  fontSize?: string; // Optional font size override (default: 32px)
}

export default function CustomLink({
  href,
  children,
  showExternalIcon = false,
  className = '',
  fontSize = 'text-[32px]',
}: CustomLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
  const shouldShowIcon = showExternalIcon || isExternal;

  // Use Next.js Link for internal links, regular <a> for external links
  const linkProps = {
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

  const linkContent = (
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
