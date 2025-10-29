'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Upload } from 'antd';

// demo images – replace with yours
import coverPhoto from '@/assets/image/freelancer/coverPhoto.jpg';
import userImg from '@/assets/image/freelancer/user.jpg';
import { IoIosArrowForward } from "react-icons/io";
import Paragraph from '../ui/Paragraph';
import SubHeadingBlack from '../ui/SubHeadingBlack';
import edit from '@/assets/icons/edit.svg'
import clock from '@/assets/icons/clock.svg'
import msg from '@/assets/icons/whatsapp.svg'
import sub from '@/assets/icons/crown.svg'
import port from '@/assets/icons/task-square.svg'
import Link from 'node_modules/next/link';
import TealBtn from '../ui/TealBtn';
import OfferedServicesCard from '../shared/OfferedServicesCard';
import img from '@/assets/image/popularService.jpg'
import CreateEditPackageModal from '../modals/CreateEditPackageModal';
import AddWhatsAppModal from '../modals/AddWhatsAppModal';

const linkItems = [
    {
        id: 1,
        icon: edit,
        text: "Edit profile",
        path: "/profile/edit"
    },
    {
        id: 2,
        icon: clock,
        text: "Set Availability",
        path: "/profile/set-availability"
    },
    {
        id: 3,
        icon: msg,
        text: "Add Whats-app",
        path: "/profile/add/whats-app"
    },
    {
        id: 4,
        icon: sub,
        text: "Subscription",
        path: "/profile/subscription"
    },
    {
        id: 5,
        icon: port,
        text: "Portfolio",
        path: "/profile/portfolio"

    },

]

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

