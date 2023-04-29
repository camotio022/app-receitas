import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../firebase.config";
import { api } from "./api/index";
import { useEffect } from "react";
import { async } from "@firebase/util";
import { Register } from "./screens/Register/index.jsx";
import { View } from "./screens/Users/View.jsx";

function App() {
  return (
    <div className="App">
      <Register />
      <View />
    </div>
  );
}

export default App;
