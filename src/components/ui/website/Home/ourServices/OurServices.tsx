"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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
import { useGetAllServicesQuery } from "@/redux/apiSlices/serviceSlice";
import { Spin } from "antd";
import { getImageUrl } from "@/utils/getImageUrl";

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
  const { data: services, isLoading } = useGetAllServicesQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const allServices = services?.data;
  // console.log(allServices);

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
              {allServices?.map((slide: any) => (
                <SwiperSlide key={slide?._id}>
                  <div>
                    <Image
                      src={getImageUrl(slide?.image)}
                      alt="SliderImage"
                      width={50000}
                      height={50000}
                      className="!h-[400px] w-full object-cover rounded-2xl shadow-lg shadow-[#032237]"
                    />
                    <div className="text-start pb-6 my-5">
                      <h1 className="text-2xl font-bold">{slide.title}</h1>
                      <ul className="list-disc line-clamp-3 pl-10 my-2">
                        {slide?.description}
                      </ul>
                      <Link href={`/services/${slide?._id}`}>
                        <p className="text-blue-700 underline font-semibold text-end text-xl">
                          See More
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
