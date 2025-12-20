import Bullet from './Bullet';

interface ExpertiseBlockProps {
  title: string;
  bullets: string[];
}

export default function ExpertiseBlock({ title, bullets }: ExpertiseBlockProps) {
  return (
    <div
      className="flex flex-col flex-1"
      style={{
        display: 'flex',
        flex: '1 1 0',
        minWidth: 0,
        backgroundColor: '#F62F20', // primary-red background
        // Padding: scales from 60px 30px at 1024px to 92px 50px at 1920px (benchmark)
        paddingTop: 'clamp(60px, calc(60px + (92px - 60px) * ((100vw - 1024px) / (1920px - 1024px))), 92px)',
        // Right padding: 50px at 1920px (benchmark), scales from 30px at 1024px
        paddingRight: 'clamp(30px, calc(30px + (50px - 30px) * ((100vw - 1024px) / (1920px - 1024px))), 50px)',
        paddingBottom: 'clamp(60px, calc(60px + (92px - 60px) * ((100vw - 1024px) / (1920px - 1024px))), 92px)',
        paddingLeft: 'clamp(30px, calc(30px + (50px - 30px) * ((100vw - 1024px) / (1920px - 1024px))), 50px)',
        flexDirection: 'column',
        alignItems: 'flex-start',
        // Gap between bullets: 48px
        gap: '48px',
        boxSizing: 'border-box',
      }}
    >
      {/* Title */}
      <h3
        className="font-alegreya text-dark-brown"
        style={{
          flexShrink: 0,
          alignSelf: 'stretch',
          // Font size: scales from 28px at 1024px to 36px at 1920px (benchmark)
          fontSize: 'clamp(28px, calc(28px + (36px - 28px) * ((100vw - 1024px) / (1920px - 1024px))), 36px)',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '1.2',
          // Letter spacing: scales from -0.28px at 1024px to -0.36px at 1920px (benchmark)
          letterSpacing: 'clamp(-0.28px, calc(-0.28px + (-0.36px - -0.28px) * ((100vw - 1024px) / (1920px - 1024px))), -0.36px)',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {title}
      </h3>

      {/* Bullets */}
      {bullets.map((bullet, index) => (
        <Bullet key={index} text={bullet} />
      ))}
    </div>
  );
}
