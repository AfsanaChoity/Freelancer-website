'use client';

import Image from 'next/image';

export default function StatsCard({ icon, value = '1000+', label = '' }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-xl bg-white shadow-sm ring-1 ring-black/5 p-4">
      {/* Icon */}
      <div className="relative h-9 w-9 shrink-0 rounded-lg overflow-hidden">
        <Image src={icon} alt="" fill className="object-contain" sizes="36px" />
      </div>

      {/* Text */}
      <div>
        <div className="text-[18px] font-semibold text-[#8BCF9A] font-open-sans leading-6">
          {value}
        </div>
        <div className="text-[14px] text-gray-500 font-open-sans">{label}</div>
      </div>
    </div>
  );
}
