"use client";

import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import Section from "@/components/Section";
import { enotecaMundi } from "@/data/projects";
import ExpandableCard from "@/components/ExpandableCard";
import Button from "@/components/Button";
import { FaChevronUp } from "react-icons/fa6";

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const color = "primary" as "primary" | "secondary";

  return (
    <Section
      disablePaddingX
      containerClassName="flex flex-col gap-6"
      id="projects"
      color={color}
    >
      <h2 className="px-content text-center text-4xl font-bold text-text-secondary">
        Projects
      </h2>
      <p className="mx-auto max-w-lg px-content text-center text-base font-medium text-text-secondary">
        On the past few years, I've contributed to many different projects
        including: websites, administration systems, web, mobile and TV apps.
        You can check below the most relevant projects I've worked on and visit
        it for more details
      </p>
      <Carousel
        color={color === "primary" ? "secondary" : "primary"}
        onClick={() => setExpanded(!expanded)}
      />
      <ExpandableCard expanded={expanded}>
        <div className="flex flex-col gap-2 px-content">
          <h2 className="text-3xl font-bold">{enotecaMundi.title}</h2>
          {enotecaMundi.text}
          <Button
            label="Close"
            color="secondary"
            variant="text"
            className="ml-auto w-max"
            icon={<FaChevronUp />}
            onClick={() => setExpanded(false)}
          />
        </div>
      </ExpandableCard>
    </Section>
  );
};

export default Projects;
