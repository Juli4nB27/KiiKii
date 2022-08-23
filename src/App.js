
import React from 'react'

import './App.scss';

import NavBar from './Components/NavBar/NavBar';

import MainPage from './Components/MainPages/MainPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
        </header>
        <main className='App-main'>
          < MainPage />
        </main>
    </div>
  );
}

export default App;
