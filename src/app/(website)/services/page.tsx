"use client";

import servicesMenuImg from "@/assets/image (19).png";

import serviceBookImg from "@/assets/Group 27.png";
import whatMakesUsDifferentImg from "@/assets/image (20).png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGetAllServicesQuery } from "@/redux/apiSlices/serviceSlice";
import { Spin } from "antd";
import { getImageUrl } from "@/utils/getImageUrl";

const ServicesPage = () => {
  const { data: services, isLoading } = useGetAllServicesQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const allServices = services?.data;
  // //console.log(allServices);

  return (
    <div className="">
      <div className="relative mb-20">
        <div className="relative">
          <Image
            src={servicesMenuImg}
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
            Our Services
          </h1>
          <p className="text-white md:text-lg text-md">
            With years of experience in healthcare finance, we offer tailored
            solutions that drive efficiency, reduce financial risks, and
            maximize profitability while keeping patient care at the forefront
          </p>
        </motion.div>
      </div>
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {allServices.map((service: any) => (
            <Link href={`/services/${service?._id}`} key={service?._id}>
              <div className="relative group hover:shadow-2xl cursor-pointer">
                <Image
                  src={getImageUrl(service.image)}
                  alt={service.title}
                  width={50000}
                  height={50000}
                  className="w-full md:h-[350px] rounded-2xl object-cover"
                />
                <div className="absolute bottom-0 w-full h-20 bg-opacity-30 rounded-2xl backdrop-blur-md bg-[#032237] py-2 flex items-center justify-center">
                  <h1 className="text-2xl mb-5 font-bold text-white leading-normal">
                    {service.title}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="relative my-16">
        <Image
          src={serviceBookImg}
          alt="aa"
          width={50000}
          height={50000}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute w-full h-full top-0 flex flex-col bg-[#032237] bg-opacity-20 backdrop-blur-sm items-center justify-center">
          <h1 className="md:text-3xl text-2xl text-center bg-gradientBg text-transparent bg-clip-text font-bold">
            Need A Consultation For Health care Finance?
          </h1>
          <Link href={"/book-your-consultation"}>
            <button className="bg-gradientBg px-5 py-2 my-5 rounded-md">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      <div className="my-20">
        <h1 className="container md:ps-40 text-3xl mb-2 font-bold">
          What Makes Us Different
        </h1>
        <div className="bg-[#032237] md:h-[400px] pt-5 md:flex w-full relative">
          <div className="container md:w-[50%] flex items-center">
            <ul className="text-gray-400 list-disc space-y-4 pl-5">
              <li>Specialized in Healthcare Finance</li>
              <li>HIPAA-Compliant & Secure</li>
              <li>Proven Track Record</li>
              <li>Custom-Tailored Strategies</li>
              <li>Regulatory Compliance Expertise</li>
              <li>End-to-End Financial Solutions</li>
            </ul>
          </div>
          <div className="container md:w-[50%] py-5 md:absolute -top-16 right-0">
            <Image
              src={whatMakesUsDifferentImg}
              alt="whatMakesUsDifferent"
              width={50000}
              height={50000}
              className="md:w-[500px] md:h-[420px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
