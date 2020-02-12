import React, { Component } from 'react' 
import './App.css'
import Name from './components/name'
import User from './components/user'
import ButtonState from './components/buttonState'


class App extends Component {
  //Mounting 
  constructor(props) {
    super(props) 
    this.state = {
      counter: 0
    } 
  }

  incrementCounter = () => {
    this.setState({
      counter: ++this.state.counter
    }) 
  } 

  decrementCounter = () => {
    this.setState({
      counter: --this.state.counter
    }) 
  } 
  
  //Mounting and updating 
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Name name='Tadeo'> </Name>
          <User user='1631113121'></User>
          <ButtonState counter={this.state.counter} />
          <button onClick={this.incrementCounter}> + </button>
          <button onClick={this.decrementCounter}> - </button>
        </header>
      </div>
    ) 
  }
}

export default App
