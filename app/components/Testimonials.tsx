"use client";

import TestimonialCard from "./TestimonialCard";
import { useRef } from "react";

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //increase the multiplication number to adjust the scrolling speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const mouseUpHandler = () => {
      isDown = false;
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
      window.removeEventListener('mouseleave', mouseUpHandler);
    };

    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', mouseUpHandler);
    window.addEventListener('mouseleave', mouseUpHandler);
  };

  return (
    <div
      className="flex px-10 overflow-x-auto space-x-10 no-scrollbar cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      ref={sliderRef}
    >
      <TestimonialCard
        imageSrc="/images/person-1.jpg"
        name="Sahrul Hidayat"
        profession="Mahasiswa UBS PPNI Mojokerto"
        testimonial="Saya sangat senang dengan layanan yang diberikan oleh SKSS BAZNAS Kabupaten Mojokerto. Terima kasih banyak!. Saya sangat senang dengan layanan yang diberikan oleh SKSS BAZNAS Kabupaten Mojokerto. Terima kasih banyak!"
      />
      <TestimonialCard
        imageSrc="/images/person-1.jpg"
        name="Sahrul Hidayat"
        profession="Mahasiswa UBS PPNI"
        testimonial="Ini adalah testimoni saya"
      />
      <TestimonialCard
        imageSrc="/images/person-1.jpg"
        name="Sahrul Hidayat"
        profession="Mahasiswa UBS PPNI"
        testimonial="Ini adalah testimoni saya"
      />
      <TestimonialCard
        imageSrc="/images/person-1.jpg"
        name="Sahrul Hidayat"
        profession="Mahasiswa UBS PPNI"
        testimonial="Ini adalah testimoni saya"
      />
    </div>
  );
};

export default Testimonials;