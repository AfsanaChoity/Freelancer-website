import React from 'react'
import SectionContainer from './SectionContainer'
import p1 from '@/assets/image/freelancer.jpg';
import FreelancerCard from '../Home/FreelancerCard';
import { Carousel } from 'antd';
import CustomCarousel from './CustomCarousel';


export const pros = [
    { id: 1, imgSrc: p1, name: 'Mr. Lee', category: 'Finance & Accounting', rating: 4.5, reviews: 500 },
    { id: 2, imgSrc: p1, name: 'Ava Kim', category: 'Marketing Strategy', rating: 4.8, reviews: 320 },
    { id: 3, imgSrc: p1, name: 'Noah Diaz', category: 'UI/UX Design', rating: 4.6, reviews: 210 },
    { id: 4, imgSrc: p1, name: 'Sara Ali', category: 'Web Development', rating: 4.7, reviews: 430 },
    { id: 5, imgSrc: p1, name: 'Ken Ito', category: 'Data Analytics', rating: 4.9, reviews: 190 },
    { id: 6, imgSrc: p1, name: 'Emma Roy', category: 'HR & Recruiting', rating: 4.4, reviews: 275 },
];


export default function FreelancerSection({ heading }) {
    return (
        <div>
            <SectionContainer heading={heading} title="Professional">
                
               
               <CustomCarousel items={pros} />

            </SectionContainer>
        </div>
    )
}
