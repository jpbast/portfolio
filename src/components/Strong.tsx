import { ReactNode } from 'react';

const Strong = ({ children }: { children: ReactNode }) => (
  <strong className="relative before:absolute before:-left-4 before:top-[6px] before:h-2 before:w-2 before:content-normal before:rounded-full before:bg-white before:content-['']">
    {children}
  </strong>
);

export default Strong;
