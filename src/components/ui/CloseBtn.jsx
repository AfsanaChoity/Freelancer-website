import React from 'react'
import closeIcon from '@/assets/icons/close_icon.svg'
import Image from 'next/image'
import Link from 'node_modules/next/link'

export default function CloseBtn({path}) {
  return (
    <div className=' flex justify-end pt-2 pr-2 xl:pt-4 xl:pr-4'>
            <Link href={path}>
              <Image src={closeIcon} alt="icon" className="w-4 lg:w-5"/>
            </Link>
         </div>
  )
}
