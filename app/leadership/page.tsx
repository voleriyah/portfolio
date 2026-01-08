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
import ValueListItem from '@/components/ValueListItem';
import AnimatedContainerLine from '@/components/AnimatedContainerLine';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-bg" style={{ paddingTop: 'clamp(92px, calc(92px + (124px - 92px) * ((100vw - 320px) / (1920px - 320px))), 124px)' }}>

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
                  My Leadership
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
    <div className="relative w-full overflow-hidden min-h-[500px]">
        <img 
          src="/images/leadership-photo.png" 
          alt="valeriya kostyuchenko" 
          className="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full md:object-cover"
          style={{ 
            objectPosition: 'center',
            display: 'block',
          }} 
        />
      </div>
      <div className="flex flex-col">
      <h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Core</h1>

<p className="text-l" >I surface risks and conflicts early — before they turn into politics, burnout, or quiet resistance.</p> <br /> 

<p className="text-l" >I set clear rules for collaboration, decision-making, and accountability, so teams can focus on the work instead of navigating ambiguity. </p> <br />

<p className="text-l" >I protect people from organizational noise, while not avoiding hard conversations when they are needed. </p> <br />

<p className="text-l" >I believe leadership is less about control and more about creating shared clarity.</p> 

<h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>What can you expect from me</h1>
        <ul className="text-l space-y-2" style={{ listStyle: 'number', paddingLeft: 'clamp(32px, calc(32px + (48px - 32px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>
                <li><b>Calm decision-making under pressure.</b></li><br />
                <li><b>Direct communication without theatrics.</b></li><br />
                <li><b>Respect for people’s time, attention, and energy.</b></li><br />
                <li><b>Design that survives scale, time, and organizational reality.</b></li><br />
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
            paddingTop: 'clamp(92px, calc(92px + (120px - 92px) * ((100vw - 320px) / (1920px - 320px))), 120px)',
            paddingRight: 'clamp(16px, calc(16px + (72px - 16px) * ((100vw - 320px) / (1920px - 320px))), 72px)',
            //paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', 
          }}
        >
        <h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>Community and knowledge sharing</h1>
       <p className="text-l" >Alongside my core leadership work, I actively invest in building professional communities around design, research, and product leadership.</p> 
       <p className="text-l" >I organize and curate design meetups and discussions, bringing together practitioners from different disciplines and levels of experience.</p> <br />
       <p className="text-l" >For me, community work is not about visibility, but about creating spaces where complex topics can be discussed honestly — without performance, hierarchy, or buzzwords.</p> <br />
       <p className="text-l" >These spaces help surface real patterns from practice: how teams break, how systems fail, and what actually works in constrained environments.</p> <br />  
       <p className="text-l" >Community work is an extension of how I lead: <b><i>by connecting people, sharing hard-earned knowledge, and strengthening the profession beyond a single company or role.</i></b></p> 
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

        <h1 className="heading-xl" style={{ paddingTop: 'clamp(48px, calc(48px + (92px - 48px) * ((100vw - 320px) / (1920px - 320px))), 92px)', marginBottom: 'clamp(24px, calc(24px + (48px - 24px) * ((100vw - 320px) / (1920px - 320px))), 48px)' }}>What I value</h1>
        <div
            className="flex flex-col"
            style={{
              // Gap: 44px on mobile, scales to 100px (1920px desktop)
              gap: 'clamp(44px, calc(44px + (100px - 44px) * ((100vw - 320px) / (1920px - 320px))), 100px)',
            }}
          >
        <ValueListItem
              number="1"
              title="System first"
              subtitle="Systems over fragments"
              description="Designing decision-making, not isolated artifacts"
              color="#FFF8E9"
            />

            <ValueListItem
              number="2"
              title="Clarity win"
              subtitle="Clear bets, not feature soup"
              description=" Strategy is choosing what not to build"
              color="#FFF8E9"
            />

            <ValueListItem
              number="3"
              title="Power in ambiguity"
              subtitle="Constraints as design material"
              description="Regulation, scale and risk are inputs"
              color="#FFF8E9"
            />

            <ValueListItem
              number="4"
              title="Honesty"
              subtitle="Honest feedback, low drama"
              description="Clarity beats comfort in leadership"
              color="#FFF8E9"
            />

            <ValueListItem
              number="5"
              title="No heroism"
              subtitle="Replace heroes with systems"
              description="Sustainable teams shouldn't rely on individual endeavors"
              color="#FFF8E9"
            />

            <ValueListItem
              number="6"
              title="Prove me right"
              subtitle="Evidence before ego"
              description="Research, data, and reality over opinions"
              color="#FFF8E9"
            />
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



     




