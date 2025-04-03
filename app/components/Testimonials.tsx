"use client";

import TestimonialCard from "./TestimonialCard";
import { useRef } from "react";

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //increase the multiplication number to adjust the scrolling speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const mouseUpHandler = () => {
      isDown = false;
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      window.removeEventListener("mouseleave", mouseUpHandler);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);
    window.addEventListener("mouseleave", mouseUpHandler);
  };

  return (
    <div className="relative py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 md:mb-24 px-8 text-center">Apa kata mereka?</h1>
      <div
        className="flex px-10 overflow-x-auto space-x-10 no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        ref={sliderRef}
      >
        <TestimonialCard
          imageSrc="/images/person-1.webp"
          name="Sahrul Hidayat"
          profession="Mahasiswa UBS PPNI Mojokerto"
          testimonial="Terima kasih kepada BAZNAS Kabupaten Mojokerto yang telah memberikan bantuan beasiswa kepada kami. Semoga BAZNAS Kabupaten Mojokerto semakin sukses dan semakin banyak masyarakat yang menyalurkan sedekah, infaq, dan zakatnya melalui BAZNAS."
        />
        <TestimonialCard
          imageSrc="/images/person-1.webp"
          name="Sahrul Hidayat"
          profession="Mahasiswa UBS PPNI"
          testimonial="Ini adalah testimoni saya"
        />
        <TestimonialCard
          imageSrc="/images/person-1.webp"
          name="Sahrul Hidayat"
          profession="Mahasiswa UBS PPNI"
          testimonial="Ini adalah testimoni saya"
        />
        <TestimonialCard
          imageSrc="/images/person-1.webp"
          name="Sahrul Hidayat"
          profession="Mahasiswa UBS PPNI"
          testimonial="Ini adalah testimoni saya"
        />
      </div>
    </div>
  );
};

export default Testimonials;
