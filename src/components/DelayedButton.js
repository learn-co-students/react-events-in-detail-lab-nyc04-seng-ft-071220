import React from 'react';

class DelayedButton extends React.Component {
    state = {  }
    handleClick= (evt) => {
        evt.persist()
        window.setTimeout(()=> {this.props.onDelayedClick(evt)},this.props.delay)
        

    }
    render() { 
        return ( <button onClick={this.handleClick}>Event Button Delayed</button> );
    }
}
 
export default DelayedButton;