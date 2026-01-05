'use client';

import Image from 'next/image';
import CustomLink from '@/components/CustomLink';
import HorizontalTimeline, { TimelineCardHeading, TimelineCardText } from '@/components/Timeline';
import LargeBulletList from '@/components/LargeBulletList';

export default function EndToEndTransformationPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Case Content Section */}
      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
          }}
        >
      <h1 className="font-erica uppercase self-stretch"
                  style={{
                    color: '#FFF8E9',
                    textAlign: 'left',
                    fontFamily: '"Erica One"',
                    // Responsive font size: scales from 40px (iPhone SE 320px) to 48px (iPhone XR 414px), then to 108px at 1920px
                    fontSize: 'clamp(32px, calc(32px + (108px - 32px) * ((100vw - 320px) / (1920px - 320px))), 108px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    // Responsive line height: scales proportionally from 72px to 87px to 147px
                    lineHeight: 'clamp(44px, calc(44px + (147px - 44px) * ((100vw - 320px) / (1920px - 320px))), 147px)',
                    textTransform: 'uppercase',
                    alignSelf: 'stretch',
                    marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)',

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
              marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
            }}
          >
            0 → 1 Design & research expertise integration across orgs enabled by Retail App Redesign
          </p>

          {/* Case Tags */}
          <div>
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
          <div className="w-full mx-auto"
            style={{
              maxWidth: '1692px',
              marginTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
            }}
          >
            <h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Market and Business Context</h1>
            <p className="text-l" style={{ fontWeight: 400 }}>  <b>Kazakhstan's market: </b> ~16M population, ~9.2M solvent. </p> <br />

            <p className="text-l" style={{ fontWeight: 400 }}>  <b>Bank CenterCredit: </b> S&P Top-4, 35+ years on the market, 3M+ active clients, 1.77B market cap, 8 000 employees.</p> <br />

            <p className="text-l" style={{ fontWeight: 400 }}>  <b>Strategic direction: </b> build a SuperApp ecosystem integrating internal companies + external B2B/B2C partners: retail, foodtech, fintech.</p> <br />
            <p className="text-l" style={{ fontWeight: 400 }}>  The bank is part of a diversified financial holding (20+ companies: investments, insurance, real estate, crypto, trading, development hub). </p> <br />
          </div>

          <div className="w-full mx-auto"
            style={{
              maxWidth: '1692px',
              marginTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
            }}
          >
            <h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Timeline</h1>
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
      title: 'Q3 2022 Acquisition \n& Strategy Reset', 
      content: (
        <>
          <TimelineCardText>
          <ol className="list-decimal list-inside space-y-2">
            <li>Merger of banks; full C-suite change</li>
            <li>Product strategy vacuum</li>
           </ol>
           <br />
          
          </TimelineCardText>
          <TimelineCardHeading>Approach:</TimelineCardHeading>
          <TimelineCardText>
          <ol className="list-decimal list-inside space-y-2">
            <li>Took ownership of retail app strategy (shadow CPO)</li>
            <li>Built Fintech IA anticipating SuperApp scale</li>
            <li>Re-established decision-making core around customer outcomes</li>
           </ol>
          
          </TimelineCardText>
        </>
      )
    },
    { 
      title: 'Q4 2022 – Q3 2024 — Capability Building & Governance', 
      content: (
        <>

          <TimelineCardText>
          <ol className="list-decimal list-inside space-y-2">
            <li>Set up design processes in low maturity teams</li>
            <li>Alignment with CMO / CTO</li>
            <li>4 release postponements due to product fragmentation</li>
           </ol>
           <br />     

           <TimelineCardHeading>Approach:</TimelineCardHeading>
           <ol className="list-decimal list-inside space-y-2">
            <li>Built a multi-layered operating model (discovery → delivery)</li>
            <li>Scaled team to strategic maturity level (2.05/4)</li>
           </ol>
          </TimelineCardText>
        </>
      )
    },

    { 
        title: '🔥 Q3 2024 Release in fire 🔥', 
        content: (
          <>
  
            <TimelineCardText>
            <ol className="list-decimal list-inside space-y-2">
              <li>Critical leak → forced full visual redesign</li>
              <li>Burnout risk</li>
              <li>App technical debt + IA issues → rating drop to 1★</li>
              <li>Strategic shock: AliPay tech stack purchased 2 months before release</li>
             </ol>

             <br />     
  
             <TimelineCardHeading>Approach:</TimelineCardHeading>
             <ol className="list-decimal list-inside space-y-2">
              <li>Crisis leadership: protected team, kept release moving</li>
              <li>Reset collaboration with InfoSec</li>
              <li>Ensured redesign integrity and launch readiness under impossible constraints</li>
             </ol>
            </TimelineCardText>
          </>
        )
      },

      { 
        title: 'Q3 2024 – Q3 2025 Strategic Pivot & Recovery', 
        content: (
          <>
  
            <TimelineCardText>
            <ol className="list-decimal list-inside space-y-2">
              <li> Rebuilt product strategy on the fly</li>
              <li>Retrofitted existing redesign to support SuperApp architecture</li>
              <li>Stabilized the app and restored trust</li>
              <li>Rating covered 1★ → 3.9★ within months</li>
              <li>SUM: 11% → 80.9%</li>
              <li>Shifted design into influencing-tier in product org</li>
             </ol>

             <br />     
  
             <TimelineCardHeading>Approach:</TimelineCardHeading>
             <ol className="list-decimal list-inside space-y-2">
              <li>Crisis leadership: protected team, kept release moving</li>
              <li>Reset collaboration with InfoSec</li>
              <li>Ensured redesign integrity and launch readiness under impossible constraints</li>
             </ol>
            </TimelineCardText>
          </>
        )
      },
  ]}
