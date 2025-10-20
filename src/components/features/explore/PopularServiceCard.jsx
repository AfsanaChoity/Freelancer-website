'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";

export default function PopularServiceCard({
  cover,                 
  title = 'Service title',
  priceFrom = 100,
  href = '#',
}) {
  return (
    <div className="group">
      {/* Cover */}
      <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 100vw"
        />
      </div>

      {/* Body */}
      <div className="mt-2.5">
        <h3 className="text-[14px] font-semibold text-gray-800 line-clamp-1 font-open-sans">
          {title}
        </h3>

        <p className="mt-1 text-[13px] text-[#8BCF9A] font-open-sans">
          From ${priceFrom}
        </p>

        <Link
          href={href}
          className="font-open-sans mt-2 inline-flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-700"
        >
          Book Now <span aria-hidden><MdOutlineArrowOutward /></span>
        </Link>
      </div>
    </div>
  );
}
