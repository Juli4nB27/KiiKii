import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "../Components/ItemDetailContainer/ItemDetailContainer";
import ItemListConteiner from "../Components/ItemListConteiner/ItemListConteiner";
import NavBar from "../Components/NavBar/NavBar";
import { CartProvider } from "../context/CartContext";
import Cart from "../views/Cart";

const Router = () => {
  return (
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListConteiner />} />
            <Route path='/category/:id' element={<ItemListConteiner />} />
            <Route path='/item/:id' element={<ItemDetailConteiner />} />
            <Route path='/category/item/:id' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>  
  );
};

export default Router;
