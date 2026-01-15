import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium font-heading transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary text-foreground bg-transparent hover:bg-gradient-to-r hover:from-accent hover:to-primary hover:text-foreground hover:border-transparent",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "border-2 border-primary text-foreground bg-transparent relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent before:to-primary before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 hover:text-foreground [&>*]:relative [&>*]:z-10",
        gradient: "bg-gradient-to-r from-accent to-primary text-foreground shadow-lg hover:shadow-xl hover:scale-105",
      },
      size: {
        default: "h-12 px-8 py-4",
        sm: "h-9 rounded-full gap-1.5 px-4",
        lg: "h-14 rounded-full px-10 text-lg",
        icon: "size-10",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
