import React, { useState } from 'react';

function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared","success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard","success");
    }

    const [text, setText] = useState('Enter Text Here');

    //text = "new text"; //wrong way to change the text
    //setText("new text"); //correct way to change the text

    return (
        <>
            <div className="container">
                <h4 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} 
                    id="exampleFormControlTextarea1" rows="5" 
                    style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', 
                    color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCopyText}>CopyText</button>
            </div>
            <div className="container my-3">
                <h4 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Your text summary</h4>
                <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{0.008 * text.split(" ").length} minutes to read.</p>
            </div>
        </>
    )
}

export default TextForm