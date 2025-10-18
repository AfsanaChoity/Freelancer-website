'use client';

import { Form, Input, Checkbox, message } from 'antd';
import Link from 'next/link';
import AuthShell from '@/components/shared/AuthShell';
import AuthButton from '@/components/ui/AuthButton';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import '@/styles/Auth.css'

export default function LoginPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    try {
      // TODO: call login API
      message.success('Logged in (demo)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Sign in to your account"
      subtitle={
        <>
          Don’t have an account?{' '}
          <Link href="/sign-up" className="text-[#1F4E78] hover:underline">
            Join here
          </Link>
        </>
      }
      
      backHref="/"
      backText="Back"
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        className="[&_.ant-form-item-label>label]:text-[13px] [&_.ant-form-item]:mb-4"
      >
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
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password size="large" prefix={<LockOutlined />} placeholder="********" />
        </Form.Item>

        <div className="mb-4 flex items-center justify-end">
          {/* <Checkbox>Remember me</Checkbox> */}
          <Link href="/forgot-password" className="!text-[#595D62] text-sm !underline hover:!text-[#144A6C]">
            Forgot Password?
          </Link>
        </div>

        <AuthButton htmlType="submit" loading={loading} text="Sign In">
          
        </AuthButton>

        <p className="mt-4 text-[12px] leading-relaxed text-[#6b7280] ">
          By joining, you agree to the{' '}
          <a className="!text-[#8BCF9A] hover:underline" href="#">
            Terms of Service
          </a>{' '}
           and to occasionally receive emails from us. Please read our{' '}
          <a className="!text-[#8BCF9A] hover:underline" href="#">
            Privacy Policy
          </a>
          to learn how we use your personal data.
        </p>
      </Form>
    </AuthShell>
  );
}
