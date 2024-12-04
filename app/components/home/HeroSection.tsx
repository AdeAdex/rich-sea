"use client";

import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import heroImage1 from "@/public/images/hero.png";
import heroImage2 from "@/public/images/hero.png";
import heroImage3 from "@/public/images/hero.png";
import heroImage4 from "@/public/images/hero.png";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const HeroSection = () => {
  const autoplay = useRef(Autoplay({ delay: 10000 }));

  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  return (
    <div className="">
      <Carousel
        withIndicators
        height={200}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        dragFree
        nextControlIcon={<FaChevronRight size={20} />}
        previousControlIcon={<FaChevronLeft size={20} />}
      >
        {heroImages.map((image, index) => (
          <Carousel.Slide key={index}>
            <Image
              src={image}
              alt={`Hero Image ${index + 1}`}
              layout="responsive"
              width={1920} // Example dimensions, adjust as needed
              height={1080}
              className="rounded-lg object-cover"
              priority // Ensures fast loading for hero images
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
