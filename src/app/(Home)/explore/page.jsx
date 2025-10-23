'use client'
import FlexibleBanner from '@/components/shared/FlexibleBanner'
import SearchField from '@/components/shared/SearchField'
import CustomContainer from '@/components/ui/CustomContainer'
import React from 'react'
import hero from '@/assets/image/exploreBG.png'
import CategoriesSection from '@/components/shared/CategorySection'
import FreelancerSection from '@/components/shared/FreelancerSection'
import PopularServiceSection from '@/components/features/explore/PopularServiceSection'

export default function ExplorePage() {
  return (
    <CustomContainer>

      {/* Banner */}
      <div>
        <FlexibleBanner
          bgSrc={hero}
          variant="search"
          title="Find The Right Pro For Your Business"
          SearchField={SearchField}
          onSearch={(q) => console.log('search:', q)}
          tags={[
            { label: 'Finance & Accounting', href: '/finance-accounting' },
            { label: 'Hr & legal', href: '/hr-legal' },
            { label: 'Online Freelancer', href: '/online' },
            // { label: 'Finance', href: '/search?cat=finance2' },
            { label: 'Finance', href: '/finance' },
          ]}
          overlayClass="bg-black/45"
          className="mb-6"
        />

      </div>

      {/* Category of services */}
      <div>
        <CategoriesSection heading="Categories of Services"/>
      </div>

      {/* Popular services */}
      <div>
        <PopularServiceSection/>
      </div>

      {/* Top rated Professionals */}
      <div>
        <FreelancerSection heading="Top Rated Professionals"/>
      </div>

    </CustomContainer>
  )
}
