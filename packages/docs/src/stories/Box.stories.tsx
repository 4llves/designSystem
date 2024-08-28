import { Box, BoxProps } from '@bankai/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testing Box Element</span>
      </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}