"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { intake: "2024 December", total: 186, completed: 80 },
  { intake: "2024 December", total: 305, completed: 200 },
  { intake: "2024 December", total: 237, completed: 120 },
  { intake: "2024 December", total: 73, completed: 190 },
  { intake: "2025 September", total: 73, completed: 190 },
  { intake: "2025 September", total: 73, completed: 190 },
  { intake: "2025 September", total: 73, completed: 190 },
];

const chartConfig = {
  total: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PartnerChart({ data }: any) {
  return (
    <Card className=" w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Students Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="intake"
              tickLine={true}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value} // Return full intake name
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="total" fill="var(--color-total)" radius={4} />
            <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
