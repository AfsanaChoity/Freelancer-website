'use client';

import React, { useMemo } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/redux/auth/userSlice';
import icon from '@/assets/icons/navbarIcon.svg'
import Image from 'node_modules/next/image';


export default function LanguageDropdown() {


  const items = useMemo(
    () => [
      { key: 'en', label: 'EN' },
     
      { key: 'es', label: 'ES' },
    ],
    []
  );

  const onMenuClick = ({ key }) => {
    
  };

  return (
    <Dropdown menu={{ items, onClick: onMenuClick }} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        
          <Image src={icon} alt="icon" className='cursor-pointer '/>
        
      </a>
    </Dropdown>
  );
}
