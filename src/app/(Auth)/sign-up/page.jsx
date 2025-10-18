'use client';

import { Form, Input, message, Avatar, Space } from 'antd';
import AuthShell from '@/components/shared/AuthShell';
import AuthButton from '@/components/ui/AuthButton';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function RegisterPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    try {
      // TODO: signup
      message.success('Account created (demo)');
    } finally {
      setLoading(false);
    }
  };

  const headerExtra = (
    <Space size={12} align="center">
      <Avatar size={40}>P</Avatar>
      <div className="leading-tight">
        <div className="text-[13px] font-medium text-[#0c1323]">Professor</div>
        <div className="text-xs text-[#6b7280]">Profile</div>
      </div>
    </Space>
  );

  return (
    <AuthShell
      title="Create a new account"
      
      backHref="/login"
      rightHeaderExtra={headerExtra}
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        className="[&_.ant-form-item-label>label]:text-[13px] [&_.ant-form-item]:mb-4"
      >
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

        <AuthButton htmlType="submit" loading={loading}>
          Create Account
        </AuthButton>
      </Form>
    </AuthShell>
  );
}
