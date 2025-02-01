import FeaturesHighlight from '@/components/FeaturesHighlight';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const FloQast: Project = {
  title: 'FloQast',
  shortDescription: 'An accountancy system to speed up processes',
  thumbnail: '/projects/floqast.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        FloQast is a tool that helps accounting teams stay organized and close their books faster.
        It works with other accounting systems to make tracking tasks and checking numbers easier.
      </p>
      <p>
        With FloQast, teams can see their progress in real time, get reminders, and quickly spot any
        mistakes. It also helps people work together by assigning tasks and keeping everything on
        track.
      </p>
      <p>
        The platform is always improving with updates and new features to make accounting work
        smoother and more efficient.
      </p>
      <p>
        <a href="https://floqast.com/" target="_blank">
          <span style={{ textDecoration: 'underline' }}>Here</span>
        </a>{' '}
        you can find out more information about <strong>FloQast</strong>.
      </p>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight
        items={[
          'Built and tested React components for the internal design system (Flow UI)',
          'Integrated React components into new features in micro frontend projects, ensuring seamless scalability and maintainability',
          'Fixed some production bugs',
          'Expanded testing coverage for higher code reliability',
        ]}
      />
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList color={'secondary'} techs={['JavaScript', 'React', 'Redux', 'Radix UI']} />
    </div>
  ),
};
