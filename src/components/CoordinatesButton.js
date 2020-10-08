import React from 'react';

class CordinatesButtom extends React.Component {
    state = {  }
    handleClick= (evt) => {
        let XandY = [evt.clientX,evt.clientY]
        this.props.onReceiveCoordinates(XandY)
        

    }
    render() { 
        return ( <button onClick={this.handleClick}>Coordinates Button No Delay</button> );
    }
}
 
export default CordinatesButtom;