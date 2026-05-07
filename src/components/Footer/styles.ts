import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 999;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    height: 70px;
  }

  .footer-text {
    font-size: 13px;
    color: ${props => props.theme.colors.textSecondary};
    font-weight: 500;
  }

  .switch-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .theme-label {
    font-size: 13px;
    color: ${props => props.theme.colors.textSecondary};
    font-weight: 500;
  }
`;
