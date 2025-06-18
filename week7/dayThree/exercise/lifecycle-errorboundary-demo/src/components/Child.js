import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('Child component is being unmounted');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default Child;
