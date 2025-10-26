'use client';

import React from 'react';
import { Form, Input } from 'antd';
import TealBtn from '@/components/ui/TealBtn';
import '@/styles/Auth.css'

export default function EditClientProfile() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Save Changes:', values);
  };

  return (
    <div className="w-full max-w-xl mx-auto  font-open-sans">
      <div className="bg-white rounded-[6px] border border-[#E6E6E6] shadow-[0_12px_34px_rgba(0,0,0,0.10)] py-10">
        {/* Heading */}
        <div className="pt-6 px-6 text-center">
          <h2 className="text-[20px] font-semibold text-[#202020] mb-8 !font-open-sans">Edit Profile</h2>
        </div>

        {/* Form */}
        <div className="px-6 pb-8 pt-4">
          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
            initialValues={{
              firstName: 'Asadujjaman',
              lastName: 'Asadujjaman',
              email: 'Asadujjaman@gmail.com',
            }}
            className="[&_.ant-form-item-label>label]:text-[13px] [&_.ant-form-item]:mb-4"
          >
            {/* Name row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item label="First name" name="firstName">
                <Input
                  size="large"
                  placeholder="Asadujjaman"
                  className="placeholder-poppins"
                />
              </Form.Item>

              <Form.Item label="Last name" name="lastName">
                <Input
                  size="large"
                  placeholder="Asadujjaman"
                  className="placeholder-poppins"
                />
              </Form.Item>
            </div>

            {/* Email */}
            <Form.Item label="Email" name="email">
              <Input
                size="large"
                type="email"
                placeholder="Asadujjaman@gmail.com"
                className="placeholder-poppins"
              />
            </Form.Item>

            {/* Button */}
            <div className="pt-2 flex justify-center">
              {/* If your TealBtn expects children instead of a prop, use: <TealBtn>Save Changes</TealBtn> */}
              <TealBtn htmlType="submit" text="Save Changes" className="shadow-md" />
            </div>
          </Form>
        </div>
      </div>

      {/* make placeholders use Poppins only */}
      <style jsx global>{`
        .placeholder-poppins::placeholder {
          font-family: var(--font-poppins), ui-sans-serif, system-ui !important;
        }
      `}</style>
    </div>
  );
}
