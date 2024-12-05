"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import heroImage1 from "@/public/images/hero.png";
import heroImage2 from "@/public/images/hero.png";
import heroImage3 from "@/public/images/hero.png";
import heroImage4 from "@/public/images/hero.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


const HeroSection = () => {
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const handleIndicatorClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-xl">
      {/* Sliding Animation */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ x: direction === 1 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction === 1 ? "-100%" : "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-[95%]"
        >
          <Image
            src={heroImages[currentIndex]}
            alt={`Hero Image ${currentIndex + 1}`}
            className="object-cover w-full h-full rounded-xl"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-800"
        onClick={handlePrev}
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-800"
        onClick={handleNext}
      >
        <FaChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-1  ${
              index === currentIndex ? "bg-rich-sea-sky" : "bg-gray-500"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
