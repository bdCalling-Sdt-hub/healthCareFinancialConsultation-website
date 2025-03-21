import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const EditProfile = () => {
  const [form] = Form.useForm();
  const [loading] = useState(false);

  // Handle form submission
  const onFinish = () => {
    // setLoading(true);
    // setTimeout(() => {
    //   console.log("Updated Profile:", values);
    //   message.success("Profile updated successfully!");
    //   setLoading(false);
    // }, 1500);
  };

  // Handle file upload
  const uploadProps = {
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      return isImage || Upload.LIST_IGNORE;
    },
    maxCount: 1,
  };

  return (
    <div className="border border-[#032237] p-10 rounded-3xl">
      <h2 className="text-center mb-4">Update Profile</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          fullName: "John Doe",
          email: "johndoe@gmail.com",
          phone: "+1234567890",
          address: "123 Street, New York, USA",
        }}
      >
        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name!" }]}
        >
          <Input
            style={{
              height: "45px",
            }}
            placeholder="Enter full name"
          />
        </Form.Item>

        <div className="flex gap-4">
          {/* Email */}
          <Form.Item
            className="w-full"
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              style={{
                height: "45px",
              }}
              placeholder="Enter email"
            />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            className="w-full"
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input
              style={{
                height: "45px",
              }}
              placeholder="Enter phone number"
            />
          </Form.Item>
        </div>

        {/* About */}
        <Form.Item
          label="About"
          name="about"
          rules={[{ required: true, message: "Please enter your about!" }]}
        >
          <TextArea placeholder="Enter about" rows={4} />
        </Form.Item>

        {/* Address */}
        <Form.Item
          label="Industry Name"
          name="industryName"
          rules={[
            { required: true, message: "Please enter your industry name!" },
          ]}
        >
          <Input
            style={{
              height: "45px",
            }}
            placeholder="Enter industry name"
          />
        </Form.Item>

        <Form.Item
          className="w-full"
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please enter your address!" }]}
        >
          <Input
            style={{
              height: "45px",
            }}
            placeholder="Enter address"
          />
        </Form.Item>

        {/* Profile Picture Upload */}
        <Form.Item label="Profile Picture" name="profilePicture">
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
          </Upload>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            className="!bg-gradientBg !py-5"
            htmlType="submit"
            block
            loading={loading}
          >
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProfile;
