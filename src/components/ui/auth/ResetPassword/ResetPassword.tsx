"use client";
import { useResetPasswordMutation } from "@/redux/apiSlices/authSlice";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const router = useRouter();

  const [resetPassword] = useResetPasswordMutation();

  const onFinish = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    const data = { ...values };

    try {
      const response = await resetPassword(data).unwrap();
      console.log(response);
      if (response?.success) {
        toast.success("Password updated successfully!");
        router.push(`/login`);
      } else {
        toast.error(response?.message || "Failed to update password.");
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div>
      <div className=" mb-6">
        <h1 className="text-[25px] font-semibold text-transparent bg-gradientBg bg-clip-text ">
          Set New Password
        </h1>
        <p>Enter your new password to complete the reset process</p>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="newPassword"
          label={
            <p
              style={{
                display: "block",
                color: "#5C5C5C",
              }}
              className="font-semibold "
            >
              New Password
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please input your new Password!",
            },
          ]}
          style={{ marginBottom: 0 }}
        >
          <Input.Password
            type="password"
            placeholder="Enter New password"
            style={{
              border: "1px solid #E0E4EC",
              height: "52px",
              background: "white",
              borderRadius: "8px",
              outline: "none",
            }}
            className="mb-6"
          />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: 0 }}
          label={
            <p
              style={{
                display: "block",
                color: "#5C5C5C",
              }}
              className="font-semibold"
            >
              Confirm Password
            </p>
          }
          name="confirmPassword"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Enter Confirm password"
            style={{
              border: "1px solid #E0E4EC",
              height: "52px",
              background: "white",
              borderRadius: "8px",
              outline: "none",
            }}
            className="mb-6"
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              height: 45,
              color: "white",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#032237",
              marginTop: 20,
            }}
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;
