import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $ignite300',
  },
})

// const slideIn = keyframes({
//   from: {
//     opacity: 0,
//     transform: 'rotate(-180deg) scale(0.5)',
//   },
//   to: {
//     opacity: 1,
//     transform: 'rotate(0) scale(1)',
//   },
// })

const slideIn = keyframes({
  from: {
    transform: 'translateX(-100%) rotate(-360deg)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0) rotate(0)',
    opacity: 1,
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0) rotate(0)',
    opacity: 1,
  },
  to: {
    transform: 'translateX(-100%) rotate(-360deg)',
    opacity: 0,
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
