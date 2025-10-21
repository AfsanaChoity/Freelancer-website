'use client';

import { Form, Input, message, Avatar, Space } from 'antd';
import AuthShell from '@/components/shared/AuthShell';
import AuthButton from '@/components/ui/AuthButton';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';
import '@/styles/Auth.css'
import RoleToggleMUI from '@/components/auth/RoleToggle';


export default function RegisterPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    try {
      // TODO: signup
      message.success('Account created successfully');
    } finally {
      setLoading(false);
    }
  };




  return (
    <AuthShell
      title="Create a new account"
      subtitle={
        <>
          Already have an account?{' '}
          <Link href="/sign-in" className="text-[#1F4E78] hover:underline">
            Sign in
          </Link>
        </>
      }

      backHref="/sign-in"

    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        initialValues={{ role: 'buyer' }}
        className="[&_.ant-form-item-label>label]:text-[13px] [&_.ant-form-item]:mb-4"
      >
        {/* Toggle button for buyer & seller */}
        <Form.Item name="role" valuePropName="value">
          <RoleToggleMUI />
        </Form.Item>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Form.Item
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input size="large" prefix={<UserOutlined />} placeholder="e.g. John" />
          </Form.Item>

          <Form.Item
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input size="large" prefix={<UserOutlined />} placeholder="e.g. Doe" />
          </Form.Item>
        </div>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Enter a valid email' },
          ]}
        >
          <Input size="large" prefix={<MailOutlined />} placeholder="you@example.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please create a password' }]}
        >
          <Input.Password size="large" prefix={<LockOutlined />} placeholder="Create password" />
        </Form.Item>

        <div className='md:pt-6'>
          <Link href="/sign-in" >
            <AuthButton htmlType="submit" loading={loading} text="Create Account">

            </AuthButton>
          </Link>
        </div>
      </Form>
    </AuthShell>
  );
}
