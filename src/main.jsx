import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ defaultTheme }>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
