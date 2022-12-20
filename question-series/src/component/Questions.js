import React, { useEffect } from 'react';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Questions = (props) => {

    const {allQuestion, selectedOption} = props

    const [option, setOption] = useState(selectedOption);
    const [inputValue, setInputValue] = useState("");
    const [counter, setCounter] = useState(1);

    const nextHandler = () => {
        setOption(allQuestion[option.next]);
        setCounter(counter + 1);
    }

    const prevHandler = () => {
        setOption(allQuestion[option.prev - 1]);
        setCounter(counter - 1);
    }
    
    useEffect(() => {
        setInputValue(inputValue);
    }, [inputValue]);

    const Radio = ({question}) => {
        return (
            <>
                {question.allOptions.map((option) => (
                    <div className='d-flex align-items-center' key={option}>
                        <input type="radio" id={option} name="certification" value={option} checked={option === "One" ? true : false} />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className="App p-3">
            <div className='question pb-2'>
                Question-{counter}: {option.question}
            </div>
            <div className='answer d-flex align-items-center'>
                <span className='me-2 align-self-start'>Answer:</span> 
                <div className='answer-result'>
                    {option.inputType === "text" ? <input type="text" name="answer" value={option.answer} />
                     : option.inputType === "dropdown" ? <Dropdown dropdownOptions={option} defaultOption={option.answer}/> 
                     : <Radio question={option}/>}
                </div>
            </div>
            <div className='mt-2 float-end'>
                <button type="button" className="btn btn-dark" onClick={prevHandler} 
                disabled={option.prev === undefined ? true : false}>Prev</button>
                <button type="button" className="btn btn-dark ms-2" onClick={nextHandler} disabled={option.next === undefined ? true : false}>Next</button>
            </div>
        </div>
    )
}

export default Questions