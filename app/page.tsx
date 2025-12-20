'use client';

import Image from 'next/image';
import ExpertiseBlock from '@/components/ExpertiseBlock';
import AnimatedContainerLine from '@/components/AnimatedContainerLine';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const expertiseSectionRef = useRef(null);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section - Height based on content, positioned below header */}
      <section 
        className="w-full bg-dark-bg flex items-end md:items-center justify-center relative h-[100dvh] pb-[env(safe-area-inset-bottom)] overflow-x-clip"
      >
        <div className="max-w-[1692px] w-full mx-auto relative h-full flex flex-col overflow-x-clip">
          <div className="w-full flex flex-col md:flex-row items-end md:items-center justify-center md:justify-end flex-1">
          <div 
            className="flex flex-col justify-end md:justify-center items-center flex-shrink-0 w-full md:w-auto h-full"
            style={{
              display: 'flex',
              // Responsive width: 100% on small screens (iPhone SE 320px, iPhone SE 375px), scales to 1053px at 1920px
              width: 'clamp(320px, 100%, 1053px)',
              // Mobile: full height to fill available space, scales on larger screens
              height: '100%',
              minHeight: 'auto',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
              boxSizing: 'border-box',
            }}
          >
            {/* Mobile Photo Gallery - Above title, no overlap */}
            <div className="block md:hidden relative w-full flex-1 overflow-x-clip" style={{ width: '100%', height: '100%' }}>
              {/* Photo 1 - Top-left */}
              <Image
                src="/images/avatar1.png"
                alt="Avatar 1"
                width={178}
                height={178}
                className="absolute pointer-events-none z-20"
                style={{
                  // Responsive positioning: using vw units for better mobile scaling
                  top: 'clamp(2vw, 5.13vw, 20px)',
                  left: 'clamp(2vw, 5.13vw, 20px)',
                  // Responsive sizing: using vw units for proportional scaling
                  width: 'clamp(16vw, 20.5vw, 24vw)',
                  height: 'clamp(16vw, 20.5vw, 24vw)',
                  borderRadius: '27px',
                  objectFit: 'cover',
                }}
              />
              {/* Photo 2 - Middle */}
              <Image
                src="/images/avatar2.png"
                alt="Avatar 2"
                width={182}
                height={182}
                className="absolute pointer-events-none z-20"
                style={{
                  // Centered vertically and horizontally
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  // Responsive sizing: using vw units for proportional scaling
                  width: 'clamp(15vw, 19.23vw, 22vw)',
                  height: 'clamp(15vw, 19.23vw, 22vw)',
                  borderRadius: '43px',
                  objectFit: 'cover',
                }}
              />
              {/* Photo 3 - Lower-right */}
              <Image
                src="/images/avatar3.png"
                alt="Avatar 3"
                width={194}
                height={194}
                className="absolute pointer-events-none z-20"
                style={{
                  // Responsive positioning: using vw units for better mobile scaling
                  bottom: 'clamp(2vw, 5.13vw, 20px)',
                  right: 'clamp(2vw, 5.13vw, 20px)',
                  // Responsive sizing: using vw units for proportional scaling
                  width: 'clamp(18vw, 21.37vw, 25vw)',
                  height: 'clamp(18vw, 21.37vw, 25vw)',
                  borderRadius: '50%',
                  objectFit: 'cover',
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
          <AnimatedContainerLine position="left" showCaption={false} diamondStopAt="middle" />

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
    </main>
  );
}