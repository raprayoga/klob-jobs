import * as React from 'react'
import { cn } from '@/utils'

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden p-0 text-sm',
        className
      )}
      ref={ref}
      {...props}
      data-testid="input-container-element"
    />
  )
})
InputGroup.displayName = 'InputGroup'

export { InputGroup }
