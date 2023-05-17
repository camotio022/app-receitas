import './App.css'
import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultColor, lightTheme } from './App/theme';

import GlobalStyles from './App/global/global';

import { HomePage } from './pages/Home';
import { THEMASPAGE } from './colors.jsx';

function App() {
  const [color, setColors] = useState(true)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
        {color && <THEMASPAGE />}

      </ThemeProvider>
    </>
  )
}

export default App;
