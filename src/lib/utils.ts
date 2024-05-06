import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getColorClass = (overallScore: number) => {
 if(overallScore >= 75) return "green-500";
 else if (overallScore >= 50 && overallScore < 75 ) return "yellow-300";
 else return "red-500"
};
