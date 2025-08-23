"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const sheetOverlayVariants = cva(
  "fixed inset-0 z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
  {
    variants: {
      blur: {
        none: "",
        sm: "backdrop-blur-sm",
        md: "backdrop-blur-md",
        lg: "backdrop-blur-lg",
      },
      overlay: {
        default: "bg-black/80",
        light: "bg-black/50",
        dark: "bg-black/90",
      }
    },
    defaultVariants: {
      blur: "sm",
      overlay: "default",
    }
  }
)

const sheetContentVariants = cva(
  "fixed z-50 flex flex-col gap-4 bg-card border shadow-2xl transition-all ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        right: "inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        bottom: "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
      },
      size: {
        sm: "",
        default: "",
        lg: "",
        xl: "",
        full: "",
        content: "",
      }
    },
    compoundVariants: [
      {
        side: ["left", "right"],
        size: "sm",
        className: "w-3/4 sm:max-w-sm",
      },
      {
        side: ["left", "right"],
        size: "default",
        className: "w-3/4 sm:max-w-md",
      },
      {
        side: ["left", "right"],
        size: "lg",
        className: "w-3/4 sm:max-w-lg",
      },
      {
        side: ["left", "right"],
        size: "xl",
        className: "w-3/4 sm:max-w-xl",
      },
      {
        side: ["left", "right"],
        size: "full",
        className: "w-full",
      },
      {
        side: ["top", "bottom"],
        size: "sm",
        className: "max-h-[200px]",
      },
      {
        side: ["top", "bottom"],
        size: "default",
        className: "max-h-[300px]",
      },
      {
        side: ["top", "bottom"],
        size: "lg",
        className: "max-h-[500px]",
      },
      {
        side: ["top", "bottom"],
        size: "xl",
        className: "max-h-[700px]",
      },
      {
        side: ["top", "bottom"],
        size: "full",
        className: "h-full",
      },
    ],
    defaultVariants: {
      side: "right",
      size: "default",
    }
  }
)

export interface SheetOverlayProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>,
    VariantProps<typeof sheetOverlayVariants> {}

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  SheetOverlayProps
>(({ className, blur, overlay, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(sheetOverlayVariants({ blur, overlay }), className)}
    {...props}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetContentVariants> {
  showClose?: boolean
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side, size, className, children, showClose = true, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetContentVariants({ side, size }), className)}
      {...props}
    >
      {children}
      {showClose && (
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all hover:opacity-100 hover:rotate-90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      )}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 p-6 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 p-6 pt-0",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  sheetOverlayVariants,
  sheetContentVariants,
}