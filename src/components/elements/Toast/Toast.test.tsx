import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Toast from './index'

const text = 'Toast'

const variants: { theme: 'white' | 'danger' | 'success'; style: string }[] = [
  { theme: 'white', style: 'bg-white border border-shadows' },
  { theme: 'danger', style: 'bg-danger text-white' },
  { theme: 'success', style: 'bg-success text-white' },
]

const setup = (props: React.ComponentProps<typeof Toast>) => {
  const utils = render(<Toast {...props}>{text}</Toast>)

  const toastElement = screen.getByTestId('toast-element')

  return { ...utils, toastElement }
}

describe('Toast test', () => {
  test.each(variants)('Should render variant correctly', ({ theme, style }) => {
    const { toastElement } = setup({
      theme,
      isShow: true,
    })

    expect(toastElement).toHaveClass(style)
  })

  test('Sould handle click', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    const { toastElement } = setup({
      onClick: handleClick(),
      isShow: true,
    })

    await user.click(toastElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
