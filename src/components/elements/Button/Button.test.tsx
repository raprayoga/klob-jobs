import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Button from './index'

const caseTheme: {
  theme: 'light-gray' | 'success' | 'warning' | 'info'
  style: string
}[] = [
  {
    theme: 'light-gray',
    style: 'bg-light-gray text-white hover:opacity-90',
  },
  {
    theme: 'success',
    style: 'bg-success text-white hover:opacity-90',
  },
  {
    theme: 'warning',
    style: 'bg-warning hover:opacity-90',
  },
  {
    theme: 'info',
    style: 'bg-info text-white hover:opacity-90',
  },
]
const text = 'Button'

const setup = (props: React.ComponentProps<typeof Button>) => {
  const utils = render(<Button {...props}>{text}</Button>)

  const buttonElement = screen.getByTestId('button-element')

  return { ...utils, buttonElement }
}

describe('Render Button', () => {
  test.each(caseTheme)(
    'Should render variant correctly',
    ({ theme, style }) => {
      const { buttonElement } = setup({ theme })

      expect(buttonElement).toHaveClass(style)
    }
  )

  test('Sould render disabled', async () => {
    const { buttonElement } = setup({ isDisabled: true })

    expect(buttonElement).toHaveClass(
      'bg-light-gray text-white border-none cursor-default'
    )
  })

  test('Sould render loading', async () => {
    setup({ isLoading: true })
    expect(screen.getByTestId('loading-element')).toBeInTheDocument()
  })

  test('Sould handle click', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    const { buttonElement } = setup({ onClick: handleClick() })
    await user.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
