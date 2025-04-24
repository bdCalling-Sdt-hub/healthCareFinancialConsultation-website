"use client";

import Image from "next/image";
import bannerImg from "@/assets/bannerImg.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={bannerImg}
          alt=""
          width={50000}
          height={50000}
          className="w-full h-[800px] object-cover"
        />
      </motion.div>
      <div className="absolute top-1/2 left-[200px] md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 space-y-5">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-[56px] px-5 md:px-0 font-bold md:w-[800px] text-transparent bg-gradientBg bg-clip-text leading-tight"
        >
          Empowering Healthcare with Financial Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:w-[700px] w-[400px] px-5 md:px-0 text-white"
        >
          Specialized operational finance consultation tailored to your
          healthcare organization&apos;s needs
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link href={"/book-your-consultation"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradientBg px-10 text-lg font-medium ms-5 md:ms-0 py-4 mt-4 rounded-md border-none"
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
