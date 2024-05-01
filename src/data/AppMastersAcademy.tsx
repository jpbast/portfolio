import FeaturesHighlight from '@/components/FeaturesHighlight';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const AppMastersAcademy: Project = {
  title: 'App Masters Academy',
  shortDescription: 'Web and mobile development courses platform offered by App Masters',
  thumbnail: '/projects/appmasters-academy.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>This project is a courses platform offered by App Masters' team</p>
      <p>
        The website is built on top of Next.js and Strapi CMS. This project is very close to the App
        Masters Website and both consume the same Strapi API.
      </p>
      <p>
        The website is public and available, so you can check it{' '}
        <a href="https://academy.appmasters.io" target="_blank">
          <span style={{ textDecoration: 'underline' }} className="underline">
            here
          </span>
        </a>{' '}
        for more information.
      </p>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight
        items={[
          'Integrated it with Strapi',
          'Created the base layout',
          'Improved performance and SEO issues',
          'Tech leader',
        ]}
      />
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList
        color={'secondary'}
        techs={[
          'TypeScript',
          'React',
          'Next.js',
          'Strapi',
          'Node.js',
          'GraphQL',
          'Styled Components',
          'HubSpot',
          'Google Analytics',
        ]}
      />
    </div>
  ),
};
