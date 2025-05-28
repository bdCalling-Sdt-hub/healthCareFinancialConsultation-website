"use client";

import React from "react";
import { Collapse, Spin } from "antd";
import { useGetFaqsQuery } from "@/redux/apiSlices/publicSlice";
import Link from "next/link";

const FAQPage = () => {
  const { data: faqData, isLoading } = useGetFaqsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  // Transform API data to match Collapse component's format
  const faqs =
    faqData?.data?.map((faq: any) => ({
      key: faq._id,
      label: faq.question,
      children: <p>{faq.answer}</p>,
    })) || [];

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradientBg text-transparent bg-clip-text">
          Frequently Asked Questions
        </h1>

        <div className="mb-8 text-center text-gray-700">
          Find answers to common questions about our services and how we can
          help your healthcare organization succeed.
        </div>

        <Collapse
          items={faqs}
          defaultActiveKey={[]}
          className="shadow-sm"
          expandIconPosition="end"
        />

        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <Link href={"/contactUs"}>
            <button className="bg-gradientBg text-black font-semibold px-6 py-2 rounded-md hover:bg-[#032237] hover:text-white transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
