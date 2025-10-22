'use client'
import SectionContainer from '@/components/shared/SectionContainer'
import { pricingPlans } from '@/lib/plans'
import React from 'react'
import PricingCard from './PricingCard'




export default function PricingSection() {
  return (
    <div>
        <SectionContainer heading="Flexible Subscriptions for Every Professional" title="Pricing">

          
            <div className="grid gap-10 2xl:gap-30 sm:grid-cols-2 lg:grid-cols-3">
            { pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan}/>
            ))

            }
            </div>

        </SectionContainer>
    </div>
  )
}
