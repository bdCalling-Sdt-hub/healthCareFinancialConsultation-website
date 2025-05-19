"use client";

import TextInput from "@/components/shared/TextInput";
import { useRegisterMutation } from "@/redux/apiSlices/authSlice";
import { Checkbox, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [register] = useRegisterMutation();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);

      // Prepare payload according to API requirements
      const payload: RegisterPayload = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: "user", // Setting default role as user
      };

      const response = await register(payload).unwrap();

      if (response?.success) {
        toast.success(response?.message || "Registration successful!");
        router.push(`/verify-otp?email=${values.email}`);
      } else {
        toast.error(
          response?.message || "Registration failed. Please try again."
        );
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="mb-6">
        <h1 className="text-[25px] font-semibold mb-2">Get Started Now</h1>
        <p className="text-transparent bg-gradientBg bg-clip-text">
          Let&apos;s create your account
        </p>
      </div>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
          },
          components: {
            Input: {
              hoverBorderColor: "#d9d9d9",
            },
          },
        }}
      >
        <Form onFinish={onFinish} layout="vertical">
          <TextInput
            name="name"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your full name!",
              },
            ]}
          />

          <TextInput
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          />

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
              {
                min: 8,
                message: "Password must be at least 8 characters!",
              },
            ]}
            className="mb-5"
          >
            <Input.Password
              placeholder="Enter password"
              className="border border-gray-300 h-[50px] bg-white rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The passwords do not match!")
                  );
                },
              }),
            ]}
            className="mb-10"
          >
            <Input.Password
              placeholder="Confirm password"
              className="border border-gray-300 h-[50px] bg-white rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator(_, value) {
                  return value
                    ? Promise.resolve()
                    : Promise.reject(new Error("You must agree to continue!"));
                },
              },
            ]}
          >
            <Checkbox>
              I agree with terms of service and privacy policy
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full h-[45px] font-medium text-lg bg-gradientBg rounded-lg flex items-center justify-center mt-4"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </Form.Item>
        </Form>
      </ConfigProvider>

      <div className="flex items-center justify-center gap-1 py-4">
        <p className="text-[#636363]">Have an account?</p>
        <Link href="/login" className="text-[#1854F9] font-semibold">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;
