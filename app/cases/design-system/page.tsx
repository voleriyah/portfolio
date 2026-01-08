'use client';

import Image from 'next/image';
import CustomLink from '@/components/CustomLink';
import HorizontalTimeline, { TimelineCardHeading, TimelineCardText } from '@/components/Timeline';
import LargeBulletList from '@/components/LargeBulletList';
import Risks from '@/components/Risks';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ScrollToTopButton from '@/components/ScrollToTopButton'; 
import ImageContainer from '@/components/ImageContainer';
import Footer from '@/components/Footer';

export default function EndToEndTransformationPage() {
  const risksItems = [
    {
      number: "1",
      riskDescription: "DS perceived as automation layer, not value driver.Design competency’s lack of credibility",
      mitigationStrategy: "Used pattern-driven evidence vs rhetoric to disarm resistance",
      outcome: "Increased trust in design by demonstrating value through pattern libraries and reusable components"
    },
    {
      number: "2",
      riskDescription: "Business–engineering communication gap",
      mitigationStrategy: "Attached ROI, time-to-market and governance metrics to DS",
      outcome: "DS achieved export readiness and became a monetizable product"
    },
    {
      number: "3",
      riskDescription: "Low product management maturity",
      mitigationStrategy: "Ran 2-year internal advocacy play until DS gained institutional legitimacy",
      outcome: "Function secured authority, visibility and embedded power in org decision loops"
    }
  ];
  
  const risksGridCols = risksItems.length > 3 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
  const risksGridClassName = `grid grid-cols-1 ${risksGridCols} items-start justify-items-center gap-8`;

  return (
    <main className="min-h-screen bg-dark-bg" style={{ paddingTop: 'clamp(92px, calc(92px + (124px - 92px) * ((100vw - 320px) / (1920px - 320px))), 124px)' }}>
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
                  Design system establishing & scaling
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
              #Design governance, #Change management
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

            
              <CustomLink href="#strategy" iconType={null} showExternalIcon={false}>
                Strategy
              </CustomLink>
              <CustomLink href="#strategic-pillars" iconType={null} showExternalIcon={false}>
                Strategic pillars
              </CustomLink>
              <CustomLink href="#execution" iconType={null} showExternalIcon={false}>
                Execution
              </CustomLink>
              <CustomLink href="#execution-internal" iconType={null} showExternalIcon={false}>
                Execution: Internal
              </CustomLink>
              <CustomLink href="#critical-risks" iconType={null} showExternalIcon={false}>
                Critical risks and failures
              </CustomLink>
              <CustomLink href="#impact-business" iconType={null} showExternalIcon={false}>
                Impact: Business
              </CustomLink>

              <CustomLink href="#leadership-outcome" iconType={null} showExternalIcon={false}>
                Leadership outcome
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
      title: '2022: Turbulent inception', 
      content: (
        <>
        <TimelineCardHeading>Strategy: Bank as API supplier</TimelineCardHeading>
        <TimelineCardText>
          <ul className="list-disc list-inside space-y-2">
            <li> No design culture or ownership</li>
            <li>Bank merger + sanctions turmoil</li>
            <li>Strategy shifts, leadership turnover</li>
           </ul> <br /> <br />
          </TimelineCardText>

          <TimelineCardHeading>Approach:</TimelineCardHeading>
          <TimelineCardText>
          <ul className="list-disc list-inside space-y-2">
            <li>Creating mandate in instability</li>
            <li>Starting DS to create alignment and stability</li>
           </ul><br /> <br />
          </TimelineCardText>
          <TimelineCardHeading>Built DS with optionality — anticipating pivots before they were declared.</TimelineCardHeading>
        </>
      )
    },
    { 
      title: '2023 :  Design as strategic lever ', 
      content: (
        <>
         <TimelineCardHeading>Strategy: Daily bank under holding umbrella </TimelineCardHeading>
          <TimelineCardText>
          <ul className="list-disc list-inside space-y-2">
            <li>Two positioning pivots</li>
            <li>Full retail redesign & new visual language</li>
            <li>Strategy shifts, leadership turnover</li>
           </ul> <br /> <br />

          
          </TimelineCardText>
          <TimelineCardHeading>Approach:</TimelineCardHeading>
          <TimelineCardText>
          <ol className="list-decimal list-inside space-y-2">
            <li>Launching an MVP in old visual language </li>
            <li>DS became core narrative + execution engine</li>
            
           </ol>
          
          </TimelineCardText>
        </>
      )
    },
    { 
      title: '2024 :  Enterprise expansion', 
      content: (
        <>
         <TimelineCardHeading>Strategy: Focus on B2B and boxed products</TimelineCardHeading>
         <TimelineCardText>
         Entered B2B + internal systems
          <br /> <br />
          
          </TimelineCardText>

           <TimelineCardHeading>Approach:</TimelineCardHeading>
           <TimelineCardText>
           <ol className="list-decimal list-inside space-y-2">
            <li>Alignment with the teams across the orgs</li>
            <li>DS evolved into operational infrastructure</li>
           </ol>
          </TimelineCardText>
        </>
      )
    },

    { 
        title: '2025 : Institutionalization & monetization', 
        content: (
          <>
            <TimelineCardHeading>Strategy: Fintech → SuperApp + API supplier</TimelineCardHeading>
            <TimelineCardText>
            <ul className="list-disc list-inside space-y-2">
            <li>Boxed solution prepared for sale</li>
            <li>Adopted across holding ecosystem </li>
            <li>Strategy shifts (again) – Prepared for superApp</li></ul>
          <br /> <br />
          
          </TimelineCardText>
  
             <TimelineCardHeading>Approach:</TimelineCardHeading>
             <TimelineCardText>
             <ol className="list-decimal list-inside space-y-2">
              <li>Adaptation on-the fly</li>
              <li>Design shifted from cost centre to commercial & governance asset</li>
         
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
          Trojan horse that shifts the way decisions make
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
                    'Create a unified design language + refine development stack',
                    'Shift designers from executors to strategic contributors',
                    'Prepare the design system as a boxed commercial product for CIS export',
                    'Convert design from execution to infrastructure that could be measured.',
                    'Win credibility and gain weight for design function in organization'

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
            //paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
            <h1 id="achievements" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Achievements</h1>

            <br />
            <ul className="list-decimal list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>Built scalable baseline for retail redesign and SuperApp, cutting delivery cost</li>
                <li>Established design as strategic authority and maturity driver</li>
                <li>Embedded DS into products commercialized externally</li>
                <li>Created business-attached maturity indicators used in governance and investment logic</li>
                <li>Collaborated with chairman, semi-chairmen, CxOs, established design-centered decision making process</li>
            </ul>
            <br />
            <br />
          </div>
          </section>

        <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(92px, calc(92px + (120px - 92px) * ((100vw - 320px) / (1920px - 320px))), 120px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            //paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <ImageContainer 
              src="/images/ds-documentation.png" 
              alt="chips documentation"
              caption="Documentation example in Figma — ready to migrate to storybook"
              width={1024}
              height={768}
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
            paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
            <h1 id="execution" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Execution</h1>
            <p className="text-l" style={{ fontWeight: 700 }}>Build a plane mid-air</p><br />
            <p className="text-l" >Inherited design framed as UI support with no scaling readiness. I reframed it into governance layer with monetizable capability. Volatile environment (mergers, sanctions, leadership turnover, post-COVID imbalance) made scaling impossible unless design became governance and enablement – so I built it that way</p>
            <br />
            <p className="text-l" style={{ fontWeight: 700 }}>Challenges</p><br />
            <ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>No C-level support or product leadership</li>
                <li>Fragmented tech stack and competing redesign streams</li>
                <li>Zero dedicated budget/team</li>
                <li>Misaligned business–tech communication</li>
                <li>Lack of product leadership in internal systems (CRM/BPM)</li>
                <li>Strategic incoherence across leadership tiers (3 pivots in 2 years)</li>
            </ul>
            <br />
            <br />
  
            <p className="text-l" style={{ fontWeight: 700 }}>Strategic moves</p>
            <br />
            <ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>Built bottom-up legitimacy by shipping measurable ROI (3× delivery speed,  ~14k savings per task)</li>
                <li>Formed design–engineering coalition to bypass org dependency </li>
                <li>Reframed DS from tooling to governance & scalability engine</li>
                <li>Secured leadership sponsorship and converted DS into an official product stream</li>
                <li>Shifted ownership — designers became product owners in internal streams</li>
                <li>Embedded DS into commercial offerings (export pipeline)</li>
                <li>Created partner-integration infrastructure enabling export scalability a physical usability lab as a CX hub</li>
           
            </ul>
            <br />
            <br /> 
            
        </div>
        </section>


        <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(92px, calc(92px + (120px - 92px) * ((100vw - 320px) / (1920px - 320px))), 120px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <ImageContainer 
              src="/images/guidelines.png" 
              alt="notion documentation"
              caption="Design system usage guidelines"
              width={1024}
              height={768}
            />
          </div>


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
            className={risksGridClassName}
            style={{
              gap: 'clamp(24px, calc(24px + (32px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 32px)',
            }}
          >
            {risksItems.map((risk, index) => (
              <Risks
                key={index}
                number={risk.number}
                riskDescription={risk.riskDescription}
                mitigationStrategy={risk.mitigationStrategy}
                outcome={risk.outcome}
              />
            ))}
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
            //paddingBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
          }}
        >

<h1 id="execution-internal" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Execution — internal operating model</h1>
<ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>Built DS enablement channel → increased DS transparency, 80+ active contributors in 3 months</li>
                <li>Introduced component governance workflow (design → engineering → QA → director alignment) → smoother component adoption</li>
                <li>Installed role framework for knowledge transfer within design streams → faster pattern evolution and component maintenance</li>
                <li>Consolidated editorial ownership, embedded UX writing into DS ops → design became accountable for company-wide voice (push, legal copy, UI text, comms)</li>
                <li>Transformed design review loop : Designer → DS Ops → UX Writer → Design Lead → Dev Lead → Product Owner → Design Director (optional) → reduced design cycles from 10 to 3</li>
            </ul>            <br />
            <br />

            <p className="text-l" style={{ fontWeight: 700 }}>Impact: Design shifted from execution craft to institutional function and became decision infrastructure driving cost, speed and quality</p><br />
            <br />
            <br />
          </div>
      </section>

      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(92px, calc(92px + (120px - 92px) * ((100vw - 320px) / (1920px - 320px))), 120px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <ImageContainer 
              src="/images/telegram-channel1.png" 
              alt="telegram channel"
              caption="Design system Telegram channel "
              width={1024}
              height={768}
            />
          </div>
          </div>
        </section>


         {/* Impact: Bsiness Section */}
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
            <div>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>82% DS adoption across major fintech product and internal banking streams, ~12% external ecosystem</li>
                <li>241% ROI by year 3 (~$7.7M annual saving, ~$2.3 uplift YoY) </li>
                <li>“Primary Button” alone unlocked ~$442K / year  </li>
                <li>Onboarding newcomers reduced 5 days → 70 minutes </li>
                <li>Design flow assembling time decreased by 60%</li>
                <li>Refactored 3 internal streams and SME products twice</li>
                <li>DS exported to CIS as commercial box solution  </li>
                <li>Tech stack reduced from 13 → 6 scalable stacks  </li>
              </ul>
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
            paddingBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
          }}
        >
          <h1 id="leadership-outcome" className="heading-xl" style={{ marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>My leadership outcome</h1>
          
          <div className="space-y-6">
            <div>
              <ul className="text-l space-y-2" style={{ listStyle: 'number', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li><b>I shifted influence from evangelism to inevitability.</b><br/> I embedded rules, mechanisms and accountability structures that enforced alignment without selling or convincing.</li><br />
                <li><b>I moved from needing sponsorship to generating it.</b><br/> Legitimacy came from outcomes, savings and export value, not titles or permission.</li><br />
                <li><b>I turned design into an economic actor.</b><br/> Design produced measurable ROI, enabled monetization, and became a revenue-bearing capability rather than a cost centre.</li><br />
                <li><b>I manufactured internal tolerance for ambiguity and discipline in chaos.</b><br/> The design system became an instrument of alignment, decision hygiene, and scale under volatile conditions.</li><br />
                <li><b>I translated culture into capital.</b><br/> What started as evangelism became a branding engine: Design became the company’s maturity narrative externally, attracting talent, credibility and investment interest — and that brand converted into adoption, budget and commercial opportunity.</li><br />
              </ul>
            </div>
          </div>
        </div>
      </section>
     


      {/* Footer Section */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
}



     




