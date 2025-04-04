import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type FeatureCardVariant = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "outline" 
  | "glass" 
  | "gradient"
  | "beige"
  | "floating"

type FeatureCardProps = {
  icon?: React.ReactNode
  title: string
  description: string
  variant?: FeatureCardVariant
  className?: string
  iconClassName?: string
  animation?: "float" | "bounce" | "zoom" | "slide" | "rotate" | "none"
  onClick?: () => void
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = "default",
  className,
  iconClassName,
  animation = "none",
  onClick,
}: FeatureCardProps) {
  const cardVariant = variant === "floating" ? "default" : variant
  
  const animationClass = React.useMemo(() => {
    switch (animation) {
      case "float":
        return "hover:-translate-y-2 transition-transform duration-300"
      case "bounce":
        return "group-hover:animate-bounce-subtle"
      case "zoom":
        return "hover:scale-105 transition-transform duration-300"
      case "slide":
        return "hover:translate-x-2 transition-transform duration-300"
      case "rotate":
        return "group-hover:animate-rotate-slow"
      default:
        return ""
    }
  }, [animation])
  
  return (
    <Card 
      variant={cardVariant}
      className={cn(
        "group overflow-hidden", 
        variant === "floating" && "shadow-card hover:shadow-card-hover",
        onClick && "cursor-pointer",
        className
      )} 
      hover={variant === "floating"}
      clickable={!!onClick}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        {icon && (
          <div className={cn(
            "flex items-center justify-center w-12 h-12 rounded-lg mb-4", 
            variant === "primary" ? "bg-primary-deep text-white" : 
            variant === "secondary" ? "bg-secondary text-white" :
            variant === "outline" ? "border-2 border-primary text-primary" :
            variant === "gradient" ? "bg-gradient-to-br from-primary to-primary-light text-white" :
            variant === "glass" ? "bg-white/20 backdrop-blur-sm text-primary" :
            variant === "beige" ? "bg-beige-dark text-secondary" :
            "bg-primary/10 text-primary",
            animationClass,
            iconClassName
          )}>
            {icon}
          </div>
        )}
        <CardTitle className={cn(
          variant === "primary" || variant === "secondary" || variant === "gradient" 
            ? "text-white" 
            : "text-foreground"
        )}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={cn(
          "text-sm",
          variant === "primary" || variant === "secondary" || variant === "gradient" 
            ? "text-white/80" 
            : "text-muted-foreground"
        )}>
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

