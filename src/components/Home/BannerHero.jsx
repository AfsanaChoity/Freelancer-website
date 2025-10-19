
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SearchOutlined, SlidersOutlined } from '@ant-design/icons';
import TealBtn from '@/components/ui/TealBtn'; // your shared button
import bgSrc from '@/assets/image/hero.png'

export default function BannerHero({  onSearch }) {
  const [q, setQ] = useState('');

  const submit = (e) => {
    e?.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <section className="relative  w-full h-[68vh] min-h-[520px]">
      {/* BG image fills the section */}
      <Image
        src={bgSrc}
        alt="Office city view"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Soft left gradient to increase text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

      {/* Content column */}
      <div className="relative z-10 h-full">
        <div className="mx-auto h-full w-full max-w-6xl px-4 md:px-6 flex items-center">
          <div className="w-full max-w-3xl">
            {/* Heading — Open Sans */}
            <h1 className="font-open-sans text-white leading-[1.3] font-bold  tracking-[-0.01em] text-[34px] sm:text-5xl md:text-[52px]">
              Hire the Right
              <br className="hidden sm:block" />
              Professional for Your
              <br className="hidden sm:block" />
              Business Growth
            </h1>

            {/* Search row */}
            <form
              onSubmit={submit}
              className="mt-6 md:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {/* Input shell */}
              <div className="flex items-center bg-white rounded-[14px] shadow ring-1 ring-black/5 w-full sm:w-[660px] h-[50px]">
                <span className="pl-4 pr-2 text-gray-500">
                  <SearchOutlined />
                </span>

                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search Any Service..."
                  aria-label="Search Any Service"
                  className="flex-1 bg-transparent outline-none text-[15px] text-gray-800 placeholder:text-gray-400"
                />

                {/* small filter icon button (optional) */}
                <button
                  type="button"
                  aria-label="More filters"
                  className="shrink-0 mx-2 h-8 w-8 grid place-items-center rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <SlidersOutlined className="text-[16px]" />
                </button>
              </div>

              {/* Find expert button (your component) */}
              <div className="sm:ml-2">
                <TealBtn onClick={submit} text="Find expert" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
