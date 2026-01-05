'use client';

interface HorizontalConnectorLineProps {
  align?: 'left' | 'right';
}

export default function HorizontalConnectorLine({ align = 'left' }: HorizontalConnectorLineProps) {
  return (
    <div 
      className="w-full mx-auto relative"
      style={{
        maxWidth: '1692px',
        height: '3px',
        backgroundColor: '#F62F20',
        marginTop: 'clamp(40px, calc(40px + (60px - 40px) * ((100vw - 320px) / (1920px - 320px))), 60px)',
        marginBottom: 'clamp(40px, calc(40px + (60px - 40px) * ((100vw - 320px) / (1920px - 320px))), 60px)',
      }}
    >
      {/* Линия от края карточки до края контейнера */}
      <div
        className="absolute top-0 h-full bg-[#F62F20]"
        style={{
          left: align === 'left' ? '994px' : '0',
          right: align === 'left' ? '0' : '994px',
          width: align === 'left' ? 'calc(100% - 994px)' : 'calc(100% - 994px)',
        }}
      />
    </div>
  );
}