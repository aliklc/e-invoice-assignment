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
}

export function Stepper({ steps, currentStep, setCurrentStep }: StepperProps) {
  return (
    <nav className="flex justify-center" aria-label="Progress">
      <ol className="flex space-x-20">
        {steps.map((step, index) => (
          <li key={step.id}>
            <button
              onClick={() => setCurrentStep(index)}
              className={cn(
                "flex flex-col items-center",
                index <= currentStep ? "text-primary" : "text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 justify-center rounded-full border-2",
                  index <= currentStep
                    ? "border-primary bg-black text-white"
                    : "border-muted-foreground"
                )}
              >
                {index + 1}
              </span>
              <span className="mt-2 text-sm font-medium">{step.name}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}