'use client'
import React, { useState } from 'react'
import CustomContainer from '../ui/CustomContainer'
import Paragraph from '../ui/Paragraph'
import WhiteBoxCard from '../shared/WhiteBoxCard'
import icon1 from '@/assets/icons/icon1.svg'
import icon2 from '@/assets/icons/icon2.svg'
import icon3 from '@/assets/icons/icon3.svg'
import icon4 from '@/assets/icons/icon4.svg'
import icon5 from '@/assets/icons/Profile2.svg'
import img from '@/assets/image/freelancer/user.jpg'
import BookingCard from '../shared/BookingCard'
import SubHeadingBlack from '../ui/SubHeadingBlack'
import TealBtn from '../ui/TealBtn'
import AddEditProjectModal from '../modals/AddEditProjectModal'
import img2 from '@/assets/image/freelancer/portfolio.jpg'
import PortfolioCard from '../shared/PortfolioCard'
import Heading from '../ui/Heading'


const items = [
    {
        id: 1,
        icon: icon2,
        title: 'Messages',
        count: 2,
        status: 'unread',
    },
    {
        id: 2,
        icon: icon4,
        title: 'Pending Request',
        count: 2,
        status: 'waiting',
    },
    {
        id: 3,
        icon: icon4,
        title: 'Active Bookings',
        count: 2,
        status: 'Ongoing ',
    },
    {
        id: 4,
        icon: icon3,
        title: 'Client Ratings',
        count: 4.5,
        status: 'Average Rating',
    },
    {
        id: 5,
        icon: icon5,
        title: 'Profile View',
        count: 150,
        status: 'This Month',
    },
]



export default function ProfessionalHome() {
    // for create and edit project
    const [openModal, setOpenModal] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [heading, setHeading] = useState('');

    const handleCloseModal = () => {
        setOpenModal(false);
    }


    const bookings = [
        { id: 1, name: "Mr. Lee", image: img, category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "confirmed" },
        { id: 2, name: "Mr. Lee", image: img, category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "pending" },
        { id: 3, name: "Mr. Lee", image: img, category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "canceled" },
        { id: 4, name: "Mr. Lee", image: img, category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "completed" },
    ]

    const list = [
        {
            id: 1,
            title: 'Legal Consultancy Website Design',
            description:
                'Designed a modern, user-friendly website for a law firm, improving user experience and boosting client inquiries.',
            imgSrc: img2,
            showPlay: false,
        },
        {
            id: 2,
            title: 'Legal Consultancy Website Design',
            description:
                'Designed a modern, user-friendly website for a law firm, improving user experience and boosting client inquiries.',
            imgSrc: img2,
            showPlay: false,
        },
        {
            id: 3,
            title: 'Legal Consultancy Website Design',
            description:
                'Designed a modern, user-friendly website for a law firm, improving user experience and boosting client inquiries.',
            imgSrc: img2,
            showPlay: false,
        },
        {
            id: 4,
            title: 'Legal Consultancy Website Design',
            description:
                'Designed a modern, user-friendly website for a law firm, improving user experience and boosting client inquiries.',
            imgSrc: img2,
            showPlay: true,
        },
    ]


    return (
        <>
            <CustomContainer>
                {/* Heading */}
                <div
                    className="flex w-full items-center gap-4 rounded-2xl p-6 shadow-sm border border-transparent"
                    style={{
                        // base pale blue-gray background with two soft green radial highlights (left small, right large)
                        backgroundColor: '#EAF3F6',
                        backgroundImage: `radial-gradient(circle at 6% 50%, rgba(139,207,154,0.08) 0%, rgba(139,207,154,0.02) 25%, transparent 40%),
                                  radial-gradient(circle at 85% 55%, rgba(139,207,154,0.18) 0%, rgba(139,207,154,0.08) 20%, rgba(139,207,154,0.02) 45%, transparent 65%)`,
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* Waving hand emoji */}
                    <span className="text-3xl">👋</span>

                    {/* Text content */}
                    <div className='space-y-2'>
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#333333] font-open-sans">
                            Welcome back, Sujon!
                        </h2>

                        <Paragraph text="Here's what's happening in your account today" />
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 my-16'>
                    {
                        items.map((item) => (
                            <WhiteBoxCard item={item} key={item.id} />
                        ))
                    }

                </div>



                {/* booking card */}
                <div className='flex justify-between items-center'>
                    <div className='flex-1'>
                        <Heading text="Upcoming Bookings" />
                    </div>
                    <p className=' text-[#030213] font-open-sans bg-[#ECEEF2] p-1 rounded-[8px]'>3 Total</p>
                </div>

                <div className='grid grid-cols-1 gap-4 mt-10'>
                    {bookings.map((booking) => (
                        <BookingCard booking={booking} key={booking.id} />
                    ))}
                </div>


                {/* portfolios */}

                <div className='flex flex-col md:flex-row justify-between my-10'>
                    {/* heading */}
                    <Heading text="Your Latest Projects" />
                    <TealBtn text="Manage Portfolio" />



                </div>

                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-14">
                    {list.map((it) => (
                        <PortfolioCard
                            key={it.id}
                            id={it.id}
                            title={it.title}
                            description={it.description}
                            imgSrc={it.imgSrc}
                            imgAlt={it.title}
                            showPlay={it.showPlay}
                            onView={(id) => console.log('view', id)}
                            onEdit={() => {
                                setOpenModal(true)
                                setEditModal(true)
                                setHeading('Edit Projects')
                            }}
                            onDelete={(id) => console.log('delete', id)}
                            profile={true}
                        />
                    ))}
                </div>

                {/* modal */}
                <AddEditProjectModal
                    open={openModal}
                    onClose={handleCloseModal}
                    create={createModal}
                    edit={editModal}
                    heading={heading}
                />

            </CustomContainer>

            {/* foot */}
            <div className=" w-full bg-gradient-to-br from-pink-200 via-green-200 to-blue-300 flex items-center justify-center py-8 px-4  md:py-24 md:px-10">
                <div className="w-full max-w-4xl bg-transparent bg-opacity-40 backdrop-blur-md rounded-2xl shadow-xl p-12 md:p-16 text-center border border-[#0000000D]">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-400 mb-4">
                        Want to reach more clients?
                    </h1>
                    <p className="text-gray-400 text-opacity-100 text-lg mb-8">
                        Get verified and boost your visibility to attract more clients today.
                    </p>
                   <TealBtn text="Verify Now"/>
                </div>
            </div>
        </>
    )
}
