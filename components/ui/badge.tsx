import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success:
          "border-transparent bg-success text-white hover:bg-success/80",
        warning:
          "border-transparent bg-warning text-white hover:bg-warning/80",
        info:
          "border-transparent bg-info text-white hover:bg-info/80",
        outline: "text-foreground",
        "outline-primary": "border-primary text-primary",
        "outline-secondary": "border-secondary text-secondary",
        "soft-primary": "border-transparent bg-primary-pale text-primary hover:bg-primary-pale/80",
        "soft-secondary": "border-transparent bg-secondary-light/20 text-secondary hover:bg-secondary-light/30",
        beige: "border-transparent bg-beige text-charcoal hover:bg-beige-dark",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
