import React from 'react'

export default function Heading({text}) {
  return (
    <div>
        <h1 className='font-open-sans font-bold text-[#202020] text-2xl lg:text-3xl xl:text-4xl'>
            {text}
        </h1>
    </div>
  )
}
