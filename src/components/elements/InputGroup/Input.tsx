import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

export const inputVariant = cva(
  'h-full w-full border rounded outline-none focus:shadow-sm py-2 placeholder:text-shadow text-black px-2',
  {
    variants: {
      theme: {
        default: 'border-gray focus:shadow-gray',
        danger: 'border-danger focus:shadow-danger',
        success: 'border-success focus:shadow-success',
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariant> {
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, theme, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariant({ theme }), className)}
        ref={ref}
        {...props}
        data-testid="input-element"
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
