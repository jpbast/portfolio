import React from 'react';

const Footer: React.FC = () => {
  const color = 'primary' as 'primary' | 'secondary';
  const isPrimary = color === 'primary';

  return (
    <footer
      className={`flex h-16 w-full items-center justify-center bg-primary px-content text-center text-sm ${isPrimary ? 'bg-primary text-text-secondary' : 'bg-secondary text-text-primary'}`}
    >
      &copy; 2024 | Designed and developed by João Bast
    </footer>
  );
};

export default Footer;
