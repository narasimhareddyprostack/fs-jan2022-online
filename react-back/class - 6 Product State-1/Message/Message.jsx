import React from 'react'
class Message extends React.Component {
    state = {
        message: "Hello"
    }
    gmHandler = () => {
        console.log("Test case Two")
        this.setState({ message: "Hello,Good Morning" })
    }
    gaHandler = () => {
        this.setState({ message: "Hello, Good After noon! Lunch Time" })
    }
    gnHandler = () => {
        this.setState({ message: "Dinner Time" })
    }
    render() {
        console.log("Test Case one")
        return <div>
            <h1>Message Component</h1>
            <h2>Message:{this.state.message}</h2>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default Message