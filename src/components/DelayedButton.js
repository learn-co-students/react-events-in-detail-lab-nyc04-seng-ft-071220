// Code DelayedButton Component Here
import React from 'react'

function DelayedButton(props) {

    const handleClick = (event) => {
        event.persist()
        setTimeout(() => {
            props.onDelayedClick(event)
        }, props.delay)
    }

    return(
        <button onClick={handleClick}> Delayed Button</button>
    )
}

export default DelayedButton