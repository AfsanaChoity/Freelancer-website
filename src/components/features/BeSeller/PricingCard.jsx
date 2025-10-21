'use client';

export default function PricingCard({
    title = 'Basic',
    blurb = 'Kick off your AI journey with all the basics to spark your creativity',
    price = 6,
    currency = 'EUR',
    period = 'month',
    billedText = 'Billed monthly',
    ctaText = 'Get Basic',
    onCta = () => { },
    features = [
        '7,000 AI credits/month for creating images, videos, audio, and other generations',
        '7,000 AI credits/month for creating images, videos, audio, and other generations',
        '7,000 AI credits/month for creating images, videos, audio, and other generations',
    ],
    className = '',
}) {
    return (
        <div
            className={[
                'rounded-xl bg-white shadow-lg ring-1 ring-black/5 font-open-sans',
                'p-5 sm:p-6 w-full',
                'transform-gpu will-change-transform',
                'transition-transform duration-200 ease-out',
                'hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl',
                className,
            ].join(' ')}
        >
            {/* Header */}
            <h3 className="text-[18px] sm:text-[19px] font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-[13px] text-gray-500 leading-5">{blurb}</p>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-2">
                <div className="text-[28px] sm:text-[30px] font-bold text-gray-900">
                    {price} {currency}
                </div>
                <span className="text-[13px] text-gray-600">/ {period}</span>
            </div>

            {/* Billed note */}
            <div className="mt-1 text-[12px] text-gray-500">{billedText}</div>

            {/* CTA */}
            <button
                onClick={onCta}
                className="
          mt-4 w-full h-11 rounded-md
          bg-[#144A6C] text-white font-semibold
          shadow-[0_8px_16px_-6px_rgba(20,74,108,0.35)]
          hover:bg-[#0f3a55] transition-colors
          focus:outline-none focus:ring-2 focus:ring-[#144A6C]/30
          cursor-pointer
        "
            >
                {ctaText}
            </button>

            {/* Features */}
            <div className="mt-5">
                <div className="text-[12px] font-semibold text-gray-700 mb-2">AI Suite with:</div>
                <ul className="space-y-3">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 leading-5">
                            {/* check icon */}
                            <svg
                                className="mt-[2px] h-4 w-4 text-[#61C792] shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
