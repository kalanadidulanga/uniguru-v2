import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CardProps {
  label: string;
  icon: LucideIcon;
  amount: number;
  description: string;
  onClick: () => void;
}

export default function Card({
  label,
  icon: Icon,
  amount,
  description,
  onClick,
}: CardProps) {
  return (
    <CardContent onClick={onClick}>
      <section className="flex justify-between gap-2">
        <p className="text-md font-medium">{label}</p>
        <Icon className="h-8 w-8 text-my-color02" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">{amount}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 hover:bg-gray-100 cursor-pointer",
        props.className
      )}
    />
  );
}
