import './App.css'
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultColor, lightTheme } from './App/theme';

import GlobalStyles from './App/global/global';
import { AppColors } from './colors';
function App() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        {/* <BrowserRouter>
          <Routes>
      
          </Routes>
        </BrowserRouter> */}
        sadsadsakszldckz
        <GlobalStyles />
        <AppColors />
      </ThemeProvider>
    </>
  )
}

export default App;