/>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            minHeight: 'clamp(200px, calc(400px + (800px - 400px) * ((100vw - 320px) / (1920px - 320px))), 400px)',
          }}
        >
            <p className="text-l" style={{ fontWeight: 700 }}>  Context </p> <br />
            <p className="text-l" style={{ fontWeight: 400 }}>  Post-acquisition restructuring created a political and operational vacuum: the design function had no defined mandate and was absent from strategic decision-making. <br /> <br /> This vacuum also created an opportunity: the organization needed a function capable of stabilizing product delivery and re-establishing customer-centered direction. I leveraged this moment to position design as that function, embedding governance and decision-making frameworks through the retail redesign. </p>
            <br /> <br /> <br />
            <p className="text-l" style={{ fontWeight: 700 }}>  Guiding Policy (the strategic idea) </p> <br />
            <p className="text-l" style={{ fontWeight: 400 }}>  Deploy org-change through the redesign — embed governance, maturity and decision-making improvements inside the product delivery process.
            Redesign becomes the flagship that justifies and protects systemic change. </p>

           
        </div>
      </section>

      {/* Strategy Block */}
      <section 
        className="w-full flex items-center justify-center"
        style={{
          height: 'clamp(600px, calc(600px + (1000px - 600px) * ((100vw - 320px) / (1920px - 320px))), 1000px)',
        }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          {/* Top Diamonds - 2 diamonds horizontally aligned */}
          <div className="flex items-center justify-center" style={{ gap: '24px', marginBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: 'var(--main-red-accent, #F62F20)',
                transform: 'rotate(45deg)', 
                
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: 'var(--main-red-accent, #F62F20)',
                transform: 'rotate(45deg)',
              }}
            />
          </div>

          {/* Strategy Title */}
          <h2
            style={{
              color: 'var(--main-white, #FFF8E9)',
              textAlign: 'center',
              fontFamily: '"Alegreya Sans", sans-serif',
              fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
              fontStyle: 'normal',
              fontWeight: 900,
              lineHeight: 'normal',
              marginBottom: 'clamp(24px, calc(24px + (64px - 24px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
            }}
          >
            Strategy
          </h2>

          {/* Main Text */}
          <h1 className="heading-xl" style={{ maxWidth: '664px', textAlign: 'center' }}>
            Design-led org change through a flagship redesign
          </h1>

          {/* Bottom Diamonds - 2 diamonds horizontally aligned */}
          <div className="flex items-center justify-center" style={{ gap: '24px', marginTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: 'var(--main-red-accent, #F62F20)',
                transform: 'rotate(45deg)',
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: 'var(--main-red-accent, #F62F20)',
                transform: 'rotate(45deg)',
              }}
            />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            //paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
            <h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Strategic pillars</h1>
            <LargeBulletList 
                items={[
                    'Reframe team workflows around customer-outcome mindset → raise product maturity.',
                    'Temporarily centralize decision-making in design to stabilize the org and stop fragmentation.',
                    'Position design as a strategic actor in all major business pivots.',
                    'Build C-level credibility through clarity of vision + visual progress',
                    'Strengthen researchOps to create a single source of truth for decisions.',
                    'Use retail redesign as visible proof that the new operating model works.'

                ]} 
                />
        </div>
        </section>

        <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
            <h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Execution</h1>
            <p className="text-l" style={{ fontWeight: 700 }}>  Structural gaps </p> <br />
            <ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)' }}>
                <li>No formal product ownership; CPO role absent.</li>
                <li>No unified product strategy → parallel priorities</li>
                <li>Highly fragmented organization (50+ streams)</li>
                <li>Legacy mobile app not feasible for iterative delivery</li>
                <li>No credibility or shared decision-making model with C-suite</li>
                <li>Research and analytics processes missing</li>
                <li>Design function had 3 designers for entire bank</li>
            </ul>
            <br /> <br /> 
            <p className="text-l" style={{ fontWeight: 700 }}> Summary: The organization lacked a discovery backbone. Redesign required building one from scratch. </p> <br />
            <br /> <br /> <br /><br />
            <p className="text-l" style={{ fontWeight: 700 }}>  Enabled execution </p> <br />
            <ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)' }}>
                <li>Took interim ownership of the retail product strategy (stopped priority chaos)</li>
                <li>Installed decision-making workflows inside design (temporary centralization to stabilize org)</li>
                <li>Built a cross-C-level coalition (CMO, CTO, shareholder) → <b><i>alignment engine</i></b></li>
                <li>Introduced unified IA + a single roadmap → <b><i>eliminated fragmentation</i></b></li>
                <li>Built researchOps + analytics pipeline to anchor decisions in evidence</li>
                <li>Scaled design from 3 → <b><i>45+ across 3 streams; established 5-person research department</i></b></li>
                <li>Introduced delivery management & quality control for predictable releases</li>
            </ul>
            <br /> <br /> 
            <p className="text-l" style={{ fontWeight: 700 }}> Summary: I created the operating model that allowed redesign to happen at all. </p> <br />

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

