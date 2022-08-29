import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserItem from './components/UserItem';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Try Word Counter, Character Counter" mode={mode} showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/users" element={<UserItem mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
