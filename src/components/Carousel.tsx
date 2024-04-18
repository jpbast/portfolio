"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/styles.css";
import { FaChevronRight } from "react-icons/fa";

type SlideButtonProps = {
  position: "left" | "right";
  onClick: () => void;
};

const SlideButton: React.FC<SlideButtonProps> = ({ position, onClick }) => {
  const isLeft = position === "left";

  return (
    <button
      onClick={onClick}
      className={`absolute bottom-3 top-3 z-20 flex items-center justify-center bg-[#000000b0] p-2 opacity-0 transition-all hover:opacity-100 ${isLeft ? "left-0" : "right-0"} text-text-secondary`}
    >
      {isLeft ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
    </button>
  );
};

export type CarouselItemArgs<T> = { data: T; index: number };

type CarouselProps<T> = {
  renderItem: ({ data, index }: CarouselItemArgs<T>) => React.ReactNode;
  data: T[];
  color?: "primary" | "secondary";
};

function Carousel<T>({
  color = "primary",
  renderItem,
  data,
}: CarouselProps<T>) {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: () => {
      return (
        <div
          className={`pointer-events-none mt-3 h-2 w-2 rounded-full opacity-30 ${color === "primary" ? "bg-text-primary" : "bg-text-secondary"}`}
        />
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {data.map((d, index) => renderItem({ data: d, index }))}
      </Slider>
      <SlideButton
        position="left"
        onClick={() => sliderRef?.current?.slickPrev()}
      />
      <SlideButton
        position="right"
        onClick={() => sliderRef?.current?.slickNext()}
      />
    </div>
  );
}

export default Carousel;
