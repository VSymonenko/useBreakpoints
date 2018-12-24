# useBreakpoints
Custom react hooks

📺 [Live Demo](https://codesandbox.io/s/j4npjjy70y/)

## 🔧 Installation

`npm i -S use-breakpoints`

## 📗 How to use

> Note! Use only in functional component. See [rule](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions)

### Use default:

```javascript
import React from 'react'
import useBreakpoints from 'use-breakpoints'

export default function Component() {
  const breakpoints = useBreakpoints()

  return <div>screen: {breakpoints.screen}</div>
}
```

### Customization:

```javascript
import React from 'react'
import useBreakpoints from 'use-breakpoints'

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
    large: {
      min: 961,
      max: 1280
    },
    extraLarge: {
      min: 1281,
      max: null
    },
  }

  const breakpoints = useBreakpoints(test)

  return <div>screen: {breakpoints.screen}</div>
}
```