
import { useState } from 'react';
import './Counter.scss'
const Counter = () => {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className='quantity'>
            <button onClick={() => setQuantity(prev => prev=== 0 ? 0 : prev - 1)}>-</button>
            {quantity}
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
    )
}

export default Counter