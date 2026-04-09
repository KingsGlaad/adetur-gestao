"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface OverviewChartProps {
  data: {
    name: string;
    total: number;
  }[];
}

export function OverviewChart({ data }: OverviewChartProps) {
  return (
    <Card className="col-span-full xl:col-span-2 p-4 border border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle>Atividade por Município</CardTitle>
        <CardDescription>
          Total de atrações e eventos cadastrados por região.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] border-b border-primary/20">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                cursor={{ fill: "var(--muted)", opacity: 0.4 }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {payload[0].payload.name}
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value} Atividades
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="total"
                radius={[4, 4, 0, 0]}
                className="fill-primary"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fillOpacity={1 - index * 0.1}
                    className="fill-primary"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
