import React from "react";

interface EmptyPlaceholderProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export function EmptyPlaceholder({
  icon,
  title,
  subtitle,
}: EmptyPlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-50/70 rounded-lg h-full">
      <div className="text-slate-400 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
    </div>
  );
}