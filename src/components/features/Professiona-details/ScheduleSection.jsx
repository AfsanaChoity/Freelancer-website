// 'use client';

// import ConfirmBookingModal from '@/components/modals/ConfirmBookingModal';

// import React, { useState } from 'react';


// export default function ScheduleSection() {
//     const [confirmOpen, setConfirmOpen] = useState(false);
//       const [selectedSlot, setSelectedSlot] = useState(null);
    
//       // days row
//       const days = [
//         { 
//             key: 'sun',
//             label: 'Sun',
//             date: '14,Oct',
//             times: ['10:00 am', '10:30 am', '11:00 am', '11:30 am'] 
//         },
//         { 
//             key: 'mon', 
//             label: 'Mon', 
//             date: '15,Oct',
//             times: ['10:00 am', '10:30 am', '11:00 am', '11:30 am']
//         },
//         { 
//             key: 'tue', 
//             label: 'Tue', 
//             date: '16,Oct', 
//             times: ['10:00 am', '10:30 am', '11:00 am', '11:30 am']
//         },
//         { 
//             key: 'wed', 
//             label: 'Wed', 
//             date: '17,Oct', 
//             times: ['10:00 am', '10:30 am', '11:00 am', '11:30 am']
//         },
//         { 
//             key: 'thu', 
//             label: 'Thurs', 
//             date: '18,Oct', 
//             times: ['10:00 am', '10:30 am', '11:00 am', '11:30 am']
//         },
//         { 
//             key: 'fri', 
//             label: 'Fri', 
//             date: '19,Oct', 
//             times: ['10:00 am', '10:30 am', '11:00 am', '11:30 am']
//         },
       
//       ];
    
//       const times = ['10:00 am', '10:30 am', '11:00 am', '11:30 am'];
    
//       // red (booked) slots
//       const booked = new Set(['tue|10:00 am', 'wed|10:00 am', 'thu|10:00 am', 'mon|10:00 am']);
    
//       const pillBase =
//         ' inline-flex items-center justify-center rounded-md px-2 py-2 text-[12px] leading-none transition';
//       const clsAvailable = `${pillBase} bg-[#DBF0E0] text-[#108a55] hover:bg-[#A1D7B6] hover:text-[#0C6F44] active:bg-[#c9e8da] cursor-pointer`;
//       const clsBooked = `${pillBase} bg-black/10 text-black cursor-not-allowed`;
    
//       // when user picks a slot
//       const onSelect = (slot) => {
        
//         onCloseBookingModal?.();
        
//         setSelectedSlot(slot);
       
//         setTimeout(() => setConfirmOpen(true), 0);
//       };
    
//       const handleSelect = (d, t) => {
//         if (booked.has(`${d.key}|${t}`)) return;
//         onSelect({ dayKey: d.key, dayLabel: d.label, date: d.date, time: t });
//       };
//   return (
//     <div className=' h-full bg-white rounded-[8px] p-4 max-w-xl mx-auto'>
//         <div className=" font-open-sans    ">
//           <div className="mb-6">
//             <div className="text-[15px] font-semibold text-gray-900">
//               Schedule a appointment
//             </div>
//           </div>

//           <div className="">
//             <div className="overflow-x-auto md:overflow-x-visible">
//               {/* header row */}
//               <div className="  flex flex-nowrap  gap-4 md:justify-between">
//                 {days.map((d) => (
//                   <div key={d.key} className="text-center ">
//                     <div className="text-[13px] font-semibold text-gray-800">{d.label}</div>
//                     <div className="text-[11px] text-gray-500 mb-8">{d.date}</div>
                    
