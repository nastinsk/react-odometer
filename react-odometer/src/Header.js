import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      greeting: props.greeting
    }
  }

  render() {
    return (
      <>
      <h1>{this.state.greeting}</h1>
      <p>some lorem ipsum</p>
      </>
    )
  }
}

export default Header;