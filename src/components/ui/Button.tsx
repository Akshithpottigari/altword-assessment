import React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const Comp = "button";
  return (
    <Comp className={cn("text-sm h-10 px-4 py-2 font-medium flex items-center justify-center gap-3 hover:bg-gray-100 rounded-xl duration-500", className)} ref={ref} {...props} />
  );
});

export default Button;
