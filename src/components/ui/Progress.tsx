
import React from "react";
import { cn, getColorClass } from "../../lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, percentage, ...props }, ref) => (
    <div ref={ref} className={cn("w-full rounded-md bg-gray-200", className)}>
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: `var(--${getColorClass(percentage)})`,
        }}
        className={`h-3  rounded-md`}
      ></div>
    </div>
  )
);

export default Progress;
