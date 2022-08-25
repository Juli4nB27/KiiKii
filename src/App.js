
import React from 'react'

import './App.scss';


import NavBar from './Components/NavBar/NavBar';

import MainPage from './Components/MainPages/MainPage';

import Cards from './Components/Cards/Cards';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main className='App-main'>
          < MainPage />
          < Cards/>
        </main>

        
    </div>
  );
  
}

export default App;
