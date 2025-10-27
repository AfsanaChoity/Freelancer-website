'use client'
import EditClientProfile from '@/components/clients/EditClientProfile';
import EditProfessionalProfile from '@/components/professionals/EditProfessionalProfile';
import CustomContainer from '@/components/ui/CustomContainer';
import { Divider } from 'antd';
import Link from 'node_modules/next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export default function EditProfilePage() {
     const user = useSelector((state) => state.user.user ?? null);
        const role = useSelector((state) => state.user.role ?? null);
  return (
   <CustomContainer>
            {/* links */}
            <div className='mb-8'>
                <Link href="/profile" className="font-nunito text-gray-400 font-medium">Profile</Link>
                <Divider type="vertical" />
                <Link href="" className="font-nunito text-gray-700 font-medium">Edit Profile</Link>
                
            </div>

    {
        (role==='Client') && (
            <EditClientProfile />
        )
    }

    {
        (role === 'Become a Pro') && (
            <EditProfessionalProfile />
        )
    }
   </CustomContainer>
  )
}
