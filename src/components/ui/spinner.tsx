import React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

const spinnerVariants = cva('flex flex-col items-center justify-center gap-2', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
    position: {
      center: 'fixed inset-0 z-50',
      inline: 'relative',
    },
    overlay: {
      true: 'bg-background/80 backdrop-blur-sm',
      false: '',
    }
  },
  defaultVariants: {
    show: true,
    position: 'inline',
    overlay: false,
  },
});

const loaderVariants = cva('animate-spin', {
  variants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      default: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      destructive: 'text-destructive',
      warning: 'text-warning',
      info: 'text-info',
      muted: 'text-muted-foreground',
      white: 'text-white',
    }
  },
  defaultVariants: {
    size: 'default',
    color: 'primary',
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
  label?: string;
}

export function Spinner({ 
  size, 
  color,
  show, 
  position,
  overlay,
  children, 
  label,
  className 
}: SpinnerContentProps) {
  return (
    <div className={cn(spinnerVariants({ show, position, overlay }), className)}>
      <Loader2 className={loaderVariants({ size, color })} />
      {label && (
        <p className="text-sm text-muted-foreground animate-pulse">{label}</p>
      )}
      {children}
    </div>
  );
}

// Preset spinner components
export function PageSpinner({ label = "Loading..." }: { label?: string }) {
  return (
    <Spinner 
      position="center" 
      overlay 
      size="xl" 
      label={label}
    />
  );
}

export function ButtonSpinner() {
  return <Spinner size="sm" color="white" />;
}

export function InlineSpinner({ label }: { label?: string }) {
  return <Spinner size="default" label={label} />;
}