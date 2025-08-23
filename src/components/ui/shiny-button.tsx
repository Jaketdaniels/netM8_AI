"use client";

import React from "react";
import {
  motion,
  type AnimationProps,
  type HTMLMotionProps,
} from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const shinyButtonVariants = cva(
  "relative rounded-lg font-medium backdrop-blur-xl transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "hover:shadow-[0_0_20px_hsl(var(--primary)/20%)] dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
        success: "hover:shadow-[0_0_20px_hsl(var(--success)/20%)] dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--success)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--success)/10%)]",
        destructive: "hover:shadow-[0_0_20px_hsl(var(--destructive)/20%)] dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--destructive)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--destructive)/10%)]",
        warning: "hover:shadow-[0_0_20px_hsl(var(--warning)/20%)] dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--warning)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--warning)/10%)]",
        info: "hover:shadow-[0_0_20px_hsl(var(--info)/20%)] dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--info)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--info)/10%)]",
      },
      size: {
        sm: "px-4 py-1.5 text-xs",
        default: "px-6 py-2 text-sm",
        lg: "px-8 py-3 text-base",
        xl: "px-10 py-4 text-lg",
      },
      rounded: {
        default: "rounded-lg",
        sm: "rounded-md",
        lg: "rounded-xl",
        full: "rounded-full",
        none: "rounded-none",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    }
  }
);

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  whileHover: { scale: 1.02 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps 
  extends HTMLMotionProps<"button">,
    VariantProps<typeof shinyButtonVariants> {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
  shimmerColor?: string;
}

/**
 * Enhanced shiny button with Tailwind v4 styling
 * https://magicui.design/docs/components/shiny-button
*/
const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, variant, size, rounded, shimmerColor, ...props }, ref) => {
    const getShimmerColor = () => {
      switch (variant) {
        case "success": return "var(--success)";
        case "destructive": return "var(--destructive)";
        case "warning": return "var(--warning)";
        case "info": return "var(--info)";
        default: return "var(--primary)";
      }
    };

    const shimmer = shimmerColor || getShimmerColor();

    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          shinyButtonVariants({ variant, size, rounded }),
          className,
        )}
      >
        <span
          className="relative block size-full uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
          style={{
            maskImage: `linear-gradient(-75deg,hsl(${shimmer}) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(${shimmer}) calc(var(--x) + 100%))`,
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
            background: `linear-gradient(-75deg,hsl(${shimmer}/10%) calc(var(--x)+20%),hsl(${shimmer}/50%) calc(var(--x)+25%),hsl(${shimmer}/10%) calc(var(--x)+100%))`,
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] p-px"
        />
      </motion.button>
    );
  },
);

ShinyButton.displayName = "ShinyButton";

export { ShinyButton as default, shinyButtonVariants };