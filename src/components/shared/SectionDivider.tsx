import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  bgColorClass?: string;
}

export function SectionDivider({ bgColorClass }: SectionDividerProps) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-slate-200" />
      </div>
      <div className="relative flex justify-center">
        <span className={cn("bg-white px-4 flex gap-1.5", bgColorClass)}>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-200"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-200"></span>
        </span>
      </div>
    </div>
  );
}