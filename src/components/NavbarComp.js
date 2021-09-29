import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import codinglogo from "../codinglogo.png";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; //Routing


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container>
            <Navbar.Brand href="#home">
              <img src={codinglogo} width="40px" alt="logo" />
              Rui Pinho
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About me</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contacts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
     </Switch> 
      </div>
      </Router>
    );
  }
}
