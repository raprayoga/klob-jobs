import type { Meta, StoryObj } from '@storybook/react'
import { InputGroup, Input } from './index'
import { CheckIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    theme: 'success',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['success', 'default', 'danger'],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const TextVariant: Story = {
  render: (args) => (
    <InputGroup>
      <Input {...args} placeholder="Placeholder here" className="pr-9" />
      <p className="text-gray absolute left-auto right-2">Apply</p>
    </InputGroup>
  ),
}

export const IconVariant: Story = {
  render: (args) => (
    <InputGroup>
      <Input {...args} placeholder="Placeholder here" className="pr-8" />
      <CheckIcon className="absolute left-auto right-2 w-4 stroke-4 text-success" />
    </InputGroup>
  ),
}
