import React, { useState } from 'react';

function useCounter() {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }

    const resetHandler = () => {
        setCount(0);
    }

    return [count, incrementHandler, decrementHandler, resetHandler];
}

export default useCounter