'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated' | 'bordered'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className,
    variant = 'default',
    padding = 'md',
    hover = false,
    children,
    ...props
  }, ref) => {
    const baseStyles = 'rounded-xl transition-all duration-300'
    
    const variants = {
      default: 'bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700',
      glass: 'glass dark:glass-dark',
      elevated: 'bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl',
      bordered: 'bg-white dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-600'
    }
    
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    }
    
    const hoverStyles = hover ? 'hover:scale-105 hover:shadow-xl cursor-pointer' : ''
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card