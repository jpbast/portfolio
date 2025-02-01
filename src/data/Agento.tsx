import FeaturesHighlight from '@/components/FeaturesHighlight';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const Agento: Project = {
  title: 'Agento',
  shortDescription: 'A virtual assistant for managing your business',
  thumbnail: '/projects/agento.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        Since this project is a virtual assistant, its main feature is enabling conversations
        between the company and its customers. We can say the project is divided into two parts: the
        public interface and the private administration section.
      </p>
      <p>
        The public interface is essentially a chat where customers can reach out to the company.
        Initially, users are assisted by a virtual assistant that guides the conversation. Depending
        on the topic and the user’s questions, the system automatically adds a company employee to
        the conversation and notifies them. The employee then takes over and assists the customer.
      </p>
      <p>
        The private section is internally accessible to the company. In this interface, employees
        can view all conversations initiated by customers, monitor them, and take over at any time.
        Just as the system can automatically add an employee to a conversation, employees also have
        control over this process and can manually add other people, who are then notified.
        Additionally, the page includes various filters to help users view specific conversations.
      </p>
      <p>
        Beyond the chat interfaces, the project also includes other pages that support the
        application’s functionality, such as user registration and management screens, as well as
        tag management—tags being used within conversations.
      </p>
      <p>
        <a href="https://www.agento.com.br/" target="_blank">
          <span style={{ textDecoration: 'underline' }}>Here</span>
        </a>{' '}
        you can find out more information about <strong>agento</strong>.
      </p>
      <h3 className="mt-3 text-xl font-bold">Features highlight</h3>
      <FeaturesHighlight
        items={[
          'Led the frontend development',
          'Developed the Socket.IO structure, handling the entire chat system and communication between the backend',
          'Developed the authentication page and logic',
          'Built chats for the public and private interfaces',
          'Built users management page',
        ]}
      />
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList
        color={'secondary'}
        techs={['TypeScript', 'React', 'Next.js', 'Socket.IO', 'Tailwind', 'Mantine UI', 'Zustand']}
      />
    </div>
  ),
};
