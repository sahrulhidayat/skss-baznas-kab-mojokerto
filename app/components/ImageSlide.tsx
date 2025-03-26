"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSlide() {
  const slides = [
    { src: "/images/slide-1.jpg", alt: "Slide 1" },
    { src: "/images/slide-2.jpg", alt: "Slide 2" },
    { src: "/images/slide-3.jpg", alt: "Slide 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-[500px] sm:h-[800px] overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[500px] sm:h-[800px] relative"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center h-full w-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center pb-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-6 h-1 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
