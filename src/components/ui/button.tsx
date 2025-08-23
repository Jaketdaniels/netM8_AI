import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&:is(a)]:!no-underline active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: 
          "bg-primary text-primary-foreground shadow-md hover:bg-primary-600 hover:shadow-lg hover:scale-[1.02] active:bg-primary-700",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive-600 hover:shadow-lg hover:scale-[1.02] active:bg-destructive-700",
        outline:
          "border-2 border-primary bg-transparent text-foreground hover:bg-primary/10 hover:border-primary-600 hover:text-foreground active:bg-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md active:bg-secondary/60",
        ghost: 
          "text-foreground hover:bg-accent/10 hover:text-accent-foreground active:bg-accent/20",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary-600 active:text-primary-700",
        success:
          "bg-success text-success-foreground shadow-md hover:bg-success-600 hover:shadow-lg hover:scale-[1.02] active:bg-success-700",
        warning:
          "bg-warning text-warning-foreground shadow-md hover:bg-warning-600 hover:shadow-lg hover:scale-[1.02] active:bg-warning-700",
        info:
          "bg-info text-info-foreground shadow-md hover:bg-info-600 hover:shadow-lg hover:scale-[1.02] active:bg-info-700",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm rounded-md",
        sm: "h-8 px-3 py-1.5 text-xs rounded-md",
        lg: "h-12 px-6 py-3 text-base rounded-lg",
        xl: "h-14 px-8 py-4 text-lg rounded-lg",
        icon: "h-10 w-10 rounded-md",
        "icon-sm": "h-8 w-8 rounded-md",
        "icon-lg": "h-12 w-12 rounded-lg",
      },
      rounded: {
        default: "",
        full: "!rounded-full",
        none: "!rounded-none",
      },
      width: {
        default: "",
        full: "w-full",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      width: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, width, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, width, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children && <span className="ml-2">{children}</span>}
          </>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }