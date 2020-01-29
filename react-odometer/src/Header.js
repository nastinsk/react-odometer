import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <h1>{this.props.greeting}</h1>
      <p>some lorem ipsum</p>
      </>
    )
  }
}

export default Header;