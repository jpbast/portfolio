import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

type SectionProps = {
  isFullHeight?: boolean;
  isMobileFullHeight?: boolean;
  backgroundImage?: string;
  containerClassName?: string;
  disablePaddingX?: boolean;
  disableMaxWidth?: boolean;
  color?: 'primary' | 'secondary';
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
  disableMaxWidth,
  color,
  ...props
}) => {
  return (
    <section
      className={`relative w-full  ${isFullHeight ? 'h-screen' : ''} ${isMobileFullHeight ? 'max-[700px]:h-screen' : 'max-[700px]:h-auto'} ${backgroundImage ? 'bg-transparent' : color === 'primary' ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-primary !text-text-secondary' : 'bg-secondary bg-gradient-to-br from-gray-200 !text-text-primary'} ${className}`}
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
        className={`mx-auto py-12 ${containerClassName} ${disablePaddingX ? '' : 'px-content'} ${disableMaxWidth ? '' : 'max-w-content'}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
