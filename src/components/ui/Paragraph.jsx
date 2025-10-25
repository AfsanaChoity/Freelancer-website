
import React from 'react'

export default function Paragraph({text, children}) {
  return (
    <div>
        <p className='font-open-sans text-[#6F6F6F] text-sm lg:text-xl text-justify'>
            {text}
            {children}
        </p>
    </div>
  )
}
