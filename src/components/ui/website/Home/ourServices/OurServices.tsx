"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import sliderImage1 from "@/assets/image (9).png";
import sliderImage2 from "@/assets/image (10).png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles

import "./styles.css";

// Import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Link from "next/link";

const sliderData = [
  {
    image: sliderImage1,
    title: "Cost Reduction Strategies",
    description: [
      "Operational efficiency assessments.",
      "Workflow Optimization",
    ],
    seeMoreText: "See More",
  },
  {
    image: sliderImage2,
    title: "Revenue Cycle Management Optimization",
    description: [
      "Assessment and improvement of billing and collections processes.",
      "Recommendations to reduce denied claims and improve cash flow.",
    ],
    seeMoreText: "See More",
  },
  {
    image: sliderImage1,
    title: "Cost Reduction Strategies",
    description: [
      "Operational efficiency assessments.",
      "Workflow Optimization",
    ],
    seeMoreText: "See More",
  },
  {
    image: sliderImage2,
    title: "Revenue Cycle Management Optimization",
    description: [
      "Assessment and improvement of billing and collections processes.",
      "Recommendations to reduce denied claims and improve cash flow.",
    ],
    seeMoreText: "See More",
  },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button
        onClick={() => swiper.slidePrev()}
        className="opacity-30 hover:opacity-100 absolute left-0 top-1/3 z-10 transform -translate-y-1/2 bg-gradientBg p-2 md:p-2 rounded-full shadow-lg"
      >
        <GrFormPreviousLink size={40} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="opacity-30 hover:opacity-100 absolute right-0 top-1/3 z-10 transform -translate-y-1/2 bg-gradientBg p-2 md:p-2 rounded-full shadow-lg"
      >
        <GrFormNextLink size={40} />
      </button>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="container">
      <div className="mb-20">
        <h1 className="text-3xl0 md:text-5xl font-bold mb-5 md:ml-5">
          Our Services
        </h1>
        <div className="relative">
          <div className="px-7">
            <Swiper
              slidesPerView={1} // Default to 1 slide on mobile
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2, // Show 2 slides on screens >= 640px (tablets and above)
                },
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperNavButtons />
              {sliderData?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <Image
                      src={slide.image}
                      alt="SliderImage"
                      width={50000}
                      height={50000}
                    />
                    <div className="text-start my-5">
                      <h1 className="text-2xl font-bold">{slide.title}</h1>
                      <ul className="list-disc pl-10 my-2">
                        {slide?.description?.slice(0, 1)?.map((item, idx) => (
                          <li className="text-[16px]" key={idx}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link href={"/services/1"}>
                        <p className="text-blue-700 underline text-end text-xl">
                          {slide.seeMoreText}
                        </p>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
