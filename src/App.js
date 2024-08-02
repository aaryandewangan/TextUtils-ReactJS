import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert,setAlert] = useState(null)


  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode Enabled", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
     msg: message,
     type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
   }

  return (
    <>
    <BrowserRouter>
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} />

    <Alert alert={alert}/>

    <div className="container">

      <Routes>
        <Route exact path = "/about" element = {<About/>}/>
        <Route exact path = "/" element = {<TextForm heading = "Enter The Text Below" mode = {mode} showAlert = {showAlert} />}/>
        <Route exact path = "/home" element = {<TextForm heading = "Enter The Text Below" mode = {mode} showAlert = {showAlert} />}/>
      </Routes>

    </div>

    {/* <About/> */}
    
    </BrowserRouter>
    </>
  );
}

export default App;