// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Coordinates</button>;
  }
}

export default CoordinatesButton;

// onReceiveCoordinates is the prop, and it's a function passed drom from index.js

// within the CoordinatesButton component is a rendered button, and the mouse click creates an 
// array with 2 elements: X and Y coordinates of the mouse. 

// The event data (handleClick) is the argument 
// for the onReceivesCoordinates prop in line 6.