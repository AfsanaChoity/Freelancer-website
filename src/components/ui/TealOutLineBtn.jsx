'use client';

import { Button } from 'antd';

export default function TealOutLineBtn({ text, onClick = () => {}, icon = null , block=''}) {
  return (
    <div className="tealOutLine-btn">
      <Button onClick={onClick} 
      block={block}
        className=" !border-[#144A6C] !text-[#144A6C] !font-open-sans  !px-6 !rounded-[8px] !font-semibold ">
        {text} {icon}
      </Button>

      {/* <style jsx>{`
        :global(.tealOutLine-btn .ant-btn) {
          font-size: 16px;
          height: 40px;
          line-height: 32px;
        }
      `}</style> */}

      <style jsx>{`
        /* default (sm and up) */
        :global(.tealOutLine-btn .ant-btn) {
          font-size: 18px;
          height: 50px;
          line-height: 32px;
        }
        /* mobile only */
        @media (max-width: 767px) {
          :global(.tealOutLine-btn .ant-btn) {
            font-size: 14px;
            height: 38px;
            line-height: 24px;
          }
        }
      `}</style>
    </div>
  );
}
