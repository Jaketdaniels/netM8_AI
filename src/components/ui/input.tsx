import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md px-3 py-2 text-sm ring-offset-background transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
  {
    variants: {
      variant: {
        default: 
          "border border-input bg-input hover:bg-input/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-primary",
        outline:
          "border-2 border-border bg-transparent hover:border-primary/50 focus-visible:border-primary focus-visible:ring-0",
        ghost:
          "border-0 bg-transparent hover:bg-accent/10 focus-visible:bg-accent/10 focus-visible:ring-2 focus-visible:ring-ring",
        filled:
          "border-0 bg-muted hover:bg-muted/80 focus-visible:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring",
      },
      size: {
        default: "h-10",
        sm: "h-8 text-xs",
        lg: "h-12 text-base",
        xl: "h-14 text-lg px-4",
      },
      error: {
        true: "border-destructive focus-visible:ring-destructive hover:border-destructive",
        false: "",
      },
      success: {
        true: "border-success focus-visible:ring-success hover:border-success",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      error: false,
      success: false,
    },
  }
)

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, error, success, leftIcon, rightIcon, ...props }, ref) => {
    const inputElement = (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, size, error, success }),
          leftIcon && "pl-10",
          rightIcon && "pr-10",
          className
        )}
        ref={ref}
        {...props}
      />
    )

    if (leftIcon || rightIcon) {
      return (
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          {inputElement}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
      )
    }

    return inputElement
  }
)
Input.displayName = "Input"

export { Input, inputVariants }