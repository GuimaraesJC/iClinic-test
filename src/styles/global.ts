import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;

    transition: filter 0.2s;

    &:hover:not([disabled]) {
      filter: brightness(0.9);
    }
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
