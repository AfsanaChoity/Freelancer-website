// components/sections/FaqSection.jsx
'use client';

import Heading from '@/components/ui/Heading';

export default function FaqSection() {
  // simple in-file data; replace as needed
  const faqs = [
    {
      q: 'How I read e book ??',
      a: 'Sign in, go to your Library, and click “Read”. Your last position is saved automatically across devices.',
    },
    {
      q: 'How I read e book ??',
      a: 'Open the book page and use the built-in reader. You can adjust font size, theme, and line height.',
    },
    {
      q: 'How I read e book ??',
      a: 'Download for offline reading from the book page. Your highlights sync when you’re back online.',
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto  px-4">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center justify-center gap-2 text-[#8BCF9A] font-nunito ">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#61C792]/20 text-[12px] font-semibold">
            ?
          </span>
          <span className="text-2xl font-medium">FAQ</span>
        </div>

        {/* Heading (your component) */}
        <div className="text-center mb-6 md:mb-8 space-y-2">
          <Heading text={`Got Question?`} />
          <Heading text={`We’ve Got Answer`} />
        </div>

        {/* List */}
        <div className="divide-y divide-gray-200">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group py-2"
            >
              <summary
                className="flex cursor-pointer select-none items-center justify-between py-4 text-[15px] font-medium text-gray-700 hover:text-gray-900"
              >
                <span>{item.q}</span>
                {/* chevron */}
                <svg
                  className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>

              <div className="pb-4 pr-2 text-[13px] leading-6 text-gray-600">
                {item.a}
              </div>

              
            </details>
          ))}
        </div>

        {/*  */}
        <hr className='text-gray-200'/>
      </div>

      {/* hide default marker on summary (kept inside one file) */}
      <style jsx>{`
        summary::-webkit-details-marker { display: none; }
      `}</style>
    </section>
  );
}
