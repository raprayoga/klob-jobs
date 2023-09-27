import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input, InputGroup } from './index'
import { CheckIcon } from '@heroicons/react/20/solid'

const placeholder = 'input name'
const inputText = 'inputed text'

const variants: { theme: 'default' | 'danger' | 'success'; style: string }[] = [
  { theme: 'default', style: 'border-gray focus:shadow-gray' },
  { theme: 'danger', style: 'border-danger focus:shadow-danger' },
  { theme: 'success', style: 'border-success focus:shadow-success' },
]

const setup = (props: React.ComponentProps<typeof Input>) => {
  const utils = render(
    <InputGroup>
      <Input {...props} placeholder="Placeholder here" />
      <CheckIcon
        data-testid="icon-element"
        className="absolute left-auto right-2 w-4 stroke-4 text-success"
      />
    </InputGroup>
  )

  const inputElement = screen.getByTestId('input-element')

  return { ...utils, inputElement }
}

describe('Input test', () => {
  test.each(variants)('Should render variant correctly', ({ theme, style }) => {
    const { inputElement } = setup({ placeholder, theme })

    expect(inputElement).toHaveClass(style)
  })

  test('sould handle input user', () => {
    const { inputElement } = setup({})

    fireEvent.change(inputElement, {
      target: {
        value: inputText,
      },
    })
    expect(inputElement).toHaveValue(inputText)
  })
})
