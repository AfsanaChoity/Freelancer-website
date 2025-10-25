// components/ExpertHeader.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import TealBtn from '@/components/ui/TealBtn';
import CustomContainer from '@/components/ui/CustomContainer';
import avatarSrc from '@/assets/image/freelancer/user.jpg'
import PortfolioSection from '@/components/features/Professiona-details/PortfolioSection';
import VerifiedDot from '@/components/ui/VerifiedDot';

export default function ProfessionalPortfolioesPage({
  name = 'Mr. Lee',
  subtitle = 'Certified Finance & Account Expert',
  rating = 4.5,
  reviewCount = 500,
 
  onMessage,
}) {
  return (
    <CustomContainer >
        <div className="flex items-center justify-between gap-4 py-4">
        {/* Left: Avatar + text */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {/* Avatar */}
          <div className="relative h-24 w-24 ring-1 ring-[#8BCF9A] rounded-full  shrink-0">
            <Image
              src={avatarSrc}
              alt={`${name} avatar`}
              fill
              
              className="rounded-full object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="min-w-0">
            {/* Name + verified + rating */}
            <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 font-open-sans">
                {name}
              </h3>

              {/* Verified dot */}
              <VerifiedDot />

              {/* Rating */}
              <span className="flex items-center text-sm text-gray-600 gap-1">
                {/* star icon (inline svg for crisp small size) */}
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 fill-yellow-400"
                  aria-hidden="true"
                >
                  <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.95 5.06 16.8l.94-5.49-4-3.9 5.53-.8L10 1.6z" />
                </svg>
                <span className="font-medium">{rating}</span>
                <span className="text-gray-400">({reviewCount})</span>
              </span>
            </div>

            {/* Subtitle */}
            <p className="mt-0.5 text-sm text-gray-500 truncate">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="shrink-0">
          {/* Adjust props to match your TealBtn implementation */}
          <TealBtn onClick={onMessage} text="Message Now">
           
          </TealBtn>
        </div>
      </div>

      <div className='mt-10 lg:mt-20'>
        <PortfolioSection />
      </div>
    </CustomContainer>
  );
}
