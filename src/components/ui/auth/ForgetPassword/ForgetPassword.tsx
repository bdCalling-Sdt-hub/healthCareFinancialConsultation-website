"use client";
import { useForgetPasswordMutation } from "@/redux/apiSlices/authSlice";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const router = useRouter();

  const [forgetPassword] = useForgetPasswordMutation();

  const onFinish = async (values: { email: string }) => {
    const res = await forgetPassword({ email: values.email }).unwrap();

    if (res?.success) {
      toast.success(res?.message);
      router.push(`/verify-otp?email=${values?.email}`);
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <div className="w-[500px]">
      <div className="text-center mb-4">
        <h1 className="text-[25px] font-semibold ">Forgot Password ?</h1>
        <p>Enter your email to reset your password</p>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={<p>Email</p>}
          name="email"
          id="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            placeholder="Enter your email address"
            style={{
              height: 40,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
            }}
          />
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            style={{
              width: "100%",
              height: 45,
              color: "Black",
              fontWeight: "400px",
              fontSize: "18px",

              marginTop: 20,
            }}
            className="flex items-center justify-center bg-gradientBg rounded-lg"
          >
            Send OTP
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPassword;
