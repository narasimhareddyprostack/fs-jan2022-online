import React from 'react'
class Message extends React.Component {
    message = "Hello";
    gmHandler = () => {
        console.log("Test case 123")
        this.message = "Hello, Good Morning"
        console.log(this.message)
        this.forceUpdate()
    }
    render() {
        return <>
            <h1> Message Component</h1>
            <h3>Message: {this.message}</h3>
            <button onClick={this.gmHandler}>GM</button>

            <button>GN</button>
        </>
    }
}

export default Message