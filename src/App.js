//run - npm start

import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm'
import Alert from './components/Alert'   

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
          setAlert(null);
      }, 2500);
  }

  const removeBodyClasses = ()=> {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls)=> {
    removeBodyClasses();
    if(cls !== null) {
      document.body.classList.add('bg-' + cls);
    }
    if(mode === 'light' && cls === null) {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", 'success');
    }
    else if('dark' && cls === null){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", 'success');
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
            <Route exact path="/" element={<Textform heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>}/>
            <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;



// setInterval(() => {
//   document.title = 'TextUtils is awesome';
// }, 1000);
// setInterval(() => {
//   document.title = 'Install TextUtils Now';
// }, 2000);