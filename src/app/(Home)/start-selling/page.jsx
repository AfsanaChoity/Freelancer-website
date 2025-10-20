import FlexibleBanner from '@/components/shared/FlexibleBanner'
import CustomContainer from '@/components/ui/CustomContainer'
import React from 'react'
import hero from '@/assets/image/BeSellerBG.png'

export default function BeSellerPage() {
  return (
    <CustomContainer >
      {/* Banner */}
      <div>
        <FlexibleBanner
          bgSrc={hero}
          variant="cta"
          title="Turn Your Skills Into Opportunities"
          subtitle="Join our community of professionals in finance, legal, and marketing. Create your profile, showcase your expertise, and connect with clients who need your services."
          actionText="Become a Seller"
          actionHref="/start-selling"
          overlayClass="bg-black/35"
        />
      </div>
    </CustomContainer>
  )
}
