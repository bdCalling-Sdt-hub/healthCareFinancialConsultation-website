"use client";

import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";
import { useGetAllHorizonQuery } from "@/redux/apiSlices/horizonSlice";
import { Spin } from "antd";
import { getImageUrl } from "@/utils/getImageUrl";
import moment from "moment";

const Horizon = () => {
  const { data: insights, isLoading } = useGetAllHorizonQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const insightsData = insights?.data;
  const firstInsight = insightsData?.[0];
  // //console.log(firstInsight);

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
              src={getImageUrl(firstInsight?.image)}
              alt="horizonImage1"
              width={50000}
              height={50000}
              className="md:w-full md:h-[500px] w-full h-44 object-contain rounded-lg"
            />
          </motion.div>
          <div className="my-5">
            <h1 className="text-xl md:text-xl font-bold mb-5 md:mb-0">
              {firstInsight?.title}
            </h1>
            <div className="flex text-lg justify-between items-center my-4 text-gray-600">
              <p>{moment(firstInsight?.createdAt).format("ll")}</p>
              <p>London,UK</p>
            </div>
            <p className="text-gray-600">
              {firstInsight?.description.slice(0, 200)}...
              <Link href={`/healthcare-horizon/${firstInsight?._id}`}>
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
          {insightsData?.slice(1)?.map((card: any) => (
            <motion.div
              key={card?._id}
              variants={fadeInUp}
              whileHover={cardHover}
              className="md:flex gap-5 items-center border p-3 rounded-3xl"
            >
              <Image
                className="md:w-56 md:h-32 object-cover rounded-lg"
                src={getImageUrl(card.image)}
                alt={`horizonImage${card?._id + 2}`}
                width={50000}
                height={50000}
              />
              <div>
                <h1 className="text-xl md:text-xl font-bold md:mb-0">
                  {card.title}
                </h1>
                <div className="flex text-lg justify-between my-1 items-center text-gray-600">
                  <p>{moment(card?.createdAt).format("ll")}</p>
                  <p>London,UK</p>
                </div>
                <p className="text-gray-600">
                  {card.description.slice(0, 100)}...
                  <Link href={`/healthcare-horizon/${card?._id}`}>
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
