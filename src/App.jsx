import './App.css'
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultColor, lightTheme } from './App/theme';

import GlobalStyles from './App/global/global';

import { HomePage } from './pages/Home';
function App() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
        <GlobalStyles />

      </ThemeProvider>
    </>
  )
}

export default App;
