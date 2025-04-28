/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import TextInput from "@/components/shared/TextInput";
import { useLoginMutation } from "@/redux/apiSlices/authSlice";
import { Checkbox, Form, Input, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean; // Changed from optional to required boolean
}

const Login = () => {
  const router = useRouter();
  const [form] = Form.useForm<LoginFormValues>();
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");

  const onFinish = async (values: LoginFormValues) => {
    // Use interface directly
    try {
      setErrorMessage("");
      const res = await login(values).unwrap();

      if (res?.success) {
        // Use values.remember directly from form
        if (values.remember) {
          localStorage.setItem("authenticationToken", res?.data?.accessToken);
          localStorage.setItem("refreshToken", res?.data?.refreshToken);
        } else {
          sessionStorage.setItem("authenticationToken", res?.data?.accessToken);
          sessionStorage.setItem("refreshToken", res?.data?.refreshToken);
        }
        toast.success(res?.message || "Login successful");
        router.push("/");
      } else {
        const message = res?.message || "Login failed";
        setErrorMessage(message);
        toast.error(message);
      }
    } catch (error: any) {
      const message =
        error?.data?.message || "Login failed. Please check your credentials.";
      setErrorMessage(message);
      toast.error(message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-md w-full px-4">
        <div className="mb-6 w-full">
          <h1 className="text-[25px] font-semibold mb-2">Welcome Back</h1>
          <p className="text-transparent bg-gradientBg bg-clip-text">
            Sign in to your account
          </p>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
            {errorMessage}
          </div>
        )}

        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
          initialValues={{ remember: false }} // Set initial value directly
        >
          <TextInput
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          />

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter your password"
              style={{
                height: 40,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
              }}
            />
          </Form.Item>

          <div className="flex items-center justify-between">
            <Form.Item
              style={{ marginBottom: 0 }}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox> {/* Removed onChange handler */}
            </Form.Item>

            <Link
              href="/forgot-password"
              className="login-form-forgot text-transparent bg-gradientBg bg-clip-text font-semibold"
            >
              Forgot password
            </Link>
          </div>

          <Form.Item style={{ marginBottom: 0 }}>
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                height: 45,
                color: "black",
                fontWeight: "400px",
                fontSize: "18px",
                marginTop: 20,
              }}
              className="flex items-center justify-center bg-gradientBg rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {isLoading ? <Spin size="small" /> : "Sign in"}{" "}
              {/* Added size prop */}
            </button>
          </Form.Item>
        </Form>

        <div className="flex items-center justify-center gap-1 py-4">
          <p className="text-[#636363]">Don&apos;t have any account?</p>
          <Link href="/register" className="text-[#1854F9] font-semibold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
