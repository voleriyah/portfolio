'use client';

import ScrollToTopButton from '@/components/ScrollToTopButton'; 
import Footer from '@/components/Footer';
import { useRef, useState, useEffect } from 'react';
import CaseCardTest from '@/components/CaseCardTest';
import VerticalConnectorLine from '@/components/VerticalConnectorLine';
import AnimatedContainerLine from '@/components/AnimatedContainerLine';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function CasesPage() {
  const router = useRouter();
  
  // Title and tags animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showTags, setShowTags] = useState(false);
  
  // Case card 1 animation states
  const [showCaseCard1, setShowCaseCard1] = useState(false);
  const caseCard1Ref = useRef<HTMLDivElement>(null);
  
  // First vertical line animation state (after card 1)
  const [showVerticalLine1, setShowVerticalLine1] = useState(false);
  
  // Case card 2 animation states
  const [showCaseCard2, setShowCaseCard2] = useState(false);
  const caseCard2Ref = useRef<HTMLDivElement>(null);
  
  // Case card 3 animation states
  const [showCaseCard3, setShowCaseCard3] = useState(false);
  const caseCard3Ref = useRef<HTMLDivElement>(null);

  // Title and tags animation on mount
  useEffect(() => {
    setShowTitle(true);
    setTimeout(() => {
      setShowTags(true);
    }, 400);
  }, []);

  // Case card 1 animation - triggered by scroll event
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkScrollPosition = () => {
      if (!caseCard1Ref.current) return;
      
      const windowHeight = window.innerHeight;
      const rect = caseCard1Ref.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate visible portion
      const visibleTop = Math.max(0, -elementTop);
      const visibleBottom = Math.min(elementHeight, windowHeight - elementTop);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visiblePercentage = elementHeight > 0 ? (visibleHeight / elementHeight) * 100 : 0;
      
      // 5% visible - vertical line appears
      if (visiblePercentage >= 5) {
        setShowVerticalLine1((prev) => {
          if (!prev) {
            console.log('Vertical line 1 triggered at', visiblePercentage.toFixed(1), '% visible');
          }
          return true;
        });
      }
      
      // 10% visible - card appears
      if (visiblePercentage >= 10) {
        setShowCaseCard1((prev) => {
          if (!prev) {
            console.log('Card 1 appeared at', visiblePercentage.toFixed(1), '% visible');
          }
          return true;
        });
      }
      
    };
    
    // Initial check
    checkScrollPosition();
    
    // Add scroll listener with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  // Case card 2 animation - triggered by scroll event
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkScrollPosition = () => {
      if (!caseCard2Ref.current) return;
      
      const windowHeight = window.innerHeight;
      const rect = caseCard2Ref.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate visible portion
      const visibleTop = Math.max(0, -elementTop);
      const visibleBottom = Math.min(elementHeight, windowHeight - elementTop);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visiblePercentage = elementHeight > 0 ? (visibleHeight / elementHeight) * 100 : 0;
      
      // 10% visible - card appears
      if (visiblePercentage >= 10) {
        setShowCaseCard2((prev) => {
          if (!prev) {
            console.log('Card 2 appeared at', visiblePercentage.toFixed(1), '% visible');
          }
          return true;
        });
      }
    };
    
    // Initial check
    checkScrollPosition();
    
    // Add scroll listener with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  // Case card 3 animation - triggered by scroll event
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkScrollPosition = () => {
      if (!caseCard3Ref.current) return;
      
      const windowHeight = window.innerHeight;
      const rect = caseCard3Ref.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate visible portion
      const visibleTop = Math.max(0, -elementTop);
      const visibleBottom = Math.min(elementHeight, windowHeight - elementTop);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visiblePercentage = elementHeight > 0 ? (visibleHeight / elementHeight) * 100 : 0;
      
      // 10% visible - card appears
      if (visiblePercentage >= 10) {
        setShowCaseCard3((prev) => {
          if (!prev) {
            console.log('Card 3 appeared at', visiblePercentage.toFixed(1), '% visible');
          }
          return true;
        });
      }
    };
    
    // Initial check
    checkScrollPosition();
    
    // Add scroll listener with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark-bg" style={{ paddingTop: 'clamp(92px, calc(92px + (124px - 92px) * ((100vw - 320px) / (1920px - 320px))), 124px)' }}>
      {/* Title Section */}
      <section className="w-full">
        <div className="w-full mx-auto"
          style={{
            maxWidth: '1692px',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
          }}
        >
      <motion.h1 
        className="font-erica uppercase self-stretch"
        initial={{ opacity: 0 }}
        animate={{ opacity: showTitle ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
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
        }}
      >
        Cases
      </motion.h1>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases-section" className="w-full bg-dark-bg relative">
       
        <div 
          className="w-full mx-auto relative"
          style={{
            maxWidth: '1692px',
            paddingTop: 'clamp(40px, calc(40px + (350px - 40px) * ((100vw - 320px) / (1920px - 320px))), 350px)',
            paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
          }}
        >

{/* First Case Block */}


<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: showCaseCard1 ? 1 : 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="w-full"
>
  <div ref={caseCard1Ref} className="w-full">
    <CaseCardTest
      size="large"
      title="End-to-End Transformation of discovery process"
      description="0 → 1 Design & research expertise integration across orgs enabled by Retail App Redesign"
      tags={`#Design governance\n#Design-driven change management`}
      buttonText="Read the case"
      imageSrc="/images/bcc-screen.png"
      imageAlt="Case study - Retail App Redesign"
      desktopImageSrc="/images/bcc-screen.png"
      desktopImageAlt="iPhone screen"
      desktopImageWidth={356}
      desktopImageHeight={721}
      onButtonClick={() => router.push('/cases/end-to-end-transformation')}
      animateLine={showCaseCard1}
    />
  </div>
</motion.div>
</div>
<VerticalConnectorLine align="right" animate={showVerticalLine1} />
{/* Second Case Block - Выровнен по правому краю */}
<div 
  className="w-full mx-auto relative"
  style={{
    maxWidth: '1692px',
    paddingTop: 'clamp(40px, calc(40px + (60px - 40px) * ((100vw - 320px) / (1920px - 320px))), 60px)',
    paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
    paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
  }}
>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: showCaseCard2 ? 1 : 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="w-full"
  >
    <div ref={caseCard2Ref} className="w-full">
      <CaseCardTest
    size="large"
    title="In-House UX Research Lab Across Two Banks and an Acquisition"
    description="Research governance establishment with eye-tracking Lab"
    tags={`#ResearchOps \n#Change management`}
    buttonText="Read the case"
    imageSrc="/images/lab-image.png"
    imageAlt="Case study - UX Research Lab"

    desktopImageSrc="/images/lab-image.png"
    desktopImageAlt="UX Research Lab"
    desktopImageWidth={632}
    desktopImageHeight={449}
    align="right"
    onButtonClick={() => router.push('/cases/research-lab')}
    animateLine={showCaseCard2}
      />
    </div>
  </motion.div>
</div>

<VerticalConnectorLine align="left"  />
{/* Third Case Block */}
<div 
  className="w-full mx-auto relative"
  style={{
    maxWidth: '1692px',
    paddingTop: 'clamp(40px, calc(40px + (60px - 40px) * ((100vw - 320px) / (1920px - 320px))), 60px)',
    paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
    paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
  }}
>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: showCaseCard3 ? 1 : 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="w-full"
  >
    <div ref={caseCard3Ref} className="w-full">
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
    onButtonClick={() => router.push('/cases/design-system')}
    animateLine={showCaseCard3}
      />
    </div>
  </motion.div>
</div>

<VerticalConnectorLine align="right" showDiamond={true} />
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
}
