"use client";

import aboutBannerImg from "@/assets/image (21).png";

import Image from "next/image";
import { motion } from "framer-motion";
import { useGetAboutUsQuery } from "@/redux/apiSlices/publicSlice";
import { Spin } from "antd";
import image1 from "@/assets/image (22).png";
import image2 from "@/assets/image (23).png";
import missionAndVisionImg1 from "@/assets/image (24).png";
import missionAndVisionImg2 from "@/assets/image (25).png";
import coreValuesImage1 from "@/assets/image (26).png";
import coreValuesImage2 from "@/assets/image (27).png";
import { getImageUrl } from "@/utils/getImageUrl";

const AboutUsPage = () => {
  const { data: aboutUs, isLoading } = useGetAboutUsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const aboutUsData = aboutUs?.data;

  const whoWeAre = aboutUsData[0];
  const ourMission = aboutUsData[1];
  const coreValues = aboutUsData[2];

  //console.log(coreValues);

  return (
    <div>
      <div className="relative mb-20">
        <div className="relative">
          <Image
            src={aboutBannerImg}
            alt="servicesMenuImg"
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
            About Us
          </h1>
          <p className="text-white md:text-lg text-md">
            Leveraging years of expertise in healthcare finance, we deliver
            tailored solutions that drive efficiency, reduce financial risks,
            and maximize profitability—empowering your organization to focus on
            what matters most: patient care and outcomes.
          </p>
        </motion.div>
      </div>

      <div className="container my-10">
        {/* <WhoWeAre /> */}
        <div className="container md:flex items-center gap-10">
          <div className="md:w-[50%] md:flex gap-6 pt-10 md:pt-0 w-full">
            <Image
              src={getImageUrl(whoWeAre?.images?.[0])}
              alt="image1"
              width={50000}
              height={50000}
              className="md:w-full md:h-[300px] h-[200px] rounded-2xl object-cover"
            />
            <Image
              src={getImageUrl(whoWeAre?.images?.[1])}
              alt="image1"
              width={50000}
              height={50000}
              className="md:w-full md:h-[300px] h-[200px] md:mt-28 mt-5 rounded-2xl object-cover"
            />
          </div>
          <div className="md:w-[50%] w-full">
            <h1 className="text-3xl mb-5 mt-5 md:mt-0 font-bold">
              {whoWeAre?.title}
            </h1>
            <p className="text-gray-600">{whoWeAre?.descriptions?.[0]?.body}</p>
          </div>
        </div>
      </div>

      {/* <MissionAndVision /> */}

      <div className="bg-[#032237] my-10 py-20">
        <div className="container md:flex w-full gap-20 items-center justify-center">
          <div className="md:w-[45%]">
            <h1 className="text-3xl mb-5 text-transparent bg-clip-text bg-gradientBg font-bold">
              {ourMission?.title}
            </h1>
            <p className="text-white">{ourMission?.descriptions?.[0]?.body}</p>
          </div>
          <div className="md:w-[55%] md:flex gap-5 w-full">
            <Image
              src={getImageUrl(ourMission?.images?.[0])}
              alt="missionAndVisionImage"
              width={50000}
              height={50000}
              className="md:w-[270px] md:h-[270px] h-[200px] rounded-2xl mt-20 object-cover"
            />
            <Image
              src={getImageUrl(ourMission?.images?.[1])}
              alt="missionAndVisionImage"
              width={50000}
              height={50000}
              className="md:w-[270px] md:h-[270px] h-[200px] rounded-2xl mt-5 object-cover"
            />
          </div>
        </div>
      </div>

      {/* <OurCoreValues /> */}

      <div className="container my-20">
        <h1 className="text-3xl mb-5 font-bold">Our Core Values</h1>

        <div className="md:flex items-center gap-10">
          <div className="md:flex gap-8 md:w-[55%] w-full">
            <Image
              src={getImageUrl(coreValues?.images?.[0])}
              alt="coreValuesImage1"
              width={50000}
              height={50000}
              className="md:w-[350px] md:h-[350px] h-full rounded-2xl object-cover"
            />
            <Image
              src={getImageUrl(coreValues?.images?.[1])}
              alt="coreValuesImage1"
              width={50000}
              height={50000}
              className="md:w-[350px] md:h-[350px] h-full md:mt-20 mt-5 rounded-2xl object-cover"
            />
          </div>
          <div className="md:w-[45%] space-y-5 md:mt-0 mt-10 ml-10">
            {coreValues?.descriptions?.map(
              (description: any, index: number) => (
                <div key={index}>
                  <p className="text-gray-600">
                    {" "}
                    <span className="font-bold">
                      {description?.heading}
                    </span> - {description.body}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
