import { cn } from "@/lib/utils";

export function PaperPlaneMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 336"
      aria-hidden="true"
      className={cn("pointer-events-none text-[#801422]", className)}
      fill="none"
    >
      <path
        d="M4 330c40 0 68-12 74-53 5-35-3-87-20-94-17-7-30 13-21 48 12 47 61 39 103 7 22-17 37-34 37-34m-44-35 43 132 33-105 115 64 190-258L43 127l90 42Zm0 0 382-167M176 301l33-105L515 2M209 196l92-43M209 196l59 31"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