export default function ProfessionalProfile() {
    const [avatar, setAvatar] = useState(userImg?.src || '');
    const [openWhatsAppModal, setopenWhatsAppModal] = useState(false);

    const handleWhatsApp = () => {
        setopenWhatsAppModal(true);

    }

    const handleCloseWhatsAppModal = () => {
        setopenWhatsAppModal(false);
    }

    const beforeUpload = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => setAvatar(e.target.result);
        reader.readAsDataURL(file);
        return false;
    };

    const [openModal, setOpenModal] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [heading, setHeading] = useState('')



    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <div className="flex flex-col gap-8 lg:flex-row">
            <div className="lg:w-4/7 p-4 bg-white rounded-[12px] border border-[#E6E6E6] shadow-[0_12px_34px_rgba(0,0,0,0.10)] overflow-hidden">
                {/* Cover */}
                <div className="relative h-[140px] lg:h-[190px] w-full">
                    <Image src={coverPhoto} alt="cover" fill className="object-cover rounded-[12px]" />
                    <div className="absolute bottom-1 right-1">
                        <Upload accept="image/*" showUploadList={false} beforeUpload={beforeUpload}>
                            <button
                                type="button"
                                aria-label="Upload avatar"
                                className="w-7 h-7 rounded-full bg-white border border-[#8BCF9A] grid place-items-center shadow-sm"
                            >
                                {/* camera icon */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#8BCF9A" strokeWidth="2" />
                                    <path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" stroke="#8BCF9A" strokeWidth="2" />
                                </svg>
                            </button>
                        </Upload>
                    </div>
                </div>

                {/* Body */}
                <div className=" pt-4 pb-5">
                    {/* Avatar + camera */}
                    <div className="relative -mt-12 lg:-mt-15 mb-2 w-[72px] h-[72px] lg:w-[102px] lg:h-[102px]">
                        <div className="relative w-full h-full rounded-full ring-2 ring-[#8BCF9A] overflow-hidden bg-gray-100">
                            {avatar ? (
                                <Image src={avatar} alt="avatar" fill className="object-cover" />
                            ) : null}
                        </div>

                        {/* camera upload */}
                        <div className="absolute -bottom-1 -right-1">
                            <Upload accept="image/*" showUploadList={false} beforeUpload={beforeUpload}>
                                <button
                                    type="button"
                                    aria-label="Upload avatar"
                                    className="w-7 h-7 rounded-full bg-white border border-[#8BCF9A] grid place-items-center shadow-sm"
                                >
                                    {/* camera icon */}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#8BCF9A" strokeWidth="2" />
                                        <path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" stroke="#8BCF9A" strokeWidth="2" />
                                    </svg>
                                </button>
                            </Upload>
                        </div>
                    </div>

                    <div className='font-open-sans mt-4'>
                        {/* Name */}
                        <SubHeadingBlack text="Mr. Jhon" />

                        {/* About */}
                        <div className="mt-3">
                            <div className="text-[16px] font-semibold text-[#202020]">About me</div>


                            <Paragraph text=" Experienced HR freelancer specializing in recruitment, employee relations, and talent
                                Experienced HR freelancer specializing in recruitment, employee relations, and talent
                                Experienced HR freelancer specializing in recruitment,"/>
                        </div>

                        {/* Divider */}
                        <div className="mt-6 h-px w-full bg-[#E9E9E9]" />

                        {/* Menu list */}
                        <ul className="mt-2 space-y-1">
                            {
                                linkItems.map((item) => {
                                    if (item.id === 3) {
                                        return (
                                            <li key={item.id} className=' mb-4 cursor-pointer' onClick={handleWhatsApp}>
                                                
                                                    <div className='flex justify-between items-center'>
                                                        <div className='flex gap-2 mb-4'>


                                                            <Image src={item.icon} alt="icon" />
                                                            {item.text}
                                                        </div>
                                                        <IoIosArrowForward className="text-xl" />
                                                    </div>
                                               
                                                <hr className='text-[#E9E9E9] ' />
                                            </li>
                                        )
                                    }

                                    return (
                                        <Link href={item.path} >
                                            <li key={item.id} className=' mb-4'>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex gap-2 mb-4'>


                                                        <Image src={item.icon} alt="icon" />
                                                        {item.text}
                                                    </div>
                                                    <IoIosArrowForward className="text-xl" />
                                                </div>
                                                <hr className='text-[#E9E9E9] ' />
                                            </li>
                                        </Link>
                                    )
                                }

                                )
                            }
                        </ul>

                        {/* Verify + Change Password pills */}
                        <div className="mt-10 space-y-4">
                            {/* Verify your account */}
                            <Link href="/profile/verify-account" className="w-full rounded-[10px] bg-[#E9F4EE] border border-[#D6EAD9] flex items-center justify-between px-4 py-3">
                                <span className="text-[14px] text-[#202020]">Verify your account</span>
                                <div className="">
                                    <IoIosArrowForward className="text-[#8BCF9A]" />
                                </div>
                            </Link>

                            {/* Change Password */}
                            <Link href="/profile/change-password" className="w-full rounded-[10px] bg-[#E5E5E5] border border-[#D9D9D9] flex items-center justify-between px-4 py-3">
                                <span className="text-[14px] text-[#6F6F6F]">Change Password</span>
                                <div className=" ">
                                    <IoIosArrowForward />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages */}
            <div className=' p-4 bg-white rounded-[12px] border border-[#E6E6E6] shadow-[0_12px_34px_rgba(0,0,0,0.10)] overflow-hidden'>
                {/* text + button */}
                <div className='flex flex-col gap-4 md:flex-row  justify-between items-center'>
                    <SubHeadingBlack text="Offered Services" />
                    <TealBtn text="Add Service"
                        onClick={() => {
                            setOpenModal(true)
                            setCreateModal(true)
                            setHeading('Create Service')
                        }} />
                </div>


                {/* services */}
                <div className='space-y-8 mt-10'>
                    {
                        services.map((service) => (
                            <OfferedServicesCard service={service} profile={true} onEdit={() => {
                                setOpenModal(true)
                                setEditModal(true)
                                setHeading('Edit Service')
                            }} />
                        ))
                    }
                </div>

            </div>

            <CreateEditPackageModal
                open={openModal}
                onClose={handleCloseModal}
                create={createModal}
                edit={editModal}
                heading={heading}

            />

            {/* Add whats app modal */}
            <AddWhatsAppModal 
                open={openWhatsAppModal}
                onClose={handleCloseWhatsAppModal}
            />
        </div>
    );
}


