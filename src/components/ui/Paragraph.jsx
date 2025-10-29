
import React from 'react'

export default function Paragraph({text, children}) {
  return (
    <div>
        <p className='font-open-sans text-gray-500 text-sm lg:text-xl text-justify'>
            {text}
            {children}
        </p>
    </div>
  )
}
