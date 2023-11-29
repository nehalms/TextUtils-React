import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    //text variable to user the "Enter text here" text and setText is function name to set the component to required text
    // setText("new text");

    const handleUpClick = ()=> {
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLowClick = ()=> {
        // console.log("Button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'success')
    }

    const handleClear = ()=> {
        setText("");
        props.showAlert('Text cleared', 'success')
    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard', 'success')
    }

    const handleSpace = ()=> {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed', 'success')
    }

    const handleOnChange = (event)=> {
        // console.log("Text is being entered")
        setText(event.target.value);
    }


    return (
    <>
        <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : '#e8e0e0'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleClear}>Clear text</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleSpace}>Remove Extra spaces</button>
        </div>
        <div className="container my-5" style={{color: props.mode === 'light' ? 'black' : 'white'}} >
            <h2>Your text summary</h2>  
            <p className='my-0'>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length} word and {text.length} characters</p>
            <p className='my-0'>{0.008 * text.split(" ").filter((val)=> {return val.length !== 0}).length} Minutes to read</p>

            <h2 className='mt-5'>Preview</h2>
            <p className='my-0'>{text.length>0 ? text : 'Nothing to preview'}</p>
        </div>
    </>
  )
}
