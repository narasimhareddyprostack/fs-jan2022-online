import React, { useState } from 'react'
const Message = () => {
    let message = "Hello"
    let [variable, setVariable] = useState("Hello");
    /* let gmHandler = () => {
        setVariable("GM")
    }
    let gnHandler = () => {
        setVariable("GN")
    } */
    return (
        <div>
            {/* <h1>Wish Message:{JSON.stringify(variable)}</h1> */}
            <h1>Wish Message:{variable}</h1>
            <button onClick={() => {
                setVariable("GM")
            }}>GM</button>
            <button onClick={() => {
                setVariable("GN")
            }}>GN</button>
        </div>
    )
}

export default Message
