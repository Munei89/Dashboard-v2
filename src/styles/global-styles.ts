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

    @font-face {
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Inter Regular'), url('fonts/Inter-Regular.woff') format('woff');
    }
    




  html,
  body {
    min-height: 100vh;
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
