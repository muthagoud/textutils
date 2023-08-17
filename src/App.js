import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';


function App() {
  const [mode,setmode]=useState("light")
  const [alert,setalert]=useState("null");
  const showalert=(message,type)=>{
    setalert({msg:message,
              type:type})

  }
  
  const toggle=()=>{
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor='#042743'
      showalert("darkmode enabled","success")
      document.title="textutils-darkmode"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert("darkmode disabled","success")
      document.title="textutil-lightmode"
    }
  }
  return (
    <>
    <Router>
   <Navbar title="TextUtilities" mode={mode} toggle={toggle}/>,
   <Alert alert={alert}/>
   <div className='container my-3'>
      <Routes>
        <Route exact path="/about" element={<About/>}>
        </Route>
        <Route exact path="/" element={<Textform  showalert={showalert} heading="enter the text to analyze" mode={mode}></Textform>}></Route>
        {/* ...other routes */}
      </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
