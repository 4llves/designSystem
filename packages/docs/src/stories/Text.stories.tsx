import { Text, TextProps } from '@benihime/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam quia ut laboriosam earum alias repudiandae tenetur iure itaque tempora a consectetur, eligendi libero iste quidem natus. In, rerum. Harum."
  },
  argTypes: {
    size: {
      options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
      control: {
        type: 'inline-radio',
      }
    }, 
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}