import React from 'react';
import { FaCheck } from 'react-icons/fa6';

type TechsListProps = {
  techs: string[];
  className?: string;
  color: 'primary' | 'secondary';
};

const TechsList: React.FC<TechsListProps> = ({ techs, className, color = 'primary' }) => {
  return (
    <ul className={`flex flex-1 flex-wrap gap-3 ${className}`}>
      {techs.map((tech) => (
        <li
          className={`flex items-center justify-center gap-1 rounded-lg px-2 py-1 shadow-sm ${color === 'primary' ? 'shadow-text-primary' : 'shadow-text-secondary'}`}
          key={tech}
        >
          <FaCheck />
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default TechsList;
