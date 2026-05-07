import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const NavbarContent = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  font-size: 15px;
`;

export const NavbarBrand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 17px;

  img {
    width: 28px;
    height: auto;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-size: 15px;
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 48px;
  margin-bottom: 80px;
`;
