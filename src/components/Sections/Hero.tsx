"use client";

import Section from "@/components/Section";
import useNavigationToElement from "@/hooks/useNavigationToElement";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  useNavigationToElement();

  return (
    <Section
      isFullHeight
      isMobileFullHeight
      backgroundImage="/hero.png"
      containerClassName="flex h-full items-center justify-center gap-10 max-[700px]:flex-col-reverse max-[700px]:gap-6"
      id="home"
    >
      <div className="flex flex-col">
        <h1 className="flex max-w-[500px] flex-1 flex-col gap-1 max-[700px]:text-center">
          <span className="text-xl font-semibold max-[700px]:text-lg">
            Hello there, I am
          </span>
          <strong className="text-5xl text-yellow-200 max-[700px]:text-4xl">
            João Bast
          </strong>
          <span className="text-3xl font-semibold max-[700px]:text-2xl">
            Frontend Developer highly experienced in building JavaScript web and
            mobile apps
          </span>
        </h1>
      </div>
      <Image
        src="/profile.png"
        alt="João's picture"
        width={220}
        height={220}
        className="rounded-full bg-primary"
      />
    </Section>
  );
};

export default Hero;
