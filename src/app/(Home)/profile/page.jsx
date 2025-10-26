'use client'
import ClientProfile from '@/components/clients/ClientProfile';
import CustomContainer from '@/components/ui/CustomContainer'
import React from 'react'
import { useSelector } from 'react-redux';

export default function ProfilePage() {
    const user = useSelector((state) => state.user.user ?? null);
    const role = useSelector((state) => state.user.role ?? null);
  return (
    <CustomContainer>

        {
            (role === 'Client') && (
                <ClientProfile />
            )
        }

    </CustomContainer>
  )
}
