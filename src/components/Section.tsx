import Image from "next/image";
import React, { PropsWithChildren } from "react";

type SectionProps = {
  isFullHeight?: boolean;
  isMobileFullHeight?: boolean;
  backgroundImage?: string;
  containerClassName?: string;
  disablePaddingX?: boolean;
  color?: "primary" | "secondary";
  id?: string;
} & React.HTMLProps<HTMLDivElement>;

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  children,
  isFullHeight,
  isMobileFullHeight,
  backgroundImage,
  containerClassName,
  className,
  disablePaddingX,
  color,
  ...props
}) => {
  return (
    <section
      className={`relative w-full  ${isFullHeight ? "h-screen" : ""} ${isMobileFullHeight ? "max-[700px]:h-screen" : "max-[700px]:h-auto"} ${backgroundImage ? "bg-transparent" : color === "primary" ? "!text-text-secondary bg-primary" : "!text-text-primary bg-secondary"} ${className}`}
      {...props}
    >
      {backgroundImage && (
        <div className="absolute -z-10 h-full w-full bg-black opacity-30">
          <Image
            src={backgroundImage}
            className="bottom-0 left-0 right-0 top-0 object-cover"
            alt="Laptop over table displaying HTML code"
            fill
            sizes="100vw"
          />
        </div>
      )}
      <div
        className={`mx-auto max-w-content  py-12 ${containerClassName} ${disablePaddingX ? "" : "px-content"}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
