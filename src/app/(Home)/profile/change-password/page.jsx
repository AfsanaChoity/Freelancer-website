'use client';

import React from 'react';
import { Form, Input } from 'antd';
import TealBtn from '@/components/ui/TealBtn';
import '@/styles/Auth.css'
import { Divider } from 'antd';
import Link from 'next/link';
import CustomContainer from '@/components/ui/CustomContainer';
import { LockOutlined } from '@ant-design/icons';

export default function ChangePassword() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Save Changes:', values);
    };

    return (

        <CustomContainer>
            <div>

                {/* links */}
                <div className='mb-8'>
                    <Link href="/profile" className="font-nunito text-gray-400 font-medium">Profile</Link>
                    <Divider type="vertical" />
                    <Link href="" className="font-nunito text-gray-700 font-medium">Change Password</Link>

                </div>

                {/* form */}
                <div className="w-full max-w-xl mx-auto  font-open-sans">
                    <div className="bg-white rounded-[6px] border border-[#E6E6E6] shadow-[0_12px_34px_rgba(0,0,0,0.10)] py-10">
                        {/* Heading */}
                        <div className="pt-6 px-6 text-center">
                            <h2 className="text-[20px] font-semibold text-[#202020] mb-8 !font-open-sans">Change Password</h2>
                        </div>

                        {/* Form */}
                        <div className="px-6 pb-8 pt-4">
                            <Form
                                form={form}
                                layout="vertical"
                                requiredMark={false}
                                onFinish={onFinish}
                                className="[&_.ant-form-item-label>label]:text-[13px] [&_.ant-form-item]:mb-4"
                            >
                                <Form.Item
                                    label="Current Password"
                                    name="current"
                                    rules={[{ required: true, message: 'Please enter your current password' }]}
                                >
                                    <Input.Password size="large" prefix={<LockOutlined />} placeholder="********" />
                                </Form.Item>

                                <Form.Item
                                    label="New Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please enter a new password' }]}
                                >
                                    <Input.Password size="large" prefix={<LockOutlined />} placeholder="********" />
                                </Form.Item>

                                <Form.Item
                                    label="Confirm New Password"
                                    name="confirm"
                                    dependencies={['password']}
                                    rules={[{ required: true, message: 'Please confirm your password' }]}
                                >
                                    <Input.Password size="large" prefix={<LockOutlined />} placeholder="********" />
                                </Form.Item>
                                {/* Button */}
                                <div className="pt-2 flex justify-center">
                                    {/* If your TealBtn expects children instead of a prop, use: <TealBtn>Save Changes</TealBtn> */}
                                    <TealBtn htmlType="submit" text="Save Changes" className="shadow-md" />
                                </div>
                            </Form>
                        </div>
                    </div>


                </div>
            </div>
        </CustomContainer>
    );
}
