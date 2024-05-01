import React from 'react';

type FeaturesHighlightProps = {
  items: string[];
};

const FeaturesHighlight: React.FC<FeaturesHighlightProps> = ({ items }) => {
  return (
    <ul className="pl-[30px]">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative before:absolute before:-left-4 before:top-[8px] before:h-2 before:w-2 before:content-normal before:rounded-full before:bg-white before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FeaturesHighlight;
