import { Box, BoxProps, Text } from '@benihime/react'
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
  argTypes: {
    children: {
      control: {
        disable: true
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}