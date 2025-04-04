import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-deep shadow-button hover:shadow-button-hover",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button hover:shadow-button-hover",
        
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        "outline-secondary": "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground",
        
        soft: "bg-primary-pale text-primary hover:bg-primary-light/50 hover:text-primary-deep",
        "soft-secondary": "bg-secondary-light/20 text-secondary hover:bg-secondary-light/40",
        
        success: "bg-success text-white hover:bg-success/90",
        warning: "bg-warning text-white hover:bg-warning/90",
        error: "bg-error text-white hover:bg-error/90",
        info: "bg-info text-white hover:bg-info/90",
        
        ghost: "hover:bg-accent/20 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        subtle: "bg-muted text-muted-foreground hover:bg-muted/80",
        
        glow: "bg-primary text-primary-foreground shadow-glow hover:shadow-glow hover:scale-105",
        "coral-glow": "bg-secondary text-secondary-foreground shadow-coral-glow hover:shadow-coral-glow hover:scale-105",
        
        beige: "bg-beige text-charcoal hover:bg-beige-dark",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-12 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8 [&_svg]:size-3.5",
        "icon-lg": "h-12 w-12 [&_svg]:size-5",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
        sm: "rounded",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, icon, iconPosition = "left", children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, rounded, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="btn-icon">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="btn-icon">{icon}</span>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
