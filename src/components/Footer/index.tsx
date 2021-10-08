import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Footer: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
          Rui Pinho, 2021 🌍
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
       />
    </Container>
  );
};

export default Footer;
