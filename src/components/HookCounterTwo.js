import React from 'react'
import { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    
    const incrementFive = () => {
        setCount(prevCount => prevCount + 5)
    }
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const reset = () => {
        setCount(initialCount)
    }
    return (
        <div>
             Count: { count }
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo