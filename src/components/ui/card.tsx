import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[1.6rem] border border-[#231f20]/10 bg-[#fffef8]/72 shadow-[0_24px_80px_rgba(35,31,32,0.08)] backdrop-blur-2xl",
        className,
      )}
      {...props}
    />
  );
}
