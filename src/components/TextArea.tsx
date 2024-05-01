import React from 'react';
import { Control, useWatch } from 'react-hook-form';

type TextAreaProps = {
  label: string;
  error?: string;
  control?: Control<any>;
  color?: 'primary' | 'secondary';
} & React.HTMLProps<HTMLTextAreaElement>;

function TextAreaInner(
  { className, error, label, control, color = 'primary', ...props }: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) {
  const value = useWatch({ control, name: props.name as string });

  const isPrimary = color === 'primary';

  return (
    <div className="relative w-full">
      <div className="relative">
        <textarea
          {...props}
          className={`${error ? 'shadow-red-800' : isPrimary ? 'shadow-text-primary' : 'shadow-text-secondary'} peer flex w-full resize-none rounded-md bg-transparent pb-1 pl-2 pt-5 text-base shadow-sm outline-none transition-all duration-300 ${className}`}
          rows={4}
          ref={ref}
        />
        <label
          htmlFor={props.name}
          className={`absolute left-2 transition-all duration-300 peer-focus:top-[3px] peer-focus:translate-y-0 peer-focus:text-xs ${error ? 'text-red-800' : ''} ${value && value !== '' ? 'top-[3px] translate-y-0 text-xs' : 'top-6 -translate-y-1/2 text-base'}`}
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-base text-red-800">{error}</p>}
    </div>
  );
}

const TextArea = React.forwardRef(TextAreaInner);

export default TextArea;
