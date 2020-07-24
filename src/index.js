import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import theme from './themes/Theme';

ReactDOM.render(
    <ThemeProvider theme={ theme }>
      <App/>
    </ThemeProvider>,
  document.getElementById('root')
);