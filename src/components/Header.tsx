"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

const links = [
  { title: "Home", to: "#home" },
  { title: "About", to: "#about" },
  { title: "Projects", to: "#projects" },
  { title: "Hire me", to: "#contact" },
];

const MobileNav = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}) => (
  <>
    <button onClick={() => setOpened(!opened)}>
      <IoIosMenu size={42} />
    </button>
    <nav
      className={`absolute left-0 top-[80px] flex h-screen w-screen flex-col items-start gap-5 bg-primary px-content pt-2 transition-all duration-300 ${opened ? "opacity-1 translate-x-[0%]" : "-translate-x-[100%] opacity-0"}`}
    >
      {links.map((link, index) => (
        <Link key={link.title} href={link.to}>
          <Button
            label={link.title}
            variant={index < links.length - 1 ? "text" : "default"}
            color="secondary"
            onClick={() => setOpened(false)}
          />
        </Link>
      ))}
    </nav>
  </>
);

const Header: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [opened, setOpened] = useState(false);

  const isMobile = useMediaQuery("(max-width: 700px)");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsTransparent(offset < 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-10 w-full transition-all duration-300 ${opened ? "bg-primary" : isTransparent ? "" : "bg-primary shadow-xl"}`}
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
        {isMobile ? (
          <MobileNav opened={opened} setOpened={setOpened} />
        ) : (
          <nav className="flex items-center gap-5">
            {links.map((link, index) => (
              <Link key={link.title} href={link.to}>
                <Button
                  label={link.title}
                  variant={index < links.length - 1 ? "text" : "default"}
                  color="secondary"
                />
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
