import { Avatar, AvatarProps } from '@bankai/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/4llves.png',
    alt: 'Alves Jhonata'
  },
  argTypes: {
    children: {
      control: {
        type: 'text'        
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}