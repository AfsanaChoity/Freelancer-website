'use client';

import Image from "node_modules/next/image";
import Link from "next/link";
import GenerateSlug from "../ui/GenerateSlug";

export default function CategoryCard({ title, icon }) {

   const slug = GenerateSlug(title)

   localStorage.setItem("slug", slug)

  return (
    <Link
      href={`/category/${slug}`}
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
    </Link>
  );

 
}
