import FeaturesHighlight from '@/components/FeaturesHighlight';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const AppMastersWebsite: Project = {
  title: 'App Masters Website',
  shortDescription: 'App Masters public website',
  thumbnail: '/projects/appmasters-website.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        This is the App Masters website. It's a dynamic website built on top of Next.js and Strapi
        CMS.
      </p>
      <p>
        The first version of this project was built with Gatsby and Netlify. The website itself was
        fine but the development experience wasn't great and we couldn't build dynamic pages the way
        we wanted through the Netlify. So we decided to rebuild it with Next.js and Strapi.
      </p>
      <p>
        In the Strapi admin, we can create whatever page we want. It is possible thankfully to the
        Strapi <strong>Dynamic Zones</strong>. We have set some components on Strapi and on frontend
        side as well, so every component we add on a Dynamic Zone, we have its equivalent on the
        frontend to be rendered. We have a large list of components and you can basically create a
        new page choosing the components you want within the list.
      </p>
      <p>
        The website is public and available, so you can check it{' '}
        <a href="https://appmasters.io/en" target="_blank">
          <span style={{ textDecoration: 'underline' }} className="underline">
            here
          </span>
        </a>{' '}
        for more information.
      </p>
      <h3 className="mt-3 text-xl font-bold">Features highlight and responsabilities</h3>
      <FeaturesHighlight
        items={[
          'Rebuilt the entire project replacing Gatsby with Next.js and Netlify with Strapi',
          'Handled both SEO and performance improvements with Next.js static pages',
          'Improved cache layer in order to reduce costs and database access, using the Next.js Incremental Static Regeneration (ISR)',
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
