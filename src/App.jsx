import './App.css'
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/index';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './App/theme';

import GlobalStyles from './App/global/global';
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <GlobalStyles/> 
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
