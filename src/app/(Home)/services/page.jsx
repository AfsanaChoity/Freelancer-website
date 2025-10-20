import FlexibleBanner from '@/components/shared/FlexibleBanner'
import CustomContainer from '@/components/ui/CustomContainer'
import React from 'react'
import hero from '@/assets/image/serviceBG.png'

export default function ServicesPage() {
    return (
        <CustomContainer>
            {/* Banner */}
            <div>
                <FlexibleBanner
                    bgSrc={hero}
                    variant="simple"
                    title="Certified Services"
                    subtitle="Trusted professional service packages verified by our experts."
                    overlayClass="bg-black/45"
                />
            </div>
        </CustomContainer>
    )
}
