import React from 'react';
import Spinner from './Spinner';

type ButtonProps = {
  label: string;
  variant?: 'default' | 'outline' | 'text';
  color?: 'primary' | 'secondary';
  className?: string;
  icon?: JSX.Element;
  loading?: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'default',
  color = 'primary',
  className,
  icon,
  loading,
  onClick,
  ...props
}) => {
  const isText = variant === 'text';
  const isDefault = variant === 'default';
  const isOutline = variant === 'outline';

  return (
    <button
      className={`${className} relative flex cursor-pointer items-center justify-center gap-2 text-center disabled:cursor-not-allowed disabled:opacity-80 ${isText ? 'p-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-lg after:bg-white after:transition-all after:duration-300 hover:after:w-full' : isDefault ? `rounded-3xl px-3 py-2 transition-all duration-300 hover:brightness-75 ${color === 'primary' ? 'bg-primary text-text-secondary' : 'bg-secondary text-text-primary'}` : isOutline ? `hover rounded-3xl border bg-transparent px-3 py-2 transition-all duration-300 ${color === 'primary' ? 'border-text-primary text-text-primary hover:bg-text-primary hover:text-text-secondary' : 'border-text-secondary text-text-secondary hover:bg-text-secondary hover:text-text-primary'}` : ''}`}
      onClick={onClick}
      {...props}
    >
      {loading ? <Spinner size={20} /> : icon}
      {label}
    </button>
  );
};

export default Button;
