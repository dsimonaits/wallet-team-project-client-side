import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    
  }

  .HeaderTheme {
background-color: ${({ theme }) => theme.headerBackgroundColor};
   transition: all 0.50s linear;
  }
  
  `;
