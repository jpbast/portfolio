import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Section
        isFullHeight
        isMobileFullHeight
        backgroundImage="/hero.png"
        containerClassName="flex h-full items-center justify-center gap-10 max-[700px]:flex-col-reverse max-[700px]:gap-6"
      >
        <div className="flex flex-col">
          <h1 className="flex max-w-[500px] flex-1 flex-col gap-1 max-[700px]:text-center">
            <span className="text-xl font-semibold max-[700px]:text-lg">
              Hello there, I am
            </span>
            <strong className="text-5xl text-secondary max-[700px]:text-4xl">
              João Bast
            </strong>
            <span className="text-3xl font-semibold max-[700px]:text-2xl">
              Frontend Developer highly experienced in building JavaScript web
              and mobile apps
            </span>
          </h1>
        </div>
        <Image
          src="/profile.png"
          alt="João's picture"
          width={220}
          height={220}
          className="rounded-full bg-primary"
        />
      </Section>
      {/* <Section className="bg-secondary" isFullHeight>
        <div className="flex items-center justify-between gap-10">
          <Image
            src="/profile.png"
            alt="João's picture"
            width={500}
            height={500}
            className="h-[400px] w-[400px] rounded-full bg-primary"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-primary">About me</h2>
            <p className="text-base font-medium text-primary">
              I'm a Software Developer graduated at Computer Engineering. My
              passion about programming started since then, when I have first
              contact with C, Python and JavaScript later on. I have a bachelor
              degree in Computer Engineering and I have been working with web
              and mobile development for 2.5+ years. I have always worked with
              JavaScript using React and its related technologies (TypeScript,
              React Native, NextJs, Electron, Redux, Zustand, Tailwind, GraphQL,
              Firebase, among others). I worked as a developer on several
              different projects and have experience in several areas: streaming
              services, white label platforms, administration systems, static
              websites, PWA and mobile applications. I also have a good
              understanding of back-end and have already performed tasks in this
              area as well, using Node, Express, GraphQL, Prisma and helping
              with database structuring. In addition to working as a developer,
              I was also a Teach Leader on several projects, being responsible
              for ensuring project quality, reviewing the development team's
              code as well as working on code development. My main interest is
              to continue developing applications with these technologies
              looking for better job opportunities.
            </p>
          </div>
        </div>
      </Section> */}
      <Section
        className="bg-primary"
        isFullHeight
        disablePaddingX
        containerClassName="flex flex-col gap-6"
      >
        <h2 className="px-content text-center text-4xl font-bold text-secondary">
          Projects
        </h2>
        <p className="mx-auto max-w-lg px-content text-center text-base font-medium text-secondary">
          On the past few years, I've contributed to many different projects
          including: websites, administration systems, web, mobile and TV apps.
          You can check below the most relevant projects I've worked on and
          visit it for more details
        </p>
        <Carousel />
      </Section>
      <Section
        className="bg-secondary"
        isFullHeight
        containerClassName="flex flex-col gap-6"
      >
        <h2 className="px-content text-center text-4xl font-bold text-secondary">
          Contact me
        </h2>
        <ContactForm />
      </Section>
    </main>
  );
}
