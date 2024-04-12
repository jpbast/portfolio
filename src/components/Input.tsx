import React from "react";
import { Control, FieldValues, useWatch } from "react-hook-form";

type InputProps = {
  label: string;
  error?: string;
  control?: Control<any>;
} & React.HTMLProps<HTMLInputElement>;

function InputInner(
  { className, error, label, control, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const value = useWatch({ control, name: props.name as string });

  return (
    <div className="relative w-full">
      <input
        {...props}
        className={`${error ? "shadow-red-800" : "shadow-primary"} duration-300focus:shadow-primary peer flex w-full rounded-md bg-transparent pb-1 pl-2 pt-5 text-base text-primary shadow-sm outline-none transition-all ${className}`}
        ref={ref}
      />
      <label
        htmlFor={props.name}
        className={`absolute left-2 top-1/2 -translate-y-1/2 text-primary transition-all duration-300 peer-focus:top-[3px] peer-focus:translate-y-0 peer-focus:text-xs ${error ? "text-red-800" : ""} ${value && value !== "" ? "top-[3px] translate-y-0 text-xs" : ""}`}
      >
        {label}
      </label>
      {error && (
        <p className="absolute left-0 top-[52px] z-10 text-base text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}

const Input = React.forwardRef(InputInner);

export default Input;
