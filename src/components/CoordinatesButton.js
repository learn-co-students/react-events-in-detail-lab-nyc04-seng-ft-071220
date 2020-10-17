// Code CoordinatesButton Component Here
import React from 'react'

function CoordinatesButton(props) {

    const handleClick = (event) => {
        let coordinatesArray = [event.clientX, event.clientY]
        props.onReceiveCoordinates(coordinatesArray)
    }

    return(
        <button onClick={handleClick}>Coordinates Button</button>
    )
}

export default CoordinatesButton