import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'
import { useMemo } from 'react'

const badgeVariants = cva(
  'inline-block px-2 py-1 text-center text-[10px] lg:py-0.5 lg:text-xs',
  {
    variants: {
      theme: {
        'dark-gray': 'bg-dark-gray text-white',
      },
      variant: {
        default: 'rounded-md',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      theme: 'dark-gray',
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, theme, ...props }: BadgeProps) {
  const computedClasses: string = useMemo(() => {
    return cn(badgeVariants({ theme, variant }), className)
  }, [theme, variant, className])

  return (
    <div className={computedClasses} {...props} data-testid="badge-element" />
  )
}

export { Badge, badgeVariants }
