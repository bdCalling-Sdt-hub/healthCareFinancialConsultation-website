"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import randomImage from "@/assets/randomProfile3.jpg";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const testimonials = [
  {
    id: 1,
    name: "James Mik",
    role: "Customer",
    title: "Very Oriented",
    review:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: randomImage,
    rating: 5,
  },
  {
    id: 2,
    name: "James Mik",
    role: "Customer",
    title: "Very Oriented",
    review:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: randomImage,
    rating: 5,
  },
  {
    id: 3,
    name: "James Mik",
    role: "Customer",
    title: "Very Oriented",
    review:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: randomImage,
    rating: 5,
  },
  {
    id: 4,
    name: "James Mik",
    role: "Customer",
    title: "Very Oriented",
    review:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: randomImage,
    rating: 5,
  },
  {
    id: 5,
    name: "James Mik",
    role: "Customer",
    title: "Very Oriented",
    review:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: randomImage,
    rating: 5,
  },
];

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
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="relative p-[2px] hover:shadow-xl rounded-lg bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755]">
                  <div className="bg-white hover:text-white hover:bg-[#032237] dark:bg-gray-900 p-5 rounded-lg">
                    <div className="flex items-center border-b-2 pb-2 gap-3">
                      <div className="w-20 h-20 rounded-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">
                          {testimonial.name}
                        </h2>
                        <p className="text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-start">
                      {testimonial.title}
                    </h3>
                    <p className="text-sm text-start mt-2">
                      {testimonial.review}
                    </p>
                    <div className="flex mt-3">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} className="text-yellow-500">
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
