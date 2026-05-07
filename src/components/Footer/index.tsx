import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface FooterProps {
  toggleTheme(): void;
}

const Footer: React.FC<FooterProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <span className="footer-text">© Rui Pinho 2021-2026</span>
      <div className="switch-container">
        <span className="theme-label">{title === 'light' ? '☀️' : '🌙'}</span>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={24}
          height={32}
          width={56}
        />
      </div>
    </Container>
  );
};

export default Footer;
