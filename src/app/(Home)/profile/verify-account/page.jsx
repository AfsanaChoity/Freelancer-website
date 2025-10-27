'use client'

import React from 'react'
import CustomContainer from '@/components/ui/CustomContainer'
import { Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import TealBtn from '@/components/ui/TealBtn'
import SubHeadingBlack from '@/components/ui/SubHeadingBlack'
import Link from 'next/link'
import { Divider } from 'antd'

export default function VerifyAccountUpload() {
    const props = {
        name: 'file',
        multiple: false,
        showUploadList: false,
        beforeUpload(file) {
            const isLt5M = file.size / 1024 / 1024 < 5;
            if (!isLt5M) {
                message.error('File must be smaller than 5MB!');
            } else {
                message.success(`${file.name} selected`);
            }
            return false;
        },
    };

    return (
        <CustomContainer>
            {/* links */}
            <div className='mb-8'>
                <Link href="/profile" className="font-nunito text-gray-400 font-medium">Profile</Link>
                <Divider type="vertical" />
                <Link href="" className="font-nunito text-gray-700 font-medium">Verify account</Link>
            </div>

            <div className="bg-[#F6F8F9] rounded-[8px] p-8">
                <div className="bg-white rounded-[8px] p-10 max-w-[920px] mx-auto">
                    <div className='flex justify-center mb-10'>
                        <SubHeadingBlack text="Verify Your Account" />
                    </div>

                    <div className="w-full mx-auto ">
                        <label className="block font-open-sans text-sm font-medium text-[#333333] mb-3">Upload Your cerification</label>

                        {/* Full-width Upload field */}
                        
                        <Upload {...props} style={{ display: 'block', width: '100%' }}>
                            <div className="w-full border border-[#E6E6E6] hover:border-black focus-within:border-black rounded-md h-11 flex items-center gap-3 px-4 bg-white cursor-pointer transition-colors duration-200">
                                <UploadOutlined className="text-[#7F8A8C] text-lg" />
                                <span className="text-[#9AA0A2]">Upload File</span>
                            </div>
                        </Upload>

                        {/* Upload button centered below */}
                        <div className="mt-8 flex justify-center">
                            <Upload {...props}>
                                <div>
                                    <TealBtn text="Send" />
                                </div>
                            </Upload>
                        </div>
                    </div>
                </div>
            </div>
        </CustomContainer>
    )
}
