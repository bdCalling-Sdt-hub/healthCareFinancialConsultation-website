"use client";
import { useOtpVerifyMutation } from "@/redux/apiSlices/authSlice";
import { Button, Form, Typography, message } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";

const { Text } = Typography;

const VerifyOtp = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [otpVerify] = useOtpVerifyMutation();

  useEffect(() => {
    const emailFromQuery = new URLSearchParams(window.location.search).get(
      "email"
    );
    setEmail(emailFromQuery);
  }, []);

  const onFinish = async () => {
    if (!email) {
      message.error("Email is required for verification");
      return;
    }

    if (otp.length !== 6) {
      message.error("Please enter the complete 6-digit verification code");
      return;
    }

    try {
      setLoading(true);
      const response = await otpVerify({
        email,
        oneTimeCode: otp,
      }).unwrap();

      if (response?.success) {
        toast.success(response?.message);
        if (response?.data?.token) {
          localStorage.setItem("oneTimeToken", response?.data?.token);
          router.push(`/reset-password`);
        } else {
          router.push("/login");
        }
      } else {
        toast.error(
          response?.message || "Verification failed. Please try again."
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

  const handleResendEmail = async () => {
    // Implement resend functionality here
    message.info("Resending verification code...");
    // You can add the actual API call for resending the code here
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-[25px] font-semibold mb-6 text-transparent bg-gradientBg bg-clip-text">
          Verification code
        </h1>
        <p>
          We&apos;ll send a verification code to your email. Check your inbox
          and enter the code here.
        </p>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <div className="flex items-center justify-center mb-6">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              height: 50,
              width: 50,
              borderRadius: "8px",
              margin: "16px",
              fontSize: "20px",
              border: "1px solid #032237",
              color: "#2B2A2A",
              outline: "none",
              marginBottom: 10,
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <Text>Don&apos;t received code?</Text>

          <p
            onClick={handleResendEmail}
            className="login-form-forgot underline font-medium"
            style={{ color: "#032237", cursor: "pointer" }}
          >
            Resend
          </p>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit"
            loading={loading}
            style={{
              width: "100%",
              height: 40,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
              background: "#032237",
              color: "white",
            }}
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VerifyOtp;
