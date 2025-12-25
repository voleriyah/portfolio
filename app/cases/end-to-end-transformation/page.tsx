'use client';

import Image from 'next/image';
import CustomLink from '@/components/CustomLink';
import HorizontalTimeline, { TimelineCardHeading, TimelineCardText } from '@/components/Timeline';

export default function EndToEndTransformationPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Case Content Section */}
      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
          }}
        >
      <h1 className="font-erica uppercase self-stretch"
                  style={{
                    color: '#FFF8E9',
                    textAlign: 'left',
                    fontFamily: '"Erica One"',
                    // Responsive font size: scales from 40px (iPhone SE 320px) to 48px (iPhone XR 414px), then to 108px at 1920px
                    fontSize: 'clamp(40px, calc(40px + (108px - 40px) * ((100vw - 320px) / (1920px - 320px))), 108px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    // Responsive line height: scales proportionally from 72px to 87px to 147px
                    lineHeight: 'clamp(72px, calc(72px + (147px - 72px) * ((100vw - 320px) / (1920px - 320px))), 147px)',
                    textTransform: 'uppercase',
                    alignSelf: 'stretch',
                    marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)',

                    paddingLeft: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
                  }}>
                  End-to-End Transformation of discovery process
                </h1>

          {/* Case Description */}
          <p
            style={{
              color: '#FFF8E9',
              fontFamily: '"Alegreya Sans", sans-serif',
              fontSize: 'clamp(20px, calc(20px + (32px - 20px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
              fontWeight: 400,
              lineHeight: 'normal',
              paddingLeft: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
              marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
            }}
          >
            0 → 1 Design & research expertise integration across orgs enabled by Retail App Redesign
          </p>

          {/* Case Tags */}
          <div
            style={{
                paddingLeft: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
            }}
          >
            <p
              style={{
                color: '#F62F20',
                fontFamily: '"Alegreya Sans", sans-serif',
                fontSize: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
                fontWeight: 700,
                lineHeight: 'normal',
                whiteSpace: 'pre-line',
              }}
            >
              #Design governance{'\n'}#Design-driven change management
            </p>
          </div>

        
          {/* Case Content Placeholder */}
          <div
            style={{
              color: '#FFF8E9',
              fontFamily: '"Alegreya Sans", sans-serif',
              fontSize: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
              fontWeight: 400,
              lineHeight: '1.6',
            }}
          >
            <HorizontalTimeline 
  steps={[
    { 
      title: 'Q2 2022 Org audit', 
      content: (
        <>
          <TimelineCardText>
           <ol className="list-decimal list-inside space-y-2">
            <li>Design maturity 0.11/4, no governance</li>
            <li>3 designers → 50+ teams</li>
            <li>Legacy apps required full overhaul</li>
            <li>No product vision, 3-year old legacy</li>
           </ol>
           <br />
          </TimelineCardText>

          <TimelineCardHeading>Approach:</TimelineCardHeading>
          <TimelineCardText>
          <ul className="list-disc list-inside space-y-2">
            <li>Identified the systemic root causes (strategy vacuum, org fragmentation)</li>
            <li>Positioned design as the only function capable of restoring coherence</li>
           </ul>
          </TimelineCardText>
        </>
      )
    },
    { 
      title: 'Первый продукт', 
      content: (
        <>
          <TimelineCardHeading>Запуск MVP</TimelineCardHeading>
          <TimelineCardText>
            Выпустили минимально жизнеспособный продукт и получили первых клиентов.
          </TimelineCardText>
          <TimelineCardHeading>Обратная связь</TimelineCardHeading>
          <TimelineCardText>
            Активно собирали отзывы и улучшали продукт на основе потребностей рынка.
          </TimelineCardText>
        </>
      )
    },
    { 
      title: 'Раунд инвестиций', 
      content: (
        <>
          <TimelineCardHeading>Привлечение капитала</TimelineCardHeading>
          <TimelineCardText>
            Успешно закрыли раунд Series A и масштабировали команду до 50 человек.
          </TimelineCardText>
        </>
      )
    },
  ]}
/>
            <p>Case study content goes here...</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-dark-bg relative overflow-hidden">
        <div
          className="w-full mx-auto flex flex-col lg:flex-row"
          style={{
            maxWidth: '1692px',
          }}
        >
          {/* Title and Links */}
          <div
            className="w-full lg:w-1/2 flex flex-col justify-start relative z-10 lg:ml-auto"
            style={{
              paddingTop: 'clamp(40px, calc(40px + (260px - 40px) * ((100vw - 320px) / (1920px - 320px))), 260px)',
              paddingLeft: 'clamp(16px, calc(16px + (64px - 16px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
              paddingRight: 'clamp(16px, calc(16px + (64px - 16px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
              paddingBottom: 'clamp(40px, calc(40px + (64px - 40px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
              gap: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)',
            }}
          >
            <h2
              style={{
                color: '#FFF8E9',
                fontFamily: '"Erica One", cursive',
                fontSize: 'clamp(68px, calc(68px + (116px - 68px) * ((100vw - 320px) / (1920px - 320px))), 116px)',
                fontWeight: 400,
                textTransform: 'uppercase',
                lineHeight: 'normal',
              }}
            >
              Let's <br/> connect
            </h2>
            
            <div 
              className="flex flex-col lg:flex-row items-start"
              style={{
                gap: 'clamp(44px, calc(44px + (130px - 44px) * ((100vw - 768px) / (1920px - 768px))), 130px)',
              }}
            >
              <CustomLink href="https://www.linkedin.com/in/voleriyah" iconType="linkedin" variant="footer" showExternalIcon={true}>
                Connect
              </CustomLink>
              <CustomLink href="mailto:voleriyah@example.com" iconType="email" variant="footer" showExternalIcon={true}>
                Write me
              </CustomLink>
            </div>

            <p
              style={{
                color: '#FFF8E9',
                fontFamily: '"Alegreya Sans", sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: 'normal',
                marginTop: '120px',
              }}
            >
              © 2025 Valeriya. All rights reserved.
            </p>
          </div>
        </div>

        {/* Pattern Image - СЛЕВА за контейнером */}
        <div className="hidden lg:block absolute top-0 left-0 w-1/2 h-full">
          <Image
            src="/images/pattern.svg"
            alt="Pattern"
            width={987}
            height={974}
            className="w-full h-full"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'left center',
            }}
          />
        </div>

        {/* Pattern на мобиле */}
        <div className="lg:hidden w-full">
          <Image src="/images/pattern.svg" alt="Pattern" width={987} height={974} className="w-full h-auto" />
        </div>
      </footer>
    </main>
  );
}

