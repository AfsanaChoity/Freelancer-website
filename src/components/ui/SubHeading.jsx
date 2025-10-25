import React from 'react'

export default function SubHeading({text}) {
  return (
    <div>
        <h1 className='font-open-sans font-semibold text-[#333333] text-xl  lg:text-2xl'>
            {text}
        </h1>
    </div>
  )
}
