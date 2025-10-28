
'use client'
import React from "react";
import Image from "next/image";
import { useState } from 'react';
import Heading from "@/components/ui/Heading";
import TealBtn from "@/components/ui/TealBtn";
import CustomContainer from "@/components/ui/CustomContainer";
import { CiClock2 } from "react-icons/ci";

import img from "@/assets/image/freelancer/user.jpg";
import SubHeadingBlack from "@/components/ui/SubHeadingBlack";
// import { Tabs } from 'antd'; // Removed unused Tabs import

// Custom pill tabs component
function TabsPill({ active, setActive }) {
    const tabs = [
        { key: 'upcoming', label: 'Upcoming' },
        { key: 'pending', label: 'Pending' },
        { key: 'canceled', label: 'Canceled' },
        { key: 'completed', label: 'Completed' },
    ];

    return (
        <div className="inline-flex items-center bg-[#EEF1F2] rounded-[8px] p-1 gap-1">
            {tabs.map((t) => {
                const isActive = active === t.key;
                return (
                    <button
                        key={t.key}
                        onClick={() => setActive(t.key)}
                        className={
                            `cursor-pointer transition-all duration-150 text-sm font-medium ${isActive ? 'bg-white text-[#0b1320] shadow-[0_4px_10px_rgba(3,18,26,0.08)]' : 'text-[#69707a]'} rounded-[8px] px-6 py-2`
                        }
                        role="tab"
                        aria-selected={isActive}
                    >
                        {t.label}
                    </button>
                );
            })}
        </div>
    );
}

const bookingsMock = [
    { id: 1, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "confirmed" },
    { id: 2, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "pending" },
    { id: 3, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "canceled" },
    { id: 4, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "completed" },
    { id: 5, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "confirmed" },
    { id: 6, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "pending" },
    { id: 7, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "canceled" },
    { id: 8, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "completed" },
    { id: 9, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "confirmed" },
    { id: 10, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "pending" },
    { id: 11, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "canceled" },
    { id: 12, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "completed" },
    { id: 13, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "confirmed" },
    { id: 14, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "pending" },
    { id: 15, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "canceled" },
    { id: 16, name: "Mr. Lee", category: "Finance & Accounting", date: "Oct 7,2025", time: "10:00 AM", status: "completed" },
];

// ----------------- Shared small component (status pill) -----------------
function StatusPill({ status }) {
    const base = "text-xs font-medium px-3 py-1 rounded-lg border";
    switch (status) {
        case "confirmed":
            return <span className={`${base} bg-[#e8f8ff] text-[#1e9bd6] border-[#e0f6ff]`}>confirmed</span>;
        case "pending":
            return <span className={`${base} bg-[#fff7ed] text-[#f59e0b] border-[#ffedd5]`}>Pending</span>;
        case "canceled":
            return <span className={`${base} bg-[#fff3f3] text-[#f87272] border-[#ffecec]`}>Canceled</span>;
        case "completed":
            return <span className={`${base} bg-[#f0fbf6] text-[#0f9d6a] border-[#e6f7ef]`}>Completed</span>;
        default:
            return <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>;
    }
}

// ----------------- Reusable BookingItem (single source of truth) -----------------
function BookingItem({ item }) {
    return (
        <div className="w-full bg-white rounded-lg shadow-[0_6px_16px_rgba(14,35,37,0.06)] border border-[#e9eef0] p-4 flex items-center gap-6">
            <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-md overflow-hidden border border-[#e6eef0]">
                    <Image src={img} alt={item.name} className="object-cover w-full h-full" />
                </div>
            </div>

            <div className="flex justify-between items-center  w-full">
                <div className="">
                    <div>
                        <div className="text-sm font-semibold text-[#0b1320]">{item.name}</div>
                        <div className="mt-2 inline-block">
                            <span className="text-xs font-medium px-2 py-1 rounded-md bg-[#e9fff0] text-[#2aa36a]">
                                {item.category}
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3 text-sm text-[#7b8590]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#9aa4ad">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{item.date}</span>
                        </div>
                    </div>
                </div>

                {/* time */}
                <div className=" text-[#6b7280] ">
                    <div className="flex items-center gap-2">
                        <CiClock2 />
                        <div className="text-sm">{item.time}</div>
                    </div>
                </div>

                {/* button */}
                <div className="flex flex-col items-end gap-3">
                    <div className="mb-1">
                        <StatusPill status={item.status} />
                    </div>
                    {
                        item.status !== "completed" && (
                            <div>
                                <TealBtn className="shadow-lg" text={item.status === "canceled" ? "Reschedule" : "Message Now"} />
                            </div>
                        )
                    }
                </div>

            </div>


        </div>
    );
}


function UpcomingBookings({ bookings }) {
    // assume upcoming means 'confirmed' status in your data
    if (!bookings || bookings.length === 0) {
        return <div className="py-8 text-center text-sm text-[#6b7280]">No upcoming bookings</div>;
    }
    return <div className="space-y-6">{bookings.map((b) => <BookingItem key={b.id} item={b} />)}</div>;
}

function PendingBookings({ bookings }) {
    if (!bookings || bookings.length === 0) {
        return <div className="py-8 text-center text-sm text-[#6b7280]">No pending bookings</div>;
    }
    return <div className="space-y-6">{bookings.map((b) => <BookingItem key={b.id} item={b} />)}</div>;
}

function CanceledBookings({ bookings }) {
    if (!bookings || bookings.length === 0) {
        return <div className="py-8 text-center text-sm text-[#6b7280]">No canceled bookings</div>;
    }
    return <div className="space-y-6">{bookings.map((b) => <BookingItem key={b.id} item={b} />)}</div>;
}

function CompletedBookings({ bookings }) {
    if (!bookings || bookings.length === 0) {
        return <div className="py-8 text-center text-sm text-[#6b7280]">No completed bookings</div>;
    }
    return <div className="space-y-6">{bookings.map((b) => <BookingItem key={b.id} item={b} />)}</div>;
}


export default function BookingsPage() {

    const upcomingList = bookingsMock.filter((b) => b.status === "confirmed");
    const pendingList = bookingsMock.filter((b) => b.status === "pending");
    const canceledList = bookingsMock.filter((b) => b.status === "canceled");
    const completedList = bookingsMock.filter((b) => b.status === "completed");
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <CustomContainer>
            <div className="min-h-[80vh] ">
                <h1 className="font-open-sans text-black font-bold text-2xl lg:text-3xl mb-6">My Bookings & Purchases</h1>

                <div className=" w-full mb-6 mx-auto overflow-x-auto">

                    <div className="min-w-[700px] ">

                            <div className="flex md:justify-end ">
                                <TabsPill active={activeTab} setActive={setActiveTab} />
                            </div>
                       

                        <div className="">
                            {/* Custom pill-style tabs (matches provided design) */}


                            {/* Tab content */}
                            <div className="mt-6">
                                {activeTab === 'upcoming' && <UpcomingBookings bookings={upcomingList} />}
                                {activeTab === 'pending' && <PendingBookings bookings={pendingList} />}
                                {activeTab === 'canceled' && <CanceledBookings bookings={canceledList} />}
                                {activeTab === 'completed' && <CompletedBookings bookings={completedList} />}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </CustomContainer>
    );
}
