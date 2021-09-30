import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class FooterComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="warning" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              Rui Pinho, 2021 🌍
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
