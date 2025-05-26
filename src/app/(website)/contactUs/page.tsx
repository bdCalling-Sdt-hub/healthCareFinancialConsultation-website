"use client";

import Image from "next/image";
import contactUsImg from "@/assets/2149256084.jpg";
import { Button, Form, Input, Modal, Select, Spin } from "antd";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContactUsMutation } from "@/redux/apiSlices/contactSlice";
import toast from "react-hot-toast";
import { useGetFooterApiQuery } from "@/redux/apiSlices/publicSlice";
const { TextArea } = Input;
const { Option } = Select;

const ContactUsPage = () => {
  const [form] = Form.useForm();

  const [contactUs] = useContactUsMutation();
  const { data: footerData, isLoading } = useGetFooterApiQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const contactInfo = footerData?.data;
  //console.log("footerr", contactInfo);

  const onFinish = async (values: {
    name: string;
    email: string;
    phone: string;
    message: string;
    country: string;
  }) => {
    const data = {
      name: values?.name,
      email: values?.email,
      phone: values?.phone,
      message: values?.message,
      country: values?.country,
    };
    try {
      const response = await contactUs(data).unwrap();

      if (response?.success) {
        Modal.success({
          title: "Success",
          content: response?.message || "Message sent successfully!",
        });
        // toast.success(response?.message || "Message sent successfully!");
        form.resetFields(); // Reset form after successful submission
      } else {
        toast.error(response?.message || "Failed to send message");
      }
    } catch (error: any) {
      const message = error?.data?.message || "Something went wrong";
      toast.error(message);
    }
  };

  return (
    <div>
      <div className="relative mb-20">
        <div className="relative">
          <Image
            src={contactUsImg}
            alt="servicesMenuImg"
            width={50000}
            height={50000}
            className="w-full h-[600px] object-cover"
          />
          {/* White overlay animations */}
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-white"
          />
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 right-0 h-full bg-white"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md"
        >
          <h1 className="md:text-5xl text-3xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            Contact US
          </h1>
          <p className="text-white md:text-lg text-md">
            With years of experience in healthcare finance, we offer tailored
            solutions that drive efficiency, reduce financial risks, and
            maximize profitability while keeping patient care at the forefront
          </p>
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Have questions? <br /> Feel free to write us
          </h2>
          <p className="text-gray-600 mb-5">
            {contactInfo?.contactDescription}
          </p>
          <p className="text-gray-700 font-medium mb-5">
            <strong>Working Hours</strong>
            <br />
            {contactInfo?.businessStartDay} – {contactInfo?.businessEndDay} (
            {contactInfo?.businessStartTime} – {contactInfo?.businessEndTime})
          </p>
          <div className="space-y-4">
            <div className="flex items-center p-4 border border-gray-300 py-7 bg-white rounded-lg">
              <FaPhone className="text-xl text-gray-800 mr-3" />
              <span className="text-gray-800 font-semibold">
                {contactInfo?.contact}
              </span>
            </div>
            <div className="flex items-center p-4 border border-gray-300 py-7 bg-white rounded-lg">
              <FaMailBulk className="text-xl text-gray-800 mr-3" />
              <span className="text-gray-800 font-semibold">
                {contactInfo?.email}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold border-b border-gray-700 text-gray-900 mb-5">
            Get in touch with us.
          </h2>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
                className="w-full"
              >
                <Input placeholder="Enter Your Name..." />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                    type: "email",
                  },
                ]}
                className="w-full"
              >
                <Input placeholder="Enter Your Email..." />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
                className="w-full"
              >
                <Input placeholder="Enter Your Number..." />
              </Form.Item>
              <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: "Please select a country" }]}
                className="w-full"
              >
                <Select placeholder="Select your country">
                  <Option value="USA">United States</Option>
                  <Option value="UK">United Kingdom</Option>
                  <Option value="Canada">Canada</Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <TextArea rows={4} placeholder="Enter Your Message..." />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full md:w-auto px-6 py-2 !bg-gradientBg  font-semibold rounded-lg hover:opacity-90"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
