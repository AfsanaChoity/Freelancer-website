'use client';

import { Modal } from 'antd';
import React, { useState } from 'react';
import ConfirmBookingModal from './ConfirmBookingModal';

export default function ScheduleAppointmentModal({
  openBookingModal,
  onCloseBookingModal,
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // days row
  const days = [
    { key: 'sun', label: 'Sun', date: '14,Oct' },
    { key: 'mon', label: 'Mon', date: '15,Oct' },
    { key: 'tue', label: 'Tue', date: '16,Oct' },
    { key: 'wed', label: 'Wed', date: '17,Oct' },
    { key: 'thu', label: 'Thurs', date: '18,Oct' },
    { key: 'fri', label: 'Fri', date: '19,Oct' },
  ];

  const times = ['10:00 am', '10:30 am', '11:00 am', '11:30 am'];

  // red (booked) slots
  const booked = new Set(['tue|10:00 am', 'wed|10:00 am', 'thu|10:00 am', 'mon|10:00 am']);

  const pillBase =
    'min-w-[88px] inline-flex items-center justify-center rounded-md px-3 py-2 text-[12px] leading-none transition';
  const clsAvailable = `${pillBase} bg-[#DBF0E0] text-[#108a55] hover:bg-[#A1D7B6] hover:text-[#0C6F44] active:bg-[#c9e8da] cursor-pointer`;
  const clsBooked = `${pillBase} bg-black/10 text-black cursor-not-allowed`;

  // when user picks a slot
  const onSelect = (slot) => {
    // close this (schedule) modal first
    onCloseBookingModal?.();
    // remember the chosen slot
    setSelectedSlot(slot);
    // open confirm after this modal starts closing (avoid animation clash)
    setTimeout(() => setConfirmOpen(true), 0);
  };

  const handleSelect = (d, t) => {
    if (booked.has(`${d.key}|${t}`)) return;
    onSelect({ dayKey: d.key, dayLabel: d.label, date: d.date, time: t });
  };

  return (
    <>
      {/* Schedule modal */}
      <Modal
        open={openBookingModal}
        onCancel={onCloseBookingModal}
        footer={null}
        centered
        width={760}
        title={null}
        destroyOnClose
        className="font-open-sans"
        styles={{ content: { borderRadius: 12, overflow: 'hidden', padding: 0 } }}
      >
        <div className="p-4 sm:p-5 font-open-sans">
          <div className="mb-3">
            <div className="text-[15px] font-semibold text-gray-900">
              Schedule a appointment
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[680px]">
              {/* header row */}
              <div className="grid grid-cols-6 gap-3 mb-2">
                {days.map((d) => (
                  <div key={d.key} className="text-center">
                    <div className="text-[13px] font-semibold text-gray-800">{d.label}</div>
                    <div className="text-[11px] text-gray-500">{d.date}</div>
                  </div>
                ))}
              </div>

              {/* time grid */}
              <div className="grid grid-cols-6 gap-3">
                {days.map((d) => (
                  <div key={d.key} className="space-y-2">
                    {times.map((t) => {
                      const isBooked = booked.has(`${d.key}|${t}`);
                      return (
                        <button
                          key={t}
                          type="button"
                          disabled={isBooked}
                          onClick={() => handleSelect(d, t)}
                          className={isBooked ? clsBooked : clsAvailable}
                          aria-disabled={isBooked}
                          title={isBooked ? 'Booked' : 'Available'}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Confirm Booking modal (sibling, not nested) */}
      <ConfirmBookingModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        slot={selectedSlot}
        onConfirm={(payload) => {
          console.log('Booking payload:', payload);
          setConfirmOpen(false);
          // TODO: call API or route to success page
        }}
      />
    </>
  );
}
