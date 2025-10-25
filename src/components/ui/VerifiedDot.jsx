import React from 'react'
import tick from '@/assets/icons/greenTick.svg'
import Image from 'node_modules/next/image'
export default function VerifiedDot() {
    return (
        <div className='border border-[#c5ebcc] bg-[#c5ebcc] w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center'>
            <Image src={tick} alt="icon " className='lg:w-3' />

        </div>
    )
}
