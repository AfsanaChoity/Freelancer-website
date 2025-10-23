

import FlexibleBanner from '@/components/shared/FlexibleBanner'
import CustomContainer from '@/components/ui/CustomContainer'
import React from 'react'
import hero from '@/assets/image/BeSellerBG.png'
import SectionContainer from '@/components/shared/SectionContainer'
import JoinAsFreelancerSection from '@/components/features/BeSeller/JoinAsFreelancerSection'
import PricingSection from '@/components/features/BeSeller/PricingSection'


export default function BeSellerPage() {


  return (
    <CustomContainer >
      {/* Banner */}
      <div>
        <FlexibleBanner
          bgSrc={hero}
          variant="cta"
          title="Turn Your Skills Into Opportunities"
          subtitle="Join our network of vetted professionals to showcase your expertise, connect with clients, and collaborate on high-impact projects."
          actionText="Join as a Pro"
          actionHref="/start-selling"
          overlayClass="bg-black/35" 
        />
      </div>

      {/* Become seller */}
      <div>
          <SectionContainer heading="Your skills, our platform, unlimited opportunities" title="Why join us ?">
             <JoinAsFreelancerSection/>
          </SectionContainer>
      </div>

      {/* Pricing Section */}
      <div>
        <PricingSection/>
      </div>

    </CustomContainer>
  )
}
