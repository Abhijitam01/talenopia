import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#0d0d0d] text-white hover:bg-[#c8102e] tracking-widest uppercase text-xs font-semibold",
        destructive: "bg-red-500 text-zinc-50 hover:bg-red-500/90",
        outline:
          "border border-[#0d0d0d] bg-transparent text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white tracking-widest uppercase text-xs font-semibold",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80",
        ghost: "hover:bg-gray-100 hover:text-zinc-900 tracking-widest uppercase text-xs font-semibold",
        link: "text-zinc-900 underline-offset-4 hover:underline",
        premium: "bg-[#c8102e] text-white hover:bg-[#e8213f] shadow-lg shadow-red-500/20 tracking-widest uppercase text-xs font-semibold",
        nav: "bg-[#0d0d0d] text-white hover:bg-[#c8102e] tracking-widest uppercase text-xs font-semibold px-6",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
