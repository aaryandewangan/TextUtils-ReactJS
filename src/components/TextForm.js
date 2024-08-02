import React, {useState} from 'react'
import PropTypes from 'prop-types'

function TextForm(props) {

    const [text, setText] = useState("")

    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Hurrreyyy! Successfully converted to Uppercase", "success")
    }

    const lowerCaseClick = () =>{
        console.log("Converted to Lowercase")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Hurrreyyy! Successfully converted to Lowercase", "success")
      }
    
      const capitalCase = () => {
        console.log("Firt letter capital in the text")
        let newText = text.toLowerCase()
        newText = newText.charAt(0).toUpperCase() + newText.slice(1)
        setText(newText)
        props.showAlert("Hurrreyyy! Successfully Capitalized", "success")
      }
    
      const stringReverse = () => {
        console.log("Reversing the Text")
        let newText = text.split("").reverse().join("")
        setText(newText)
        props.showAlert("Hurrreyyy! Successfully reversed the Letters", "success")
      }
    
      const wordReverse = () => {
        console.log("Reversing the Word")
        let newText = text.split(" ").reverse().join(" ")
        setText(newText)
        props.showAlert("Hurrreyyy! Successfully reversed the Words", "success")
      }
    
      const textCopy = () => {
        let text = document.getElementById("text-input")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "success")
      }
    
      const clear = () => {
          console.log("Cleared the text")
          let newText = ""
          setText(newText)
        }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
    <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode === 'dark' ? 'black':'white', color: props.mode === 'dark' ? 'white':'black'}} id="text-input" rows="8"></textarea>
    </div>
    <div>
        <button className='btn btn-light' onClick={handleUpClick}>Uppecase</button> 
        <button className='btn btn-dark mx-2' onClick={lowerCaseClick}>Lowercase</button>
        <button className='btn btn-info' onClick={capitalCase}>Capitalize</button>
        <button className='btn btn-success mx-2' onClick={stringReverse}>Reverse Text</button>
        <button className='btn btn-warning' onClick={wordReverse}>Reverse Words</button>
        <button className='btn btn-secondary mx-2' onClick={textCopy}>Copy text</button>
        <button className='btn btn-danger' onClick={clear}>Clear Text</button>
    </div>

    <div>
    <div  className='container my-5' /*my = m - margin, y -axis*/> 
      <h2>Your Text Summary</h2> 
      <p>Total characters are {text.length} and words are {text.split(" ").length}</p>
      <p>Average time to read the above text: {0.008 * text.split(" ").length}</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the above TextBox to preview It here"}</p>
    </div>
    </div>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

export default TextForm
