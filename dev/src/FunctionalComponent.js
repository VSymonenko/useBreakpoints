import React from 'react'
import useBreakpoints from './../index'

export default function Component() {
  const test = {
    extraSmall:	{
      min: 0,
      max: 600
    },
    small: {
      min: 601,
      max: 960
    },
    medium: {
      min: 961,
      max: 1024
    },
    large: {
      min: 1025,
      max: 1280
    },
    extraLarge: {
      min: 1281,
      max: null
    },
  }

  const breakpoints = useBreakpoints(test)
  return(
    <div>screen: {breakpoints.screen}</div>
  )
}