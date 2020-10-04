// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    handleClick = event => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    };

    render() {
        return <button onClick={this.handleClick}>Delayed</button>;
    }
}

export default DelayedButton;

// Create a DelayedButton React component, which takes in 2 props:
// onDelayedClick (a function) and a delay(a number).

// Create button, that when clicked, will pass the click event to the onDelayedClick prop
// within a setTimeout() (line 7). The setTimeout() should be set to this.props.delay.