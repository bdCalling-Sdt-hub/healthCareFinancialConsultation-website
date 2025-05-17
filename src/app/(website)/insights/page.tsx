"use client";

import Image from "next/image";
import insightImage from "@/assets/image (33).png";
import { motion } from "framer-motion";
import Horizon from "@/components/ui/website/Home/Horizon";
import BookNowBanner from "@/components/ui/website/BookNowBanner";
import RelatedChallengeCard from "@/components/ui/website/RelatedChallengeCard";
import WhatClientsSay from "@/components/ui/website/Home/Review/WhatClientsSay";
import GrowthChart from "@/components/ui/website/insights/GrowthChart";
import BestServicesChart from "@/components/ui/website/insights/BestServicesChart";
import { Spin } from "antd";
import { useGetAllChallengesQuery } from "@/redux/apiSlices/challengeSlice";
import { useGetAllInsightChartQuery } from "@/redux/apiSlices/horizonSlice";

const InsightsPage = () => {
  const { data: allChallenges, isLoading } =
    useGetAllChallengesQuery(undefined);

  const { data: insightChartData, isLoading: isInsightChartLoading } =
    useGetAllInsightChartQuery(undefined);

  if (isLoading || isInsightChartLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const topFiveChallengesInfo = allChallenges?.data;
  const chartData = insightChartData?.data?.chartData?.[0];
  const topServices = insightChartData?.data?.topServices;

  // //console.log("sdgvsdvsgv", topServices);

  return (
    <div>
      <div className="relative mb-20">
        <div className="relative">
          <Image
            src={insightImage}
            alt="howWeWorkImg"
            width={50000}
            height={50000}
            className="w-full h-[600px] object-cover"
          />
          {/* White overlay animation */}
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
            Our Insights
          </h1>
          <p className="text-white md:text-lg text-md">
            Rising Costs, Staffing Shortages, Disparity in Healthcare, Growing
            Need for improved Mental Health Care are some of the top issues
            facing the Healthcare Industry.
          </p>
        </motion.div>
      </div>
      <div>
        <Horizon />
        <div className="container">
          <h1 className="text-3xl mb-5 font-bold">Statistics</h1>
          <div className="border-4 border-gray-200 p-10 rounded-2xl">
            <div className="text-center mb-5">
              <h1 className="text-2xl font-semibold">{chartData?.title}</h1>
              <p>{chartData?.description}</p>
            </div>
            <GrowthChart data={chartData} />
            <BestServicesChart serviceData={topServices} />
          </div>
        </div>
        <BookNowBanner />
      </div>
      <div>
        <div className="container my-20">
          <h1 className="text-3xl mb-5 font-bold">Top 5 Challenges</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {topFiveChallengesInfo?.map((item: any) => (
              <RelatedChallengeCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-20">
        <WhatClientsSay />
      </div>
    </div>
  );
};

export default InsightsPage;
