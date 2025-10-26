

'use client';

import React, { useState } from 'react';

import { SearchOutlined, SlidersOutlined } from '@ant-design/icons';

export default function CustomSearch({ onSearch,  }) {
  const [q, setQ] = useState('');

  const submit = (e) => {
    e?.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <form
      onSubmit={submit}
      className={``}
    >
      {/* Input shell */}
      <label className="sr-only" htmlFor="global-search">Search</label>
      <div className="flex items-center bg-white rounded-[16px] shadow ring-1 ring-black/5 w-full h-10 md:h-12 ">
        <span className="pl-3 sm:pl-4 pr-2 text-gray-500 text-[16px] sm:text-[18px]">
          <SearchOutlined />
        </span>

        <input
          id="global-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search Any Service..."
          aria-label="Search Any Service"
          className="flex-1 bg-transparent outline-none text-[14px] sm:text-[15px] text-gray-800 placeholder:text-gray-400"
        />

        <button
          type="button"
          aria-label="More filters"
          className="shrink-0 mx-2 h-8 w-8 grid place-items-center rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
        >
          <SlidersOutlined className="text-[16px]" />
        </button>
      </div>

      
    </form>
  );
}
