'use client';

import { Form, Input, message } from 'antd';
import AuthShell from '@/components/shared/AuthShell';
import AuthButton from '@/components/ui/AuthButton';
import { LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import '@/styles/Auth.css'
import Link from 'next/link';



export default function ResetPasswordPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async ({ password, confirm }) => {
    if (password !== confirm) {
      message.error('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      // TODO: reset password
      message.success('Password reset (demo)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Reset Password"
      subtitle="Your password must 8-10 character long & 1 uppercase & lowercase ."
      
      backHref="/verify-code"
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        className="[&_.ant-form-item-label>label]:text-[13px] [&_.ant-form-item]:mb-4"
      >
        <Form.Item
          label="New Password"
          name="password"
          rules={[{ required: true, message: 'Please enter a new password' }]}
        >
          <Input.Password size="large" prefix={<LockOutlined />} placeholder="New password" />
        </Form.Item>

        <Form.Item
          label="Confirm New Password"
          name="confirm"
          dependencies={['password']}
          rules={[{ required: true, message: 'Please confirm your password' }]}
        >
          <Input.Password size="large" prefix={<LockOutlined />} placeholder="Confirm password" />
        </Form.Item>

       <div className='md:pt-6'>
        <Link href="/sign-in">
         <AuthButton htmlType="submit" loading={loading} text="Save Changes">
          
        </AuthButton>
        </Link>
       </div>
      </Form>
    </AuthShell>
  );
}
