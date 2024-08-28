import { Text, TextProps } from '@bankai/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam quia ut laboriosam earum alias repudiandae tenetur iure itaque tempora a consectetur, eligendi libero iste quidem natus. In, rerum. Harum."
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}