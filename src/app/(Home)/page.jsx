'use client'

import BannerHero from '@/components/Home/BannerHero';
import React from 'react'

export default function HomePage() {

   const handleSearch = (query) => {
    
    console.log('search:', query);
  };

  return (
    <div>
        <BannerHero  onSearch={handleSearch} />
        {/* <Banner /> */}
    </div>
  )
}
