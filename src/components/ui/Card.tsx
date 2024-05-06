import React from "react";
import { cn } from "../../lib/utils";



const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl p-3 flex flex-col items-center justify-center gap-3",
      className
    )}
    {...props}
  />
));

export default Card;
