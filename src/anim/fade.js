import { keyframes } from '@emotion/core'

export const FadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
`

export const FadeOut = keyframes`
  0% {
    display: block;
    opacity: 1;
  }

  1% {
    display: block;
    opacity: 1;
  }

  100% {
    display: none;
    opacity: 0;
  }
`
