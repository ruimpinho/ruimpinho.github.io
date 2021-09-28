import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import logo from './logo512.png';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //Routing

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Switch>
        </div>
      </Router>
     );
}

const Home= () => (
  <div>
    <h1>Online CV</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <h2> Hello! I'm Rui.</h2>
    <p>Welcome to my online CV. This webpage was built using React components. <br /> Feel free to navigate the navbar and switch the night mode on/off.</p>
  </div>
)

export default App;
