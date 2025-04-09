"use client";

import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="relative py-12 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Apa kata mereka?
      </h1>
      <div className="relative max-7xl px-8 py-6 md:py-12 object-center">
        <Swiper
          spaceBetween={30}
          pagination={{
            el: ".custom-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background-color: #50C878;"></span>`;
            },
          }}
          modules={[Pagination]}
          className="w-full max-w-7xl"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className="flex justify-center">
            <TestimonialCard
              imageSrc="/images/person-1.webp"
              name="Sahrul Hidayat"
              profession="Mahasiswa UBS PPNI Mojokerto"
              testimonial="Terima kasih kepada BAZNAS Kabupaten Mojokerto yang telah memberikan bantuan beasiswa kepada kami. Semoga BAZNAS Kabupaten Mojokerto semakin sukses dan semakin banyak masyarakat yang menyalurkan sedekah, infaq, dan zakatnya melalui BAZNAS."
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TestimonialCard
              imageSrc="/images/person-1.webp"
              name="Sahrul Hidayat"
              profession="Mahasiswa UBS PPNI"
              testimonial="Ini adalah testimoni saya"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TestimonialCard
              imageSrc="/images/person-1.webp"
              name="Sahrul Hidayat"
              profession="Mahasiswa UBS PPNI"
              testimonial="Ini adalah testimoni saya"
            />
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center space-x-2 items-center mx-auto"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600 to-white opacity-30"></div>
    </div>
  );
};

export default Testimonials;
