"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
  "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors duration-200",
  {
    variants: {
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
      },
      variant: {
        default: "text-foreground",
        required: "text-foreground after:content-['*'] after:ml-0.5 after:text-destructive",
        optional: "text-muted-foreground",
        error: "text-destructive",
        success: "text-success",
        warning: "text-warning",
        info: "text-info",
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    }
  }
)

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  required?: boolean
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, size, variant, required, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants({ size, variant: required ? "required" : variant }),
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

// Helper component for form field with label
export function LabeledField({
  label,
  children,
  required,
  error,
  hint,
  className,
}: {
  label: string
  children: React.ReactNode
  required?: boolean
  error?: string
  hint?: string
  className?: string
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label required={required} variant={error ? "error" : "default"}>
        {label}
      </Label>
      {children}
      {hint && !error && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  )
}

export { Label, labelVariants }