import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary text-primary-foreground hover:bg-primary-600 hover:scale-105",
        secondary:
          "border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border border-transparent bg-destructive text-destructive-foreground hover:bg-destructive-600 hover:scale-105",
        outline: 
          "border-2 border-border text-foreground hover:bg-accent/10 hover:border-primary/50",
        success:
          "border border-transparent bg-success text-success-foreground hover:bg-success-600 hover:scale-105",
        warning:
          "border border-transparent bg-warning text-warning-foreground hover:bg-warning-600 hover:scale-105",
        info:
          "border border-transparent bg-info text-info-foreground hover:bg-info-600 hover:scale-105",
        ghost:
          "border-0 text-foreground hover:bg-accent/10",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.25 text-[10px]",
        lg: "px-3 py-1 text-sm",
      },
      rounded: {
        default: "rounded-full",
        md: "rounded-md",
        lg: "rounded-lg",
        none: "rounded-none",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  pulse?: boolean
}

function Badge({ className, variant, size, rounded, pulse = false, ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        badgeVariants({ variant, size, rounded }), 
        pulse && "animate-pulse-glow",
        className
      )} 
      {...props} 
    />
  )
}

export { Badge, badgeVariants }