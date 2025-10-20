'use client';

import Image from "node_modules/next/image";

export default function CategoryCard({ title, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group w-full
        rounded-xl border border-gray-200 bg-white
        shadow-lg hover:shadow-md
        transition-all duration-200
        px-4 py-5
        text-left
        
        hover:bg-[#def5e2]
      "
    >
      <div className="flex flex-col items-start gap-3">
        <Image src={icon} alt="icon"/>

        <div className="flex-1">
          <h3
            className="
              text-[15px] font-semibold text-gray-800
              
              font-open-sans
              md:w-[50%]
            "
          >
            {title}
          </h3>
        </div>
      </div>
    </button>
  );
}
