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
    <div className="flex flex-col items-center justify-center text-center p-8 bg-muted/50 rounded-lg h-full">
      <div className="text-muted-foreground mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
    </div>
  );
}