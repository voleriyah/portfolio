import React from 'react';

interface MainButtonProps {
  children: React.ReactNode;
  size?: 'large' | 'small';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function MainButton({ 
  children, 
  size = 'large', 
  onClick,
  type = 'button',
  className = ''
}: MainButtonProps) {
  const isLarge = size === 'large';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex flex-col justify-center items-center ${className}`}
      style={{
        padding: isLarge 
          ? 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)' 
          : '8px 16px',
        gap: '10px',
        borderRadius: '5px',
        background: 'var(--main-red-accent, #F62F20)',
        color: 'var(--main-white, #FFF8E9)',
        fontFamily: '"Alegreya Sans"',
        fontSize: isLarge 
          ? 'clamp(20px, calc(20px + (28px - 20px) * ((100vw - 320px) / (1920px - 320px))), 28px)' 
          : '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: isLarge ? '19.498px' : '19.498px',
        border: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease-in-out, transform 0.3s ease-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.9';
        e.currentTarget.style.transform = 'translate(6px, -6px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translate(0, 0)';
      }}
    >
      {children}
    </button>
  );
}