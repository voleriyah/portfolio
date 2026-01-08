'use client';

import Image from 'next/image';
import ExpertiseBlock from '@/components/ExpertiseBlock';
import AnimatedContainerLine from '@/components/AnimatedContainerLine';
import AnimatedGasfisHeader from '@/components/AnimatedGasfisHeader';
//import CaseCard from '@/components/CaseCard';
import ValueListItem from '@/components/ValueListItem';
import CustomLink from '@/components/CustomLink';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CaseCardTest from '@/components/CaseCardTest';
import VerticalConnectorLine from '@/components/VerticalConnectorLine';
import HorizontalConnectorLine from '@/components/HorizontalConnectorLine';
import Footer from '@/components/Footer';

export default function Home() {
  const expertiseSectionRef = useRef(null);
  const router = useRouter();
  const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  
  // Expertise section animation states
  const [showExpertiseLine1, setShowExpertiseLine1] = useState(false);
  const [showExpertiseTitleImage, setShowExpertiseTitleImage] = useState(false);
  const [showExpertiseGrid, setShowExpertiseGrid] = useState(false);
  const [showExpertiseLine2, setShowExpertiseLine2] = useState(false);
  const [showHowCanIHelp, setShowHowCanIHelp] = useState(false);
  
  // Refs for expertise elements
  const expertiseLine1Ref = useRef<HTMLDivElement>(null);
  const expertiseTitleImageRef = useRef<HTMLDivElement>(null);
  const expertiseGridRef = useRef<HTMLDivElement>(null);
  const expertiseLine2Ref = useRef<HTMLDivElement>(null);
  const howCanIHelpRef = useRef<HTMLDivElement>(null);
  
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

  useEffect(() => {
    // Check if user has already visited (StartScreen won't show)
    const visited = typeof window !== 'undefined' ? localStorage.getItem('portfolio-visited') : null;
    
    if (visited === 'yes') {
      // If already visited, start animation immediately
      setHeroAnimationStarted(true);
      setShowImages(true);
      setTimeout(() => setShowTitle(true), 400);
      setTimeout(() => setShowSubtitle(true), 800);
    } else {
      // StartScreen finishes at 6832ms, then start hero animation
      const timer = setTimeout(() => {
        setHeroAnimationStarted(true);
        // Images fade in first (0ms delay)
        setShowImages(true);
        // Title fades in second (400ms delay)
        setTimeout(() => setShowTitle(true), 400);
        // Subtitle fades in third (800ms delay)
        setTimeout(() => setShowSubtitle(true), 800);
      }, 6832);

      return () => clearTimeout(timer);
    }
  }, []);

  // Expertise section animation - triggered by scroll event
  useEffect(() => {
    const checkScrollPosition = () => {
      if (typeof window === 'undefined') return;
      
      const windowHeight = window.innerHeight;
      
      // Check each element's position - trigger when 20% is visible
      const checkElement = (ref: React.RefObject<HTMLDivElement | null>, setState: (value: boolean) => void) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const elementTop = rect.top;
          const elementHeight = rect.height;
          // Element is visible when its top is above viewport bottom minus 20% of its height
          const visibleThreshold = windowHeight - (elementHeight * 0.1);
          
          if (elementTop < visibleThreshold && elementTop + elementHeight > 0) {
            setState(true);
          }
        }
      };
      
      // Check elements in order
      checkElement(expertiseLine1Ref, setShowExpertiseLine1);
      checkElement(expertiseTitleImageRef, setShowExpertiseTitleImage);
      checkElement(expertiseLine2Ref, setShowExpertiseLine2);
    };
    
    // Initial check
    checkScrollPosition();
    
    // Add scroll listener
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  // Expertise grid appears immediately after line 1's diamond animation completes
  useEffect(() => {
    if (showExpertiseLine1 && !showExpertiseGrid) {
      // Diamond animation takes 1.5s (1.2s duration + 0.3s delay) after line starts
      const timer = setTimeout(() => {
        setShowExpertiseGrid(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showExpertiseLine1, showExpertiseGrid]);

  // "How can I help" appears immediately after line 2's diamond animation completes
  useEffect(() => {
    if (showExpertiseLine2 && !showHowCanIHelp) {
      // Diamond animation takes 1.5s (1.2s duration + 0.3s delay) after line starts
      const timer = setTimeout(() => {
        setShowHowCanIHelp(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showExpertiseLine2, showHowCanIHelp]);

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
            <div 
              className="block md:hidden relative w-full overflow-x-clip" 
              style={{ 
                width: '100%', 
                height: '332px',
                opacity: showImages ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
              }}
            >
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
              <div 
                className="relative z-0"
                style={{
                  opacity: showTitle ? 1 : 0,
                  transition: 'opacity 0.6s ease-in-out',
                }}
              >
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
                  opacity: showSubtitle ? 1 : 0,
                  transition: 'opacity 0.6s ease-in-out',
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
          <div
            className="hidden md:block absolute pointer-events-none z-20"
            style={{
              top: '200px',
              // Margin left: 0px at 320px, 30px at 1024px, then scales to 324px at 1920px  
              left: 'clamp(0px, max(min(calc(0px + (30px - 0px) * ((100vw - 320px) / (1024px - 320px))), 30px), calc(30px + (324px - 30px) * ((100vw - 1024px) / (1920px - 1024px)))), 324px)',
              opacity: showImages ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
            }}
          >
            <Image
              src="/images/avatar1.png"
              alt="Avatar 1"
              width={178}
              height={178}
              style={{
                // Width: scales from 100px at 320px to 178px at 1920px (benchmark)
                width: 'clamp(100px, calc(100px + (178px - 100px) * ((100vw - 320px) / (1920px - 320px))), 178px)',
                // Height: scales from 100px at 320px to 178px at 1920px (benchmark)
                height: 'clamp(100px, calc(100px + (178px - 100px) * ((100vw - 320px) / (1920px - 320px))), 178px)',
                borderRadius: '27px',
                objectFit: 'cover',
              }}
            />
          </div>
          
          {/* Photo 2 - Diamond shape: at section boundary on desktop */}
          <div
            className="hidden md:block absolute pointer-events-none z-20"
            style={{
              bottom: '0px',
              // Margin left: 0px at 320px, 30px at 1024px, then scales to 324px at 1920px  
              left: 'clamp(0px, max(min(calc(0px + (30px - 0px) * ((100vw - 320px) / (1024px - 320px))), 30px), calc(30px + (324px - 30px) * ((100vw - 1024px) / (1920px - 1024px)))), 324px)',
              opacity: showImages ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
            }}
          >
            <Image
              src="/images/avatar2.png"
              alt="Avatar 2"
              width={182}
              height={182}
              style={{
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
          <div 
            ref={expertiseLine1Ref}
            style={{ opacity: showExpertiseLine1 ? 1 : 0, transition: 'opacity 0.6s ease-in-out' }}
          >
            <AnimatedContainerLine diamondStopAt="bottom" />
          </div>
          {/* Title Image - aligned left on mobile, right on desktop */}
          <div 
            ref={expertiseTitleImageRef}
            className="absolute top-0 left-0 md:left-auto md:right-0 h-full flex items-center expertise-title-image-wrapper"
            style={{
              opacity: showExpertiseTitleImage ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
            }}
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
          ref={expertiseGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full expertise-blocks-grid gap-[3px] border-[3px] border-dark-brown"
          style={{
            // Width: full width on mobile/tablet
            maxWidth: '100%',
            minHeight: 'clamp(520px, calc(520px + (662px - 520px) * ((100vw - 1024px) / (1920px - 1024px))), 662px)',
            alignItems: 'stretch',
            backgroundColor: '#342927', // dark-brown background for grid to show gaps as divider lines
            opacity: showExpertiseGrid ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out',
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
          <div 
            ref={expertiseLine2Ref}
            style={{ opacity: showExpertiseLine2 ? 1 : 0, transition: 'opacity 0.6s ease-in-out' }}
          >
            <AnimatedContainerLine position="left" showCaption={false} diamondStopAt="middle"  />
          </div>

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
              ref={howCanIHelpRef}
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
                opacity: showHowCanIHelp ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
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
                opacity: showHowCanIHelp ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
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
        {/* Red Line - Absolute positioned from top of title block to 24px above first case card */}
        <div 
          className="absolute top-0 w-[3px] pointer-events-none z-10"
          style={{
  
            height: 'calc(clamp(300px, calc(300px + (548px - 300px) * ((100vw - 320px) / (1920px - 320px))), 548px) + clamp(40px, calc(40px + (350px - 40px) * ((100vw - 320px) / (1920px - 320px))), 350px) - 24px)',
          }}
        >

          <AnimatedContainerLine position="left" showCaption={false} diamondStopAt="bottom" color="#F62F20" />
        </div>

        <div className="line-container" style={{ position: 'absolute', width: '3px', top:'0', left:'0', right:'auto' }}>
            
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
  className="w-full mx-auto relative"
  style={{
    maxWidth: '1692px',
    paddingTop: 'clamp(40px, calc(40px + (350px - 40px) * ((100vw - 320px) / (1920px - 320px))), 350px)',
   // paddingBottom: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
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
    //paddingBottom: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
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
   // paddingTop: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
    //paddingBottom: 'clamp(40px, calc(40px + (194px - 40px) * ((100vw - 320px) / (1920px - 320px))), 194px)',
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
          <div className="motto-line-container" style={{ position: 'absolute', width: '3px', top:'0', right:'0', left:'auto' }}>
            <VerticalConnectorLine align="right" height="80vh" color="#1e1e1e"/>
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
  
  <CustomLink href="/leadership" iconType="internal">
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
      <Footer />

    </main>
  );
}