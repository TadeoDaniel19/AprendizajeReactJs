import React, { Component } from "react" 

class ButtonState extends Component {
  //Mounting 
  constructor(props) {
    super(props) 
    console.log("constructor", "props: ", props) 
  }
  //Mounting 
  componentWillMount() {
    console.log("componentWillMount fired") 
  }

  //Mounting 
  componentDidMount() {
    console.log("componentDidMount fired") 
  }

  //Updating 
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps fired, nextProps:", nextProps) 
  }

  //Updating 
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate fired") 
    return true 
  }

  //Updating 
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate, nextProps:", nextProps, " nextState:", nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate, prevProps:", prevProps, " prevState:", prevState)
  }

  render() {
    console.log("render on!") 
    return (
      <div>
        Valor : {this.props.counter}
      </div>
    ) 
  }
}

export default ButtonState 