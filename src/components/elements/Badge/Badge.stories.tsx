import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    children: 'Karyawan tetap',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Rounded: Story = {
  args: {
    variant: 'rounded',
  },
}
