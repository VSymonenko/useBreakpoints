import React from 'react'
import { render } from 'react-testing-library'
import useBreakpoints from '../index'

// simulate window resize 
function fireResize(width) {
    window.innerWidth = width
    window.dispatchEvent(new Event('resize'))
}
// Test component that uses the Hook
function EffecfulComponent() {
    const breakpoint = useBreakpoints()
    return <span>{breakpoint.screen}</span>
}

test('breakpoint.screen listen to window resize and set viewport size responsively', () => {
    const { container, rerender } = render(<EffecfulComponent />)
    const span = container.firstChild

    fireResize(320)
    // useEffect is triggered after rendering. 
    // So we want to rerender the component to see the state change
    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('xs')

    fireResize(700)
    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('sm')

    fireResize(1000)
    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('md')
    
    fireResize(1100)
    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('lg')

    fireResize(1300)
    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('xl')
})