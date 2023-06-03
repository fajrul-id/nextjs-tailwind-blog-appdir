"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import FeaturedPostCard from "./FeaturedPostCard";
import { Posts } from "@/data/dummy";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [loaded, setLoaded] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const [ref] = useKeenSlider<HTMLDivElement>(
    
    {
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 5, spacing: 10 },
        },
      },
      slides: { perView: 1 },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={ref} className="keen-slider">
        {Posts.map((post, index) => (
          <div key={index} className="keen-slider__slide">
            <FeaturedPostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedPosts;
