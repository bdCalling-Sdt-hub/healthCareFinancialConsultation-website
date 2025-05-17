"use client";

import { useGetTermsAndConditionQuery } from "@/redux/apiSlices/publicSlice";
import { Spin } from "antd";
import React from "react";

const TermsAndConditionsPage = () => {
  const { data: termsAndConditions, isLoading } =
    useGetTermsAndConditionQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const termsData = termsAndConditions?.data?.content;

  //   //console.log("termsData", termsData);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradientBg text-transparent bg-clip-text">
          Terms and Conditions
        </h1>

        <div className="space-y-6">
          <div dangerouslySetInnerHTML={{ __html: termsData }} />
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
