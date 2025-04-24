"use client";

import Image from "next/image";
import horizonImage1 from "@/assets/image (11).png";
import horizonImage2 from "@/assets/image (12).png";
import horizonImage3 from "@/assets/image (13).png";
import horizonImage4 from "@/assets/image (14).png";
import horizonImage5 from "@/assets/image (15).png";
import Link from "next/link";
import { motion } from "framer-motion";

const Horizon = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardHover = {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  };

  const cardData = [
    {
      image: horizonImage2,
      title: "AI and Technology",
      link: "/healthcare-horizon/2",
    },
    {
      image: horizonImage3,
      title: "Regulatory Risks",
      link: "/healthcare-horizon/3",
    },
    {
      image: horizonImage4,
      title: "Workforce",
      link: "/healthcare-horizon/4",
    },
    {
      image: horizonImage5,
      title: "Market Consolidation (Competition)",
      link: "/healthcare-horizon/5",
    },
  ];

  return (
    <div className="container md:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-5 md:mb-0"
      >
        Healthcare Horizon
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:text-lg text-gray-600 my-5"
      >
        Healthcare in 2025 is poised for significant transformation driven by
        renewed investment, advanced technology integration, and evolving
        regulatory and cybersecurity demands. Here at HC Financial Consultants,
        we aim to help our clients stay ahead of this ever-changing curve.
      </motion.p>
      <div className="md:flex gap-5 w-full items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-[50%]"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={horizonImage1}
              alt="horizonImage1"
              width={50000}
              height={50000}
            />
          </motion.div>
          <div className="my-5">
            <h1 className="text-xl md:text-xl font-bold mb-5 md:mb-0">
              Rising Costs and Affordability
            </h1>
            <div className="flex text-lg justify-between items-center my-4 text-gray-600">
              <p>14 Jan,2025</p>
              <p>London,UK</p>
            </div>
            <p className="text-gray-600">
              Expert operational finance consulting tailored for healthcare
              providers. Secure your financial future today. Revenue Integrity
              Consulting Secure your financial future today. Revenue Integrity
              Revenue Integrity Consulting Secure your financial future today.
              Revenue Integrity...{" "}
              <Link href={"/healthcare-horizon/1"}>
                <span className="text-blue-700 underline cursor-pointer">
                  See More
                </span>
              </Link>
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          className="md:w-[50%] flex flex-col gap-2 justify-between"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={cardHover}
              className="md:flex gap-5 items-center border p-3 rounded-3xl"
            >
              <Image
                className="md:w-56 md:h-32 object-cover"
                src={card.image}
                alt={`horizonImage${index + 2}`}
                width={50000}
                height={50000}
              />
              <div>
                <h1 className="text-xl md:text-xl font-bold md:mb-0">
                  {card.title}
                </h1>
                <div className="flex text-lg justify-between my-1 items-center text-gray-600">
                  <p>14 Jan,2025</p>
                  <p>London,UK</p>
                </div>
                <p className="text-gray-600">
                  Expert operational finance consulting tailored for health care
                  providers. Secure healthcare service providers ...
                  <Link href={card.link}>
                    <span className="text-blue-700 underline cursor-pointer">
                      See More
                    </span>
                  </Link>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Horizon;
