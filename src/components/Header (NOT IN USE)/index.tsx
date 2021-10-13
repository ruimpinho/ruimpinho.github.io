import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

import { Navbar, Nav } from "react-bootstrap";





interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
          Rui Pinho - Online CV 📗

          <div>
            <Navbar.Brand href="#home">
            </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contacts</Nav.Link>
              </Nav>
      </div>


      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;



