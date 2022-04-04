import React from 'react'
import { gmAction, gnAction } from '../redux/message/message.action'
import { useDispatch, useSelector } from 'react-redux'
const Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state.message
    })
    let msg = "Hello"
    let gmHandler = () => {
        //dispatch an action
        dispatch(gmAction());
    }
    let gnHandler = () => {
        //dispatch an action 
        dispatch(gnAction())
    }
    return (
        <div>
            <pre>{JSON.stringify(message)}</pre>
            <h1>Message:{message.message}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>

        </div>
    )
}

export default Message
