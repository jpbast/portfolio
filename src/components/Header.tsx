'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosMenu } from 'react-icons/io';
import { navigateToId } from '@/utils/navigation';

const links = [
  { title: 'Home', to: 'home' },
  { title: 'About', to: 'about' },
  { title: 'Projects', to: 'projects' },
  { title: 'Hire me', to: 'contact' },
];

const Header: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsTransparent(offset < 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${opened ? 'bg-primary' : isTransparent ? '' : 'bg-primary shadow-xl'}`}
    >
      <div className="relative mx-auto flex h-[80px] max-w-content items-center justify-between px-content">
        <Link href="#home">
          <Image
            src="/profile.png"
            className="rounded-full border border-gray-400 bg-primary"
            width={50}
            height={50}
            alt="João's picture"
          />
        </Link>
        <button onClick={() => setOpened(!opened)} className="min-[700px]:hidden">
          <IoIosMenu size={42} />
        </button>
        <nav
          className={`max-[700px]: absolute left-0 top-[80px] flex h-screen w-screen flex-col items-start gap-5 bg-primary px-content pt-2 duration-300 ${opened ? 'opacity-1 translate-x-[0%]' : 'max-[700px]:-translate-x-[100%] max-[700px]:opacity-0'} min-[700px]:static min-[700px]:ml-auto min-[700px]:h-auto min-[700px]:w-auto min-[700px]:flex-row min-[700px]:items-center min-[700px]:justify-end min-[700px]:bg-transparent min-[700px]:p-0 min-[700px]:duration-0`}
        >
          {links.map((link, index) => (
            <Link
              key={link.title}
              href={link.to}
              onClick={(e) => {
                e.preventDefault();
                navigateToId(link.to, true);
              }}
            >
              <Button
                label={link.title}
                variant={index < links.length - 1 ? 'text' : 'outline'}
                color="secondary"
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
