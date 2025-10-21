'use client'
import React, { useState } from 'react'
import { Pagination } from 'antd';
import '@/styles/Pagination.css'

export default function CustomPagenation({total, page_size, currentPage, onPageChange}) {
    // const [currentPage, setCurrentPage] = useState(current)

   


    return (
        <div>
            <Pagination
                align="center"
                defaultCurrent={1}
                current={currentPage}
                onChange={onPageChange}
                total={total}
                pageSize={page_size}
                showSizeChanger={false}
                hideOnSinglePage
            />
        </div>
    )
}
