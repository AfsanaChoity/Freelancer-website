'use client';

import { useMemo, useState } from 'react';
import { Modal, Input, Checkbox } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import '@/styles/Auth.css'
import TealBtn from '../ui/TealBtn';
import '@/styles/AntCheckBox.css'
const ALL_CATEGORIES = [
  'Finance & Accounting',
  'Marketing',
  'Design',
  'Web Development',
  'Data & Analytics',
  'HR & Legal',
  'Writing & Translation',
];

export default function FiltersModal({ open, onClose, onApply }) {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [selected, setSelected] = useState(['Finance & Accounting']);
  const [online, setOnline] = useState(false);
  const [topRated, setTopRated] = useState(false);

  const canApply = useMemo(() => true, [min, max, selected, online, topRated]);

  const reset = () => {
    setMin('');
    setMax('');
    setSelected(['Finance & Accounting']);
    setOnline(false);
    setTopRated(false);
  };

  const toggleCat = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={620}
      centered
      bodyStyle={{ padding: 20 }}
      className="font-open-sans"
      title={null}
      closeIcon={false}
      destroyOnClose
      styles={{
        content: {
          borderRadius: 12,
          overflow: 'hidden',
        },
      }}
    >
      <div className="font-open-sans">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-[18px] font-semibold text-gray-900">Filters</h3>
        </div>

        {/* Price Filter */}
        <div className="mt-2">
          <div className="text-[14px] font-semibold text-gray-800">Price Filter</div>
          <div className="mt-3 flex items-center gap-3">
            <Input
              value={min}
              onChange={(e) => setMin(e.target.value)}
              placeholder="Min"
              className="h-10 w-28"
            />
            <span className="text-gray-400">—</span>
            <Input
              value={max}
              onChange={(e) => setMax(e.target.value)}
              placeholder="Max"
              className="h-10 w-28"
            />
            <button
              type="button"
              onClick={() => onApply?.({ min, max, selected, online, topRated })}
              disabled={!canApply}
              className="ml-2 inline-flex h-10 w-48 items-center justify-center rounded-md bg-[#144A6C] text-white shadow hover:bg-[#0f3a55] disabled:opacity-60 cursor-pointer"
              title="Apply"
            >
              <CaretRightFilled className="text-[18px]" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6">
          <div className="text-[14px] font-semibold text-gray-800">All categories</div>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ALL_CATEGORIES.map((cat) => {
              const active = selected.includes(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggleCat(cat)}
                  className={[
                    'text-[13px] px-3 py-2 rounded-md text-left transition',
                    active
                      ? 'bg-[#6BB37A] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                  ].join(' ')}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Freelancer details */}
        <div className="mt-6">
          <div className="text-[14px] font-semibold text-gray-800">Freelancer details</div>

          <div className="mt-3 flex items-center gap-6">
            <label className="inline-flex items-center gap-2 text-[14px] text-gray-700">
              <Checkbox
                checked={online}
                onChange={(e) => setOnline(e.target.checked)}
                className="custom-green-checkbox"
              />
              Online
            </label>

            <label className="inline-flex items-center gap-2 text-[14px] text-gray-700">
              <Checkbox
                checked={topRated}
                onChange={(e) => setTopRated(e.target.checked)}
                className="custom-green-checkbox"
              />
              Top rated
            </label>
          </div>
        </div>

        {/* Footer actions inside the modal body (left aligned Reset) */}
        <div className="mt-8 flex items-center">

          <TealBtn text="Reset Filter" onClick={reset} />

          <button
            type="button"
            onClick={() => onClose?.()}
            className="cursor-pointer ml-auto text-[13px] text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>
      </div>

      {/* AntD checkbox color tweak */}
      
    </Modal>
  );
}
