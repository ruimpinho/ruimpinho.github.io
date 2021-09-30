import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css' //importar bootstrap
import {Navbar} from 'react-bootstrap';
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';



function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
      <div className="App">


        <NavbarComp/>
        <FooterComp/>

        </div>
      
     );
}


export default App;
