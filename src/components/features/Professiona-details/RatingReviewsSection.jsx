'use client';

import React from 'react'
import RatingsHeader from './RatingsHeader'


import Image from 'next/image';


// bg layers (use your two files)
import bgWaves1 from '@/assets/image/bgVec2.svg';
import bgWaves2 from '@/assets/image/bgVec1.svg'; // <-- second SVG

import p1 from '@/assets/image/Reviewer.png';
import Heading from '@/components/ui/Heading';
import Reviews from './Reviews';

const testimonials = [
    { id: 1, photo: p1, rating: 5, author: 'Adam Goni', role: 'CEO of khai dai .com', quote: 'The freelancer I hired exceeded my expectations. Communication was smooth, and the project was delivered!' },
    { id: 2, photo: p1, rating: 5, author: 'Adam Goni', role: 'CEO of khai dai .com', quote: 'The freelancer I hired exceeded my expectations. Communication was smooth, and the project was delivered!' },
    { id: 3, photo: p1, rating: 5, author: 'Adam Goni', role: 'CEO of khai dai .com', quote: 'The freelancer I hired exceeded my expectations. Communication was smooth, and the project was delivered!' },
    { id: 4, photo: p1, rating: 5, author: 'Adam Goni', role: 'CEO of khai dai .com', quote: 'The freelancer I hired exceeded my expectations. Communication was smooth, and the project was delivered!' },
    { id: 5, photo: p1, rating: 5, author: 'Adam Goni', role: 'CEO of khai dai .com', quote: 'The freelancer I hired exceeded my expectations. Communication was smooth, and the project was delivered!' },
    { id: 6, photo: p1, rating: 5, author: 'Adam Goni', role: 'CEO of khai dai .com', quote: 'The freelancer I hired exceeded my expectations. Communication was smooth, and the project was delivered!' },
    { id: 7, photo: p1, rating: 5, author: 'Adam Goni', role: 'CEO of khai dai .com', quote: 'The freelancer I hired exceeded my expectations. Communication was smooth, and the project was delivered!' },
    { id: 8, photo: p1, rating: 5, author: 'Adam Goni', role: 'CEO of khai dai .com', quote: 'The freelancer I hired exceeded my expectations. Communication was smooth, and the project was delivered!' },
];

export default function RatingReviewsSection() {
  return (
    <div>
        <RatingsHeader />


        {/* reviews */}
        <div>
             <div className="grid grid-cols-1  gap-4 md:gap-5">
                                {testimonials.map((t, i) => (
                                    <div key={t.id} >
                                        <Reviews {...t} />
                                    </div>
                                ))}
                            </div>
        </div>
    </div>
  )
}
