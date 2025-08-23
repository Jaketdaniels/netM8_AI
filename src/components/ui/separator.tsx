"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const separatorVariants = cva(
  "shrink-0 transition-all duration-200",
  {
    variants: {
      orientation: {
        horizontal: "h-[1px] w-full",
        vertical: "h-full w-[1px]",
      },
      variant: {
        default: "bg-border",
        gradient: "bg-gradient-to-r from-transparent via-border to-transparent",
        primary: "bg-primary/20",
        muted: "bg-muted",
        dashed: "border-t-2 border-dashed border-border bg-transparent",
        dotted: "border-t-2 border-dotted border-border bg-transparent",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      }
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        size: "sm",
        className: "h-[0.5px]",
      },
      {
        orientation: "horizontal",
        size: "lg",
        className: "h-[2px]",
      },
      {
        orientation: "vertical",
        size: "sm",
        className: "w-[0.5px]",
      },
      {
        orientation: "vertical",
        size: "lg",
        className: "w-[2px]",
      },
    ],
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
      size: "default",
    }
  }
)

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof separatorVariants> {
  label?: string
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { 
      className, 
      orientation = "horizontal", 
      variant,
      size,
      decorative = true,
      label,
      ...props 
    },
    ref
  ) => {
    if (label && orientation === "horizontal") {
      return (
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <SeparatorPrimitive.Root
              ref={ref}
              decorative={decorative}
              orientation={orientation}
              className={cn(separatorVariants({ orientation, variant, size }), className)}
              {...props}
            />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {label}
            </span>
          </div>
        </div>
      )
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(separatorVariants({ orientation, variant, size }), className)}
        {...props}
      />
    )
  }
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator, separatorVariants }