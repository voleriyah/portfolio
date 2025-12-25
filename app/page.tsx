'use client';

import Image from 'next/image';
import ExpertiseBlock from '@/components/ExpertiseBlock';
import AnimatedContainerLine from '@/components/AnimatedContainerLine';
import AnimatedGasfisHeader from '@/components/AnimatedGasfisHeader';
//import CaseCard from '@/components/CaseCard';
import ValueListItem from '@/components/ValueListItem';
import CustomLink from '@/components/CustomLink';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import CaseCardTest from '@/components/CaseCardTest';
import VerticalConnectorLine from '@/components/VerticalConnectorLine';

export default function Home() {
  const expertiseSectionRef = useRef(null);
  const router = useRouter();
  

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section - Height based on content, positioned below header */}
      <section 
        className="w-full bg-dark-bg flex items-end md:items-center justify-center relative pb-[env(safe-area-inset-bottom)] overflow-x-clip"
      >
        <div className="max-w-[1692px] w-full mx-auto relative flex flex-col overflow-x-clip">
          <div className="w-full flex flex-col md:flex-row items-end md:items-center justify-center md:justify-end">
          <div 
            className="flex flex-col justify-end md:justify-center items-center flex-shrink-0 w-full md:w-auto"
            style={{
              display: 'flex',
              // Responsive width: 100% on small screens (iPhone SE 320px, iPhone SE 375px), scales to 1053px at 1920px
              width: 'clamp(320px, 100%, 1053px)',
              minHeight: 'auto',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
              boxSizing: 'border-box',
            }}
          >
            {/* Mobile Photo Gallery - Combined image */}
            <div className="block md:hidden relative w-full overflow-x-clip" style={{ width: '100%', height: '332px' }}>
              <Image
                src="/images/avatars-mobile2.png"
                alt="Avatars combined"
                width={500}
                height={332}
                className="absolute pointer-events-none z-20"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Content wrapper for title and subtitle */}
            <div 
              className="flex flex-col relative z-0"
              style={{
                display: 'flex',
                // Width scales from 320px (mobile) to 1053px at 1920px (benchmark)
                width: 'clamp(320px, calc(320px + (1053px - 320px) * ((100vw - 320px) / (1920px - 320px))), 1053px)',
                // Padding: 0px on mobile, scales to specified values at 1920px (benchmark)
                paddingTop: 'clamp(0px, calc(0px + (99px - 0px) * ((100vw - 320px) / (1920px - 320px))), 99px)',
                paddingRight: 'clamp(0px, calc(0px + (92px - 0px) * ((100vw - 320px) / (1920px - 320px))), 92px)',
                paddingBottom: '92px',
                paddingLeft: 'clamp(0px, calc(0px + (105px - 0px) * ((100vw - 320px) / (1920px - 320px))), 105px)',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                boxSizing: 'border-box',
                zIndex: 0,
              }}
              >
              <div className="relative z-0">
                <h1 className="font-erica uppercase self-stretch"
                  style={{
                    color: '#FFF8E9',
                    textAlign: 'justify',
                    fontFamily: '"Erica One"',
                    // Responsive font size: scales from 40px (iPhone SE 320px) to 48px (iPhone XR 414px), then to 108px at 1920px
                    fontSize: 'clamp(40px, calc(40px + (108px - 40px) * ((100vw - 320px) / (1920px - 320px))), 108px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    // Responsive line height: scales proportionally from 72px to 87px to 147px
                    lineHeight: 'clamp(72px, calc(72px + (147px - 72px) * ((100vw - 320px) / (1920px - 320px))), 147px)',
                    textTransform: 'uppercase',
                    alignSelf: 'stretch',
                  }}>
                  Director&nbsp;<span style={{ color: '#F62F20', fontFamily: '"Erica One"', fontSize: 'clamp(40px, calc(40px + (108px - 40px) * ((100vw - 320px) / (1920px - 320px))), 108px)', fontStyle: 'normal', fontWeight: 400, lineHeight: 'clamp(72px, calc(72px + (147px - 72px) * ((100vw - 320px) / (1920px - 320px))), 147px)', textTransform: 'uppercase' }}>of</span> product design&nbsp;<span style={{ color: '#F62F20', fontFamily: '"Erica One"', fontSize: 'clamp(40px, calc(40px + (108px - 40px) * ((100vw - 320px) / (1920px - 320px))), 108px)', fontStyle: 'normal', fontWeight: 400, lineHeight: 'clamp(72px, calc(72px + (147px - 72px) * ((100vw - 320px) / (1920px - 320px))), 147px)', textTransform: 'uppercase' }}>&</span> research
                </h1>
                
                {/* Red circle - vertically centered with PRODUCT line, positioned on the right */}
                <div 
                  className="absolute bg-primary-red rounded-full"
                  style={{
                    width: 'clamp(12px, calc(12px + (16px - 12px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
                    height: 'clamp(12px, calc(12px + (16px - 12px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
                    // PRODUCT line is on second line: lineHeight + (lineHeight / 2) - (circle_height / 2)
                    // Simplified: 1.5 * lineHeight - circle_height/2
                    // lineHeight: 72px-147px, circle: 12px-16px
                    // Result: 108px-8px=100px (min) to 220.5px-8px=212.5px (max)
                    top: 'calc(1.5 * clamp(72px, calc(72px + (147px - 72px) * ((100vw - 320px) / (1920px - 320px))), 147px) - clamp(12px, calc(12px + (16px - 12px) * ((100vw - 320px) / (1920px - 320px))), 16px) / 2)',
                    right: '0px', // Position on the right side
                  }}
                />
                
                {/* Rotating diamond - same size as circle, vertically centered with RESEARCH line (4th line) */}
                <motion.div
                  className="absolute bg-primary-red"
                  style={{
                    width: 'clamp(12px, calc(12px + (16px - 12px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
                    height: 'clamp(12px, calc(12px + (16px - 12px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
                    // RESEARCH is on 4th line: 3.5 * lineHeight - (diamond_height / 2)
                    top: 'calc(3.5 * clamp(72px, calc(72px + (147px - 72px) * ((100vw - 320px) / (1920px - 320px))), 147px) - clamp(12px, calc(12px + (16px - 12px) * ((100vw - 320px) / (1920px - 320px))), 16px) / 2)',
                    right: '0px',
                    transformOrigin: 'center',
                  }}
                  initial={{ rotate: 45 }}
                  animate={{ rotate: [45, 405, 405, 45] }}
                  transition={{ 
                    duration: 4, 
                    times: [0, 0.5, 0.75, 1],
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div 
                className="flex flex-col self-stretch"
                style={{
                  // Gap between subtitle paragraphs (smaller than title-to-subtitle gap)
                  gap: 'clamp(8px, calc(8px + (16px - 8px) * ((100vw - 320px) / (1920px - 320px))), 16px)',
                }}
              >
              <p 
                className="self-stretch"
                style={{
                  color: 'var(--main-white, #FFF8E9)',
                  textAlign: 'justify',
                  fontFamily: '"Alegreya Sans"',
                // Responsive font size: scales from 20px (iPhone SE 320px) to 24px (iPhone XR 414px), then to 34px at 1920px
                fontSize: 'clamp(20px, calc(20px + (34px - 20px) * ((100vw - 320px) / (1920px - 320px))), 34px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  // Line height: normal (typically ~1.2x font size)
                  lineHeight: 'normal',
                  textTransform: 'uppercase',
                  alignSelf: 'stretch',
                  // Margin-top: scales from 16px mobile to 64px at 1920px (benchmark)
                  marginTop: 'clamp(16px, calc(16px + (64px - 16px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
                }}>
                I work with complex systems under scale and regulatory pressure, where good design decisions tend to break first.
              </p>
              <p 
                className="self-stretch"
                style={{
                  color: 'var(--main-white, #FFF8E9)',
                  textAlign: 'justify',
                  fontFamily: '"Alegreya Sans"',
                // Responsive font size: scales from 20px (iPhone SE 320px) to 24px (iPhone XR 414px), then to 34px at 1920px
                fontSize: 'clamp(20px, calc(20px + (34px - 20px) * ((100vw - 320px) / (1920px - 320px))), 34px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  // Line height: normal (typically ~1.2x font size)
                  lineHeight: 'normal',
                  textTransform: 'uppercase',
                  alignSelf: 'stretch',
                }}>
                I help organizations turn fragile design decisions into durable systems.
              </p>
            </div>
            </div>
          </div>
          </div>
          
          {/* Photo gallery - Desktop versions only (mobile photos moved above title) */}
          {/* Photo 1 - Rounded square: left side on desktop */}
          <Image
            src="/images/avatar1.png"
            alt="Avatar 1"
            width={178}
            height={178}
            className="hidden md:block absolute pointer-events-none z-20"
            style={{
              top: '200px',
              // Margin left: 0px at 320px, 30px at 1024px, then scales to 324px at 1920px  
              left: 'clamp(0px, max(min(calc(0px + (30px - 0px) * ((100vw - 320px) / (1024px - 320px))), 30px), calc(30px + (324px - 30px) * ((100vw - 1024px) / (1920px - 1024px)))), 324px)',
              // Width: scales from 100px at 320px to 178px at 1920px (benchmark)
              width: 'clamp(100px, calc(100px + (178px - 100px) * ((100vw - 320px) / (1920px - 320px))), 178px)',
              // Height: scales from 100px at 320px to 178px at 1920px (benchmark)
              height: 'clamp(100px, calc(100px + (178px - 100px) * ((100vw - 320px) / (1920px - 320px))), 178px)',
              borderRadius: '27px',
              objectFit: 'cover',
            }}
          />
          
          {/* Photo 2 - Diamond shape: at section boundary on desktop */}
          <Image
            src="/images/avatar2.png"
            alt="Avatar 2"
            width={182}
            height={182}
            className="hidden md:block absolute pointer-events-none z-20"
            style={{
              bottom: '0px',
              // Margin left: 0px at 320px, 30px at 1024px, then scales to 324px at 1920px  
              left: 'clamp(0px, max(min(calc(0px + (30px - 0px) * ((100vw - 320px) / (1024px - 320px))), 30px), calc(30px + (324px - 30px) * ((100vw - 1024px) / (1920px - 1024px)))), 324px)',
              // Width: scales from 105px at 320px to 182px at 1920px (benchmark)
              width: 'clamp(105px, calc(105px + (182px - 105px) * ((100vw - 320px) / (1920px - 320px))), 182px)',
              // Height: scales from 105px at 320px to 182px at 1920px (benchmark)
              height: 'clamp(105px, calc(105px + (182px - 105px) * ((100vw - 320px) / (1920px - 320px))), 182px)',
              borderRadius: '43px',
              objectFit: 'cover',
              transform: 'translateY(50%)',
            }}
          />
          
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise-section" ref={expertiseSectionRef} className="w-full bg-primary-red relative">
        {/* Container for Photo 3 and title */}
        <div className="max-w-[1692px] mx-auto relative">
          {/* Photo 3 - Desktop version: bottom left in expertise section */}
          <Image
            src="/images/avatar3.png"
            alt="Avatar 3"
            width={194}
            height={194}
            className="hidden md:block absolute pointer-events-none z-20"
            style={{
              bottom: '200px',
              // Margin left: 0px at 320px, 30px at 1024px, then scales to 324px at 1920px  
              left: 'clamp(0px, max(min(calc(0px + (30px - 0px) * ((100vw - 320px) / (1024px - 320px))), 30px), calc(30px + (324px - 30px) * ((100vw - 1024px) / (1920px - 1024px)))), 324px)',
              // Width: scales from 115px at 320px to 194px at 1920px (benchmark)
              width: 'clamp(115px, calc(115px + (194px - 115px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
              // Height: scales from 115px at 320px to 194px at 1920px (benchmark)
              height: 'clamp(115px, calc(115px + (194px - 115px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          
          {/* Title container - 1692px width at 1920px desktop, responsive */}
          <div 
            className="relative w-full mx-auto"
            style={{
              // Width: 100% on mobile, scales to 1692px at 1920px (benchmark)
              maxWidth: '1692px',
            // Height: 462px on mobile, scales to 1033px at 1920px (benchmark)
            height: 'clamp(462px, calc(462px + (1033px - 462px) * ((100vw - 320px) / (1920px - 320px))), 1033px)',
          }}
        >
          {/* Animated Vertical Line - Diamond stops near bottom */}
          <AnimatedContainerLine diamondStopAt="bottom" />
          {/* Title Image - aligned left on mobile, right on desktop */}
          <div 
            className="absolute top-0 left-0 md:left-auto md:right-0 h-full flex items-center expertise-title-image-wrapper"
          >
            <Image
              src="/images/expertise-title.svg"
              alt="Expertise"
              width={1268}
              height={1033}
              priority
              style={{
                // Width: 1268px at 1920px (benchmark), scales responsively
                width: 'clamp(240px, calc(240px + (1268px - 240px) * ((100vw - 320px) / (1920px - 320px))), 1268px)',
                // Height: 1033px at 1920px (benchmark), scales responsively
                height: 'clamp(200px, calc(200px + (1033px - 200px) * ((100vw - 320px) / (1920px - 320px))), 1033px)',
              }}
            />
          </div>
        </div>
        </div>

        {/* New Block - Responsive grid: 1 column mobile, 2 columns tablet, 4 columns desktop */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full expertise-blocks-grid gap-[3px] border-[3px] border-dark-brown"
          style={{
            // Width: full width on mobile/tablet
            maxWidth: '100%',
            minHeight: 'clamp(520px, calc(520px + (662px - 520px) * ((100vw - 1024px) / (1920px - 1024px))), 662px)',
            alignItems: 'stretch',
            backgroundColor: '#342927', // dark-brown background for grid to show gaps as divider lines
          }}
        >
          <ExpertiseBlock
            title="Design leadership in complex organizations"
            bullets={[
              "Design-driven change management",
              "Research & Design-led transformation and governance",
              "Stakeholder management"
            ]}
          />
          <ExpertiseBlock
            title="Product vision under uncertainty and constraints"
            bullets={[
              "JTBD Segmentation & Product / Market Fit search",
              "Strategic product vision for complex Fintech and SuperApp products",
              "Unit economics & Funnel Optimization"
            ]}
          />
          <ExpertiseBlock
            title="Design Operations & Governance"
            bullets={[
              "Design systems development & implementation",
              "Team scaling & management up to 50 including managers",
              "Design HR Brand establishment & development"
            ]}
          />
          <ExpertiseBlock
            title="Research Operations & Governance"
            bullets={[
              "Research Labs building & upgrading",
              "Unmoderated research scaling",
              "Running Product & UX research as a strategic lever"
            ]}
          />
        </div>

        {/* New Wrapper - 1692px width, 664px height */}
        <div 
          className="relative w-full mx-auto"
          style={{
            width: '1692px',
            height: '664px',
            maxWidth: '100%',
          }}
        >
          {/* Animated Vertical Line - Left aligned, Diamond stops in the middle */}
          <AnimatedContainerLine position="left" showCaption={false} diamondStopAt="middle"  />

          {/* Content Container - 64px gap from line (responsive, 1920px benchmark), vertically centered */}
          <div 
            className="flex items-center pr-6 md:pr-0" 
            style={{ 
              // Gap: scales from 24px at 320px to 64px at 1920px (benchmark)
              // Line is at left-16 (64px) and is 3px wide, so line ends at 67px
              // Content starts at: 67px + gap
              marginLeft: 'clamp(91px, calc(91px + (131px - 91px) * ((100vw - 320px) / (1920px - 320px))), 131px)',
              minHeight: '100%' 
            }}
          >
            <div 
              className="flex flex-col"
              style={{
                width: '539px',
                alignItems: 'flex-start',
                gap: '44px',
              }}
            >
            {/* Title */}
            <h2 
              className="font-alegreya"
              style={{
                color: 'var(--main-medium-gray, #342927)',
                fontFamily: '"Alegreya Sans"',
                // Font size: scales from 24px at 320px to 32px at 1920px (benchmark)
                fontSize: 'clamp(24px, calc(24px + (32px - 24px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                // Letter spacing: scales from -0.24px at 320px to -0.32px at 1920px (benchmark)
                letterSpacing: 'clamp(-0.24px, calc(-0.24px + (-0.32px - -0.24px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)',
              }}
            >
              How can I help
            </h2>

            {/* Numbered List */}
            <ol 
              className="flex flex-col list-decimal list-inside font-alegreya font-extrabold text-dark-brown tracking-tighter-sm lg:tracking-tighter-lg"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                // Font size: scales from 24px at 320px to 36px at 1920px (benchmark)
                fontSize: 'clamp(24px, calc(24px + (36px - 24px) * ((100vw - 320px) / (1920px - 320px))), 36px)',
                fontStyle: 'normal',
                lineHeight: 'normal',
                // Letter spacing: scales from -0.24px at 320px to -0.36px at 1920px (benchmark)
                letterSpacing: 'clamp(-0.24px, calc(-0.24px + (-0.36px - -0.24px) * ((100vw - 320px) / (1920px - 320px))), -0.36px)',
                alignSelf: 'stretch',
              }}
            >
              <li>Design management</li>
              <li>DesignOps at series B, C stratups</li>
              <li>Design & Research at corporations</li>
              <li>Design leaders mentorship</li>
              <li>Fractional design leadership</li>
            </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases-section" className="w-full bg-dark-brown relative">
        {/* Red Line - Absolute positioned from top of title block to start of first case card */}
        <div 
          className="absolute top-0 w-[3px] pointer-events-none z-10"
          style={{
            left: 'calc(max(0px, calc((100% - 1692px) / 2)) + clamp(24px, calc(24px + (44px - 24px) * ((100vw - 1024px) / (1920px - 1024px))), 44px))',
            height: 'calc(clamp(350px, calc(350px + (548px - 350px) * ((100vw - 320px) / (1920px - 320px))), 548px) + clamp(40px, calc(40px + (350px - 40px) * ((100vw - 320px) / (1920px - 320px))), 350px))',
          }}
        >
          <AnimatedContainerLine position="left" showCaption={false} diamondStopAt="bottom" color="#F62F20" />
        </div>
        {/* Title Block */}
        <div 
          className="w-full mx-auto relative"
          style={{
            // Width: 100% on mobile, max 1692px at 1920px (benchmark)
            maxWidth: '1692px',
          }}
        >
          <AnimatedGasfisHeader />
        </div>
        <div 
  className="w-full mx-auto relative flex items-center justify-start"
  style={{
    maxWidth: '1692px',
    paddingTop: 'clamp(40px, calc(40px + (350px - 40px) * ((100vw - 320px) / (1920px - 320px))), 350px)',
   // paddingBottom: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
    paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
    paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
  }}
>

{/* First Case Block */}
<CaseCardTest
  size="large"
  title="End-to-End Transformation of discovery process"
  description="0 → 1 Design & research expertise integration across orgs enabled by Retail App Redesign"
  tags={`#Design governance\n#Design-driven change management`}
  buttonText="Read the case"
  imageSrc="/images/bcc-screen.png"
  imageAlt="Case study - Retail App Redesign"
  showVerticalLine={false} 
  showHorizontalLine={true}
  desktopImageSrc="/images/bcc-screen.png"
  desktopImageAlt="iPhone screen"
  desktopImageWidth={356}
  desktopImageHeight={721}
  onButtonClick={() => router.push('/cases/end-to-end-transformation')}
/></div>
<VerticalConnectorLine align="right" />
{/* Second Case Block - Выровнен по правому краю */}
<div 
  className="w-full mx-auto relative flex items-center justify-start"
  style={{
    maxWidth: '1692px',
    paddingTop: 'clamp(40px, calc(40px + (60px - 40px) * ((100vw - 320px) / (1920px - 320px))), 60px)',
    //paddingBottom: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
    paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
    paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
  }}
>
  <CaseCardTest
    size="large"
    title="In-House UX Research Lab Across Two Banks and an Acquisition"
    description="Research governance establishment with eye-tracking Lab"
    tags={`#ResearchOps \n#Change management`}
    buttonText="Read the case"
    imageSrc="/images/lab-image.png"
    imageAlt="Case study - UX Research Lab"
showVerticalLine={false} showHorizontalLine={true} 
    desktopImageSrc="/images/lab-image.png"
    desktopImageAlt="UX Research Lab"
    desktopImageWidth={632}
    desktopImageHeight={449}
    align="right"
    onButtonClick={() => {}}
  />
</div>

<VerticalConnectorLine align="left"  />
{/* Third Case Block */}
<div 
  className="w-full mx-auto relative flex items-center justify-start"
  style={{
    maxWidth: '1692px',
   // paddingTop: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
    //paddingBottom: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
    paddingTop: 'clamp(40px, calc(40px + (60px - 40px) * ((100vw - 320px) / (1920px - 320px))), 60px)',
    paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
    paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
  }}
>
  <CaseCardTest
    size="large"
    title="Design system establishing & scaling"
    description="Governance Engine and Strategic Infrastructure with sustaining ROI"
    tags={`#Design governance \n#Change management`}
    buttonText="Read the case"
    imageSrc="/images/ds-image.png"
    imageAlt="Case study - Design System"

    desktopImageSrc="/images/ds-image.png"
    desktopImageAlt="Design System"
    desktopImageWidth={632}
    desktopImageHeight={499}
    desktopImageStyle={{ top: '40%' }}
    onButtonClick={() => {}}
  />
</div>
<VerticalConnectorLine align="right" showDiamond={false} />
      </section>

      {/* Motto Section */}
      <section className="w-full bg-cream py-16 md:py-24 lg:py-32 relative" style={{ paddingTop: '0px' }}>
        <div 
          className="w-full mx-auto px-4 md:px-6 lg:px-8 relative"
          style={{
            maxWidth: '1692px',
            paddingTop: '400px',
            paddingBottom: '400px',
          }}
        >


          {/* Animated Line - Positioned 300px from right on desktop, responsive */}
         
          <div
            className="absolute top-0 pointer-events-none z-10"
            style={{
              height: '100%',
              right: 'clamp(16px, calc(16px + (300px - 16px) * ((100vw - 320px) / (1920px - 320px))), 300px)',
            }}
          >
            <div className="motto-line-container" style={{ position: 'relative', width: '3px', height: '19%', top:'0' }}>
              <AnimatedContainerLine position="right" showCaption={false} diamondStopAt="bottom" />
            </div>
          </div>

          {/* Desktop version (>=768px) */}
          <p
            className="hidden md:block"
            style={{
              color: 'var(--main-medium-gray, #342927)',
              textAlign: 'center',
              fontFamily: '"Alegreya Sans"',
              fontSize: 'clamp(43px, calc(43px + (128px - 43px) * ((100vw - 320px) / (1920px - 320px))), 128px)',
              fontStyle: 'normal',
              fontWeight: 800,
              lineHeight: 'normal',
              letterSpacing: 'clamp(-0.43px, calc(-0.43px + (-1.28px - -0.43px) * ((100vw - 320px) / (1920px - 320px))), -1.28px)',
              textTransform: 'uppercase',
            }}
          >
            I TURN{' '}
            <span style={{ color: 'var(--main-red-accent, #F62F20)', fontStyle: 'italic' }}>DESIGN</span>
            {' '}INTO<br />
            A STRATEGIC{' '}
            <span style={{ color: 'var(--main-red-accent, #F62F20)', fontStyle: 'italic' }}>LEVER</span>
            <br />
            ACROSS TEAMS AND PRODUCTS<br />
            THROUGH{' '}
            <span style={{ color: 'var(--main-red-accent, #F62F20)', fontStyle: 'italic' }}>CLEAR VISION</span>
            {' '}&<br />
            RESEARCH OUTCOME
          </p>

          {/* Mobile version (<768px) */}
          <p
            className="block md:hidden"
            style={{
              color: 'var(--main-medium-gray, #342927)',
              textAlign: 'center',
              fontFamily: '"Alegreya Sans"',
              fontSize: '43px',
              fontStyle: 'normal',
              fontWeight: 800,
              lineHeight: 'normal',
              letterSpacing: '-0.43px',
              textTransform: 'uppercase',
            }}
          >
            I TURN{' '}
            <span style={{ color: 'var(--main-red-accent, #F62F20)', fontStyle: 'italic' }}>DESIGN</span>
            <br />
            INTO A STRATEGIC<br />
            <span style={{ color: 'var(--main-red-accent, #F62F20)', fontStyle: 'italic' }}>LEVER</span>
            <br />
            ACROSS TEAMS<br />
            AND PRODUCTS<br />
            THROUGH<br />
            <span style={{ color: 'var(--main-red-accent, #F62F20)', fontStyle: 'italic' }}>CLEAR VISION</span>{' '}
            <span style={{ color: 'var(--main-medium-gray, #342927)', fontStyle: 'italic' }}>&</span>
            <br />
            RESEARCH<br />
            <span style={{ color: 'var(--main-red-accent, #F62F20)', fontStyle: 'italic' }}>OUTCOME</span>
          </p>
        </div>
        <div
            className="absolute bottom-0 pointer-events-none z-10"
            style={{
              height: '100%',
              left: 'clamp(16px, calc(16px + (300px - 16px) * ((100vw - 320px) / (1920px - 320px))), 300px)',
              top: '70%',
            }}
          >
            <div className="motto-line-container" style={{ position: 'relative', width: '3px', height: '30%', bottom:'0' }}>
              <AnimatedContainerLine position="left" showCaption={false} diamondStopAt="bottom" />
            </div>
          </div>

      </section>

      {/* Values Section */}
      <section className="w-full bg-cream py-16 md:py-24 lg:py-32">
        
        
        <div
          className="w-full mx-auto px-4 md:px-6 lg:px-8"
          style={{
            maxWidth: '1692px',
            padding: 'clamp(24px, calc(24px + (80px - 24px) * ((100vw - 320px) / (1920px - 320px))), 80px)',
            paddingTop: '0px',
          }}
        >
          {/* Value List Items */}
          <div
            className="flex flex-col"
            style={{
              // Gap: 44px on mobile, scales to 100px (1920px desktop)
              gap: 'clamp(44px, calc(44px + (100px - 44px) * ((100vw - 320px) / (1920px - 320px))), 100px)',
            }}
          >
               {/* Section Title + Link */}
               <div 
  className="flex flex-row justify-between items-center md:justify-start md:gap-[44px]"
  style={{
    marginBottom: 'clamp(44px, calc(44px + (80px - 44px) * ((100vw - 320px) / (1920px - 320px))), 80px)',
  }}
>

  <h2
    style={{
      color: 'var(--main-medium-gray, #342927)',
      fontFamily: '"Alegreya Sans"',
      fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
      fontWeight: 700,
      lineHeight: 'normal',
      letterSpacing: 'clamp(-0.18px, calc(-0.18px + (-0.32px - -0.18px) * ((100vw - 320px) / (1920px - 320px))), -0.32px)',
    }}
  >
    My leadership values
  </h2>
  
  <CustomLink href="https://www.linkedin.com/in/voleriyah" iconType="internal">
    Read more
  </CustomLink>
</div>
            <ValueListItem
              number="1"
              title="System first"
              subtitle="Systems over fragments"
              description="Designing decision-making, not isolated artifacts"
            />

            <ValueListItem
              number="2"
              title="Clarity win"
              subtitle="Clear bets, not feature soup"
              description=" Strategy is choosing what not to build"
            />

            <ValueListItem
              number="3"
              title="Power in ambiguity"
              subtitle="Constraints as design material"
              description="Regulation, scale and risk are inputs"
            />

            <ValueListItem
              number="4"
              title="Honesty"
              subtitle="Honest feedback, low drama"
              description="Clarity beats comfort in leadership"
            />

            <ValueListItem
              number="5"
              title="No heroism"
              subtitle="Replace heroes with systems"
              description="Sustainable teams shouldn't rely on individual endeavors"
            />

            <ValueListItem
              number="6"
              title="Prove me right"
              subtitle="Evidence before ego"
              description="Research, data, and reality over opinions"
            />
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
          fontFamily: '"Alegreya Sans"',
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