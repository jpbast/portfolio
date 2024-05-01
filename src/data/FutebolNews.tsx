import FeaturesHighlight from '@/components/FeaturesHighlight';
import Strong from '@/components/Strong';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const FutebolNews: Project = {
  title: 'Futebol News',
  shortDescription: 'A mobile app for following brazilian football teams',
  thumbnail: '/projects/futebol-news.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        On this app, you can select one or multiple brazilian football teams in order to follow
        their news. For handling this entire project, we built three apps:
      </p>
      <ul className="my-3 flex flex-1 flex-col gap-3" style={{ paddingLeft: 30 }}>
        <li>
          <Strong>Mobile App: </Strong>
          you can pick your favorite teams and follow their news. User is notified whenever new news
          arrives.{' '}
          <a
            href="https://play.google.com/store/apps/details?id=com.futebolnews.futebolnews"
            style={{ textDecoration: 'underline' }}
          >
            Here
          </a>{' '}
          you can download it.
        </li>
        <li>
          <Strong>Website: </Strong>a simple website with a few information just for introducing the
          app.{' '}
          <a href="https://www.futebolnews.app/" style={{ textDecoration: 'underline' }}>
            Here
          </a>{' '}
          you can check it.
        </li>
        <li>
          <Strong>Admin panel: </Strong>
          handle users, news and teams. Everything related to the app is managed here.
        </li>
      </ul>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight
        items={[
          'Built the app layout',
          'Developed some components on the App and the Admin',
          'Fixed performance issues on the App',
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
          'Node.js',
          'Firebase',
          'Styled Components',
          'HubSpot',
          'Google Analytics',
        ]}
      />
    </div>
  ),
};
