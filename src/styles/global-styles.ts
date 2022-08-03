import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'GeneralSans-Medium';
  src: url('fonts/GeneralSans-Medium.woff2') format('woff2'),
       url('fonts/GeneralSans-Medium.woff') format('woff'),
       url('fonts/GeneralSans-Medium.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: normal;
}




  html,
  body {
    height: 100%;
    width: 100%;
    background: '#FFFFFF';
  }

  body {
    font-family: 'GeneralSans-Extralight', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
