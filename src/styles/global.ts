import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.3px;
  }

  h1 {
    font-size: 3.5rem;
    margin: 1rem 0;
  }

  h2 {
    font-size: 2.5rem;
    margin: 1.5rem 0 1rem;
  }

  h3 {
    font-size: 1.75rem;
    margin: 1rem 0 0.75rem;
  }

  h4 {
    font-size: 1.25rem;
    margin: 0.75rem 0;
  }

  h5 {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }

  p {
    margin: 0.75rem 0;
    color: ${props => props.theme.colors.textSecondary};
  }

  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  button {
    font-family: inherit;
    font-weight: 500;
    border-radius: 12px;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .btn-primary {
    background: ${props => props.theme.colors.accent};
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }

  code {
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    background: ${props => props.theme.colors.surface};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  ul, ol {
    margin-left: 1.5rem;
  }

  li {
    margin: 0.5rem 0;
  }
`; 