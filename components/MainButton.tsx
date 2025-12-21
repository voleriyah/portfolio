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
        padding: isLarge ? '24px' : '8px 16px',
        gap: '10px',
        borderRadius: '5px',
        background: 'var(--main-red-accent, #F62F20)',
        color: 'var(--main-white, #FFF8E9)',
        fontFamily: '"Alegreya Sans"',
        fontSize: isLarge ? '28px' : '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: isLarge ? '19.498px' : '19.498px', // 69.637% for large, 121.864% for small
        border: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease-in-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
    >
      {children}
    </button>
  );
}

