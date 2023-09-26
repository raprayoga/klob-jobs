import React from 'react'
import { cn } from '@/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    data-testid="card-element"
    ref={ref}
    className={cn('border-gray rounded-lg border bg-white p-3', className)}
    {...props}
  />
))
Card.displayName = 'Card'

export { Card }
