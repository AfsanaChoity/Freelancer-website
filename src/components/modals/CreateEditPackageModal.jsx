'use client';

import React from 'react';
import { Modal, Form, Input, Upload } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import '@/styles/Auth.css'

export default function CreateEditPackageModal({ open, onClose, onPublish, create = false, edit = false, heading }) {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        onPublish?.(values);
    };

    const normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            centered
            width={760}
            title={<span className="text-[18px] font-semibold text-[#202020]">{heading}</span>}
            closeIcon={
                <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-white border border-[#E06565]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6l12 12M18 6L6 18" stroke="#E06565" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </span>
            }
            className=""

            maskClosable={false}
        >



            {/* Right form */}
            <Form
                form={form}
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
                initialValues={{ name: 'Finance', price: '50.00 EUR', description: '' }}
                className="[&_.ant-form-item-label>label]:text-[13px] [&_.ant-form-item]:mb-3"
            >
                <div className='grid md:grid-cols-3 gap-2 '>
                    <div className='mt-7 flex justify-center md:justify-start'>
                        {/* image upload */}



                        <Form.Item name="image" valuePropName="fileList" getValueFromEvent={normFile}>

                            <Upload action="/api/upload" name="file" listType="picture-card">
                                <button
                                    style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                                    type="button"
                                >
                                    <PictureOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>

                    </div>


                    <div className='md:col-span-2'>
                        <Form.Item label="Package name" name="name">
                            <Input size="large" placeholder="Finance" />
                        </Form.Item>

                        <Form.Item label="Price" name="price">
                            <Input size="large" placeholder="50.00 EUR" />
                        </Form.Item>

                        <Form.Item label="Description" name="description">
                            <Input.TextArea
                                placeholder="Type here...."
                                autoSize={{ minRows: 4 }}
                                className="!rounded-[8px]"
                            />
                        </Form.Item>

                        <Form.Item>
                            {/* Publish button (bottom-right) */}
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={() => form.submit()}
                                    className="cursor-pointer px-6 py-2 rounded-[6px] text-white font-semibold bg-[#144A6C]
                     shadow-[0_8px_14px_rgba(20,74,108,0.35)] hover:opacity-95 active:opacity-90"
                                >
                                    Publish
                                </button>
                            </div>
                        </Form.Item>
                    </div>
                </div>
            </Form>



        </Modal>
    );
}
