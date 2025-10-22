'use client';

import { Form, Input, message, Avatar, Space } from 'antd';
import AuthShell from '@/components/shared/AuthShell';
import AuthButton from '@/components/ui/AuthButton';
import { LockOutlined, UserOutlined, MailOutlined,EnvironmentOutlined  } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';
import '@/styles/Auth.css'
import RoleToggleMUI from '@/components/auth/RoleToggle';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'node_modules/next/navigation';
import { createUser } from '@/redux/auth/userSlice';


export default function RegisterPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const savedRole = useSelector((state) => state.user.initialRole ?? null)
  

  const onFinish = async (values) => {
    
    

    setLoading(true);
    try {
      // TODO: signup
      message.success('Account created successfully');
    } finally {
      setLoading(false);
    }

    const payload = values.role;
    dispatch(createUser(payload));
    if(payload === 'buyer'){
      router.push('/sign-in')
    }
    else if(payload === 'freelancer') {
      router.push('/sign-up/step-2')
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
      register={true}

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
          <RoleToggleMUI role1="Buyer" role2="Freelancer"/>
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

        {savedRole === 'freelancer' && (
           <Form.Item
          label="Address"
          name="address"
          rules={[
            { required: true, message: 'Please enter your address' },
            // { type: 'text', message: 'Enter a valid email' },
          ]}
        >
          <Input size="large" prefix={<EnvironmentOutlined />} placeholder="Dhaka ,Bangladesh" />
        </Form.Item>

        )}

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please create a password' }]}
        >
          <Input.Password size="large" prefix={<LockOutlined />} placeholder="Create password" />
        </Form.Item>

        <div className='md:pt-6'>
          
            <AuthButton htmlType="submit" loading={loading} text={savedRole=== 'freelancer'?"Next" : "Create Account"}>

            </AuthButton>
          
        </div>
      </Form>
    </AuthShell>
  );
}
