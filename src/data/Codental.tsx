import FeaturesHighlight from '@/components/FeaturesHighlight';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const Codental: Project = {
  title: 'Codental',
  shortDescription: 'A platform for creating orthodontic clinics websites',
  thumbnail: '/projects/codental.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        Codental is a Brazilian company that provides software for managing orthodontic clinics.
        This project was built for them so their partners can create custom websites for their own
        clinics.
      </p>
      <p>
        About the project, it was built with React and Next.js. To populate the website, we consume
        the Codental Rest API. This same project is responsible for displaying the clinic website
        and for managing the website content. For achieving it, the app has basically 2 pages: the
        home page and the edit page.
      </p>
      <p>
        The home page is where the users will have access. It’s static and public. The edit page is
        where the clinic adds all their content, and they can choose which sessions will be visible
        or not. The sessions are limited and fixed: you can only hide them or not and change the
        content inside them. This is not so dynamic and customizable, but it was one of the
        requirements from Codental.
      </p>
      <p>
        <a href="https://draleticiasimao.codental.site/" target="_blank">
          <span style={{ textDecoration: 'underline' }} className="underline">
            Here
          </span>
        </a>{' '}
        you can check a example for a clinic website.
      </p>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight
        items={[
          'Developed the whole layout for rendering the dynamic content',
          'Developed the forms for creating and editing content',
          'Created the data structure for managing the API data',
          'Tech leader',
        ]}
      />
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList
        color={'secondary'}
        techs={['TypeScript', 'React', 'Next.js', 'Node.js', 'Styled Components']}
      />
    </div>
  ),
};
