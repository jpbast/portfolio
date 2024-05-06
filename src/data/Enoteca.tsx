import FeaturesHighlight from '@/components/FeaturesHighlight';
import Strong from '@/components/Strong';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const Enoteca: Project = {
  title: 'Enoteca Mundi',
  shortDescription: 'A mobile app for teaching and entertainment about the world of wine',
  thumbnail: '/projects/enoteca.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        This is a mobile app built for teaching and entertainment about wine made for the Enoteca
        Mundi team. In addition to the mobile app, we also developed other projects. Below you check
        more information about each one:
      </p>
      <ul className="my-3 flex flex-1 flex-col gap-3" style={{ paddingLeft: 30 }}>
        <li>
          <Strong>Mobile App: </Strong>
          here you can watch all the videos, download e-books, create events, and share them with
          other people. It also has a really custom formulary where you can fill in information
          about wine tasting and check all the wine establishments registered in the system, on a
          screen that integrates with Google Maps. This app works with subscription so some features
          are free and some are not.
        </li>
        <li>
          <Strong>Smart TV app: </Strong>
          this app is focused in the video content only. It has the same videos as the mobile app,
          but organized in a different way for improving the experience on the TV. It's only
          available for the subscribers users.
        </li>
        <li>
          <Strong>Website: </Strong>a public website where you can find every information about
          Enoteca Mundi. You can check it{' '}
          <a href="https://enoteca-mundi.vercel.app/" style={{ textDecoration: 'underline' }}>
            here
          </a>
        </li>
        <li>
          <Strong>Admin panel: </Strong>
          built for managing all the apps and website content, including users, blog posts, videos,
          e-books, events, subscriptions, wine establishments and so on.
        </li>
      </ul>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight
        items={[
          'The custom formulary for recording the wine tasting',
          'The screens, layout, and components base architecture',
          'The research and development of all the structures for the Smart TV app, taking into consideration it should be built for different platforms (Android TV, Tizen, and WebOS) from the same project.',
          'Tech leader',
        ]}
      />
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList
        color={'secondary'}
        techs={[
          'TypeScript',
          'React',
          'React Native',
          'Next.js',
          'Firebase',
          'Node.js',
          'Firebase',
          'Styled Components',
        ]}
      />
    </div>
  ),
};
