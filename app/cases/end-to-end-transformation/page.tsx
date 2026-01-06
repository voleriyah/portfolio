'use client';

import Image from 'next/image';
import CustomLink from '@/components/CustomLink';
import HorizontalTimeline, { TimelineCardHeading, TimelineCardText } from '@/components/Timeline';
import LargeBulletList from '@/components/LargeBulletList';
import Risks from '@/components/Risks';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ScrollToTopButton from '@/components/ScrollToTopButton'; 

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

         

          {/* Case Tags */}
          <div>
            <p
              style={{
                color: '#FFF8E9',
                fontFamily: '"Alegreya Sans", sans-serif',
                fontSize: 'clamp(18px, calc(18px + (24px - 18px) * ((100vw - 320px) / (1920px - 320px))), 24px)',
                fontWeight: 700,
                lineHeight: 'normal',
                whiteSpace: 'pre-line',
              }}
            >
              #Design governance, #Design-driven change management
            </p>
          </div>

          {/* Table of Contents */}
          <div
            className="w-full mx-auto"
            style={{
              maxWidth: '1692px',
              marginTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
              marginBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
            }}
          >
            <h2 className="heading-m" style={{ marginBottom: 'clamp(24px, calc(24px + (64px - 24px) * ((100vw - 320px) / (1920px - 320px))), 64px)' }}>Table of Contents</h2>
            <div className="flex flex-col gap-4" style={{ gap: 'clamp(12px, calc(12px + (16px - 12px) * ((100vw - 320px) / (1920px - 320px))), 16px)' }}>
              <CustomLink href="#market-and-business-context" iconType={null} showExternalIcon={false}>
                Market and business context
              </CustomLink>
        
                <CustomLink href="#timeline" iconType={null} showExternalIcon={false}>
                  Timeline
                </CustomLink>
                <div style={{ paddingLeft: 'clamp(24px, calc(24px + (32px - 24px) * ((100vw - 320px) / (1920px - 320px))), 32px)' }}>
                  <CustomLink href="#context" iconType={null} showExternalIcon={false}>
                    Context
                  </CustomLink>
                </div>
            
              <CustomLink href="#strategy" iconType={null} showExternalIcon={false}>
                Strategy
              </CustomLink>
              <CustomLink href="#strategic-pillars" iconType={null} showExternalIcon={false}>
                Strategic pillars
              </CustomLink>
              <CustomLink href="#execution" iconType={null} showExternalIcon={false}>
                Execution
              </CustomLink>
              <CustomLink href="#product-strategy" iconType={null} showExternalIcon={false}>
                The product strategy
              </CustomLink>
              <CustomLink href="#pivot" iconType={null} showExternalIcon={false}>
                The pivot
              </CustomLink>
              <CustomLink href="#critical-risks" iconType={null} showExternalIcon={false}>
                Critical risks and failures
              </CustomLink>
              <CustomLink href="#impact-business" iconType={null} showExternalIcon={false}>
                Impact: Business
              </CustomLink>
              <CustomLink href="#impact-orgs" iconType={null} showExternalIcon={false}>
                Impact: Orgs outcome
              </CustomLink>
              <CustomLink href="#leadership-outcome" iconType={null} showExternalIcon={false}>
                Leadership outcome
              </CustomLink>
              <CustomLink href="#visual-transformation" iconType={null} showExternalIcon={false}>
                Visual transformation
              </CustomLink>
            </div>
          </div>
        
          {/* Case Content Placeholder */}
          <div className="w-full mx-auto"
            style={{
              maxWidth: '1692px',
              marginTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
            }}
          >
            <h1 id="market-and-business-context" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Market and Business Context</h1>
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
            <h1 id="timeline" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Timeline</h1>
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
            <p id="context" className="text-l" style={{ fontWeight: 700 }}>  Context </p> <br />
            <p className="text-l" style={{ fontWeight: 400 }}>  Post-acquisition restructuring created a political and operational vacuum: the design function had no defined mandate and was absent from strategic decision-making. <br /> <br /> This vacuum also created an opportunity: the organization needed a function capable of stabilizing product delivery and re-establishing customer-centered direction. I leveraged this moment to position design as that function, embedding governance and decision-making frameworks through the retail redesign. </p>
            <br /> <br /> <br />
            <p className="text-l" style={{ fontWeight: 700 }}>  Guiding Policy (the strategic idea) </p> <br />
            <p className="text-l" style={{ fontWeight: 400 }}>  Deploy org-change through the redesign — embed governance, maturity and decision-making improvements inside the product delivery process.
            Redesign becomes the flagship that justifies and protects systemic change. </p>

           
        </div>
      </section>

      {/* Strategy Block */}
      <section 
        id="strategy"
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
            <h1 id="strategic-pillars" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Strategic pillars</h1>
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
            <h1 id="execution" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Execution</h1>
            <p className="text-l" style={{ fontWeight: 700 }}>  Structural gaps </p> <br />
            <ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
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
            <ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
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
              {/* Product Strategy Section */}
      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
            
          }}
        >
          <h1 id="product-strategy" className="heading-xl" style={{  marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>The product strategy</h1>
          
          {/* Desktop: 3 columns layout */}
          <div className="hidden lg:flex lg:flex-row gap-8 items-stretch" style={{ height: '100%' }}>
            {/* Column 1: Product Problem & Insights */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h2 className="text-l" style={{ color: 'var(--accent-red, #F62F20)',fontWeight: 700, marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 1024px) / (1920px - 1024px))), 24px)' }}>Product Problem <br /> (baseline)</h2><br /><br />
                <p className="text-l" style={{ fontWeight: 700 }}>Prerequisites:</p>
                <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                  <li>No clear audience focus, product spread thin across all segments.</li>
                  <li>Mass market dominated by 2 competitors in SuperApp segment → <b><i>no space to win head-on.</i></b></li>
                  <li>Fragmented UX, no strong engagement loop, stagnated MAU.</li>
                  <li>Users frustrated with money management, lacking tools they trust.</li>
                  <li>Lack of must-have products for long-term retention (loans, mortgages).</li>
                </ul>
              </div><br /><br />
              
              <div>
                <h2 className="text-l" style={{ fontWeight: 700, marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 1024px) / (1920px - 1024px))), 24px)' }}>Insights from JTBD & Market Patterns</h2>
                <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                  <li>People want control over money, not more features.</li>
                  <li>Trust is a differentiating asset in finance.</li>
                  <li>Growth potential sits in mass-affluent / affluent segments.</li>
                  <li>PFM acts as a natural engagement engine → <b><i>drives MAU and potentially shifts behavioral model to predictive SuperApp as main market differentiator.</i></b></li>
                  <li>Investment + FX = strong monetization vector for this audience.</li>
                </ul>
              </div>
            </div>

            {/* Arrow between columns (desktop) */}
            <div className="flex flex-col items-center justify-center" style={{  paddingTop: 'clamp(0px, calc(40px + (80px - 40px) * ((100vw - 1024px) / (1920px - 1024px))), 20px)'}}>
            <div
                 style={{
                   width: '44px',
                   height: '44px',
                   transform: 'rotate(270deg)',
                   maskImage: 'url(/images/arrow-down.svg)',
                   WebkitMaskImage: 'url(/images/arrow-down.svg)',
                   maskRepeat: 'no-repeat',
                   maskPosition: 'center',
                   maskSize: 'contain',
                   WebkitMaskSize: 'contain',
                   backgroundColor: '#F62F20',
                 }}
               />
               {/* Vertical line below arrow */}
               <div
                 style={{
                   width: '1px',
                   height: '100%',
                   backgroundColor: '#F62F20',
                   marginTop: '32px',
                 }}
               />
            </div>

            {/* Column 2: Q3 2022 Original vision */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h2 className="text-l" style={{ color: 'var(--accent-red, #F62F20)', fontWeight: 700, marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 1024px) / (1920px - 1024px))), 24px)' }}>Q3 2022 <br /> (Original vision)</h2><br /><br />
                
                <div className="space-y-4">
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Strategic Bet (the core move):</p>
                    <p className="text-l">Daily Banking + PFM as the product's engagement core with investments & trading added as value-extension.</p><br /><br />
                  </div>
                  
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Vision (3-year horizon):</p>
                    <p className="text-l">A trusted, literacy-driven retail banking experience with a SuperApp-ready architecture and modular expansion.</p><br /><br />
                  </div>
                  
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Target:</p>
                    <p className="text-l">Mass-affluent, Affluent, HNW.</p> <br /><br />
                  </div>

                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Stack:</p>
                    <p className="text-l">Flutter + WebView </p> <br /><br />
                  </div>
                  
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Metrics (North-star group):</p>
                    <ul className="text-l space-y-1" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li>↑ MAU</li>
                      <li>↑ Payments online share</li>
                      <li>↑ FX transaction value</li>
                      <li>↑ Loans & mortgages adoption</li>
                      <li>↑ SUM</li>
                    </ul>  <br /><br />
                  </div>
                  
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Emotional background (important):</p>
                    <p className="text-l">The banking should give users the feeling of control and mental safety – no frustration, fear, irritation or disgust.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow between columns (desktop) */}
            <div className="flex flex-col items-center justify-center" style={{ paddingTop: 'clamp(0px, calc(40px + (80px - 40px) * ((100vw - 1024px) / (1920px - 1024px))), 20px)' }}>
            <div
                 style={{
                   width: '44px',
                   height: '44px',
                   transform: 'rotate(270deg)',
                   maskImage: 'url(/images/arrow-down.svg)',
                   WebkitMaskImage: 'url(/images/arrow-down.svg)',
                   maskRepeat: 'no-repeat',
                   maskPosition: 'center',
                   maskSize: 'contain',
                   WebkitMaskSize: 'contain',
                   backgroundColor: '#F62F20',
                 }}
               />
               {/* Vertical line below arrow */}
               <div
                 style={{
                   width: '1px',
                   height: '100%',
                   backgroundColor: '#F62F20',
                   marginTop: '32px',
                 }}
               />
            </div>

            {/* Column 3: Q3 2024 Forced pivot */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h2 className="text-l" style={{ color: 'var(--accent-red, #F62F20)', fontWeight: 700, marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 1024px) / (1920px - 1024px))), 24px)' }}>Q3 2024 <br /> (Forced pivot before release)</h2><br /><br />
                
                <div className="space-y-4">
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Core:</p>
                    <p className="text-l">Predictive PFM.</p><br /><br />
                  </div>
                  
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Target:</p>
                    <p className="text-l">Mass segment.</p><br /><br />
                  </div>
                  
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Scalability:</p>
                    <p className="text-l">Limited by new platform constraints.</p><br /><br />
                  </div>
                  
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Stack:</p>
                    <p className="text-l">Flutter + Vue + AliPay MpaaS.</p><br /><br />
                  </div>
                  
                  <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Metric:</p>
                    <p className="text-l">No north star, 1000 partners in ecosystem by 2026.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Vertically stacked layout */}
          <div className="flex flex-col lg:hidden gap-6">
            {/* Product Problem & Insights */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Product Problem (baseline)</h2>
                <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                  <li>No clear audience focus, product spread thin across all segments.</li>
                  <li>Mass market dominated by 2 competitors in SuperApp segment → no space to win head-on.</li>
                  <li>Fragmented UX, no strong engagement loop, stagnated MAU.</li>
                  <li>Users frustrated with money management, lacking tools they trust.</li>
                  <li>Lack of must-have products for long-term retention (loans, mortgages).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Insights from JTBD & Market Patterns</h2>
                <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                  <li>People want control over money, not more features.</li>
                  <li>Trust is a differentiating asset in finance.</li>
                  <li>Growth potential sits in mass-affluent / affluent segments.</li>
                  <li>PFM acts as a natural engagement engine → drives MAU and potentially shifts behavioral model to predictive SuperApp as main market differentiator.</li>
                  <li>Investment + FX = strong monetization vector for this audience.</li>
                </ul>
              </div>
            </div>

            {/* Arrow down (mobile) */}
            <div className="flex items-center justify-center" style={{ padding: '16px 0' }}>
            <div
                style={{
                  width: '36px',
                  height: '36px',
                  maskImage: 'url(/images/arrow-down.svg)',
                  WebkitMaskImage: 'url(/images/arrow-down.svg)',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  backgroundColor: '#F62F20',
                }}
              />
            </div>

            {/* Q3 2022 Original vision */}
            <div className="flex flex-col gap-4">
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Q3 2022 (Original vision)</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Strategic Bet (the core move):</p>
                  <p className="text-l">Daily Banking + PFM as the product's engagement core with investments & trading added as value-extension.</p>
                </div>
                
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Vision (3-year horizon):</p>
                  <p className="text-l">A trusted, literacy-driven retail banking experience with a SuperApp-ready architecture and modular expansion.</p>
                </div>

                <div>
                    <p className="text-l" style={{ fontWeight: 700 }}>Stack:</p>
                    <p className="text-l">Flutter + WebView </p> <br /><br />
                  </div>
                
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Target:</p>
                  <p className="text-l">Mass-affluent → Affluent → HNW.</p>
                </div>
                
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Metrics (North-star group):</p>
                  <ul className="text-l space-y-1" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li>↑ MAU</li>
                    <li>↑ Payments online share</li>
                    <li>↑ FX transaction value</li>
                    <li>↑ Loans & mortgages adoption</li>
                    <li>↑ SUM</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Emotional background (important):</p>
                  <p className="text-l">The banking should give users the feeling of control and mental safety – no frustration, fear, irritation or disgust.</p>
                </div>
              </div>
            </div>

            {/* Arrow down (mobile) */}
            <div className="flex items-center justify-center" style={{ padding: '16px 0' }}>
            <div
                style={{
                  width: '36px',
                  height: '36px',
                  maskImage: 'url(/images/arrow-down.svg)',
                  WebkitMaskImage: 'url(/images/arrow-down.svg)',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  backgroundColor: '#F62F20',
                }}
              />
            </div>

            {/* Q3 2024 Forced pivot */}
            <div className="flex flex-col gap-4">
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Q3 2024 (Forced pivot before release)</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Core:</p>
                  <p className="text-l">Predictive PFM.</p>
                </div>
                
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Target:</p>
                  <p className="text-l">Mass segment.</p>
                </div>
                
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Scalability:</p>
                  <p className="text-l">Limited by new platform constraints.</p>
                </div>
                
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Stack:</p>
                  <p className="text-l">Flutter + Vue + AliPay MpaaS.</p>
                </div>
                
                <div>
                  <p className="text-l" style={{ fontWeight: 700 }}>Metric:</p>
                  <p className="text-l">No north star, 1000 partners in ecosystem by 2026.</p>
                </div>
              </div>
            </div>
          </div>
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
            <h1 id="pivot" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>The pivot mitigation</h1>
            <p className="text-l" style={{ fontWeight: 400 }}>  <b>Context: </b> New SuperApp tech platform was introduced 2 months before launch → <b><i>the app had to be rapidly repositioned and rebuilt under heavy constraints.</i></b> </p> <br />
            <p className="text-l" style={{ fontWeight: 400 }}>  <b>Solution: </b> The pivot was misaligned with market reality and our release readiness. Forcing it pre-launch would have failed. We shipped with the original positioning and deferred the pivot to 2025.</p> <br />
            <p className="text-l" style={{ fontWeight: 400 }}>  <b>My role: </b> Made the call to defer the pivot, keeping launch viable. Retrofitted design strategy to bridge original vision → <b><i> post-launch evolution.</i></b> </p> <br />
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
            <h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Strategic Preconditions That Made the Pivot Possible</h1>
            <ol className="text-l space-y-2" style={{ listStyle: 'number', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                  <li><b>Scalable design foundation </b> → Retail UX strategy became self-running; iterative cycles cascaded to SME, internal, and ecosystem design streams</li><br />
                  <li><b>Team maturity & systemization </b>→ Ownership distributed; Head of UX Retail hired; team became autonomous.</li><br />
                  <li><b>Operational research backbone </b>→ Behavioral insights strengthened decision-making; research gained C-level credibility.</li><br />
                  <li><b>Customer-outcome mindset adoption </b>→ Teams that adopted it became design allies instead of blockers.</li><br />
                </ol>
        </div>
      </section>

      {/* Risks Section */}
      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
            //paddingBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
          }}
        >
             <h1 id="critical-risks" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Critical risks and failures</h1>
          <div
            className="flex lg:flex-row items-start justify-start lg:justify-center gap-8 overflow-x-auto scrollbar-hide"
            style={{
              gap: 'clamp(24px, calc(24px + (32px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 32px)',
              paddingLeft: 'clamp(16px, calc(16px + (0px - 16px) * ((100vw - 1024px) / (1920px - 1024px))), 0px)',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <Risks
              number="1"
              riskDescription="Dependencies and fragmentation slowed delivery"
              mitigationStrategy="Introduced release discipline Froze changes in legacy app to stop scope spread and regain control."
              outcome="Recovered app rating after release from 1⭐ → 3.1⭐ in 3 months."
            />
            <Risks
              number="2"
              riskDescription="Security breach: design leaked to competitor and was uncovered 1 month before our release by their launch"
              mitigationStrategy="Established new InfoSec workflow Created secure access and approval pipeline in Figma."
              outcome="Prevented further leaks; increased organizational trust toward design."
            />
            <Risks
              number="3"
              riskDescription="Market signal: abrupt drop in app rating due to legacy tech debt"
              mitigationStrategy="Provided crisis leadership and emotional containment so design team could continue under extreme pressure"
              outcome="Maintained team continuity under extreme pressure"
            />
          </div>
        </div>
      </section>

      {/* Impact: Business Section */}
      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
            paddingBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
          }}
        >
          <h1 id="impact-business" className="heading-xl" style={{ marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Impact: Business</h1>
          
          <div className="space-y-6">
            {/* Growth */}
            <div>
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Growth</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>MAU grew from 1.245M to 1.562M (+317K users).</li>
                <li>In-app payments share grew 6% Year-over-Year (YoY).</li>
              </ul>
            </div>

            {/* Product Quality */}
            <div>
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Product Quality</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>SUM (System Usability Scale) usability score improved from 11% to 71%, then to 80.9%.</li>
                <li>App Store rating increased from 3.3 to 3.9.</li>
              </ul>
            </div>

            {/* Monetization */}
            <div>
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Monetization</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>Share of online loan applications increased from 16% to 39%, driving $53.4M in value in Q3 2025.</li>
                <li>FX (Foreign Exchange) exchange transaction value increased by +114%, from $578K to $1.02M.</li>
                <li>Average check of in-app payments grew by 8.2%.</li>
              </ul>
            </div>

            {/* Brand & Experience */}
            <div>
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Brand & Experience</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>User recommendation score (BHT NPS) increased from 11% to 31%.</li>
                <li>The mobile experience is becoming a key driver of overall brand perception.</li>
                <li>Markswebb: #1 in Kazakhstan for mobile banking UX.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact: Orgs outcome Section */}
      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
            paddingBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
          }}
        >
          <h1 id="impact-orgs" className="heading-xl" style={{ marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Impact: Orgs outcome</h1>
          
          <div className="space-y-6">
            {/* Built and structured the Design & Research function from scratch */}
            <div>
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Built and structured the Design & Research function from scratch</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>Established 3 design streams: SME (Small and Medium-sized Enterprises), Retail, and Internal.</li>
                <li>Established 2 research streams: UX/CX (User Experience/Customer Experience) and Market.</li>
              </ul>
            </div>

            {/* Maturity Growth */}
            <div>
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Maturity Growth</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>Raised org-wide design maturity from 0.11 (Q3 2022) to 2.05 (Q3 2025), which enabled predictable delivery, structured discovery, and measurable design impact.</li>
                <li>Shifted the company from a delivery-only workflow to tactical design maturity (Invision level 3).</li>
              </ul>
            </div>

            {/* Scaling */}
            <div>
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Scaling</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>The team grew from 3 to 44 members, including 5 CX/UX research, 39 design IC (Individual Contributors), and 4 managers.</li>
                <li>Established a multi-layer leadership structure and functional independence.</li>
                <li>Market research was established (2022) and delegated (2024) to a new leadership role.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="w-full flex items-center justify-center"
        style={{
          paddingBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
          height: 'clamp(800px, calc(800px + (1500px - 800px) * ((100vw - 320px) / (1920px - 320px))), 1500px)',
        }}
      >
        <div className="flex flex-col items-center justify-center w-full"
        style={{
          
        }}
        >
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


          {/* Main Text */}
          <h1 id="leadership-outcome" className="heading-xl" style={{ maxWidth: 'clamp(300px, calc(300px + (1000px - 300px) * ((100vw - 320px) / (1920px - 320px))), 1000px)', textAlign: 'center' }}>
           I learned to lead without air,<br />  to build without prerequisites <br /> and to protect people in a system built to break them.
 <br />
 <br />
Also, I learned the hardest won leadership skill: <br />
knowing when to walk away.
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

      {/* Before/After Slider Section */}
      <section className="w-full">
  <div className="w-full mx-auto"
    style={{
      maxWidth: '1692px',
      paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
      paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
      paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
      paddingBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
    }}
  >
    <h1 id="visual-transformation" className="heading-xl" style={{ marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
      Visual transformation
     </h1>

   
   
    {/* Desktop: 2 columns, Mobile: stacked */}
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      
      {/* Left: Slider */}
      <div className="w-full lg:w-1/2">
      <h2 className="heading-m" style={{ marginBottom: 'clamp(24px, calc(24px + (64px - 24px) * ((100vw - 320px) / (1920px - 320px))), 64px)' }}>Main screen and Information architecture <br/>(Q3 2022 vs Q3 2025)</h2>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage 
              src="/images/before-main.png" 
              alt="Q3 2022"
              style={{ objectFit: 'contain' }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage 
              src="/images/main-after-prod.png" 
              alt="Q3 2025"
              style={{ objectFit: 'contain' }}
            />
          }
          portrait={true}
          position={50}
          style={{
            width: '100%',
            height: 'clamp(500px, 80vh, 1200px)',
          }}
          handle={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '4px',
                backgroundColor: '#F62F20',
                position: 'relative',
              }}
            >
              {/* Кружок по центру */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#F62F20',
                  border: '3px solid #FFF8E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {/* Стрелки вверх/вниз */}
                <div style={{ color: '#FFF8E9', fontSize: '18px', fontWeight: 'bold' }}>
                  ⇅
                </div>
              </div>
            </div>
          }
        />
      </div>

      {/* Right: Description */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div>
          <h2 className="text-l" style={{ fontWeight: 700, marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)' }}>Key changes:</h2>
          <ol className="text-l space-y-3" style={{ listStyle: 'decimal', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
            <li>Shifted the navigation focus to "History," which now contains the Personal Finance Manager (PFM) and becomes the primary entry point for financial insights.</li><br />
            <li>Separated "Services" into its own area to support future product growth and removed non-essential shortcut buttons from the home screen to reduce noise.</li><br />
            <li>Replaced oversized marketing banners with flexible, scalable stories to increase available screen real estate and improve the visibility of ongoing campaigns.</li><br />
            <li>Moved cashback to the home screen to improve discoverability and engagement.</li> <br/>
            <li>Introduced customizable home screen layout: users can now arrange financial tools the way they want. Product teams were required to create widget-level value blocks instead of single-action buttons — a shift toward a product-led home experience.</li><br />
            <li>Brought Payments and Transfers into fast-access actions on the home screen, with a long-term plan to merge these two sections in the bottom navigation.</li><br />  
            <li>Merged "Notifications" and "Messages" to reduce redundancy and simplify communication entry points.</li>
          </ol> <br/><br/>
        </div>
      </div>

    </div>

     {/* Desktop: 2 columns, Mobile: stacked */}
     <div className="flex flex-col lg:flex-row gap-8 lg:gap-12" style={{ marginTop: 'clamp(72px, calc(72px + (132px - 72px) * ((130vw - 320px) / (1920px - 320px))), 132px)' }}>
      
      {/* Left: Slider */}
      <div className="w-full lg:w-1/2">
      <h2 className="heading-m" style={{ marginBottom: 'clamp(24px, calc(24px + (64px - 24px) * ((100vw - 320px) / (1920px - 320px))), 64px)' }}>Cash loan launch & redesign <br/>(Q4 2023 vs Q3 2025)</h2>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage 
              src="/images/loan-before.png" 
              alt="Q3 2022"
              style={{ objectFit: 'contain' }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage 
              src="/images/loan-after.png" 
              alt="Q3 2025"
              style={{ objectFit: 'contain' }}
            />
          }
          portrait={true}
          position={50}
          style={{
            width: '100%',
            height: 'clamp(500px, 80vh, 1200px)',
          }}
          handle={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '4px',
                backgroundColor: '#F62F20',
                position: 'relative',
              }}
            >
              {/* Кружок по центру */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#F62F20',
                  border: '3px solid #FFF8E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {/* Стрелки вверх/вниз */}
                <div style={{ color: '#FFF8E9', fontSize: '18px', fontWeight: 'bold' }}>
                  ⇅
                </div>
              </div>
            </div>
          }
        />
      </div><br/><br/><br/><br/>

      {/* Right: Description */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div>
          <h2 className="text-l" style={{ fontWeight: 700, marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)' }}>Key changes:</h2>
          <ol className="text-l space-y-3" style={{ listStyle: 'decimal', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
            <li>Launched the product from scratch in parallel with the full app redesign, using existing UI components and form patterns to accelerate delivery and keep the experience consistent. <b><i>Grew loan issuance from $2.4M → $17.9M.</i></b></li><br />
            <li>Improved the loan term selection in later iterations — <b><i>SUM of approved loans Q3 YoY $17.9M → $53.4M.</i></b> </li><br />
            <li>Replaced dropdowns with chips for faster comparison, better scannability, and reduced cognitive load.</li><br />
            <li>Redesigned the insurance block: <br/>– added a clear explanation of what the insurance is and why it matters <br/>– recalculated and surfaced the actual approved amount considering insurance costs</li><br /> 
            <li>Enhanced the payment calculator by providing the exact date of the first payment and making the monthly payment breakdown more transparent.</li><br />
          </ol>
        </div>
      </div>

    </div>



        {/* Desktop: 2 columns, Mobile: stacked */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12" style={{ marginTop: 'clamp(72px, calc(72px + (132px - 72px) * ((130vw - 320px) / (1920px - 320px))), 132px)' }}>
      
      {/* Left: Slider */}
      <div className="w-full lg:w-1/2">
      <h2 className="heading-m" style={{ marginBottom: 'clamp(24px, calc(24px + (64px - 24px) * ((100vw - 320px) / (1920px - 320px))), 64px)' }}>FX exchange mini-app<br/>(Q2 2022 vs Q3 2025)</h2>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage 
              src="/images/fx-before.png" 
              alt="Q3 2022"
              style={{ objectFit: 'contain' }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage 
              src="/images/fx-after-prod.png" 
              alt="Q3 2025"
              style={{ objectFit: 'contain' }}
            />
          }
          portrait={true}
          position={50}
          style={{
            width: '100%',
            height: 'clamp(500px, 80vh, 1200px)',
          }}
          handle={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '4px',
                backgroundColor: '#F62F20',
                position: 'relative',
              }}
            >
              {/* Кружок по центру */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#F62F20',
                  border: '3px solid #FFF8E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {/* Стрелки вверх/вниз */}
                <div style={{ color: '#FFF8E9', fontSize: '18px', fontWeight: 'bold' }}>
                  ⇅
                </div>
              </div>
            </div>
          }
        />
      </div><br/><br/><br/><br/>

      {/* Right: Description */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div>
          <h2 className="text-l" style={{ fontWeight: 700, marginBottom: 'clamp(16px, calc(16px + (24px - 16px) * ((100vw - 320px) / (1920px - 320px))), 24px)' }}>Key changes:</h2>
          <ol className="text-l space-y-3" style={{ listStyle: 'decimal', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
            <li>Moved all FX functionality into a standalone mini-app, making the experience faster, clearer, and easier to scale. <b><i>+20% operations volume (60,864 → 73,176).</i></b></li><br />
            <li>Refocused the main screen around active traders (core audience): added a compact exchange rate view and customizable currency pairs, so users can track only what matters to them. <b><i>+10% active users (2,579 → 2,843).</i></b></li><br />
            <li>Designed a new navigation structure to support additional features and a new "News & Insights" section.</li><br />
            <li>Aligned the entire experience with the design system, unifying components, patterns, and interaction logic.</li><br />
            <li>Shipped iOS and Android widgets so users can monitor currency rates without opening the app.</li>
          </ol>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Footer Section */}
      <footer className="w-full bg-dark-bg relative overflow-hidden" style={{ marginTop: 'clamp(72px, calc(72px + (132px - 72px) * ((130vw - 320px) / (1920px - 320px))), 132px)' }}>
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
              <CustomLink href="mailto:valeriya.kostyuchenko@gmail.com" iconType="email" variant="footer" showExternalIcon={true}>
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

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
}

