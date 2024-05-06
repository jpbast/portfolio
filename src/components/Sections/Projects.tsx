'use client';

import React, { useState } from 'react';
import Carousel from '@/components/Carousel';
import Section from '@/components/Section';
import { projects } from '@/data/projects';
import ExpandableCard from '@/components/ExpandableCard';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { navigateToId } from '@/utils/navigation';

const Projects: React.FC = () => {
  const [project, setProject] = useState<ProjectCardProps | null>(null);
  const [expanded, setExpanded] = useState(false);

  const color = 'primary' as 'primary' | 'secondary';

  return (
    <Section
      disablePaddingX
      disableMaxWidth
      containerClassName="flex flex-col gap-6"
      id="projects"
      color={color}
    >
      <h2 className="px-content text-center text-4xl font-bold text-text-secondary">Projects</h2>
      <p className="mx-auto max-w-3xl px-content text-center text-base font-medium text-text-secondary">
        On the past few years, I've contributed to many different projects including: websites,
        administration systems, web, mobile and TV apps. You can check below the most relevant
        projects I've worked on.
      </p>
      <Carousel
        color={color === 'primary' ? 'secondary' : 'primary'}
        data={projects as ProjectCardProps[]}
        renderItem={(props) => (
          <ProjectCard
            {...props}
            key={props.index}
            data={{
              ...props.data,
              onClick: () => {
                setProject(props.data);
                setExpanded(true);
                navigateToId('projects', false, 560);
              },
            }}
          />
        )}
      />
      <ExpandableCard
        expanded={expanded}
        trigger={project?.title}
        onClose={() => {
          setExpanded(false);
          navigateToId('projects');
        }}
      >
        <div className="mx-auto mt-5 flex max-w-content flex-col gap-2">
          <h2 className="text-3xl font-bold">{project?.title}</h2>
          {project?.text}
        </div>
      </ExpandableCard>
    </Section>
  );
};

export default Projects;
