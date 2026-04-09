import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardStatsProps {
  title: string;
  value: number;
  icon: LucideIcon;
  description: string;
  trend?: {
    value: number;
    label: string;
    isPositive?: boolean;
  };
}

export function DashboardStats({
  title,
  value,
  icon: Icon,
  description,
  trend,
}: DashboardStatsProps) {
  return (
    <Card className="relative overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="rounded-full bg-primary/10 p-2">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        {trend && (
          <div className="mt-4 flex items-center gap-1">
            <span
              className={`text-xs font-medium ${
                trend.isPositive ? "text-emerald-500" : "text-rose-500"
              }`}
            >
              {trend.isPositive ? "+" : "-"}
              {trend.value}%
            </span>
            <span className="text-xs text-muted-foreground">{trend.label}</span>
          </div>
        )}
      </CardContent>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-primary/50 opacity-0 transition-opacity group-hover:opacity-100" />
    </Card>
  );
}
