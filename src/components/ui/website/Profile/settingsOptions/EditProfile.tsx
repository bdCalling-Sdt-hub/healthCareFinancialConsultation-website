import React, { useState } from "react";
import { Form, Input, Button, Upload, message, Spin, Card } from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/apiSlices/authSlice";
import type { UploadFile } from "antd/es/upload/interface";
import Image from "next/image";
import { getImageUrl } from "@/utils/getImageUrl";

const EditProfile = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { data: userData, isLoading } = useGetUserProfileQuery(undefined);
  const [updateProfile, { isLoading: updateLoading }] =
    useUpdateUserProfileMutation();

  // Handle form submission
  const onFinish = async (values: any) => {
    try {
      const formData = new FormData();

      // Append all form data to data object
      const data = {
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        address: values.address,
        about: values.about,
        industry: values.industry,
      };

      // Append data object as JSON string
      formData.append("data", JSON.stringify(data));

      // Append image if exists
      if (fileList.length > 0 && fileList[0].originFileObj) {
        formData.append("image", fileList[0].originFileObj);
      }

      const response = await updateProfile(formData).unwrap();

      if (response?.success) {
        message.success("Profile updated successfully!");
      } else {
        message.error(response?.message || "Failed to update profile");
      }
    } catch (error: any) {
      message.error(error?.data?.message || "Something went wrong!");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const userDataDetails = userData?.data;
  //console.log(userDataDetails);

  // Handle file upload
  const uploadProps = {
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must be smaller than 2MB!");
      }
      return (isImage && isLt2M) || Upload.LIST_IGNORE;
    },
    maxCount: 1,
    fileList,
    onChange: ({ fileList: newFileList }: any) => {
      setFileList(newFileList);
    },
    showUploadList: false,
  };

  return (
    <Card className="shadow-xl rounded-3xl border-none">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradientBg text-transparent bg-clip-text">
          Update Profile
        </h2>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#032237] shadow-lg">
              {fileList.length > 0 ? (
                // Show newly uploaded image
                <Image
                  src={URL.createObjectURL(fileList[0].originFileObj as Blob)}
                  alt="Profile"
                  height={456465}
                  width={456465}
                  className="w-full h-full object-cover"
                />
              ) : userDataDetails?.profile ? (
                // Show existing profile image from API
                <Image
                  src={getImageUrl(userDataDetails?.profile)}
                  alt="Profile"
                  width={456465}
                  height={456465}
                  className="w-full h-full object-cover"
                />
              ) : (
                // Show default user icon if no image
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <UserOutlined className="text-4xl text-gray-400" />
                </div>
              )}
            </div>
            <Upload {...uploadProps} className="absolute bottom-0 right-0">
              <Button
                icon={<UploadOutlined />}
                className="rounded-full !bg-gradientBg hover:!bg-[#032237] border-none"
              >
                <span className="text-white">Upload</span>
              </Button>
            </Upload>
          </div>
        </div>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            fullName: userDataDetails?.name,
            email: userDataDetails?.email,
            phone: userDataDetails?.phone,
            address: userDataDetails?.address,
            about: userDataDetails?.about,
            industry: userDataDetails?.industry,
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please enter your full name!" },
              ]}
            >
              <Input
                className="rounded-lg"
                style={{ height: "45px" }}
                placeholder="Enter full name"
              />
            </Form.Item>

            <Form.Item
              label="Industry Name"
              name="industry"
              rules={[
                { required: true, message: "Please enter your industry name!" },
              ]}
            >
              <Input
                className="rounded-lg"
                style={{ height: "45px" }}
                placeholder="Enter industry name"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                className="rounded-lg"
                style={{ height: "45px" }}
                placeholder="Enter email"
              />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input
                className="rounded-lg"
                style={{ height: "45px" }}
                placeholder="Enter phone number"
              />
            </Form.Item>
          </div>

          <Form.Item
            label="About"
            name="about"
            rules={[{ required: true, message: "Please enter your about!" }]}
          >
            <TextArea
              placeholder="Enter about"
              rows={4}
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter your address!" }]}
          >
            <Input
              className="rounded-lg"
              style={{ height: "45px" }}
              placeholder="Enter address"
            />
          </Form.Item>

          <Form.Item className="mt-8">
            <Button
              className="!bg-gradientBg hover:!bg-[#032237] !py-6 !text-lg font-semibold rounded-lg transition-all duration-300"
              htmlType="submit"
              block
            >
              {updateLoading ? "Updating..." : "Update Profile"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default EditProfile;
