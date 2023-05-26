import React from 'react'
import { useState } from 'react'

function HookCounterFour() {
  
    const [items, setItems] = useState([])

    const AddItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10)+1
        }])
    }
    return (
    <div>
        <button onClick={AddItem}>Add a number</button>
        <ul>
            {items.map(item => <li key={item.id}> {item.value}</li>)}
        </ul>
    </div>
  )
}

export default HookCounterFour