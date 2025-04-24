"use client";

import aboutBannerImg from "@/assets/image (21).png";
import MissionAndVision from "@/components/ui/website/AboutUs/MissionAndVision";
import OurCoreValues from "@/components/ui/website/AboutUs/OurCoreValues";
import WhoWeAre from "@/components/ui/website/AboutUs/WhoWeAre";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUsPage = () => {
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
        <WhoWeAre />
      </div>
      <MissionAndVision />
      <OurCoreValues />
    </div>
  );
};

export default AboutUsPage;
