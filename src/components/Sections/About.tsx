import Section from '@/components/Section';
import TechsList from '@/components/TechsList';
import TextWithSideImg from '@/components/TextWithSideImg';
import React from 'react';

const About: React.FC = () => {
  const color = 'secondary' as 'primary' | 'secondary';

  return (
    <Section
      color={color}
      className="font-medium"
      containerClassName="flex flex-col gap-6"
      id="about"
    >
      <TextWithSideImg
        title="Personal"
        images={['/drinking-coffee.jpg', '/wpp.jpg']}
        keepLastImg
        text={
          <>
            <p>
              My interest in computing started when I was still a child. At that time, I used to
              spend a lot of time in the computer but only for entertainment purposes. Over the
              years, both games and software evolved, and the computer I had at the time no longer
              met my needs well. It was at this moment that the computer ceased to be just a tool
              for entertainment, and I started to research more about the subject, especially
              regarding hardware.
            </p>
            <p>
              In college, I ended up igniting my passion for programming. Solving real-life problems
              through lines of code and understanding how all of this works was what motivated me to
              keep improving so I could work with it in the future.
            </p>
            <p>
              My first contact with web programming came at the university's computer junior
              company, where I spent some time working as a backend developer. The interest in
              frontend came some time later, after starting to understand and dig deeper into the
              web as a whole. Then I started to study, in addition to JavaScript, HTML, and CSS. At
              this point, I really enjoyed the experience of creating interfaces, especially when
              combined with the use of libraries like React. Therefore, I chose to focus my career
              in this area and started working with frontend.
            </p>
          </>
        }
      />
      <TextWithSideImg
        title="Technical"
        images={['/animate-developer.png', '/developer.jpg']}
        reverse
        keepLastImg
        text={
          <>
            <p>
              During my software development career, I've contributed to various projects: web,
              mobile, and smart TV apps, websites, administration systems, and more. I enjoy closely
              collaborating with both design and backend teams, playing an integral role in the
              entire project lifecycle.
            </p>
            <p>
              I'm highly experienced in building custom and interactive interfaces for different
              devices. The most relevant technologies I specialize in include:
            </p>
            <TechsList
              color={color === 'primary' ? 'secondary' : 'primary'}
              className="py-4"
              techs={[
                'TypeScript',
                'React',
                'React Native',
                'Next.js',
                'Tailwind',
                'Zustand',
                'Firebase',
                'Rollbar',
              ]}
            />
            <p>
              These technologies and frameworks have been my primary tools in creating custom apps.
              Complementing these core tools, I can also mention other technologies I master too:
            </p>
            <TechsList
              color={color === 'primary' ? 'secondary' : 'primary'}
              className="py-4"
              techs={[
                'GraphQL',
                'Strapi',
                'Redux',
                'Stripe',
                'Node.js',
                'Prisma',
                'Electron',
                'Styled Components',
              ]}
            />
            <p>
              Alongside frontend proficiency, I'm also experienced with backend since I've
              contributed to multiple features and data strategy discussions, ensuring comprehensive
              project execution.
            </p>
            <p>
              In addition to these development skills, I am well-versed in managing development
              teams as a tech leader. From conducting code reviews to spearheading critical
              technical decisions, I am adept at ensuring the successful execution of projects from
              conception to deployment.
            </p>
          </>
        }
      />
    </Section>
  );
};

export default About;
