'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Paragraph from '../ui/Paragraph'
import GreenPara from '../ui/GreenPara'
import TealBtn from '../ui/TealBtn'
import ScheduleAppointmentModal from '../modals/ScheduleAppointmentModal'
import edit from '@/assets/icons/edit.svg'
import trash from '@/assets/icons/trash.svg'

export default function OfferedServicesCard({ 
    service, 
    profile = false,
    onEdit = () => { },
    onDelete = () => { }, 

}) {
    const [bookingModal, setBookingModal] = useState(false)

   



    const handleBooking = () => {
        setBookingModal(true);


    }
    return (
        <div className='flex flex-col md:flex-row gap-4 justify-between items-center md:items-start   bg-white border border-[#E5E5E5] rounded-[10px] p-2'>
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
                {
                profile && (
                    <div className="flex items-center gap-1">
                        <button onClick={onEdit}  className="cursor-pointer p-1 rounded-md hover:bg-gray-100 focus:outline-none">
                            <Image src={edit} alt="icon" className="w-10"/>

                        </button>

                        <button onClick={() => onDelete(id)}  className="cursor-pointer p-1 rounded-md hover:bg-gray-100 focus:outline-none">
                            <Image src={trash} alt="icon" className="w-10"/>
                        </button>
                    </div>
                )
            }
            </div>

            <div>
                {
                !profile && (
                    <div>
                        <TealBtn text="Book now" onClick={handleBooking} />
                    </div>

                )
            }
            </div>
            {/* Shcedule Modal */}
            <ScheduleAppointmentModal
                openBookingModal={bookingModal}
                onCloseBookingModal={() => setBookingModal(false)}

            />
        </div>
    )
}
