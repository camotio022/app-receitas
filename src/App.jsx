import './App.css'
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/index';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './App/theme';

import GlobalStyles from './App/global/global';
import { AppColors } from './colors';
function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
      <AppColors />
    </ThemeProvider>
  )
}

export default App;
