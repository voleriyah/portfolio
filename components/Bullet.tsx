import Image from 'next/image';

interface BulletProps {
  text: string;
}

export default function Bullet({ text }: BulletProps) {
  return (
    <div
      className="flex items-center w-full"
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* Diamond Icon */}
      <div className="flex-shrink-0">
        <Image
          src="/images/diamond.svg"
          alt=""
          width={24}
          height={24}
        />
      </div>
      
      {/* Text */}
      <div
        className="font-alegreya text-dark-brown flex-1"
        style={{
          flex: '1 1 auto',
          maxWidth: '100%',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
          letterSpacing: '-0.24px',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        {text}
      </div>
    </div>
  );
}
