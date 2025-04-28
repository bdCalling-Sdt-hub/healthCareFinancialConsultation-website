"use client";

import Image from "next/image";
import challengeImage from "@/assets/image (34).png";
import clientBackgroundImg from "@/assets/image 37.png";
import { motion } from "framer-motion";
import { useGetSingleChallengeQuery } from "@/redux/apiSlices/challengeSlice";
import { Spin } from "antd";
import { useParams } from "next/navigation";
import { getImageUrl } from "@/utils/getImageUrl";

const TopFiveChallengesPage = () => {
  const { id } = useParams();

  const { data: singleChallenge, isLoading } = useGetSingleChallengeQuery(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const singleChallengeData = singleChallenge?.data;
  const challengeContent = singleChallengeData?.contents;

  console.log(singleChallengeData, challengeContent);

  return (
    <div>
      <div className="relative mb-20">
        <div className="relative">
          <Image
            src={getImageUrl(singleChallengeData?.background)}
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
            {singleChallengeData?.title}
          </h1>
          <p className="text-white md:text-lg text-md">
            {singleChallengeData?.description}
          </p>
        </motion.div>
      </div>
      <div className="container my-20 mt-40">
        <div className="md:flex space-y-5 md:space-y-0 gap-10">
          <div className="space-y-5 md:w-[65%]">
            <h1 className="text-3xl font-bold">{challengeContent[0]?.title}</h1>
            <p className="text-lg text-justify">
              {challengeContent[0]?.description}
            </p>
          </div>
          <div className="md:w-[35%]">
            <Image
              src={getImageUrl(singleChallengeData?.images[0])}
              alt="howWeWorkImg"
              width={50000}
              height={50000}
              className="w-full h-[300px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {challengeContent?.slice(1)?.map((content: any, index: number) => (
        <div key={index} className="container my-20">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">{content.title}</h1>
            <p className="text-lg text-justify">{content.description}</p>
            {content.details && content.details.length > 0 && (
              <ul className="space-y-2 list-disc text-lg text-justify pl-10">
                {content.details.map((detail: any, detailIndex: number) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}

      <div className="bg-[#032237] my-20 mt-40 py-20">
        <div className="md:flex gap-10 md:relative space-y-5 md:space-y-0 items-center container">
          <div className="md:w-[50%]">
            <Image
              src={getImageUrl(singleChallengeData?.images[1])}
              alt="howWeWorkImg"
              width={50000}
              height={50000}
              className="w-[600px] md:absolute -top-40 md:h-[450px] rounded-2xl object-cover"
            />
          </div>
          <p className="md:w-[50%] h-[280px] text-transparent bg-gradientBg bg-clip-text text-lg">
            {singleChallengeData?.footer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFiveChallengesPage;
