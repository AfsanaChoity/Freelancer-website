'use client'
import Image from 'node_modules/next/image'
import React, { useState } from 'react'
import Paragraph from '../ui/Paragraph'
import GreenPara from '../ui/GreenPara'
import TealBtn from '../ui/TealBtn'
import ScheduleAppointmentModal from '../modals/ScheduleAppointmentModal'

export default function OfferedServicesCard({ service }) {
    const [bookingModal, setBookingModal] = useState(false)


 

 const handleBooking = () => {
     setBookingModal(true);
   
    
 }
    return (
        <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center bg-white border border-[#E5E5E5] rounded-[10px] p-2'>
            <div className='flex flex-col md:flex-row gap-4 '>
                <div className='flex justify-center md:justify-start  '>
                    <Image src={service.img} alt="image" className='rounded-[10px] w-[137px] min-h-[127px] object-cover' />
                </div>
                <div className='flex flex-col gap-2 justify-between items-center md:items-start flex-1'>
                    <h3 className='font-open-sans font-semibold text-black text-xl'>{service.title}</h3>
                    <Paragraph text={service.desc} />
                    <GreenPara text={service.price} />
                </div>
            </div>

            {/* button */}
            <div>
                <TealBtn text="Book now" onClick={handleBooking}/>
            </div>

            {/* Shcedule Modal */}
                    <ScheduleAppointmentModal
                    openBookingModal={bookingModal}
                    onCloseBookingModal={() => setBookingModal(false)}
            
                />
        </div>
    )
}
