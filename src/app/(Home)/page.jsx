'use client'

import BannerHero from '@/components/Home/BannerHero';
import FaqSection from '@/components/Home/FAQSection';
import HowItWorks from '@/components/Home/HowItWorks';
import RisingStarsSection from '@/components/Home/RisingStarsSection';
import TestimonialsSection from '@/components/Home/testimonials/TestimonialsSection';
import CategoriesSection from '@/components/shared/CategorySection';
import FreelancerSection from '@/components/shared/FreelancerSection';
import React from 'react'

export default function HomePage() {

   const handleSearch = (query) => {
    
    console.log('search:', query);
  };

  return (
    <div>
      {/* <Banner /> */}
        <BannerHero  onSearch={handleSearch} />

        {/* Category */}
        <div>
          <CategoriesSection heading="Explore millions of pros"/>
        </div>

        {/* Freelancer */}
        <div>
          <FreelancerSection heading="Featured Professionals"/>
        </div>

        {/* How it works */}
        <div>
          <HowItWorks />
        </div>

        {/* Testimonials */}
        <div>
          <TestimonialsSection heading="Hear from Our Clients"/>
        </div>
        {/* Rising Star */}
        <div>
          <RisingStarsSection heading="Rising Stars"/>
        </div>

        {/* FAQ */}
        <div>
          <FaqSection />
        </div>
        
    </div>
  )
}
