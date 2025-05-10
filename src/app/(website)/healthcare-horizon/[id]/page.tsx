"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import costImage from "@/assets/1200-x-675-Economic-chart-and-money-696x385.webp";
import howWeWorkImg from "@/assets/image (33).png";
import titleLogo1 from "@/assets/image 67.png";
import titleLogo2 from "@/assets/image 68.png";
import titleLogo3 from "@/assets/image 70.png";
import { Collapse, Spin } from "antd";
import { useEffect, useState } from "react";
import { useGetSingleInsightQuery } from "@/redux/apiSlices/horizonSlice";
import { useParams } from "next/navigation";
import { getImageUrl } from "@/utils/getImageUrl";
import moment from "moment";

// Define TypeScript interfaces for the API response
interface Bar {
  title: string;
  body: string[];
}

interface Section {
  _id: string;
  insight: string;
  title: string;
  image: string;
  bars: Bar[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface InsightData {
  _id: string;
  title: string;
  description: string;
  image: string;
  sections: Section[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: InsightData;
}

const SingleInsightPage = () => {
  const [isStepsVisible, setIsStepsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const { id } = useParams();

  const { data: singleInsight, isLoading } = useGetSingleInsightQuery(id);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const data = singleInsight?.data || {};
  console.log(data);

  // Separate the sections - all except the last one
  const regularSections = data?.sections?.slice(0, -1) || [];
  // Get the last section if it exists
  const lastSection =
    data?.sections?.length > 0 ? data.sections[data.sections.length - 1] : null;

  return (
    <div className="">
      <div className="relative">
        <div className="relative">
          <Image
            src={howWeWorkImg || "/placeholder.svg"}
            alt="howWeWorkImg"
            width={50000}
            height={50000}
            className="w-full h-[600px] object-cover"
          />
          {/* White overlay animations */}
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
            Healthcare Horizon
          </h1>
          <p className="md:text-lg text-md text-white">
            What sets us apart is our deep expertise in the healthcare sector,
            with over 20 years of industry experience. We offer tailored
            solutions backed by a strong network of industry connections and a
            commitment to innovative technologies.
          </p>
        </motion.div>
      </div>

      <div className="mt-64">
        <div className="w-full relative bg-[#032237] md:h-[250px] h-[600px]">
          <div className="container absolute -top-48 left-1/2 transform -translate-x-1/2 md:flex justify-center items-center gap-10 py-20">
            <div className="md:w-1/2">
              <Image
                src={
                  data?.image
                    ? getImageUrl(data.image)
                    : costImage || "/placeholder.svg"
                }
                alt={data?.title || "Rising Costs and Affordability"}
                width={50000}
                height={50000}
                className="w-full h-[300px] object-contain rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="md:text-4xl text-2xl text-white md:text-black mb-10 mt-5 md:mt-0 font-bold">
                {data?.title || ""}{" "}
              </h2>
              <p className="bg-gradientBg text-transparent h-[150px] flex items-center justify-center bg-clip-text">
                {data?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Sections from API (all except the last one) */}
      <div className="container my-20">
        {regularSections.map((section: any) => (
          <div key={section._id} className="mb-20">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={
                  section.image
                    ? getImageUrl(section.image)
                    : titleLogo1 || "/placeholder.svg"
                }
                alt={section.title}
                width={50000}
                height={50000}
                className="w-20 h-20 object-contain rounded-2xl"
              />
              <p className="md:text-3xl text-xl font-bold text-secondary">
                {section.title}
              </p>
            </div>

            {/* Collapsible Bars */}
            <div className="mt-8">
              {section.bars.map((bar: any, barIndex: number) => (
                <Collapse
                  key={`${section._id}-${barIndex}`}
                  className="border-none bg-transparent"
                  expandIconPosition="end"
                  style={{
                    marginLeft: !isMobile
                      ? barIndex < 8
                        ? `${barIndex * 70}px`
                        : barIndex < 16
                        ? `${(15 - barIndex) * 70}px`
                        : `${(barIndex - 16) * 70}px`
                      : 0,
                    width: !isMobile ? "700px" : "100%",
                  }}
                  items={[
                    {
                      key: `${barIndex + 1}`,
                      label: bar.title,
                      children: (
                        <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                          {bar.body.map((item: any, itemIndex: number) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      ),
                      className: "bg-[#032237] border-0 rounded-lg mb-4",
                      style: {
                        marginBottom: "1rem",
                        border: "none",
                      },
                    },
                  ]}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Last Section - "How Can HC Financial Consultants Help?" */}
        {lastSection && (
          <div className="container mt-32">
            <div
              className="flex items-center gap-3 mb-5 cursor-pointer"
              onClick={() => setIsStepsVisible(!isStepsVisible)}
            >
              <Image
                src={
                  lastSection.image
                    ? getImageUrl(lastSection.image)
                    : titleLogo3 || "/placeholder.svg"
                }
                alt={lastSection.title}
                width={50000}
                height={50000}
                className="w-20 h-20 object-contain rounded-lg"
              />
              <p className="md:text-3xl text-xl font-bold bg-gradientBg p-4 rounded-2xl text-secondary">
                {lastSection.title || "How Can HC Financial Consultants Help?"}
              </p>
            </div>

            <div
              className={`transition-all duration-500 ${
                isStepsVisible
                  ? "opacity-100 max-h-[2000px]"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              {lastSection.bars.map((bar: any, index: number) => (
                <div
                  key={index}
                  className="flex gap-5 items-center md:mx-10 my-8 border-4 border-[#b99755] rounded-2xl p-4"
                >
                  <div className="w-14 h-14 bg-secondary rounded-full">
                    <p className="h-14 w-14 flex justify-center items-center text-xl text-white font-bold">
                      {bar?.title}
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="pl-5 mt-2">
                      {bar.body.map(
                        (item: string, itemIndex: number) =>
                          itemIndex === 0 && (
                            <p key={itemIndex} className="mt-1">
                              {item}
                            </p>
                          )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleInsightPage;
