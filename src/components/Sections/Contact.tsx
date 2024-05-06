import React from 'react';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/Section';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Contact: React.FC = () => {
  const color = 'secondary' as 'primary' | 'secondary';

  return (
    <Section containerClassName="flex flex-col gap-6" id="contact" color={color}>
      <h2 className="text-4xl font-bold">Get In Touch</h2>
      <p>
        Do you want to talk about an idea you are willing to build? <br />A available position in
        your company? <br /> Or just want to chat?
        <br />
        <span className="mt-2 block font-semibold">Feel free to send me a message below!</span>
      </p>
      <div className="flex flex-1 gap-10 max-[840px]:flex-col">
        <ContactForm color={color === 'secondary' ? 'primary' : 'secondary'} />
        <div className="flex w-full max-w-[360px] flex-col gap-4 max-[840px]:max-w-none">
          <h3 className="text-lg font-semibold">You can also find me through my social medias!</h3>
          <div className="flex flex-row gap-5">
            <Link
              href="https://www.linkedin.com/in/jpbast"
              target="_blank"
              className="transition-all duration-300 hover:scale-125"
            >
              <FaLinkedin size={26} />
            </Link>
            <Link
              href="https://github.com/jpbast"
              target="_blank"
              className="transition-all duration-300 hover:scale-125"
            >
              <FaGithub size={26} />
            </Link>
            <Link
              href="https://www.instagram.com/jp_bast"
              target="_blank"
              className="transition-all duration-300 hover:scale-125"
            >
              <FaInstagram size={26} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
