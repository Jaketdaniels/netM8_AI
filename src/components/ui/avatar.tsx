"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full transition-all duration-200",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
      },
      ring: {
        none: "",
        default: "ring-2 ring-background ring-offset-2 ring-offset-background",
        primary: "ring-2 ring-primary ring-offset-2 ring-offset-background",
        success: "ring-2 ring-success ring-offset-2 ring-offset-background",
        warning: "ring-2 ring-warning ring-offset-2 ring-offset-background",
        destructive: "ring-2 ring-destructive ring-offset-2 ring-offset-background",
      }
    },
    defaultVariants: {
      size: "default",
      ring: "none",
    }
  }
)

const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center rounded-full font-medium",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        primary: "bg-primary/10 text-primary",
        success: "bg-success/10 text-success",
        warning: "bg-warning/10 text-warning",
        destructive: "bg-destructive/10 text-destructive",
        gradient: "bg-gradient-primary text-white",
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  hoverable?: boolean
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, ring, hoverable, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      avatarVariants({ size, ring }),
      hoverable && "cursor-pointer hover:scale-105 active:scale-95",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarFallbackVariants> {}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, variant, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallbackVariants({ variant }), className)}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// Preset avatar group component
export function AvatarGroup({ 
  children, 
  max = 3,
  className 
}: { 
  children: React.ReactNode
  max?: number
  className?: string 
}) {
  const childrenArray = React.Children.toArray(children)
  const displayedChildren = childrenArray.slice(0, max)
  const remainingCount = childrenArray.length - max

  return (
    <div className={cn("flex -space-x-3", className)}>
      {displayedChildren}
      {remainingCount > 0 && (
        <Avatar size="default" ring="default">
          <AvatarFallback variant="default">
            +{remainingCount}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

// Status indicator for avatars
export function AvatarStatus({ 
  status,
  position = "bottom-right" 
}: { 
  status: "online" | "offline" | "busy" | "away"
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}) {
  const statusColors = {
    online: "bg-success",
    offline: "bg-muted",
    busy: "bg-destructive",
    away: "bg-warning",
  }

  const positions = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  }

  return (
    <span 
      className={cn(
        "absolute h-3 w-3 rounded-full border-2 border-background",
        statusColors[status],
        positions[position]
      )}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants, avatarFallbackVariants }