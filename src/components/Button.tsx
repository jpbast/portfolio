import React from "react";

type ButtonProps = {
  label: string;
  variant?: "default" | "outline" | "text";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "default",
  onClick,
}) => {
  const isText = variant === "text";

  return (
    <button
      className={`relative cursor-pointer ${isText ? "p-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-lg after:bg-white after:transition-all after:duration-300 hover:after:w-full" : "rounded-3xl bg-secondary px-3 py-2 text-primary transition-all duration-300 hover:brightness-75"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
