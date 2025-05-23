"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useGetReviewsQuery } from "@/redux/apiSlices/ourWaySlice";
import { Spin } from "antd";
import { getImageUrl } from "@/utils/getImageUrl";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button
        onClick={() => swiper.slidePrev()}
        className="opacity-30 hover:opacity-100 absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-gradientBg p-2 md:p-2 rounded-full shadow-lg"
      >
        <GrFormPreviousLink size={40} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="opacity-30 hover:opacity-100 absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-gradientBg p-2 md:p-2 rounded-full shadow-lg"
      >
        <GrFormNextLink size={40} />
      </button>
    </div>
  );
};

const WhatClientsSay = () => {
  const { data: reviews, isLoading } = useGetReviewsQuery(undefined);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );

  const allReviews = reviews?.data;

  // //console.log(allReviews);

  return (
    <div className="container md:py-20">
      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none !important;
        }
      `}</style>
      <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-0">
        What Clients Say
      </h1>
      <div className="relative mt-10">
        <div className="px-7">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperNavButtons />
            {allReviews?.map((review: any) => (
              <SwiperSlide key={review?._id} className="h-auto">
                <div className="relative h-[350px]  p-[2px] hover:shadow-xl rounded-lg bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755]">
                  <div className="bg-white hover:text-white hover:bg-[#032237] p-5 rounded-lg flex flex-col h-full">
                    <div className="flex items-center border-b-2 pb-2 gap-3">
                      <div className="w-20 h-20 rounded-full">
                        <Image
                          src={getImageUrl(review?.image)}
                          width={46456456}
                          height={46456456}
                          alt={review?.name}
                          className="w-20 h-20 rounded-full"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">
                          {review?.name}
                        </h2>
                        <p className="text-sm">{review?.industry}</p>
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-start">
                      {review?.title}
                    </h3>
                    <p className="text-sm text-start mt-2 flex-grow overflow-y-auto">
                      {review?.review}
                    </p>
                    <div className="flex mt-3">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={
                            index < review?.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhatClientsSay;
