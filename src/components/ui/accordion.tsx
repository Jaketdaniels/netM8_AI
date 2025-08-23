"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, Plus, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const accordionItemVariants = cva(
  "transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-b border-border",
        separated: "mb-2 rounded-lg border border-border px-4",
        ghost: "border-0",
        card: "mb-3 rounded-lg border border-border bg-card shadow-sm hover:shadow-md",
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg:first-child]:rotate-180",
  {
    variants: {
      variant: {
        default: "py-4 hover:underline",
        separated: "py-3",
        ghost: "py-3 hover:bg-accent/10 rounded-md px-2",
        card: "p-4 hover:bg-accent/5",
      },
      size: {
        sm: "text-sm py-2",
        default: "text-base py-4",
        lg: "text-lg py-5",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
)

export type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  variant?: "default" | "separated" | "ghost" | "card"
}

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("w-full", className)}
    {...props}
  />
))
Accordion.displayName = "Accordion"

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {
  icon?: "chevron" | "plus-minus"
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, variant, size, icon = "chevron", ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {icon === "chevron" ? (
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      ) : (
        <div className="relative h-4 w-4 shrink-0">
          <Plus className="absolute h-4 w-4 transition-all duration-200 data-[state=open]:rotate-90 data-[state=open]:opacity-0" />
          <Minus className="absolute h-4 w-4 transition-all duration-200 data-[state=closed]:rotate-90 data-[state=closed]:opacity-0" />
        </div>
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 text-muted-foreground", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  accordionItemVariants,
  accordionTriggerVariants,
}