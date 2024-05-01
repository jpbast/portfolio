import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa6';
import { CarouselItemArgs } from '@/components/Carousel';
import { Project } from '@/typings/project';
import Button from '@/components/Button';

export type ProjectCardProps = Project & {
  onClick?: () => void;
};

const ProjectCard: React.FC<CarouselItemArgs<ProjectCardProps>> = ({ data }) => {
  const { title, shortDescription, thumbnail, onClick } = data;

  return (
    <div className="transition-scale flex h-[400px] w-full px-5 py-3 duration-300 hover:scale-105 max-[600px]:px-content">
      <div className="group relative flex w-full cursor-pointer flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-t from-black to-[#00000060] p-5">
        <Image
          src={thumbnail}
          alt=""
          fill
          sizes="(max-width: 600px) 100vw, 470px"
          className="-z-10 h-full w-full object-cover"
        />
        <h2 className="mb-1 text-2xl font-bold">{title}</h2>
        <p className="text-base">{shortDescription}</p>
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center gap-2 bg-[#000000e0] opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Button
            color="secondary"
            label="Click here for more details"
            variant="outline"
            icon={<FaChevronDown />}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
