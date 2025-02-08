// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Rounded Bold';
    src: url('/fonts/HelveticaRoundedBold.otf') format('opentype');
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url('/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Helvetica Rounded Bold', sans-serif;
  }
`;