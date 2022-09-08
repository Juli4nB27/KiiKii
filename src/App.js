import React from "react";

import "./App.scss";

import NavBar from "./Components/NavBar/NavBar";

import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./Components/ItemDetailContainer/ItemDetailContainer";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:id" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="/category/item/:id" element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
