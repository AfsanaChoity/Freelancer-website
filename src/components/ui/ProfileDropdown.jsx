'use client';

import React, { useMemo } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/redux/auth/userSlice';

export default function ProfileDropdown() {
  const dispatch = useDispatch();
  const router = useRouter();

  const items = useMemo(
    () => [
      { key: 'profile', label: 'Profile' },
     
      { key: 'logout', label: 'Logout' },
    ],
    []
  );

  const onMenuClick = ({ key }) => {
    if (key === 'profile') {
      router.push('/profile'); 
      return;
    }
    if (key === 'logout') {
      dispatch(logoutUser(false));
      router.push('/');
    }
  };

  return (
    <Dropdown menu={{ items, onClick: onMenuClick }} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <DownOutlined className="!text-[#8BCF9A] !cursor-pointer" />
        </Space>
      </a>
    </Dropdown>
  );
}
