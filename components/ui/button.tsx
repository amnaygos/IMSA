import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-swiss-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-2 border-swiss-black bg-swiss-black text-swiss-white hover:bg-electric-lime hover:text-swiss-black hover:border-electric-lime transition-all duration-300",
        outline:
          "border-2 border-swiss-black bg-transparent hover:bg-swiss-black hover:text-swiss-white transition-all duration-300",
        ghost: "hover:bg-swiss-gray hover:text-swiss-black",
        link: "text-swiss-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2 uppercase tracking-wide rounded-none",
        sm: "h-10 px-4 text-xs rounded-none",
        lg: "h-14 px-10 text-base rounded-none",
        icon: "h-10 w-10 rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
