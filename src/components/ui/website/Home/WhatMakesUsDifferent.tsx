"use client";

import Image from "next/image";
import whatMakesUsDifferentImage1 from "@/assets/whatMakesUs.png";
import Link from "next/link";
import { useGetOurWaysQuery } from "@/redux/apiSlices/ourWaySlice";
import { Spin } from "antd";

const WhatMakesUsDifferent = () => {
  const { data: ourWays, isLoading } = useGetOurWaysQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const ourWaysInfo = ourWays?.data;
  //console.log(ourWaysInfo);

  return (
    <div className="container my-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-0">
        What Makes Us Different
      </h1>
      <p className="text-gray-600 mt-5 text-lg">
        By partnering closely with you, we drive change by combining the
        expertise of passionate problem-solvers, cutting-edge technologies, and
        comprehensive service capabilities to transform every insight into an
        opportunity.
      </p>
      <div className="md:flex gap-5 justify-center items-center">
        <div className="md:w-[50%]">
          <Image
            src={whatMakesUsDifferentImage1}
            alt=""
            width={50000}
            height={50000}
            className="md:h-[950px] w-full"
          />
        </div>
        <div className="md:w-[50%] space-y-5">
          {ourWaysInfo?.map((way: any, i: number) => (
            <div
              key={way?._id}
              className="relative p-[2px] shadow-md hover:shadow-lg rounded-2xl bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755]"
            >
              <div className="flex gap-5 items-center justify-center bg-white p-3 rounded-2xl">
                <div className="bg-[#103248] w-20 h-20 rounded-full flex items-center justify-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755] text-transparent bg-clip-text">
                    {i + 1}
                  </p>
                </div>
                <div className="w-[80%]">
                  <h1 className="text-2xl font-bold my-3">{way?.title}</h1>
                  <p className="text-gray-600">
                    <span className="line-clamp-2">{way?.description}</span>
                    <Link href="/our-way">
                      <span className="text-blue-700 underline cursor-pointer">
                        See More
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
