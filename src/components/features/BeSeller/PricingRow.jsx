// components/pricing/PricingRow.jsx
'use client';

import PricingCard from './PricingCard';

export default function PricingRow() {
  const common = {
    blurb:
      'Kick off your AI journey with all the basics to spark your creativity',
    features: [
      '7,000 AI credits/month for creating images, videos, audio, and other generations',
      '7,000 AI credits/month for creating images, videos, audio, and other generations',
      '7,000 AI credits/month for creating images, videos, audio, and other generations',
    ],
  };

  return (
    <section className="py-6">
      <div className="">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard {...common} />
          <PricingCard {...common} />
          <PricingCard {...common} />
        </div>
      </div>
    </section>
  );
}
