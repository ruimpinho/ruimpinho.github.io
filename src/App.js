import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css' //importar bootstrap
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';



function App() {
  return (
      <div className="App">


        <NavbarComp/>
        <FooterComp/>

        </div>
      
     );
}


export default App;
