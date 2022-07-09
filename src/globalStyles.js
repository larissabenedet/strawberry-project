import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif, Helvetica, Arial;
    box-sizing: border-box;
    font-size: 100%;
    color: #212121;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
export default GlobalStyle;
