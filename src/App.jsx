import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import '../firebase.config'
import { api } from './api/index';
import { useEffect } from 'react';
import { async } from '@firebase/util';

function App() {
  const getRecipes = async () => {
    console.log('primeiro', await api.recipe.get())
    console.log(await api.recipe.get('jLsVb2WIpVe1ZVOAo9Tq'))
  }
  useEffect(() => {
    getRecipes()
  }, [])
  return (
    <div className="App">

    </div>
  )
}

export default App
