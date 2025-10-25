import SubHeadingBlack from '@/components/ui/SubHeadingBlack'
import React from 'react'
import img from '@/assets/image/popularService.jpg'
import OfferedServicesCard from '@/components/shared/OfferedServicesCard'
import ScheduleSection from './ScheduleSection'

const services = [
    {
        id: 1,
        img: img,
        title: "Legal and Justice",
        desc: "Experienced HR freelancer specializing in recruitment, employee relations, and talent Experienced...",
        price: "From $100"
    },
    {
        id: 2,
        img: img,
        title: "Legal and Justice",
        desc: "Experienced HR freelancer specializing in recruitment, employee relations, and talent Experienced...",
        price: "From $100"
    },
    {
        id: 3,
        img: img,
        title: "Legal and Justice",
        desc: "Experienced HR freelancer specializing in recruitment, employee relations, and talent Experienced...",
        price: "From $100"
    },
    {
        id: 4,
        img: img,
        title: "Legal and Justice",
        desc: "Experienced HR freelancer specializing in recruitment, employee relations, and talent Experienced...",
        price: "From $100"
    },
]

export default function OfferedServices() {
  return (
    <div>
        <div className='mb-10'>
            <SubHeadingBlack text="Offered Services"/>
        </div>

        {/* content */}
        <div className='flex flex-col xl:flex-row gap-10'>
            {/* left side */}
            <div className='space-y-8 xl:w-3/5 '>
                {
                    services.map((service) => (
                        <OfferedServicesCard service={service}/>
                    ))
                }
            </div>

            {/* right side */}
            <div className='xl:w-2/5   '>
                <ScheduleSection />
            </div>
        </div>
    </div>
  )
}