//                        <div className='flex flex-col gap-4'>
//                         {
//                              d.times.map((time) => {
//                       const isBooked = booked.has(`${d.key}|${time}`);
//                       return (
//                         <button
//                           key={time}
//                           type="button"
//                           disabled={isBooked}
//                           onClick={() => handleSelect(d, time)}
//                           className={isBooked ? clsBooked : clsAvailable}
//                           aria-disabled={isBooked}
//                           title={isBooked ? 'Booked' : 'Available'}
//                         >
//                           {time}
//                         </button>
//                       );
//                     })}
                        
//                        </div>
                    
//                   </div>
//                 ))}
//               </div>

              
//             </div>
//           </div>
//         </div>

//         <ConfirmBookingModal
//         open={confirmOpen}
//         onClose={() => setConfirmOpen(false)}
//         slot={selectedSlot}
//         onConfirm={(payload) => {
//           console.log('Booking payload:', payload);
//           setConfirmOpen(false);
         
//         }}
//       />
//     </div>
//   )
// }


'use client';

import ConfirmBookingModal from '@/components/modals/ConfirmBookingModal';
import React, { useState } from 'react';

export default function ScheduleSection() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const days = [
    { key: 'sun', label: 'Sun',  date: '14,Oct', times: ['10:00 am','10:30 am','11:00 am','11:30 am'] },
    { key: 'mon', label: 'Mon',  date: '15,Oct', times: ['10:00 am','10:30 am','11:00 am','11:30 am'] },
    { key: 'tue', label: 'Tue',  date: '16,Oct', times: ['10:00 am','10:30 am','11:00 am','11:30 am'] },
    { key: 'wed', label: 'Wed',  date: '17,Oct', times: ['10:00 am','10:30 am','11:00 am','11:30 am'] },
    { key: 'thu', label: 'Thurs',date: '18,Oct', times: ['10:00 am','10:30 am','11:00 am','11:30 am'] },
    { key: 'fri', label: 'Fri',  date: '19,Oct', times: ['10:00 am','10:30 am','11:00 am','11:30 am'] },
  ];

  const booked = new Set(['tue|10:00 am','wed|10:00 am','thu|10:00 am','mon|10:00 am']);

  const pillBase = 'inline-flex items-center justify-center rounded-md px-2 py-2 text-[12px] leading-none transition';
  const clsAvailable = `${pillBase} bg-[#DBF0E0] text-[#108a55] hover:bg-[#A1D7B6] hover:text-[#0C6F44] active:bg-[#c9e8da] cursor-pointer`;
  const clsBooked = `${pillBase} bg-black/10 text-black cursor-not-allowed`;

  const onSelect = (slot) => {
    
    setSelectedSlot(slot);
    setConfirmOpen(true);
  };

  const handleSelect = (d, t) => {
    if (booked.has(`${d.key}|${t}`)) return;
    onSelect({ dayKey: d.key, dayLabel: d.label, date: d.date, time: t });
  };

  return (
    <div className="h-full bg-white rounded-[8px] p-4 max-w-xl mx-auto">
      <div className="font-open-sans">
        <div className="mb-6">
          <div className="text-[15px] font-semibold text-gray-900">Schedule a appointment</div>
        </div>

        <div className="overflow-x-auto md:overflow-x-visible">
          <div className="flex flex-nowrap gap-4 md:justify-between">
            {days.map((d) => (
              <div key={d.key} className="text-center">
                <div className="text-[13px] font-semibold text-gray-800">{d.label}</div>
                <div className="text-[11px] text-gray-500 mb-8">{d.date}</div>

                <div className="flex flex-col gap-4">
                  {d.times.map((time) => {
                    const isBooked = booked.has(`${d.key}|${time}`);
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={isBooked}
                        onClick={() => handleSelect(d, time)}
                        className={isBooked ? clsBooked : clsAvailable}
                        aria-disabled={isBooked}
                        title={isBooked ? 'Booked' : 'Available'}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ConfirmBookingModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        slot={selectedSlot}
        onConfirm={(payload) => {
          console.log('Booking payload:', payload);
          setConfirmOpen(false);
        }}
      />
    </div>
  );
}
