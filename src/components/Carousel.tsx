"use client";

import Image from "next/image";
import React, { ReactNode, useRef } from "react";
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
      className={`absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-secondary p-2 transition-all duration-300 hover:brightness-75 ${isLeft ? "-left-3 max-[1300px]:left-[calc(50%_-_50px)]" : "-right-3 max-[1300px]:right-[calc(50%_-_50px)]"} max-[1300px]:top-[100%] max-[1300px]:transform-none max-[600px]:hidden`}
    >
      {isLeft ? (
        <FaChevronLeft size={24} color="#402255" />
      ) : (
        <FaChevronRight size={24} color="#402255" />
      )}
    </button>
  );
};

type CarouselItem = {
  title: string;
  description: string;
  imageUrl: string;
};

const Item: React.FC<CarouselItem> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex h-[400px] w-full p-5 transition-all duration-300 hover:scale-105 max-[600px]:px-content">
      <div className="shadow-project-card relative flex cursor-pointer flex-col justify-end overflow-hidden rounded-xl p-4">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="-z-10 h-full w-full object-cover"
        />
        <h2 className="mb-1 text-2xl font-bold">{title}</h2>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

type CarouselProps = {};

const Carousel: React.FC<CarouselProps> = (props) => {
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
    dots: false,
    infinite: true,
    arrows: false,
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
          dots: true,
          customPaging: () => {
            return (
              <div className="pointer-events-none mt-1 h-2 w-2 rounded-full bg-secondary opacity-30" />
            );
          },
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {data.map((d) => (
          <Item key={d.title} {...d} />
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
