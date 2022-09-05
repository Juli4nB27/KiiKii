
import React from 'react'

import './App.scss';

import NavBar from './Components/NavBar/NavBar';

import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';

import ItemList from './Components/ItemList/ItemList';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main className='App-main'>
          < ItemListConteiner />
          
        </main>

        
    </div>
  );
  
}

export default App;
