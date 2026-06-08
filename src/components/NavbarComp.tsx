import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import codinglogo from '../codinglogo.png';

interface NavbarCompProps {
  toggleTheme: () => void;
}

const NavbarComp: FC<NavbarCompProps> = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="/home">
              <img src={codinglogo} width="40px" alt="Rui Pinho Logo" />
              Rui Pinho
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contacts
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default NavbarComp;