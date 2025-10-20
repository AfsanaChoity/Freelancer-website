// components/sections/HowItWorks.jsx
'use client';

import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import iconCreate from '@/assets/icons/Profile.svg';
import iconChat from '@/assets/icons/msg.svg';
import iconDone from '@/assets/icons/Mail.svg';

const steps = [
  {
    id: 1,
    iconSrc: iconCreate,
    title: '1. Create Profile',
    desc: 'Sign up for free and showcase your skills and experience to attract clients.',
  },
  {
    id: 2,
    iconSrc: iconChat,
    title: '2. Connect & Communicate',
    desc: 'Chat with clients or freelancers to discuss project details and timelines.',
  },
  {
    id: 3,
    iconSrc: iconDone,
    title: '3. Collaborate & Complete Projects',
    desc: 'Freelancers deliver work and receive feedback to showcase their expertise.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto  px-4  ">
        <div className="text-center mb-10 md:mb-12">
          <Heading text="How It Works?" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.id || i}
              className={[
                'flex flex-col items-center text-center px-6 py-8',
                i > 0 ? 'md:border-l md:border-[#8BCF9A] md:border-opacity-60' : '',
              ].join(' ')}
            >
              {/* Icon (Next Image) */}
              <div className="mb-4 h-14 w-14 relative">
                <Image
                  src={s.iconSrc}          // local import or URL
                  alt={s.alt || s.title}
                  fill                      // fill the 56x56 box
                  className="object-contain"
                  sizes="56px"
                  priority={false}
                />
              </div>

              {/* Title */}
              <h3 className="text-[15px] md:text-base font-semibold text-gray-800 font-open-sans">
                {s.title}
              </h3>

              {/* Caption */}
              <p className="mt-2 max-w-sm text-xs md:text-[13px] leading-5 text-gray-500 font-open-sans">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
