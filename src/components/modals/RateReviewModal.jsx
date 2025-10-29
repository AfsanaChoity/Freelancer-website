import React, { useState } from "react";
import { Modal, Form, Input, Button, Rate, Row, Col } from "antd";
import '@/styles/Auth.css'
import TealOutLineBtn from "../ui/TealOutLineBtn";
import TealBtn from "../ui/TealBtn";

const { TextArea } = Input;

const likeOptions = [
  "Dedication throughout the work",
  "Efficiency",
  "Punctuality",
];

const improveOptions = [
  "communication gaps",
  "insufficient expertise",
  "the meeting was too short",
  "he deliverable didn't convince me",
];

export default function RateReviewModal({ visible, onCancel, onSubmit }) {
  const [form] = Form.useForm();

  // selected chips
  const [liked, setLiked] = useState([]);
  const [improve, setImprove] = useState([]);

  const toggleArrayValue = (arr, setArr, value) => {
    if (arr.includes(value)) setArr(arr.filter((v) => v !== value));
    else setArr([...arr, value]);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        ...values,
        liked,
        improve,
      };
      onSubmit?.(payload);
      form.resetFields();
      setLiked([]);
      setImprove([]);
    } catch (err) {
      // validation failed — do nothing (antd will show errors)
    }
  };

  // Small helper to render chip-like buttons
  const Chip = ({ children, selected, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`chip ${selected ? "chip--selected" : ""}`}
    >
      {children}
    </button>
  );

  return (
    <>
      <Modal
        open={visible}
        onCancel={onCancel}
        footer={null}
        centered
        width={520}
        bodyStyle={{ padding: 24, borderRadius: 12 }}
        style={{ borderRadius: 12 }}
        maskStyle={{ background: "rgba(0,0,0,0.45)" }}
        className="rate-review-modal !font-open-sans"
      >
        <h3 style={{ textAlign: "center", marginBottom: 6, fontWeight: 700, fontSize: 18 }}>
          Rate &amp; Review Service
        </h3>
        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#6b7280",
            marginBottom: 18,
          }}
        >
          Share your experience to help others make informed choices
        </p>

        <Form layout="vertical" form={form}>
          {/* What did you like the most? */}
          <Form.Item label="What did you like the most?" name="whatLiked">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {likeOptions.map((opt) => (
                  <Chip
                    key={opt}
                    selected={liked.includes(opt)}
                    onClick={() =>
                      toggleArrayValue(liked, setLiked, opt)
                    }
                  >
                    {opt}
                  </Chip>
                ))}
              </div>

              <Input
                size="large"
                placeholder="Other"
                name="otherLike"
                onChange={(e) =>
                  form.setFieldsValue({ otherLike: e.target.value })
                }
              />
            </div>
          </Form.Item>

          {/* Is there anything we could improve? */}
          <Form.Item
            label="Is there anything we could improve?"
            name="whatImprove"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {improveOptions.map((opt) => (
                  <Chip
                    key={opt}
                    selected={improve.includes(opt)}
                    onClick={() =>
                      toggleArrayValue(improve, setImprove, opt)
                    }
                  >
                    {opt}
                  </Chip>
                ))}
              </div>

              <Input
                size="large"
                placeholder="Other"
                name="otherImprove"
                onChange={(e) =>
                  form.setFieldsValue({ otherImprove: e.target.value })
                }
              />
            </div>
          </Form.Item>

          {/* Overall rating */}
          <Form.Item
            label={
              <div style={{ textAlign: "center", fontWeight: 600 }}>
                Overall, how would you rate the experience?
              </div>
            }
            name="rating"
            style={{ marginBottom: 12 }}
            rules={[{ required: true, message: "Please provide a rating" }]}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Rate />
            </div>
          </Form.Item>

          {/* How was your experience? */}
          <Form.Item label="How was your experience?" name="feedback">
            <TextArea
              rows={6}
              placeholder="Add Feedback...."
              // TextArea doesn't have size prop; we make it visually larger via rows and style
              style={{ resize: "vertical" }}
            />
          </Form.Item>

          {/* Footer buttons */}
          <Row gutter={12} justify="end" style={{ marginTop: 6 }}>
            <Col>
              <TealOutLineBtn text="Cancel"/>
            </Col>

            <Col>
              {/* <Button
                type="primary"
                size="large"
                onClick={handleOk}
                style={{ background: "#0b5778", borderColor: "#0b5778" }}
              >
                Submit
              </Button> */}
              <TealBtn text="Submit"/>
            </Col>
          </Row>
        </Form>
      </Modal>

      {/* Minimal component-scoped styles to reproduce the chip look */}
      <style>{`
        .rate-review-modal .ant-modal-content {
          border-radius: 12px;
          overflow: hidden;
        }
        .chip {
          border: 1px solid #e5e7eb;
          padding: 8px 12px;
          border-radius: 9999px;
          background: #f8fafc;
          color: #374151;
          font-size: 13px;
          cursor: pointer;
          transition: all .12s ease;
          box-shadow: none;
        }
        .chip:hover { transform: translateY(-1px); }
        .chip--selected {
          background: #eef6f1;
          border-color: #c9f0d9;
          color: #0b5741;
        }

        /* ensure inputs look large and match screenshot spacing */
        .rate-review-modal .ant-input,
        .rate-review-modal .ant-input-affix-wrapper {
          border-radius: 6px;
        }
        .ant-modal-body { padding-top: 8px; }

        /* center modal title visually the same as screenshot */
        .rate-review-modal .ant-modal-header { display:none; } /* hide default header */
      `}</style>
    </>
  );
}
