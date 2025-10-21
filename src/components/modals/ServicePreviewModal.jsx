'use client';

import { Modal } from 'antd';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import TealBtn from '@/components/ui/TealBtn';

// local assets you want to show in the preview
import cover from '@/assets/image/popularService.jpg';
import { useState } from 'react';
import ScheduleAppointmentModal from './ScheduleAppointmentModal';
import ConfirmBookingModal from './ConfirmBookingModal';

export default function ServicePreviewModal({ open, onClose }) {

 const [bookingModal, setBookingModal] = useState(false)


 

 const handleBooking = () => {
    onClose?.();
    setTimeout(() => setBookingModal(true), 500);
   
    
 }

  const title = 'Legal and Justice';
  const description =
    'Experienced HR freelancer specializing in recruitment, employee relations, and talent. Experienced HR freelancer specializing in recruitment, employee relations, and talent.';
  const priceFrom = 100;

  return (
   <>
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={560}
      maskClosable
      destroyOnClose
      title={null}
      className="font-open-sans"
      styles={{
        content: { borderRadius: 12, overflow: 'hidden', padding: 0 },
      }}
    >
      {/* Cover */}
      <div className="relative h-[180px] sm:h-[220px] ">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover rounded-3xl p-4 "
          sizes="(min-width: 640px) 560px, 100vw"
        />
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <div className="mb-2">
          <Heading text={title} />
        </div>

        <Paragraph text={description} />

        <div className="mt-2 text-[18px] font-semibold text-[#8BCF9A] font-open-sans">
          From ${priceFrom}
        </div>

        <div className="mt-4 flex justify-between">
          {/* For now just close modal on click; wire to routing later if needed */}
          <TealBtn text="Book Now"  onClick={handleBooking}/>

          <button onClick={onClose} className='cursor-pointer font-open-sans md:text-xl text-gray-600'>Cancel</button>
        </div>

       
      </div>
    </Modal>

     {/* Shcedule Modal */}
        <ScheduleAppointmentModal
        openBookingModal={bookingModal}
        onCloseBookingModal={() => setBookingModal(false)}

    />

        
   </>
  );
}
