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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
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
                  About me
                </h1>
                </div>
                </section>


                <section 
  className="w-full flex items-center justify-center"
  style={{
    paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
  }}
>
  <div className="w-full mx-auto"
    style={{
      maxWidth: '1692px',
      paddingLeft: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
      paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
    }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch">
      <div className="flex flex-col">
        <h1 className="heading-xl">My name is Valeriya Kostyuchenko</h1><br /><br/>

        <h2
          style={{
            color: 'var(--main-white, #FFF8E9)',
            fontFamily: '"Alegreya Sans", sans-serif',
            fontSize: 'clamp(18px, calc(18px + (32px - 18px) * ((100vw - 320px) / (1920px - 320px))), 32px)',
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: 'normal',
            marginBottom: 'clamp(24px, calc(24px + (64px - 24px) * ((100vw - 320px) / (1920px - 320px))), 64px)',
          }}
        >
          I work with complex product organizations where <br/> scale, regulation, and ambiguity are the norm.
        </h2>

        <p className="text-l">My background spans product design, research, and organizational design.</p><br /> 
        <p className="text-l">Over the past years, I've built and led large design and research teams, launched design systems at scale, and driven end-to-end transformations in highly regulated environments.</p><br />
        <p className="text-l">I focus on making design work survive reality: growth, constraints, legacy systems, and organizational politics. That means turning design from a support function into a strategic, cross-functional operating system that helps teams make better decisions over time.</p><br />
        <p className="text-l">I'm most effective where clarity is missing, processes are fragmented, and responsibility is diffused. I help organizations align product vision, decision-making, and execution without relying on heroics or constant firefighting.</p><br />
        <p className="text-l">I value evidence over opinion, systems over fragments, and honest conversations over performative harmony.</p><br />
      </div>
      
      <div className="relative w-full overflow-hidden min-h-[500px]">
        <img 
          src="/images/valeriya-kostyuchenko.png" 
          alt="valeriya kostyuchenko" 
          className="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full md:object-cover"
          style={{ 
            objectPosition: 'center',
            display: 'block',
          }} 
        />
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
            //paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
            
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

        <h1 id="achievements" className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Public appearances</h1>
          <p className="text-l" >I regularly speak at industry meetups and professional events, sharing practical experience from large-scale product, research, and organizational transformations.</p> <br />
          <CustomLink href="https://www.youtube.com/watch?v=KVEMm0sDGo0" iconType={null} showExternalIcon={true}>Altel Digital — Regular Management of creative teams</CustomLink><br /><br />
          <CustomLink href="https://www.youtube.com/watch?v=3zJDbGmxHCM" iconType={null} showExternalIcon={true}>Growth design meetup — Junior as a state of mind</CustomLink><br /><br />
          <CustomLink href="https://www.youtube.com/watch?v=500F1IGN9mM" iconType={null} showExternalIcon={true}>Bank CenterCredit Picnic — Soft skills meetup</CustomLink><br /><br />
          </div>
        </section>

       
       

      {/* Footer Section */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
}



     




