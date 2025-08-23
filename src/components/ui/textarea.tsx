import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted resize-y",
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
        default: "min-h-[80px]",
        sm: "min-h-[60px] text-xs",
        lg: "min-h-[120px] text-base",
        xl: "min-h-[160px] text-lg px-4",
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

export interface TextareaProps
  extends Omit<React.ComponentProps<"textarea">, "size">,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, error, success, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({ variant, size, error, success }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }