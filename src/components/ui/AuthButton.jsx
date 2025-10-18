import { Button } from 'antd'
import React from 'react'

export default function AuthButton({text, onClick=undefined}) {
  return (
    <div className='teal-btn'>
        <Button block onClick={onClick} type="primary" htmlType="submit"  className='!bg-[#144A6C] !font-open-sans !text-[16px]  !font-semibold '>
          {text}
        </Button>

        <style jsx>{`
        :global(.teal-btn .ant-btn) {
          
          height: 50px;
          line-height: 32px;
        }
      `}</style>
    </div>
  )
}
