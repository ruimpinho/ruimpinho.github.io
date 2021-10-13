import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

export default class FooterComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" fixed="bottom">
          <Container>
            <Navbar.Brand>
              Rui Pinho, 2021 🌍
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
