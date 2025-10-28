'use client'
import CustomContainer from '@/components/ui/CustomContainer'
import Link from 'node_modules/next/link'
import React, { useState } from 'react'
import { Divider } from 'antd';
import PortfolioCard from '@/components/shared/PortfolioCard';
import img from '@/assets/image/freelancer/portfolio.jpg'
import Heading from '@/components/ui/Heading'
import TealBtn from '@/components/ui/TealBtn';
import AddEditProjectModal from '@/components/modals/AddEditProjectModal';

export default function PortfolioPage() {

  const list = [
    {
      id: 1,
      title: 'Legal Consultancy Website Design',
      description:
        'Designed a modern, user-friendly website for a law firm, improving user experience and boosting client inquiries.',
      imgSrc: img,
      showPlay: false,
    },
    {
      id: 2,
      title: 'Legal Consultancy Website Design',
      description:
        'Designed a modern, user-friendly website for a law firm, improving user experience and boosting client inquiries.',
      imgSrc: img,
      showPlay: false,
    },
    {
      id: 3,
      title: 'Legal Consultancy Website Design',
      description:
        'Designed a modern, user-friendly website for a law firm, improving user experience and boosting client inquiries.',
      imgSrc: img,
      showPlay: false,
    },
    {
      id: 4,
      title: 'Legal Consultancy Website Design',
      description:
        'Designed a modern, user-friendly website for a law firm, improving user experience and boosting client inquiries.',
      imgSrc: img,
      showPlay: true,
    },
  ]

  // for create and edit project
  const [openModal, setOpenModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [heading, setHeading] = useState('');

  const handleCloseModal = () => {
    setOpenModal(false);
  }



  return (
    <CustomContainer>
      {/* links */}
      <div className='mb-8'>
        <Link href="/profile" className="font-nunito text-gray-400 font-medium">Profile</Link>
        <Divider type="vertical" />
        <Link href="" className="font-nunito text-gray-700 font-medium">Portfolio</Link>

      </div>

      {/* portfolio section */}
      <div className='flex  justify-between'>
        <Heading text="Portfolio" />
        <TealBtn text="Add New projects"
          onClick={() => {
            setOpenModal(true)
            setCreateModal(true)
            setHeading('Add New Projects')
          }}
        />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-14">
        {list.map((it) => (
          <PortfolioCard
            key={it.id}
            id={it.id}
            title={it.title}
            description={it.description}
            imgSrc={it.imgSrc}
            imgAlt={it.title}
            showPlay={it.showPlay}
            onView={(id) => console.log('view', id)}
            onEdit={() => {
              setOpenModal(true)
              setEditModal(true)
              setHeading('Edit Projects')
            }}
            onDelete={(id) => console.log('delete', id)}
            profile={true}
          />
        ))}
      </div>

      {/* modal */}

      <AddEditProjectModal
        open={openModal}
        onClose={handleCloseModal}
        create={createModal}
        edit={editModal}
        heading={heading}
      />
    </CustomContainer>
  )
}
