"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  { src: "/images/slide-1.jpg", alt: "Slide 1" },
  { src: "/images/slide-2.jpg", alt: "Slide 2" },
  { src: "/images/slide-3.jpg", alt: "Slide 3" },
];

export default function ImageSlide() {
  return (
    <div className="relative w-full h-[300px] sm:h-[800px] overflow-hidden">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: white;"></span>`;
          },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex-shrink-0 w-full h-full relative"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
