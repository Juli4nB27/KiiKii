
import React from 'react'

import './App.scss';

import NavBar from './Components/NavBar/NavBar';

import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';

import ItemList from './Components/ItemList/ItemList';

import ItemDetailConteiner from './Components/ItemDetailContainer/ItemDetailContainer';

import ItemDetail from './Components/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main className='App-main'>
          <ItemDetailConteiner />
        </main> 
    </div>
  );
  
}

export default App;
