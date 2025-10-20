import SectionContainer from '@/components/shared/SectionContainer'
import React from 'react'

import img1 from '@/assets/image/popularService.jpg';
import PopularServiceCard from './PopularServiceCard';


const services = [
  { id: 1, title: 'Legal and Justice', priceFrom: 100, cover: img1, href: '/services/legal' },
  { id: 2, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
  { id: 3, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
  { id: 4, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
  { id: 5, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
];

export default function PopularServiceSection() {
  return (
    <div>
      <SectionContainer heading="Popular Services" title="Services">

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {services.map((s) => (
            <PopularServiceCard key={s.id} {...s} />
          ))}
        </div>


      </SectionContainer>
    </div>
  )
}
