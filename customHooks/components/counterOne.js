import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterOne() {
    
    const [count, incrementHandler, decrementHandler, resetHandler] = useCounter();

    return (
        <div>
            Counter: {count}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default CounterOne