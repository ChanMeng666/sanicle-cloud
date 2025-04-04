import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "primary" | "secondary" | "outline" | "glass" | "gradient" | "beige"
    hover?: boolean
    clickable?: boolean
  }
>(({ className, variant = "default", hover = false, clickable = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200",
      {
        "border-border bg-card": variant === "default",
        "border-primary-light bg-primary text-white": variant === "primary",
        "border-secondary-light bg-secondary text-white": variant === "secondary",
        "border-primary-light/50 bg-transparent": variant === "outline",
        "border-0 bg-white/10 backdrop-blur-md": variant === "glass",
        "border-0 bg-gradient-to-br from-primary to-primary-light text-white": variant === "gradient",
        "border-beige-dark bg-beige text-charcoal": variant === "beige",
        "shadow-card hover:shadow-card-hover hover:-translate-y-1": hover,
        "cursor-pointer hover:shadow-card-hover hover:-translate-y-1": clickable,
      },
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    centered?: boolean
  }
>(({ className, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6",
      { "text-center items-center": centered },
      className
    )}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  }
>(({ className, as: Component = "h3", ...props }, ref) => (
  <Component
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    noPadding?: boolean
  }
>(({ className, noPadding = false, ...props }, ref) => (
  <div ref={ref} className={cn(noPadding ? "" : "p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    centered?: boolean
  }
>(({ className, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0", 
      {
        "justify-center": centered,
        "justify-between": !centered
      },
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
