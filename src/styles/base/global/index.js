import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from '../theme';

export const GlobalStyle = createGlobalStyle`

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b0b2c3;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: ${defaultTheme.color_background_1};
    color: ${defaultTheme.color_text};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .animate__zoomIn {
    --animate-duration: 0.25s;
  }
`;
