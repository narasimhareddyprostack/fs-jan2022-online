import React, { useRef } from 'react'
import image from '../assets/images/logo.png'
const Register = () => {
    let imageEl = useRef(null);
    let clickHandler = () => {
        console.log(imageEl.current);
    }
    return (
        <React.Fragment>
            <img src={image} alt="" ref={imageEl} />
            <button onClick={clickHandler}>click</button>
        </React.Fragment>
    )
}

export default Register
