import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    border: 0;
    list-style: none;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Inter', sans-serif;
  }
  body{
    min-width: 320px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.generalBg};
  }
  button {
    cursor: pointer;
    background-color: transparent;
  }
`;

export default GlobalStyle;
