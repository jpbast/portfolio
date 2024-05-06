import FeaturesHighlight from '@/components/FeaturesHighlight';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const Roadmap: Project = {
  title: 'Roadmap',
  shortDescription: 'A platform for managing your team skills',
  thumbnail: '/projects/roadmap.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        This is a internal project developed by App Masters. For now, this platform is just being
        used inside the company but the main ideia is to expand it on the future and offer it to
        other companies.
      </p>
      <p>
        About the project, you can create your own organization page and register as many knowledge
        you want. A knowledge can be anything: a tool, a technology like React, or anything else.
        Then, you can add a content for this knowledge explaining what it is and what is the most
        important about it.
      </p>
      <p>
        Furthermore, you can create studying paths and attach these knowledge to it. You can also
        add users to it and them can select what's their level about it after studying it.
      </p>
      <p>
        The main goal with this platform is to keep a record about what your team knows or not and
        what they should improve in order to work on the projects.
      </p>
      <p>
        The public page is available so you can check it{' '}
        <a href="https://learningroadmap.io/" target="_blank">
          <span style={{ textDecoration: 'underline' }} className="underline">
            here
          </span>
        </a>{' '}
        for more information.
      </p>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight items={['Built the knowledge tree system', 'Developed some components']} />
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList
        color={'secondary'}
        techs={[
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'Prisma',
          'GraphQL',
          'Styled Components',
          'Tech leader',
        ]}
      />
    </div>
  ),
};
