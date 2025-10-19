'use client';

import { Button } from 'antd';

export default function TealBtn({ text, onClick = () => {}, icon = null }) {
  return (
    <div className="gold-btn">
      <Button onClick={onClick} 
        className="!bg-[#144A6C] !text-white !font-open-sans !border-none !px-8 !rounded-[8px] !font-semibold">
        {text} {icon}
      </Button>

      <style jsx>{`
        :global(.gold-btn .ant-btn) {
          font-size: 16px;
          height: 54px;
          line-height: 32px;
        }
      `}</style>
    </div>
  );
}
