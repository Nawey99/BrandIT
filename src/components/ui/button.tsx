import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-[0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#801422] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#801422] px-5 py-3 text-[#fffef8] shadow-[0_18px_45px_rgba(128,20,34,0.22)] hover:-translate-y-0.5 hover:bg-[#231f20]",
        ghost:
          "border border-[#231f20]/12 bg-[#fffef8]/50 px-5 py-3 text-[#231f20] backdrop-blur-xl hover:border-[#801422]/35 hover:bg-[#fffef8]",
        link: "px-0 py-0 text-[#801422] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4",
        lg: "h-14 px-6 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
