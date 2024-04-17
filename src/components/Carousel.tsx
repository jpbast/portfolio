"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/styles.css";
import { FaChevronRight } from "react-icons/fa";
import Button from "@/components/Button";

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

type CarouselItem = {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
};

const Item: React.FC<CarouselItem> = ({
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="transition-scale group flex h-[400px] w-full px-5 py-3 duration-300 hover:scale-105 max-[600px]:px-content">
      <div className="relative flex cursor-pointer flex-col justify-end overflow-hidden rounded-xl p-5 shadow-project-card">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(max-width: 600px) 100vw, 470px"
          className="-z-10 h-full w-full object-cover"
        />
        <h2 className="mb-1 text-2xl font-bold">{title}</h2>
        <p className="text-base">{description}</p>
        <button
          className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center gap-2 bg-[#000000c0] opacity-0 transition-all duration-300 group-hover:opacity-100"
          onClick={onClick}
        >
          <FaChevronDown />
          Click here for more details
        </button>
      </div>
    </div>
  );
};

type CarouselProps = {
  color?: "primary" | "secondary";
  onClick: () => void;
};

const Carousel: React.FC<CarouselProps> = ({ color = "primary", onClick }) => {
  const sliderRef = useRef<Slider | null>(null);

  const data = [
    ...Array(6)
      .fill(0)
      .map(() => ({
        imageUrl: "/hero.png",
        title: "This is the title",
        description:
          "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum",
      })),
  ];

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
        {data.map((d) => (
          <Item key={d.title} onClick={onClick} {...d} />
        ))}
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
};

export default Carousel;
