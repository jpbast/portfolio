import FeaturesHighlight from '@/components/FeaturesHighlight';
import Strong from '@/components/Strong';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const Breakout: Project = {
  title: 'Breakout',
  shortDescription: 'A platform for managing and creating professional live events',
  thumbnail: '/projects/breakout.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        This is a white-label system built for presenting scientific events. This whole system is
        made up of 5 apps:
      </p>
      <ul className="my-3 flex flex-1 flex-col gap-3" style={{ paddingLeft: 30 }}>
        <li>
          <Strong>Admin Panel: </Strong>
          the admin user can set everything for the event over here. You can register users, create
          talks, upload videos, check how the live sessions are going, customize the whole theme
          (background, primary and secondary colors, buttons, etc.) and set the pages which your App
          will have with some pre built templates.
        </li>
        <li>
          <Strong>App: </Strong>
          this is the app where the users can follow the events. You can watch the videos and live
          streamings, chat with other users, check the event agenda, schedule conversations with the
          speakers. For the conversations, we developed a dedicated page that works like a Google
          Meeting.
        </li>
        <li>
          <Strong>Backend: </Strong>
          it was built with Node.js and GraphQL.
        </li>
        <li>
          <Strong>Desktop App: </Strong>
          this is an Electron App, and it was built for managing the speaker files before their
          presentations.
        </li>
        <li>
          <Strong>Better Poster: </Strong>a App for creating posters. It consumes the same API, but
          it was built for creating and publishing virtual scientific posters. These posters can
          connect with the main app or be shared standalone.
        </li>
      </ul>
      <p>
        This is a really big project with many different features. You can check more information
        about Breakout{' '}
        <a href="https://www.meetbreakout.com/">
          <span style={{ textDecoration: 'underline' }}>here</span>
        </a>
        .
      </p>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight
        items={[
          'Built the conversation page',
          'Built the live sessions page on the admin',
          'Improved GraphQL performance',
          'Handled the setup between OBS and the Desktop App',
        ]}
      />
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList
        color={'secondary'}
        techs={[
          'TypeScript',
          'React',
          'Next.js',
          'GraphQL',
          'Node.js',
          'Firebase',
          'Electron',
          '100 ms',
          'Twilio',
        ]}
      />
    </div>
  ),
};
