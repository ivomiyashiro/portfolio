import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from '../theme';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Inter';
    src: url('src/assets/fonts/Inter-SemiBold.ttf');
    font-style: normal;
    font-weight: 600;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url('src/assets/fonts/Inter-Regular.ttf');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter';
    src: url('src/assets/fonts/Inter-ExtraBold.ttf');
    font-style: normal;
    font-weight: 800;
  }

  @font-face {
    font-family: 'Inter';
    src: url('src/assets/fonts/Inter-Bold.ttf');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Fira Mono';
    src: url('src/assets/fonts/FiraMono-Regular.ttf');
    font-style: normal;
    font-weight: 400;
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
