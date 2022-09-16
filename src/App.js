import React from "react";
import Router from "./router/Router";
import "./App.scss";
import { CartContext, CartProvider } from "./context/CartContext";




function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
