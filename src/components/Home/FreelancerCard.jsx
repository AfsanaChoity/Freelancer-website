'use client';

import Image from 'next/image';
import tick from '@/assets/icons/tick-circle.svg'
import arrow from '@/assets/icons/arrow-right.svg'
import Link from 'next/link';

export default function FreelancerCard({
  imgSrc,
  name = 'Mr.Lee',
  category = 'Finance & Accounting',
  rating = 4.5,
  reviews = 500,
  onHire,
}) {
  return (
    <div
      className="
        rounded-[8px] bg-white shadow-lg 
        overflow-hidden  transition border border-gray-200
      "
    >
      {/* Cover */}
      <div className="relative h-48">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          priority={false}
        />
      </div>

      {/* Body */}
      <div className="px-4 py-3">
        {/* Top row: name + verified + rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-semibold text-[#202020] font-open-sans">{name}</span>
           <Image src={tick} alt="icon"/>
          </div>

          <div className="flex items-center gap-1 text-[16px] text-gray-600">
            <span className="text-[#FFA726] ">★</span>
            <span className="font-medium">{rating}</span>
            <span className="text-gray-400">({reviews})</span>
          </div>
        </div>

        {/* Category link (green) */}
        <div className="mt-1">
          <button
            type="button"
            className="text-[12px] text-[#47b65f] bg-[#e7f3e9] underline decoration-transparent hover:decoration-[#61C792] px-2 rounded"
          >
            {category}
          </button>
        </div>

        {/* Short description */}
        <p className="mt-2 text-[14px]  font-open-sans leading-5 text-[#9F9C96] line-clamp-2">
          Experienced HR freelancer specializing in recruitment, employee relations, and talent
        </p>

        {/* Footer action */}
        <div className="mt-3">
          <Link
            href="/details"
            className="inline-flex font-open-sans items-center  text-[16px] font-medium text-gray-700 hover:text-[#144A6C]"
          >
            Hire Now <span aria-hidden><Image src={arrow} alt="icon"/></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
