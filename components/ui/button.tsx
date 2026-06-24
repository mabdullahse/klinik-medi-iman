import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-maroon text-cream hover:bg-maroon-light shadow-sm",
        gold:
          "bg-gold text-maroon-dark hover:bg-gold-light font-semibold shadow-sm",
        outline:
          "border-2 border-maroon text-maroon bg-transparent hover:bg-maroon hover:text-cream",
        "outline-gold":
          "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-maroon-dark",
        ghost:
          "text-maroon hover:bg-maroon/10",
        link:
          "text-maroon underline-offset-4 hover:underline p-0 h-auto",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1EBE58] shadow-lg font-semibold",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 px-8 text-base py-3",
        xl: "h-14 px-10 text-base py-4",
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
