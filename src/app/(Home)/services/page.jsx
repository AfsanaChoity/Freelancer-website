'use client'
import FlexibleBanner from '@/components/shared/FlexibleBanner'
import CustomContainer from '@/components/ui/CustomContainer'
import React, { useState } from 'react'
import hero from '@/assets/image/serviceBG.png'
import Heading from '@/components/ui/Heading'
import SearchWithFilter from '@/components/ui/SearchWithFilter'
import PopularServiceCard from '@/components/features/explore/PopularServiceCard'
import img1 from '@/assets/image/popularService.jpg';
import CustomPagenation from '@/components/shared/CustomPagenation'
// import { Pagination } from 'antd';
// import '@/styles/Pagination.css'

const services = [
    { id: 1, title: 'Legal and Justice', priceFrom: 100, cover: img1, href: '/services/legal' },
    { id: 2, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 3, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 4, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 5, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 6, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 7, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 8, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 9, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 10, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 11, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 12, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 13, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 14, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
    { id: 15, title: 'Tax Filing Assistance', priceFrom: 100, cover: img1, href: '/services/tax' },
];

export default function ServicesPage() {
    const [currentPage, setCurrentPage] = useState(1)

    
    const page_size = 10;

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    const total = services.length;
    const start = (currentPage - 1) * page_size
    const end = start + page_size
    const pageItems = services.slice(start, end)

    const onSearch = (q) => {
        console.log('search:', q);
        
    };

    return (
        <CustomContainer>
            {/* Banner */}
            <div>
                <FlexibleBanner
                    bgSrc={hero}
                    variant="simple"
                    title="Certified Services"
                    subtitle="Trusted professional service packages verified by our experts."
                    overlayClass="bg-black/45"
                />
            </div>

            {/* Heading + search */}

            <div className='flex flex-col md:flex-row gap-4 justify-between items-center mt-10 lg:mt-20'>
                <div>
                    <Heading text="Certified Services" />
                </div>

                <div className="max-w-3xl">
                    <SearchWithFilter onSearch={onSearch} />
                </div>
            </div>

            <hr className='text-[#D4D4D4] my-6' />

            {/* Certified Services */}
            <div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {pageItems.map((s) => (
                        <PopularServiceCard key={s.id} {...s} />
                    ))}
                </div>


                {/* Pagenation */}

                <div className='mt-10 lg:mt-20'>
                    <CustomPagenation 
                    total={total}
                    page_size={page_size}
                    current={currentPage}
                    onPageChange={onPageChange}
                    />
                </div>
            </div>





        </CustomContainer>
    )
}
