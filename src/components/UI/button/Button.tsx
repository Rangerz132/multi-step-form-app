import React from "react";

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div>
      <button {...props} className={`${className} cursor-pointer`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
