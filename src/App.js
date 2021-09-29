import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css' //importar bootstrap
import {Navbar} from 'react-bootstrap';
import NavbarComp from './components/NavbarComp';



function App() {
  return (

      <div className="App">

        <NavbarComp/>

      
      
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Navbar.Brand>
           For more info, check the Contacts section.
        </Navbar.Brand>
      </Navbar>
        </div>
      
   
    


     );
}


export default App;
