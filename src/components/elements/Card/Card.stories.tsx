import type { Meta, StoryObj } from '@storybook/react'
import Card from './index'

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    children: 'Card',
    className: 'w-[300px] text-danger font-bold',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}
