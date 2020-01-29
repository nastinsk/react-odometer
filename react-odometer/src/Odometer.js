import React from 'react';

class Odometer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score : 0,
    }
  }

  render() {
    return (
      <React.Fragment>
      <h2>This is Odometer</h2>
      <p>Score: {this.state.score}</p>
      </React.Fragment>
    )
  }
}

export default Odometer;