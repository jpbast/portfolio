import React from "react";
import { Control, useWatch } from "react-hook-form";

type InputProps = {
  label: string;
  error?: string;
  control?: Control<any>;
  color?: "primary" | "secondary";
} & React.HTMLProps<HTMLInputElement>;

function InputInner(
  { className, error, label, control, color = "primary", ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const value = useWatch({ control, name: props.name as string });

  return (
    <div className="w-full">
      <div
        className={`relative ${color === "primary" ? "text-text-primary" : "text-text-secondary"}`}
      >
        <input
          {...props}
          id={props.name}
          className={`${error ? "shadow-red-800" : `${color === "primary" ? "shadow-text-primary" : "shadow-text-secondary"}`} peer relative flex w-full rounded-md bg-transparent pb-1 pl-2 pt-5 text-base shadow-sm outline-none transition-all duration-300 ${className}`}
          ref={ref}
        />
        <label
          htmlFor={props.name}
          className={`absolute left-2 transition-all duration-300 peer-focus:top-[3px] peer-focus:translate-y-0 peer-focus:text-xs ${error ? "text-red-800" : ""} ${value && value !== "" ? "top-[3px] translate-y-0 text-xs" : "top-1/2 -translate-y-1/2 text-base"}`}
        >
          {label}
        </label>
      </div>

      {error && <p className="mt-1 text-base text-red-800">{error}</p>}
    </div>
  );
}

const Input = React.forwardRef(InputInner);

export default Input;
