"use client";

import Image from "next/image";
import insightImage from "@/assets/image (36).png";

import { useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Checkbox,
  Radio,
  DatePicker,
  TimePicker,
} from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Option } from "antd/es/mentions";

const BookYourConsultationPage = () => {
  const [form] = Form.useForm();
  const [consultationMode, setConsultationMode] = useState("in-person");

  return (
    <div>
      <div className="relative mb-20">
        <Image
          src={insightImage}
          alt="howWeWorkImg"
          width={50000}
          height={50000}
          className="w-full h-[600px] object-cover"
        />
        <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
          <h1 className="md:text-5xl text-3xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            Our Insights
          </h1>
          <p className="text-white md:text-lg text-md">
            Rising Costs, Staffing Shortages, Disparity in Healthcare, Growing
            Need for improved Mental Health Care are some of the top issues
            facing the Healthcare Industry.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg my-20 mt-40">
        <h2 className="text-lg font-semibold mb-4">Book an appointment</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => console.log(values)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="phone"
              label="Mobile Number"
              rules={[{ required: true }]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Mobile Number" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Form.Item
              name="industry"
              label="Industry Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Industry name" />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true }]}
            >
              <Select placeholder="Country">
                <Option value="us">United States</Option>
                <Option value="uk">United Kingdom</Option>
              </Select>
            </Form.Item>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Select placeholder="State">
                <Option value="ny">New York</Option>
                <Option value="ca">California</Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item
            name="service"
            label="Select Service"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select the service">
              <Option value="consulting">Consulting</Option>
              <Option value="development">Development</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Consultation Mode">
            <Radio.Group
              onChange={(e) => setConsultationMode(e.target.value)}
              value={consultationMode}
            >
              <Radio value="in-person">In Person</Radio>
              <Radio value="online">Online</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="message" label="Write To Us">
            <Input.TextArea rows={4} placeholder="Write your message..." />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="date"
              label="Select Date"
              rules={[{ required: true }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item
              name="time"
              label="Select Time"
              rules={[{ required: true }]}
            >
              <TimePicker
                className="w-full"
                format="HH:mm A"
                defaultValue={dayjs("08:00", "HH:mm")}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Checkbox>
              I agree to the Terms & Conditions and Privacy Policy
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full !bg-gradientBg !py-5 !text-xl"
            >
              Confirm & Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BookYourConsultationPage;
