'use client';

import Image from 'next/image';
import CustomLink from '@/components/CustomLink';
import HorizontalTimeline, { TimelineCardHeading, TimelineCardText } from '@/components/Timeline';
import LargeBulletList from '@/components/LargeBulletList';
import Risks from '@/components/Risks';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ScrollToTopButton from '@/components/ScrollToTopButton'; 
import ImageContainer from '@/components/ImageContainer';

export default function EndToEndTransformationPage() {
  const risksItems = [
    {
      number: "1",
      riskDescription: "Research became a bottleneck after adoption and started acting as a single source of vision instead of enabling business owners.",
      mitigationStrategy: "Launched an internal research academy for PMs, POs, designers, BAs, and marketers to redistribute research ownership.",
      outcome: "Enabled 12 teams to work with customer journey maps; 3 product teams adopted service blueprints as part of their core processes during the course"
    },
    {
      number: "2",
      riskDescription: "No research governance in place, leading to fragmented decision-making and lack of alignment across teams.",
      mitigationStrategy: "Established ResearchOps governance: recruiting, knowledge base, guides, output standards.",
      outcome: "Prevented further leaks; increased organizational trust toward research."
    },
    {
      number: "3",
      riskDescription: "Market signal: lack of research in the strategic decision-making process",
      mitigationStrategy: "Introduced a unified research workflow and shared reporting standards across organizations.",
      outcome: "Launched Research day initiatives and scaled product hypothesis check to 70 per event"
    },
    {
      number: "4",
      riskDescription: "Low adoption of insights in product and business decision-making.",
      mitigationStrategy: "Established a CX committee to formalize insight-driven decision-making.",
      outcome: "Standardized VoC and NPS metrics across business streams and embedded CX-driven changes directly into team backlogs."
    }
  ];
  
  const risksGridCols = risksItems.length > 3 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';

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
                  In-House UX Research Lab Across Two Banks and an Acquisition
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
              #ResearchOps, #Change management
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
            <h1 id="market-and-business-context" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Context</h1>
            <p className="text-l" style={{ fontWeight: 400 }}>  <b>2019 — Alfa Bank (Kazakhstan) </b> <br/>The UX market was at a very low maturity level. There was no formal research practice, no ResearchOps, and no governance. Design decisions were driven by delivery speed, not by user evidence. Customer-centered thinking was identified as a potential competitive advantage. The goal was to create the first in-house usability lab to introduce research as a capability and shift decision-making in discovery. </p> <br />

            <p className="text-l" style={{ fontWeight: 400 }}>  <b>2022 — Bank CenterCredit (post-acquisition) </b> <br/>After the acquisition, I inherited the lab in a fragmented state. The ambition expanded: the lab was repositioned as a strategic asset, with a long-term goal of becoming an external, revenue-generating capability.</p> <br />

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
      title: '2019 Alfa Bank — UX lab establishment', 
      content: (
        <>
        <TimelineCardHeading>Role: Research Lead</TimelineCardHeading>
          <TimelineCardText>
          Fragmented design maturity. SME focus. No research practice. No governance. Retail redesign created overlaps and decision conflicts. <br /> <br />
          </TimelineCardText>

          <TimelineCardHeading>Approach:</TimelineCardHeading>
          <TimelineCardText>
          <ul className="list-disc list-inside space-y-2">
            <li>Created a lab with a formal research practice</li>
            <li>Established ResearchOps and governance</li>
            <li>Introduced research as a capability</li>
            <li>Shifted decision-making in discovery</li>
           </ul>
          </TimelineCardText>
        </>
      )
    },
    { 
      title: '2020 Alfa Bank — Lab Launch ', 
      content: (
        <>
         <TimelineCardHeading>Role: Head of UX and UX Research</TimelineCardHeading>
          <TimelineCardText>
          COVID-19 lockdown during lab construction
           <br /> <br />
          
          </TimelineCardText>
          <TimelineCardHeading>Approach:</TimelineCardHeading>
          <TimelineCardText>
          <ol className="list-decimal list-inside space-y-2">
            <li>Continued lab build under lockdown constraints</li>
            <li>Scaled the team from 0 to 3</li>
            <li>Introduced ResearchOps governance: recruiting, knowledge base, guides, output standards</li>
         
           </ol>
          
          </TimelineCardText>
        </>
      )
    },
    { 
      title: '2022 — Bank CenterCredit — Acquisition & Strategy Reset', 
      content: (
        <>
         <TimelineCardHeading>Role: Head of UX and UX Research</TimelineCardHeading>
          <TimelineCardText>
          The lab was in poor condition and required a full rebuild and re-adoption.
           <br /> <br />     

           <TimelineCardHeading>Approach:</TimelineCardHeading>
           <ol className="list-decimal list-inside space-y-2">
            <li>Repositioned the research lab as a core discovery milestone during the merger</li>
            <li>Restored trust in research across product and business teams</li>
            <li>Rebuilt processes and adoption, not just the space</li>
           </ol>
          </TimelineCardText>
        </>
      )
    },

    { 
        title: '2024-2025 — Bank CenterCredit — Tech Upgrade', 
        content: (
          <>
            <TimelineCardHeading>Role: Director of product Design</TimelineCardHeading>
            <TimelineCardText>
            The lab was planned to evolve into an external asset within the holding.
            <br /> <br />
              
  
             <TimelineCardHeading>Approach:</TimelineCardHeading>
             <ol className="list-decimal list-inside space-y-2">
              <li>Upgrade lab to support advanced research methodologies needed for blue ocean exploration and external consulting revenue stream.</li>
              <li>Launch an internal research academy</li>
              <li>Prepare the lab for external research and consulting services</li>
         
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
          Move research upstream and own discovery
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
                    'Build research from zero — Establish research as a capability where it didn’t exist before.',
                    'Make research visible at leadership level — Turn research into a trusted input for decision-making.',
                    'Shift influence upstream — Use research to shape strategy and product direction early, not to validate outcomes.',
                    'Embed research into discovery — Connect research directly to design and early discovery stages.',
                    'Standardize and scale ResearchOps — Create repeatable processes to increase speed and quality.',
                    'Design for future expansion — Prepare the lab for advanced research and potential external use.'

                ]} 
                />
        </div>
        </section>

        <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(92px, calc(92px + (120px - 92px) * ((100vw - 320px) / (1920px - 320px))), 120px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            display: 'grid',
            placeItems: 'center', /* оба направления сразу */

            //paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
          <div style={{   margin: '0 auto', width: '1024px' }}>

          <ImageContainer 
  src="/images/facereading.png" 
  alt="Facereding example"
  caption="E-commerce client is feeling frustrated during usability test"
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
            <p className="text-l" style={{ fontWeight: 700 }}>  Structural gaps </p> <br />
            <ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>No discovery processes in either bank at the starting point</li>
                <li>Strategic decisions made without market or user evidence (Bank CenterCredit)</li>
                <li>No C-level sponsorship for research</li>
                <li>No budget for ResearchOps or lab setup</li>
            </ul>
            <br /> <br />
  
            <p className="text-l" style={{ fontWeight: 700 }}>  Enabled execution </p> <br />
            <ul className="list-disc list-inside space-y-2 text-l" style={{ fontWeight: 400, color: 'var(--main-white, #FFF8E9)', fontFamily: '"Alegreya Sans", sans-serif', fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>Built a physical usability lab as a CX hub</li>
                <li>Took ownership during the merger and advocated for the research function (2022)</li>
                <li>Accelerated design governance and embedded research governance alongside it</li>
                <li>Launched market and product research streams</li>
                <li>Partnered with Marketing to make research allocation transparent</li>
                <li>Mobilized cross-functional support: aligned with Art Direction on the visual concept, secured space with Administration, partnered with Marketing Insights to benchmark global UX labs</li>
                <li>Established and scaled Product & UX Research from 0 → 3</li>
            </ul>
            <br /> <br /> 
            
        </div>
        </section>


        <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingTop: 'clamp(92px, calc(92px + (120px - 92px) * ((100vw - 320px) / (1920px - 320px))), 120px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            display: 'grid',
            placeItems: 'center', /* оба направления сразу */

            //paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
          <div style={{   margin: '0 auto', width: '1024px' }}>

          <ImageContainer 
  src="/images/eyetracking.png" 
  alt="Eyetracking heatmap"
  caption="Eye-tracking research results for design system components — Table & Filters"
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
            className={`grid grid-cols-1 ${risksGridCols} items-start justify-items-center gap-8`}
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
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Alfa Bank</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>

                <li>Increased retail NPS by +13% after embedding user research into discovery and redesigning core mobile journeys.</li>
                <li>Established the UX Lab as a cultural and physical hub for the design team, marking the shift toward a product-oriented mindset.</li>
              </ul>
            </div>

            {/* Product Quality */}
            <div>
              <h2 className="text-l" style={{ fontWeight: 700, marginBottom: '16px' }}>Bank CenterCredit</h2>
              <ul className="text-l space-y-2" style={{ listStyle: 'disc', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li>Reduced researcher workload by 10% within two months by delegating basic customer interviews to designers.</li>
                <li>Launched an internal research academy: 33 participants from design, product, and research completed a 2-month MVP program.</li>
                <li>Upgraded the lab with eye-tracking equipment and more advanced testing protocols.</li>
                <li>Prepared the lab as a ready-to-launch standalone asset planned for 2026.</li>
              </ul>
            </div>




          </div>
        </div>
      </section>


      <section 
        className="w-full flex items-center justify-center"
        style={{
          paddingBottom: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
          height: 'clamp(800px, calc(800px + (1000px - 800px) * ((100vw - 320px) / (1920px - 320px))), 1000px)',
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
          I’m comfortable operating in uncertainty, resistance, and change
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

