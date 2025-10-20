
'use client';

import Heading from '../ui/Heading';
import CategoryCard from './CategoryCard';
import financeIcon from '@/assets/icons/Finance.svg'
import SectionContainer from './SectionContainer';

const categories = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: 'Finance & Accounting',
  icon: financeIcon,
}));

export default function CategoriesSection({heading}) {
  return (
    <section className="">
      

        <SectionContainer heading={heading} title="Categories">
            {/* Grid */}
        <div
          className="
            grid gap-4 sm:gap-5
            grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
          "
        >
          {categories.map((c) => (
            <CategoryCard key={c.id} title={c.title} icon={c.icon} />
          ))}
        </div>
        </SectionContainer>
      
    </section>
  );
}
