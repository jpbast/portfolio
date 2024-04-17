"use client";

import Image from "next/image";
import React from "react";

type TextWithSideImgProps = {
  images: string[];
  reverse?: boolean;
  text: JSX.Element;
  title: string;
  textVariant?: "primary" | "secondary";
  keepLastImg?: boolean;
};

const imgWidth = 300;
const imgHeight = (imgWidth * 4) / 5;

const TextWithSideImg: React.FC<TextWithSideImgProps> = ({
  images,
  title,
  reverse,
  text,
  keepLastImg,
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-10 ${reverse ? "flex-row-reverse" : ""} max-[930px]:flex-col`}
    >
      <div
        className="relative aspect-[5_/_4] w-full max-[500px]:!mr-0 max-[500px]:!mt-0 max-[500px]:!max-w-none"
        style={{
          maxWidth: imgWidth,
          marginTop: imgWidth / 2,
          marginRight: imgWidth / 2,
        }}
      >
        <Image
          src={images[0]}
          alt=""
          className={`left-0 rounded-lg object-cover duration-300 hover:z-20 hover:scale-110 ${keepLastImg ? "max-[500px]:hidden" : "max-[500px]:!top-0"}`}
          style={{ top: -imgWidth / 2 }}
          fill
          sizes={`(max-width: 500px) 100vw, ${imgWidth}px`}
        />
        <Image
          src={images[1]}
          alt=""
          fill
          sizes={`(max-width: 500px) 100vw, ${imgWidth}px`}
          className={`z-10 translate-x-1/2 rounded-lg object-cover duration-300 hover:scale-110 ${keepLastImg ? "max-[500px]:top-0 max-[500px]:translate-x-0" : "max-[500px]:hidden"}`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <h2 className="text-4xl font-bold">{title}</h2>
        {text}
      </div>
    </div>
  );
};

export default TextWithSideImg;
