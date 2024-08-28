import { Box, BoxProps, Text } from '@bankai/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testing Box Element</Text>
      </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}