'use client'
import React from 'react'
import CustomContainer from '@/components/ui/CustomContainer'
import SubHeadingBlack from '@/components/ui/SubHeadingBlack'
import TealBtn from '@/components/ui/TealBtn'
import Link from 'next/link'
import TealOutLineBtn from '@/components/ui/TealOutLineBtn'
import { Divider } from 'antd';

export default function SubscriptionCard(){
  return (
    <CustomContainer>
        {/* links */}
                    <div className='mb-8'>
                        <Link href="/profile" className="font-nunito text-gray-400 font-medium">Profile</Link>
                        <Divider type="vertical" />
                        <Link href="" className="font-nunito text-gray-700 font-medium">Subscription</Link>
        
                    </div>

      <div className="bg-white rounded-[12px] shadow-[0_12px_34px_rgba(0,0,0,0.06)] p-8 max-w-[720px] mx-auto">
        {/* Title (keep your SubHeadingBlack as requested) */}
        <div className="text-center mb-6">
          <SubHeadingBlack text="Subscription" />
        </div>

        {/* Inner card */}
        <div className="bg-white rounded-lg md:border md:border-[#EEF1F2] shadow-[inset_0_1px_0_rgba(0,0,0,0.02)] md:p-16">
          <div className="flex items-start justify-between">
            <div className="flex-1 ">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-[#202020] font-medium text-lg">Premium Plan</h4>
                </div>

                {/* Status pill */}
                <div>
                  <span className="inline-block text-[12px] bg-[#E9FFF1] text-[#2DAE64] px-3 py-1 rounded-full font-medium">Active</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 text-sm text-[#879197]">
                <div className="flex items-center justify-between">
                  <div>Start date :</div>
                  <div className="text-[#B7BFC1]">08 | 16 |2025</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>Renewal date :</div>
                  <div className="text-[#B7BFC1]">09 | 16 |2025</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex items-center gap-4">
                <TealOutLineBtn text="Cancel" onClick={() => {}} />

                {/* Keep TealBtn unchanged for Renew Now button */}
                <div className="ml-auto">
                  <TealBtn text="Renew Now" onClick={() => {}} />
                </div>
              </div>
            </div>

            {/* Decorative right padding to mimic image whitespace */}
            
          </div>
        </div>
      </div>
    </CustomContainer>
  )
}
