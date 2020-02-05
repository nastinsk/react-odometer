import React from 'react';

class Odometer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score : 0,
      odometer_val: "0000"
    }  
    this.clickHandler = this.clickHandler.bind(this);

    
  }

  clickHandler(event){
   
    this.state.score += Number(event.target.value)
    if (this.state.score > 9999){
      this.state.score  = this.state.score - 10000
    }
    if(this.state.score < 1){
      this.state.score = 0
    }

   let odometer_val2 = this.state.score.toString().padStart(4, "0");

   this.setState({
    score: this.state.score, 
    odometer_val: odometer_val2
  })


  }

  render() {

    return (
      <React.Fragment>
        <h2>This is Odometer App</h2>
        <p>Score: {this.state.odometer_val}</p>
        <button onClick = {this.clickHandler} value= "1">+1</button>
        <button onClick = {this.clickHandler} value= "-1">-1</button>
        <button onClick = {this.clickHandler} value= "10">+10</button>
        <button onClick = {this.clickHandler} value= "-10">-10</button>
        <button onClick = {this.clickHandler} value= "1000">+1000</button>
        <button onClick = {this.clickHandler} value= "-1000">-1000</button>

      </React.Fragment>
    )
  }
}

export default Odometer;