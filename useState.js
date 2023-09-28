
import React, { useState } from 'react'

const UseState = (props) => {

  const [mystyle, setMystyle] = useState({ color: "black", backgroundColor: 'white' })
  const [btnText, setBtnText] = useState('Enable Dark mode')

  const buttonText = () => {
    if (mystyle.color === 'black') {
      setMystyle({ color: "white", backgroundColor: 'black' })
      setBtnText('Enable Light Mode')
    }
    else {
      setMystyle({ color: "black", backgroundColor: 'white' })
      setBtnText('Enable Dark Mode')
    }
  }
  const toUpperCase = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const toLowerCase = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  const clearText = () => {
    let newText = ''
    setText(newText)
  }

  const handleOnClick = (event) => {
    setText(event.target.value)
  }

  const [myNum, setMynum] = useState(0)

  const [text, setText] = useState("")

  // to copy the text 5
  const handCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select();
    // text.setSelectionRange(0, 9999); //optional
    navigator.clipboard.writeText(text.value)
  }

  return (
    <>
      <div className="textarea" style={mystyle}>
        <textarea name="" id="myBox" placeholder={text} value={text} onChange={handleOnClick} cols="30" rows="10"></textarea>
      </div>
      <div className="contain my-10">
        <button className='btn btn primary ' style={mystyle} onClick={toUpperCase}>Convert to UpperCase</button>
        <button className='btn btn primary ' style={mystyle} onClick={toLowerCase}>Convert to LowerCase</button>
        <button className='btn btn primary ' style={mystyle} onClick={clearText}> Clear Text</button>
        <button className='btn btn primary ' style={mystyle} onClick={buttonText}> {btnText}</button>
        <button className='btn btn primary ' style={mystyle} onClick={handCopy}> copy</button>
      </div>
      <div className="container " style={mystyle}>
        <h1>YOUR TEXT SUMMERY

        </h1>
        <p style={mystyle}>{text.split(" ").length}
          <b> WORDS AND</b> {text.length} <b>CHARECTORS</b></p>
        <p style={mystyle}>{text}</p>
      </div>
      <div className="calculation">
        <div><b>{myNum}</b></div>

{/* //============================================================= */}
        <button onClick={() => { setMynum(myNum + 1) }}>INCR</button>
        <button onClick={() => (myNum > 0 ? setMynum(myNum - 1) : setMynum(0))} >DEC</button>
{/* ====================================================================== */}
      </div>
    </>
  )
}

export default UseState