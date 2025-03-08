"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage1 from "@/assets/image (9).png";
import sliderImage2 from "@/assets/image (10).png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="container ">
      <div className="mb-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-0">
          Our Services
        </h1>
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="p-5">
                <Image
                  src={sliderImage1}
                  alt="SliderImage"
                  width={50000}
                  height={50000}
                />
                <div className="text-start my-5">
                  <h1 className="text-2xl font-semibold">
                    Cost Reduction Strategies
                  </h1>
                  <ul className="list-disc pl-10 my-2">
                    <li>Operational efficiency assessments.</li>
                    <li>Workflow Optimization</li>
                  </ul>
                  <p className="text-blue-700 underline text-end text-xl">
                    See More
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5">
                <Image
                  src={sliderImage2}
                  alt="SliderImage"
                  width={50000}
                  height={50000}
                />
                <div className="text-start my-5">
                  <h1 className="text-2xl font-semibold">
                    Revenue Cycle Management Optimization{" "}
                  </h1>
                  <ul className="list-disc pl-10 my-2">
                    <li>
                      Assessment and improvement of billing and collections
                      processes.
                    </li>
                    <li>
                      Recommendations to reduce denied claims and improve cash
                      flow.{" "}
                    </li>
                  </ul>
                  <p className="text-blue-700 underline text-end text-xl">
                    See More
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5">
                <Image
                  src={sliderImage1}
                  alt="SliderImage"
                  width={50000}
                  height={50000}
                />
                <div className="text-start my-5">
                  <h1 className="text-2xl font-semibold">
                    Cost Reduction Strategies
                  </h1>
                  <ul className="list-disc pl-10 my-2">
                    <li>Operational efficiency assessments.</li>
                    <li>Workflow Optimization</li>
                  </ul>
                  <p className="text-blue-700 underline text-end text-xl">
                    See More
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5">
                <Image
                  src={sliderImage2}
                  alt="SliderImage"
                  width={50000}
                  height={50000}
                />
                <div className="text-start my-5">
                  <h1 className="text-2xl font-semibold">
                    Revenue Cycle Management Optimization{" "}
                  </h1>
                  <ul className="list-disc pl-10 my-2">
                    <li>
                      Assessment and improvement of billing and collections
                      processes.
                    </li>
                    <li>
                      Recommendations to reduce denied claims and improve cash
                      flow.{" "}
                    </li>
                  </ul>
                  <p className="text-blue-700 underline text-end text-xl">
                    See More
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
