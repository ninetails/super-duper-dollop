import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@super-duper-dollup/ui'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Clique em Mim',
  },
}
