'use client';

import { Button } from 'antd';

export default function TealOutLineBtn({ text, onClick = () => {}, icon = null }) {
  return (
    <div className="tealOutLine-btn">
      <Button onClick={onClick} 
        className=" !border-[#144A6C] !text-[#144A6C] !font-open-sans  !px-6 !rounded-[8px] !font-semibold">
        {text} {icon}
      </Button>

      <style jsx>{`
        :global(.tealOutLine-btn .ant-btn) {
          font-size: 16px;
          height: 40px;
          line-height: 32px;
        }
      `}</style>
    </div>
  );
}
