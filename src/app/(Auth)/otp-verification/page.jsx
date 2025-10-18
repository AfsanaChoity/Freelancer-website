'use client';

import { Form, Input, message } from 'antd';
import AuthShell from '@/components/shared/AuthShell';
import AuthButton from '@/components/ui/AuthButton';
import { useRef, useState } from 'react';

export default function VerifyCodePage() {
  const [form] = Form.useForm();
  const inputsRef = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleKeyUp = (idx, e) => {
    const v = e.target.value;
    if (v.length === 1 && idx < 5) inputsRef.current[idx + 1]?.focus();
    if (e.key === 'Backspace' && v === '' && idx > 0) inputsRef.current[idx - 1]?.focus();
  };

  const onFinish = async () => {
    setLoading(true);
    try {
      // TODO: verify code
      message.success('Code verified (demo)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Verify Code"
      subtitle="Please check your email and enter the 6-digit code."
      
      backHref="/forgot-password"
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={onFinish}>
        <div className="mb-6 flex gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Input
              key={i}
              size="large"
              maxLength={1}
              className="h-11 w-11 text-center rounded-lg"
              onKeyUp={(e) => handleKeyUp(i, e)}
              ref={(el) => (inputsRef.current[i] = el)}
            />
          ))}
        </div>

        <AuthButton htmlType="submit" loading={loading}>
          Send Code
        </AuthButton>

        <p className="mt-4 text-[12px] text-[#6b7280]">
          Didn’t receive it? Wait a few minutes or resend the code.
        </p>
      </Form>
    </AuthShell>
  );
}
