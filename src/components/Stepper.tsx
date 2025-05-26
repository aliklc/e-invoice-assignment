"use client";

import { cn } from "@/lib/utils";

interface Step {
  id: string;
  name: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  className?: string;
}

export function Stepper({ steps, currentStep, setCurrentStep, className }: StepperProps) {
  return (
    <nav
      className={cn("w-full", className)}
      aria-label="Progress"
    >
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200">
        <ol className="flex space-x-8 min-w-[600px] md:space-x-12 md:min-w-[900px] px-2 py-2">
          {steps.map((step, index) => (
            <li key={step.id} className="flex-1 min-w-fit">
              <button
                type="button"
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "flex flex-col items-center focus:outline-none group w-full",
                  index < currentStep
                    ? "text-green-600"
                    : index === currentStep
                    ? "text-blue-600"
                    : "text-gray-400"
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-full border-2 font-bold transition-all duration-200 shadow",
                    index < currentStep
                      ? "border-green-600 bg-green-600 text-white group-hover:bg-green-700"
                      : index === currentStep
                      ? "border-blue-600 bg-blue-600 text-white group-hover:bg-blue-700 scale-110"
                      : "border-gray-300 bg-white text-gray-400 group-hover:border-blue-300"
                  )}
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    "mt-2 text-xs md:text-sm font-medium text-center transition-colors duration-200",
                    index === currentStep
                      ? "text-blue-700"
                      : index < currentStep
                      ? "text-green-700"
                      : "text-gray-400"
                  )}
                >
                  {step.name}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}