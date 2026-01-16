"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="w-full bg-gray-100 mt-3 h-[45vh] rounded-lg overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="h-full relative">
            <Image
              src="/1.webp"
              alt="banner image"
              fill
              className="w-full"
              priority
            />
          </SwiperSlide>
          <SwiperSlide className="h-full relative">
            <Image
              src="/2.webp"
              alt="banner image"
              fill
              className="w-full"
              priority
            />
          </SwiperSlide>
          <SwiperSlide className="h-full relative">
            <Image
              src="/3.webp"
              alt="banner image"
              fill
              className="w-full"
              priority
            />
          </SwiperSlide>
          <SwiperSlide className="h-full relative">
            <Image
              src="/4.png"
              alt="banner image"
              fill
              className="w-full"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
