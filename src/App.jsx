import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { App_initialize } from './index'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App_initialize />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
