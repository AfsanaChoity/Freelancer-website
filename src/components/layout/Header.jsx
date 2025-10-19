'use client'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { TfiAlignJustify } from "react-icons/tfi";
// import { useSelector } from 'react-redux';
// import userImg from '@/assets/images/user.jpg'
import { UserOutlined } from '@ant-design/icons';
// import { Avatar } from 'antd';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import logo from '@/assets/logo2.svg'
import TealBtn from '../ui/TealBtn';
import TealOutLineBtn from '../ui/TealOutLineBtn';
import icon  from '@/assets/icons/navbarIcon.svg'


const items = [
  {
    key: '1',
    label: (
      <Link href="/">
        HOME
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href="/explore">
        Explore
      </Link>
    ),
  },
  {
    key: '3',
     label: (
      <Link href="/start-selling">
        Became a seller
      </Link>
    ),
  },
  
  {
    key: '4',
     label: (
      <Link href="/certified-services">
       Certified Services
      </Link>
    ),
  },
  {
    key: '5',
     label: (
      <Link href="/service-request">
         About us
      </Link>
    ),
  },
 
];

export default function Header() {
  const [dropdownOpen, setDropDownOpen] = useState(false);
//   const user = useSelector((state) => state.user.value ?? null);
  const user = false;
  const pathname = usePathname();
  const activeBtn = "bg-[#144A6C] text-white rounded-[8px] px-4 py-1 ";

  useEffect(() => {
    const onDrawerOpen = () => setDropDownOpen(false);
    window.addEventListener('drawer:open', onDrawerOpen);
    return () => window.removeEventListener('drawer:open', onDrawerOpen);
  }, []);
  
  return (
    <div className='px-4'>
      {/* navbar */}
      <nav className='relative z-20 container mx-auto px-4 xl:px-8  py-3 lg:py-4   bg-[#E1E1E1]/50 mt-4 rounded-[20px]'>

        {/* content */}
        <div className=' flex justify-between items-center '>

          {/* logo  */}
          <div className=''>
            <Image src={logo} alt="logo"/>
          </div>

          {/* lists */}
          <div className='hidden lg:block'>
            <ul className='font-open-sans lg:text-[16px] xl:text-[22px] flex items-center '>
              <Link href="/"><li className={`mx-4 cursor-pointer ${pathname === "/" ? activeBtn : " "}`}>Home</li></Link>
              <Link href="/explore"><li className={`mx-4 cursor-pointer ${pathname === "/explore" ? activeBtn : " "}`}>Explore</li></Link>
              <a href="/packages"><li className="mx-4 cursor-pointer">Be a seller</li></a>
              <a href="/pre-arrival"><li className="mx-4 cursor-pointer">Services</li></a>
              <a href="/service-request"><li className="mx-4 cursor-pointer">About us</li></a>


            </ul>
          </div>

          <div className='flex items-center gap-2'>
            {/* Button */}
           {
            user ? (
              <Link href="/profile-information"><Avatar size={{xs: 48, sm:48, md:50, lg: 64, xl: 70, xxl: 74}} src={userImg.src} /></Link>
            ) : (
               <div className='flex gap-2 lg:gap-4 items-center '>
              <Link href='/sign-in' className='hidden lg:block'>
              <TealOutLineBtn text="Sign in"/>
              </Link>
              <Link href='/sign-up' className="bg-[#144A6C] text-white font-open-sans font-semibold px-3 py-1 md:px-8 md:py-2 rounded-[8px]">
              Join
              </Link>
              <div className='hidden lg:block'>
                <Image src={icon} alt="icon"/>
              </div>
            </div>
            )
           }

            {/* mobile hamburger */}
            <div className="lg:hidden">

              <Dropdown 
               menu={{ items }}
               placement="bottomRight" 
               arrow={{ pointAtCenter: true }} 
               open ={dropdownOpen}
               onOpenChange={(open) =>{
                setDropDownOpen(open);
                if(open) window.dispatchEvent(new CustomEvent('dropdown:open'));
               }}
               
               overlayStyle={{ zIndex: 1300 }}
               getPopupContainer={() => document.body}
              >
                <button type="button" aria-label="Open menu" className="rounded flex items-center cursor-pointer">
                  <TfiAlignJustify style={{ fontSize: 20 }} />
                </button>
              </Dropdown>

            </div>
          </div>


        </div>


      </nav>
    </div>
  )
}
