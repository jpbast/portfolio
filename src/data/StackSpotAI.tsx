import FeaturesHighlight from '@/components/FeaturesHighlight';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const StackSpotAI: Project = {
  title: 'StackSpot AI',
  shortDescription: 'A multi-agent platform for software development',
  thumbnail: '/projects/stackspotai.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        StackSpot AI is an intelligent assistant designed to enhance developers' workflows directly
        within their IDEs, supporting VSCode and JetBrains. It provides smart code suggestions,
        automated code generation, and quick commands to streamline development.
      </p>
      <p>
        Through an intuitive chat interface, developers can ask questions, request code snippets,
        and receive context-aware suggestions in real time. The assistant also supports command
        execution within the IDE, enabling code insertion, modifications, and automation of
        repetitive tasks.
      </p>
      <p>
        Additionally, StackSpot AI includes accessibility features to ensure a seamless experience
        for all users. The extension is regularly updated to stay compatible with the latest IDE
        versions and improve its capabilities based on user feedback.
      </p>
      <p>
        <a href="https://www.stackspot.com/en" target="_blank">
          <span style={{ textDecoration: 'underline' }}>Here</span>
        </a>{' '}
        you can find out more information about <strong>StackSpot AI</strong>.
      </p>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight
        items={[
          'Developed new features and resolved production issues in the frontend of StackSpot AI extensions for VSCode (TypeScript) and JetBrains (Kotlin)',
          'Worked closely with backend, support, and design teams for integration and product improvements',
          'Improved accessibility with a focus on screen reader compatibility',
          'Expanded testing coverage for higher code reliability',
        ]}
      />
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList color={'secondary'} techs={['TypeScript', 'React', 'Kotlin']} />
    </div>
  ),
};
