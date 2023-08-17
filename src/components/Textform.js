import React, { useState } from 'react'


export default function Textform(props) {
    const [text,settext]=useState('')
    const handleUpclick=()=>{
        //console.log("uppercase clicked"+text)
        let newtext=text.toUpperCase();
        settext(newtext)
        props.showalert("converted to uppercase","succes")

    }
    const onchangea=(event)=>{
       // console.log("on change")
        settext(event.target.value)
        
    }
    const clear=(event)=>{
        let newt=""
         settext(newt)
         
     }

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?"white":"#042743"}}>
        <h1>{props.heading}-</h1>
        <div className='mb-3'>  
            <textarea className='form-control' value={text} style={{backgroundColor:props.mode==='dark'?"grey":"white",color:props.mode==='dark'?"white":"#042743"}} onChange={onchangea} id='kwndkd' rows={5}></textarea>
            <button className='btn btn-primary mx-1' onClick={handleUpclick}>convert</button>
            <button className='btn btn-primary mx-1' onClick={clear}>clear text</button>
            
        </div>
    </div>
    <div className='container' style={{color:props.mode==='dark'?"white":"#042743"}}>
        <h4>number of words: {text.split(" ").length} and length of thr text is:{text.length}</h4>
        <h2>preview</h2>
        <h4>{text.length>0?text:"Enter text"}</h4>
    </div>
    
    </>
  )
}
