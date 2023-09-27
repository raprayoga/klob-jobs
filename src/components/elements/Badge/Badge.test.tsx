import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'
import '@testing-library/jest-dom'

const caseVariant: { variant: 'default' | 'rounded'; style: string }[] = [
  { variant: 'default', style: 'rounded-md' },
  { variant: 'rounded', style: 'rounded-full' },
]

const text = 'badge'
const setup = (props: React.ComponentProps<typeof Badge>) => {
  const utils = render(<Badge {...props}>{text}</Badge>)

  const badgeElement = screen.getByTestId('badge-element')

  return { ...utils, badgeElement }
}

describe('Badge test', () => {
  test.each(caseVariant)(
    'sould render badge correctly',
    ({ variant, style }) => {
      const { badgeElement } = setup({ variant })

      expect(badgeElement).toHaveClass(style)
    }
  )
})
