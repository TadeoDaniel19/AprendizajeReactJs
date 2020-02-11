import React from 'react'
import './App.css'
import Name from './components/name'
import User from './components/user'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Name name='Tadeo'> </Name>
        <User user='1631113121'></User>
      </header>
    </div>
  );
}

export default App
