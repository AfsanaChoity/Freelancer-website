'use client';

import StatsCard from './StatsCard';

// swap with your real icons
import globe from '@/assets/image/about/globe.svg';
import handshake from '@/assets/image/about/handshake.svg';
import rocket from '@/assets/image/about/rocket.svg';

const stats = [
  { id: 1, icon: globe,     value: '10,000+', label: 'Professionals Worldwide' },
  { id: 2, icon: handshake, value: '1000+',   label: 'Trusted by Verified Clients' },
  { id: 3, icon: rocket,    value: '100+',    label: 'Growing Businesses Every Day' },
];

export default function StatsSection({ items = stats, className = '' }) {
  return (
    <section className={`pt-6 ${className}`}>
      <div className="">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-3 ">
          {items.map((s) => (
            <StatsCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
