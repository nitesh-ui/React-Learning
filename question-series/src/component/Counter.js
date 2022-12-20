import React, { useEffect, useState } from 'react';

const Counter = (props) => {

    const {value, setCounterValue, incrementAllHandler} = props;

    const [counter, setCounter] = useState(value);

    const decrementHandler = () => {
        // setCounter(counter - 1);
        setCounterValue(counter - 1);
    }

    const incrementHandler = () => {
        // setCounter(counter + 1);
        setCounterValue(counter + 1);
    }

    useEffect(() => {
        setCounter(value)
    }, [value]);

    return (
        <div className="card m-2" style={{width: "270px"}}>
            <div className="card-body">
                <h5 className="card-title">Current Value is {counter}</h5>
                <button className="btn btn-primary" onClick={decrementHandler}>-</button>
                <button className="btn btn-primary ms-2" onClick={incrementHandler}>+</button>
                <button className="btn btn-primary ms-2" onClick={() => incrementAllHandler()}>All +</button>
            </div>
        </div>
    )
}

export default Counter