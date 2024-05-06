import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Button from "./ui/Button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  questions: string[];
  currentCandidateIndex: number; // Added this because the index is not resetting back to 0 when we select a new candidate
}

const Questions = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, questions, currentCandidateIndex, ...props }, ref) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setIndex(0); // Reset index when currentCandidateIndex changes
    }, [currentCandidateIndex]);

    if (!questions || questions.length === 0) {
      return (
        <div
          className={cn(
            "w-full z-10 bg-black/25 backdrop-blur-lg flex items-center justify-between p-3 rounded-xl",
            className
          )}
        >
          No questions available.
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "w-full z-10 bg-black/25 backdrop-blur-lg flex items-center justify-between p-3 rounded-xl ",
          className
        )}
      >
        <Button
          onClick={() =>
            setIndex((prev) => {
              if (prev == 0) return 0;
              else return prev - 1;
            })
          }
          disabled={!questions[index - 1]}
          className="bg-gray-400 hover:bg-gray-600 disabled:cursor-not-allowed"
        >
          <ChevronsLeft className="w-4 h-4 stroke-white" />
        </Button>
        <div className="text-center text-white text-sm flex gap-3 flex-col items-center justify-center">
          <div>{questions[index]}</div>
          <div>
            Question {index + 1}/{questions.length}
          </div>
        </div>
        <Button
          onClick={() =>
            setIndex((prev) => {
              if (prev == questions.length - 1) return prev;
              else return prev + 1;
            })
          }
          disabled={!questions[index + 1]}
          className="bg-gray-400 hover:bg-gray-600 disabled:cursor-not-allowed"
        >
          <ChevronsRight className="w-4 h-4 stroke-white" />
        </Button>
      </div>
    );
  }
);

export default Questions;
